"use client";
import { motion } from "framer-motion";

export default function PageAura({ word }: { word: string }) {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <motion.div className="page-orb page-orb-a" animate={{x:[0,70,0],y:[0,-35,0],scale:[1,1.12,1]}} transition={{duration:16,repeat:Infinity,ease:"easeInOut"}} />
    <motion.div className="page-orb page-orb-b" animate={{x:[0,-55,0],y:[0,45,0],scale:[1,1.08,1]}} transition={{duration:19,repeat:Infinity,ease:"easeInOut"}} />
    <motion.div initial={{opacity:0,y:35}} whileInView={{opacity:.035,y:0}} viewport={{once:true}} transition={{duration:1}} className="page-ghost-word">{word}</motion.div>
  </div>;
}
