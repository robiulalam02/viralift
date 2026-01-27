"use client";
import { motion } from "framer-motion";
import { Globe, BarChart3, ShieldCheck, Zap, Cpu } from "lucide-react";

export default function BentoGrid() {
    const cards = [
        {
            title: "Real-time Trend Engine",
            desc: "Analyzes 1M+ viral videos daily to catch rising keywords before they peak.",
            icon: <Zap className="text-yellow-400" />,
            className: "md:col-span-2",
            bg: "bg-yellow-500/5"
        },
        {
            title: "98% CTR Accuracy",
            desc: "Our neural network predicts thumbnail and title performance.",
            icon: <BarChart3 className="text-red-500" />,
            className: "md:col-span-1",
            bg: "bg-red-500/5"
        },
        {
            title: "Multi-Platform Logic",
            desc: "Specific algorithms for YT, IG, and FB.",
            icon: <Cpu className="text-purple-500" />,
            className: "md:col-span-1",
            bg: "bg-purple-500/5"
        },
        {
            title: "Global Reach",
            desc: "Supports 40+ languages with native-level SEO optimization.",
            icon: <Globe className="text-blue-500" />,
            className: "md:col-span-2",
            bg: "bg-blue-500/5"
        }
    ];

    return (
        <section className="py-24 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Built with <span className="text-red-600">Advanced AI</span></h2>
                <p className="text-slate-400">Proprietary technology designed to beat the algorithm.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`glass-card p-8 rounded-[2rem] border-white/5 relative overflow-hidden group ${card.className} ${card.bg}`}
                    >
                        <div className="mb-4 p-3 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                            {card.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}