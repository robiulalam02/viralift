"use client";
import { motion } from "framer-motion";

export default function DashboardPreview() {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto glass-card rounded-[3rem] border-white/10 p-4 md:p-8 bg-gradient-to-br from-red-600/10 to-transparent shadow-2xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

                {/* Fake UI Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <div className="px-4 py-1 bg-white/5 rounded-full text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                        Viralift Engine v2.5
                    </div>
                </div>

                {/* Content Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="h-8 w-3/4 bg-white/10 rounded-lg animate-pulse" />
                        <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/5" />
                        <div className="grid grid-cols-3 gap-2">
                            <div className="h-10 bg-red-600/20 rounded-lg" />
                            <div className="h-10 bg-white/5 rounded-lg" />
                            <div className="h-10 bg-white/5 rounded-lg" />
                        </div>
                    </div>
                    <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5">
                        <div className="text-sm text-slate-500 mb-4 font-bold uppercase tracking-tighter">Analytics Growth</div>
                        <div className="h-40 flex items-end gap-2">
                            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    className="flex-1 bg-red-600/40 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}