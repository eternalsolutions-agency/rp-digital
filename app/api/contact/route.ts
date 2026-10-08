import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DESTINATION_EMAIL = "riccardo.pellegrino82@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  source?: string;
  path?: string[];
};

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char] || char);

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    const body = (await request.json()) as ContactPayload;
    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 80);
    const company = clean(body.company, 160);
    const service = clean(body.service, 180);
    const message = clean(body.message, 4000);
    const source = clean(body.source, 100) || "Sito RP Digital";
    const path = Array.isArray(body.path)
      ? body.path.map((item) => clean(item, 180)).filter(Boolean).slice(0, 10)
      : [];

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Nome, email e telefono sono obbligatori" },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: "Email non valida" }, { status: 400 });
    }

    const rows = [
      ["Nome", name],
      ["Email", email],
      ["Telefono", phone],
      ["Azienda", company],
      ["Servizio", service],
      ["Provenienza", source],
      ["Percorso RIA", path.join(" → ")],
      ["Messaggio", message],
    ].filter(([, value]) => value);

    const htmlRows = rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:700;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`
      )
      .join("");

    const subjectService = service || (path.length ? path[path.length - 1] : "Nuovo contatto");

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "RP Digital <contatti@rpdigital.it>",
        to: [DESTINATION_EMAIL],
        reply_to: email,
        subject: `Nuovo lead RP Digital - ${subjectService}`,
        html: `<div style="font-family:Arial,sans-serif;color:#111;max-width:680px;margin:auto"><h2 style="margin-bottom:8px">Nuovo contatto RP Digital</h2><p style="color:#555">È arrivata una nuova richiesta dal sito.</p><table style="width:100%;border-collapse:collapse">${htmlRows}</table><p style="margin-top:20px;color:#777;font-size:12px">Messaggio generato automaticamente da rpdigital.it.</p></div>`,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Resend error:", details);
      return NextResponse.json({ ok: false, error: "Invio email non riuscito" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ ok: false, error: "Errore durante l'invio" }, { status: 500 });
  }
}
