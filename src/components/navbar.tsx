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

    // Mouse tracking for the Specular Liquid Highlight
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

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300">
            <header 
                ref={navRef}
                className={`relative overflow-hidden border border-white/40 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 ${mobileOpen ? "rounded-3xl" : "rounded-full"}`}
                style={{ filter: "url(#liquid-refraction)" } as React.CSSProperties}
            >
                {/* Specular Highlight Overlay */}
                <div 
                    className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4), transparent 40%)`
                    }}
                />
                <div className="relative z-10 flex h-14 items-center justify-between px-5">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-1.5 shrink-0">
                        <span className="font-mono font-bold text-base tracking-tight text-neutral-900 dark:text-neutral-100">
                            <span className="text-emerald-500">{">_"}</span>{" "}daman.dev
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-1.5 text-sm font-mono text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-emerald-400 rounded-full transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 border border-transparent hover:border-white/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="mailto:damanjs2023@yahoo.com"
                            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-emerald-500/20 border border-emerald-500/30 px-5 text-xs font-bold font-mono transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        >
                            <span className="flex h-1.5 w-1.5 rounded-full bg-white dark:bg-emerald-500 mr-2 animate-pulse" />
                            Hire Me
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/20 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 transition-all active:scale-90"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <nav className="md:hidden border-t border-white/10 dark:border-white/5 px-4 pb-6 pt-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-sm font-mono text-neutral-600 dark:text-neutral-400 hover:bg-emerald-500/10 rounded-xl transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </header>
        </div>

            {/* The Liquid Glass Engine (SVG Filter) */ }
    <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }} aria-hidden="true">
        <defs>
            <filter id="liquid-refraction">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="liquid" />
                <feComposite in="SourceGraphic" in2="liquid" operator="atop" />
            </filter>
        </defs>
    </svg>
        </>
    );
}
