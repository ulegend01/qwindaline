"use client";

import Link from "next/link";
import { Twitter, Send, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Proof of Work", href: "#work" },
        { name: "Achievements", href: "#achievements" },
        { name: "Collaborations", href: "#collabs" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                            MR <span className="text-brand-blue">QWINDALINE</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-brand-blue transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Socials / Contact (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://x.com/Mrkwindaline"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://t.me/Qwindaline"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                        >
                            <Send size={20} />
                        </a>
                        <Link
                            href="#contact"
                            className="ml-4 px-4 py-2 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-full transition-all text-sm font-bold uppercase tracking-wide"
                        >
                            Let's Build
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            <span className="sr-only">Open menu</span>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 border-b border-white/10 absolute top-16 left-0 w-full p-4 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-300 hover:text-white hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                        <a href="https://x.com/Mrkwindaline" target="_blank" className="text-gray-400 hover:text-brand-blue"><Twitter size={24} /></a>
                        <a href="https://t.me/Qwindaline" target="_blank" className="text-gray-400 hover:text-brand-blue"><Send size={24} /></a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
