"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const reviews = [
    "Increased my views by 400%", "The IG hooks are insane", "Best SEO tool in 2026",
    "Viralift is a game changer", "Finally cracked the algorithm", "Saved me 10 hours a week"
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-slate-950/30 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...reviews, ...reviews].map((review, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-red-600" />
            <span className="text-2xl md:text-4xl font-black uppercase italic text-slate-700 hover:text-white transition-colors cursor-default">
              {review}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}