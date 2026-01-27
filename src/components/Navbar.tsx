"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Github, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Generator', href: '/' },
        { name: 'How it works', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            {/* Desktop Navbar */}
            <div className="bg-white/[0.03] backdrop-blur-xl flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] relative">

                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110 duration-300">
                        <div className="absolute inset-0 bg-red-600/20 blur-lg rounded-full" />
                        <Image
                            src="/viralift.png"
                            alt="Viralift Logo"
                            fill
                            className="object-contain relative z-10"
                            priority
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-500">
                        Viralift
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-white transition-colors relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <div className="h-4 w-[1px] bg-white/10" />
                    <a href="https://github.com" target="_blank" className="hover:text-white transition-transform hover:scale-110">
                        <Github size={20} />
                    </a>
                    <Link href="/pricing">
                        <button className="bg-white text-black px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl active:scale-95">
                            <Zap size={14} fill="black" /> Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* mobile view */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 md:hidden">
                        {/* Ultra-blur backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-2xl"
                        />

                        {/* Floating Minimal Glass Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 350 }}
                            className="relative w-full max-w-[300px] bg-white/[0.05] backdrop-blur-3xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 overflow-hidden"
                        >
                            {/* Inner glow effect */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/10 blur-[60px] rounded-full pointer-events-none" />

                            <div className="flex flex-col gap-2 relative z-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between px-5 py-4 rounded-2xl text-slate-200 hover:text-white hover:bg-white/10 transition-all group"
                                    >
                                        <span className="text-base font-bold tracking-tight">{link.name}</span>
                                        <ChevronRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-500" />
                                    </Link>
                                ))}

                                <div className="my-3 h-[1px] bg-white/10 mx-2" />

                                <Link
                                    href="/pricing"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-3 w-full bg-red-600 text-white py-4 rounded-2xl text-sm font-extrabold shadow-lg shadow-red-600/20 active:scale-95 transition-transform"
                                >
                                    <Zap size={16} fill="currentColor" />
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
}