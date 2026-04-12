"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { href: "#about", label: "./about" },
    { href: "#experience", label: "./experience" },
    { href: "#projects", label: "./projects" },
    { href: "#contact", label: "./contact" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for Custom Specular Highlights
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!navRef.current) return;
            const { left, top, width, height } = navRef.current.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            navRef.current.style.setProperty("--mouse-x", `${x}%`);
            navRef.current.style.setProperty("--mouse-y", `${y}%`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Auto-close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (mobileOpen) {
                setMobileOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileOpen]);

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300">
            <header 
                ref={navRef}
                className={`relative overflow-hidden border border-white/50 dark:border-white/20 bg-white/40 dark:bg-black/40 backdrop-blur-[24px] backdrop-saturate-[1.8] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,255,255,0.1),0_8px_32px_0_rgba(0,0,0,0.15)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(255,255,255,0.05),0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300 rounded-[2rem]`}
            >

                {/* Rim Light / Specular Custom Highlight Overlay */}
                <div 
                    className="pointer-events-none absolute inset-0 z-0 opacity-70 transition-opacity duration-300 mix-blend-overlay dark:mix-blend-screen"
                    style={{
                        background: `radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.6), transparent 40%)`
                    }}
                />
                
                <div className="relative z-10 flex h-[3.8rem] items-center justify-between px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-1.5 shrink-0 group">
                        <span className="font-mono font-bold text-[1.05rem] tracking-tight text-neutral-900 dark:text-white">
                            <span className="text-emerald-500 group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all duration-300">{">_"}</span>{" "}daman.dev
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative overflow-hidden px-4 py-2 text-sm font-semibold font-mono text-neutral-800 dark:text-neutral-100 transition-all duration-300 hover:scale-[1.03] active:scale-95 bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/5 hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-[2rem] isolate"
                            >
                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right side Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="mailto:damanjs2023@yahoo.com"
                            className="hidden sm:inline-flex h-[2.3rem] items-center justify-center rounded-[2rem] bg-emerald-500/90 text-white dark:bg-emerald-500/20 border border-emerald-500/40 px-5 text-xs font-bold font-mono transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-500 dark:hover:bg-emerald-500/30 isolate"
                        >
                            <span className="flex h-1.5 w-1.5 rounded-[2rem] bg-white dark:bg-emerald-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                            <span className="text-white dark:text-emerald-50">Hire Me</span>
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-[2rem] border border-neutral-300/50 dark:border-white/10 bg-white/30 dark:bg-white/5 text-neutral-800 dark:text-white transition-all active:scale-90 hover:bg-white/50 dark:hover:bg-white/10"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <nav className="md:hidden border-t border-black/5 dark:border-white/10 px-6 pb-6 pt-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-5 py-3 text-sm font-semibold font-mono text-neutral-800 dark:text-white bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/5 rounded-[2rem] transition-all duration-300 active:scale-[0.98] hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            
                            <a
                                href="mailto:damanjs2023@yahoo.com"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 flex h-[2.5rem] items-center justify-center rounded-[2rem] bg-emerald-500/90 text-white dark:bg-emerald-500/20 border border-emerald-500/40 px-5 text-sm font-bold font-mono transition-all duration-300 active:scale-95 hover:bg-emerald-500 dark:hover:bg-emerald-500/30 isolate"
                            >
                                <span className="flex h-1.5 w-1.5 rounded-[2rem] bg-white dark:bg-emerald-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                <span className="text-white dark:text-emerald-50">Hire Me</span>
                            </a>
                        </div>
                    </nav>
                )}
            </header>

        </div>
    );
}
