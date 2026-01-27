"use client";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { toast } from "sonner";

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "0",
            desc: "For hobbyists just starting out.",
            features: ["5 AI Generations / hr", "Standard YouTube SEO", "Basic Analytics", "Community Access"],
            icon: <Rocket size={20} />,
            isPopular: false,
        },
        {
            name: "Creator Pro",
            price: "19",
            desc: "For serious creators & influencers.",
            features: ["Unlimited Generations", "Instagram & FB Modes", "Advanced Hook Engine", "Priority Support", "A/B Title Testing"],
            icon: <Crown size={20} className="text-yellow-500" />,
            isPopular: true,
        },
        {
            name: "Agency",
            price: "49",
            desc: "For teams managing multiple brands.",
            features: ["Everything in Pro", "Multi-user Workspace", "API Access", "Bulk Metadata Export", "Dedicated Account Manager"],
            icon: <Zap size={20} className="text-red-500" />,
            isPopular: false,
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Scale Your <span className="text-red-600">Growth</span></h2>
                <p className="text-slate-400">Choose the plan that fits your content goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`glass-card p-8 rounded-[2.5rem] relative flex flex-col border ${plan.isPopular ? 'border-red-500/50 bg-red-500/5 shadow-2xl shadow-red-500/10' : 'border-white/5'
                            }`}
                    >
                        {plan.isPopular && (
                            <span className="absolute top-4 right-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                Most Popular
                            </span>
                        )}

                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-slate-400 mb-4">
                                {plan.icon} <span className="font-bold uppercase text-xs tracking-widest">{plan.name}</span>
                            </div>
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-5xl font-black text-white">${plan.price}</span>
                                <span className="text-slate-500 text-sm">/mo</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{plan.desc}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                                    <Check size={16} className="text-red-600 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => toast.info("Coming Soon!", { description: "We are currently in beta." })}
                            className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${plan.isPopular ? 'bg-red-600 text-white hover:bg-red-500' : 'bg-white text-black hover:bg-slate-200'
                                }`}
                        >
                            {plan.price === "0" ? "Get Started Free" : "Coming Soon"}
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}