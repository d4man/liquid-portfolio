"use client";

import Link from "next/link";
import { useState } from "react";
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

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
            <header className="rounded-full border border-white/10 dark:border-neutral-800/40 bg-white/10 dark:bg-black/10 backdrop-blur-3xl shadow-lg shadow-black/5 dark:shadow-black/30">
                <div className="flex h-14 items-center justify-between px-5">
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
                                className="px-3 py-1.5 text-sm font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-emerald-400 rounded-lg hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="mailto:damanjs2023@yahoo.com"
                            className="hidden sm:inline-flex h-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono transition-all hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        >
                            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                            Hire Me
                        </a>
                        {/* Mobile hamburger */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-all"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <nav className="md:hidden border-t border-neutral-200/50 dark:border-neutral-800/50 px-4 pb-4 pt-2">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-3 py-2 text-sm font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-emerald-400 rounded-lg hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </header>
        </div>
    );
}
