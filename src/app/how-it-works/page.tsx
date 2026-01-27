"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Sparkles, BarChart3, Globe, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                    The Science of <br /> Going Viral.
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    ViraLift isn't just a random generator. It's a fine-tuned engine that bridges the gap between your content and the YouTube Algorithm.
                </p>
            </motion.div>

            {/* The 3-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                <ProcessCard
                    icon={<Search className="text-red-500" />}
                    step="01"
                    title="Semantic Analysis"
                    description="We take your topic and analyze the current search intent, identifying what viewers are actually looking for right now."
                />
                <ProcessCard
                    icon={<Zap className="text-yellow-400" />}
                    step="02"
                    title="AI Fine-Tuning"
                    description="Our Gemini-powered engine crafts titles designed to trigger high curiosity (CTR) while maintaining high SEO relevance."
                />
                <ProcessCard
                    icon={<Sparkles className="text-purple-500" />}
                    step="03"
                    title="Metadata Injection"
                    description="Generate a cohesive package of tags and hashtags that categorize your video correctly for the YouTube 'Browse' features."
                />
            </div>

            {/* Deep Dive Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Why Metadata Matters in 2026</h2>
                    <div className="space-y-6 text-slate-400">
                        <p className="flex gap-4">
                            <BarChart3 className="text-red-500 shrink-0" />
                            <span>While AI can "watch" videos, your metadata provides the primary roadmap for the initial 24-hour push.</span>
                        </p>
                        <p className="flex gap-4">
                            <Globe className="text-red-500 shrink-0" />
                            <span>Our tool supports global niches, ensuring your video reaches the right audience regardless of language.</span>
                        </p>
                        <p className="flex gap-4">
                            <ShieldCheck className="text-red-500 shrink-0" />
                            <span>We avoid "spammy" tags that can hurt your channel, focusing strictly on high-authority SEO.</span>
                        </p>
                    </div>
                </motion.div>

                <div className="glass-card p-8 rounded-3xl border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent">
                    <h3 className="text-xl font-bold mb-4">Ready to test it?</h3>
                    <p className="text-slate-400 mb-8 text-sm">Join thousands of creators who are already using ViraLift to save hours on SEO.</p>
                    <Link href="/">
                        <button className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group">
                            Back to Generator <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ProcessCard({ icon, step, title, description }: any) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl border-white/5 relative group"
        >
            <div className="text-5xl font-black text-white/5 absolute top-6 right-6 group-hover:text-red-500/10 transition-colors">
                {step}
            </div>
            <div className="mb-6 p-3 bg-white/5 w-fit rounded-2xl border border-white/10">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}