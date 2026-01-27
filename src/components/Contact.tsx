"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Twitter, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Let's Talk <span className="text-red-600">Success.</span></h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Have questions about the algorithm or our Pro plans?
                        Our team of SEO experts is here to help your channel reach its full potential.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-red-600/10 group-hover:border-red-600/20 transition-all">
                                <Mail className="text-red-600" size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Us</div>
                                <div className="text-white">support@viralift.ai</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-600/10 group-hover:border-blue-600/20 transition-all">
                                <Twitter className="text-blue-500" size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Twitter (X)</div>
                                <div className="text-white">@ViraliftAI</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Minimal Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-[2.5rem] border-white/10 shadow-2xl relative"
                >
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-sm outline-none focus:border-red-600 transition-colors" />
                            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-sm outline-none focus:border-red-600 transition-colors" />
                        </div>
                        <textarea placeholder="Your message..." rows={4} className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-sm outline-none focus:border-red-600 transition-colors resize-none" />
                        <button className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 active:scale-95 transition-all">
                            Send Message <ArrowRight size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}