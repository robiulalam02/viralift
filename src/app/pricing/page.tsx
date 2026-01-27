"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Building2, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function PricingPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500"
                >
                    Simple, Transparent Pricing
                </motion.h1>
                <p className="text-slate-400 text-lg">
                    Start for free, upgrade as your channel grows.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

                {/* Free Plan */}
                <PriceCard
                    title="Starter"
                    price="0"
                    description="Perfect for new creators exploring SEO."
                    features={[
                        "5 Generations per hour",
                        "Standard AI Model",
                        "Title & Tag Generator",
                        "Community Support"
                    ]}
                    buttonText="Current Plan"
                    active
                />

                {/* Pro Plan (Coming Soon) */}
                <PriceCard
                    title="Professional"
                    price="19"
                    description="For creators serious about the algorithm."
                    features={[
                        "Unlimited Generations",
                        "Gemini 2.5 Pro (Advanced)",
                        "Competitor URL Analysis",
                        "A/B Title Testing",
                        "Priority Support"
                    ]}
                    buttonText="Coming Soon"
                    isPro
                />

                {/* Agency Plan */}
                <PriceCard
                    title="Agency"
                    price="49"
                    description="For teams managing multiple channels."
                    features={[
                        "Everything in Pro",
                        "Multi-user Access",
                        "Bulk Metadata Export",
                        "API Access",
                        "Dedicated Manager"
                    ]}
                    buttonText="Contact Sales"
                    icon={<Building2 size={20} />}
                />
            </div>

            {/* FAQ Mini-Section */}
            <div className="max-w-3xl mx-auto border-t border-white/5 pt-20">
                <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-2">
                    <HelpCircle className="text-red-500" /> Frequently Asked Questions
                </h3>
                <div className="space-y-8">
                    <FAQItem
                        q="Why is there a limit on the free plan?"
                        a="To keep the service free for everyone, we limit generations to 5 per hour to manage AI server costs fairly."
                    />
                    <FAQItem
                        q="When will the Pro plan be available?"
                        a="We are currently fine-tuning our Pro models. Subscribe to our newsletter to be the first to know!"
                    />
                </div>
            </div>
        </div>
    );
}

function PriceCard({ title, price, description, features, buttonText, active = false, isPro = false, icon }: any) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden border ${isPro ? 'border-red-500/50 shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)]' : 'border-white/5'
                }`}
        >
            {isPro && (
                <div className="absolute top-4 right-4 bg-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {icon || (isPro ? <Crown size={20} className="text-yellow-500" /> : <Zap size={20} className="text-red-500" />)}
                    {title}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-white">${price}</span>
                    <span className="text-slate-500 text-sm">/month</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((f: string) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                        <Check size={16} className="text-red-500 shrink-0" />
                        {f}
                    </li>
                ))}
            </ul>

            <button
                disabled={active || buttonText.includes("Soon")}
                onClick={() => !active && toast.info("Check back later for updates!")}
                className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${active
                    ? 'bg-white/10 text-white cursor-default'
                    : isPro
                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/20'
                        : 'bg-white text-black hover:bg-slate-200'
                    }`}
            >
                {buttonText}
            </button>
        </motion.div>
    );
}

function FAQItem({ q, a }: { q: string, a: string }) {
    return (
        <div>
            <h4 className="text-white font-semibold mb-2">{q}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
    );
}