"use client";
import React from 'react';
import { Twitter, Github, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand with Custom Logo */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4 group">
                            <div className="relative w-8 h-8 transition-transform group-hover:scale-110 duration-300">
                                <div className="absolute inset-0 bg-red-600/10 blur-md rounded-full" />
                                <Image
                                    src="/viralift.png"
                                    alt="ViralLift Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain relative z-10"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-white">
                                ViraLift
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            The ultimate AI engine for multi-platform growth. Dominate YouTube, Instagram, and Facebook with data-backed metadata.
                        </p>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link href="/" className="hover:text-red-500 transition-colors">Metadata Generator</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-red-500 transition-colors">SEO Analysis</Link></li>
                            <li><Link href="/pricing" className="hover:text-red-500 transition-colors">Pro Plans</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">API Docs <ArrowUpRight size={14} /></Link></li>
                            <li><Link href="#" className="hover:text-red-500 transition-colors">Creator Blog</Link></li>
                            <li><Link href="#" className="hover:text-red-500 transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Connect */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Connected</h4>
                        <div className="flex gap-4 text-slate-500 mb-6">
                            <Link href="#" className="hover:text-white transition-transform hover:scale-110"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-transform hover:scale-110"><Github size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-transform hover:scale-110"><Mail size={20} /></Link>
                        </div>
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                            Join 5,000+ creators getting weekly growth tips.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>© {currentYear} ViraLift AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-400">Terms of Service</Link>
                        <Link href="#" className="hover:text-slate-400">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}