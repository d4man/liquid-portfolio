"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { href: "#about", label: "./about" },
    { href: "#experience", label: "./experience" },
    { href: "#projects", label: "./projects" },
    { href: "#contact", label: "./contact" },
];

/* ── Inline SVG micro-noise texture (monochromatic) ─────────────────────── */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    /* ── Specular highlight: mouse tracking (desktop) ─────────────────── */
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!navRef.current) return;
        const { left, top, width, height } = navRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        navRef.current.style.setProperty("--mouse-x", `${x}%`);
        navRef.current.style.setProperty("--mouse-y", `${y}%`);
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    /* ── Touch highlight: touch tracking (mobile) ─────────────────────── */
    useEffect(() => {
        const el = navRef.current;
        if (!el) return;

        const handleTouch = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (!touch) return;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = ((touch.clientX - left) / width) * 100;
            const y = ((touch.clientY - top) / height) * 100;
            el.style.setProperty("--mouse-x", `${x}%`);
            el.style.setProperty("--mouse-y", `${y}%`);
        };

        el.addEventListener("touchmove", handleTouch, { passive: true });
        el.addEventListener("touchstart", handleTouch, { passive: true });
        return () => {
            el.removeEventListener("touchmove", handleTouch);
            el.removeEventListener("touchstart", handleTouch);
        };
    }, []);

    /* ── Auto-close mobile menu on scroll ──────────────────────────────── */
    useEffect(() => {
        if (!mobileOpen) return;
        const close = () => setMobileOpen(false);
        window.addEventListener("scroll", close, { passive: true });
        return () => window.removeEventListener("scroll", close);
    }, [mobileOpen]);

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300">
            <header
                ref={navRef}
                style={{
                    willChange: "backdrop-filter, transform",
                    contain: "layout style paint",
                }}
                className="liquid-glass-nav relative overflow-hidden rounded-[2rem] transition-all duration-300"
            >
                {/* ━━━━━━━━━━━ SVG FILTER DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━ */}
                <svg
                    style={{ position: "absolute", width: 0, height: 0 }}
                    aria-hidden="true"
                >
                    <defs>
                        {/* Liquid Glass Refraction Engine */}
                        <filter id="liquid-refraction" colorInterpolationFilters="sRGB">
                            {/* 1. Generate organic noise displacement map */}
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.015"
                                numOctaves="3"
                                seed="2"
                                result="noise"
                            />
                            {/* 2. Displace source pixels — simulates light bending through glass */}
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="noise"
                                scale="6"
                                xChannelSelector="R"
                                yChannelSelector="G"
                                result="refracted"
                            />
                            {/* 3. Specular lighting — Fresnel rim glints from point light */}
                            <feSpecularLighting
                                in="noise"
                                surfaceScale="3"
                                specularConstant="0.75"
                                specularExponent="25"
                                lightingColor="white"
                                result="specular"
                            >
                                <fePointLight x="200" y="-50" z="120" />
                            </feSpecularLighting>
                            {/* 4. Clip specular to the refracted shape */}
                            <feComposite
                                in="specular"
                                in2="refracted"
                                operator="in"
                                result="clippedSpec"
                            />
                            {/* 5. Merge: refracted base + specular highlights */}
                            <feMerge>
                                <feMergeNode in="refracted" />
                                <feMergeNode in="clippedSpec" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                {/* ── Layer 1: SVG Refraction (desktop only, hidden on mobile via CSS) ── */}
                <div
                    className="liquid-glass-refraction"
                    style={{ filter: "url(#liquid-refraction)" }}
                />

                {/* ── Layer 2: Micro Noise Texture ──────────────────────── */}
                <div
                    className="pointer-events-none absolute inset-0 z-[1] rounded-[2rem] mix-blend-overlay dark:mix-blend-soft-light"
                    style={{
                        backgroundImage: NOISE_SVG,
                        backgroundRepeat: "repeat",
                        backgroundSize: "128px 128px",
                        opacity: 0.4,
                    }}
                />

                {/* ── Layer 3: Specular Highlight (follows pointer) ─────── */}
                <div
                    className="pointer-events-none absolute inset-0 z-[1] rounded-[2rem] transition-opacity duration-200 mix-blend-overlay dark:mix-blend-screen"
                    style={{
                        background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.25), transparent 60%)`,
                        opacity: 0.8,
                    }}
                />

                {/* ── Layer 4: Top Edge Fresnel Highlight ──────────────── */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[1px] rounded-t-[2rem]"
                    style={{
                        background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 80%, transparent 95%)",
                    }}
                />

                {/* ── Content ──────────────────────────────────────────── */}
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
                                className="relative overflow-hidden px-4 py-2 text-sm font-semibold font-mono text-neutral-800 dark:text-neutral-100 transition-all duration-300 hover:scale-[1.03] active:scale-95 bg-white/10 dark:bg-white/[0.03] border border-white/20 dark:border-white/[0.06] hover:bg-white/25 dark:hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.03)] rounded-[2rem] isolate backdrop-blur-sm"
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
                            className="hidden sm:inline-flex h-[2.3rem] items-center justify-center rounded-[2rem] bg-emerald-500/80 text-white dark:bg-emerald-500/15 border border-emerald-500/30 dark:border-emerald-500/20 px-5 text-xs font-bold font-mono transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:bg-emerald-500/90 dark:hover:bg-emerald-500/25 isolate backdrop-blur-sm"
                        >
                            <span className="flex h-1.5 w-1.5 rounded-[2rem] bg-white dark:bg-emerald-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                            <span className="text-white dark:text-emerald-50">Hire Me</span>
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-[2rem] border border-white/15 dark:border-white/[0.06] bg-white/10 dark:bg-white/[0.03] text-neutral-800 dark:text-white transition-all active:scale-90 hover:bg-white/25 dark:hover:bg-white/[0.08] backdrop-blur-sm"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <nav className="md:hidden border-t border-white/10 dark:border-white/[0.06] px-6 pb-6 pt-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-5 py-3 text-sm font-semibold font-mono text-neutral-800 dark:text-white bg-white/10 dark:bg-white/[0.03] border border-white/15 dark:border-white/[0.06] rounded-[2rem] transition-all duration-300 active:scale-[0.98] active:bg-white/25 dark:active:bg-white/[0.08] hover:bg-white/25 dark:hover:bg-white/[0.08] backdrop-blur-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            
                            <a
                                href="mailto:damanjs2023@yahoo.com"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 flex h-[2.5rem] items-center justify-center rounded-[2rem] bg-emerald-500/80 text-white dark:bg-emerald-500/15 border border-emerald-500/30 dark:border-emerald-500/20 px-5 text-sm font-bold font-mono transition-all duration-300 active:scale-95 hover:bg-emerald-500/90 dark:hover:bg-emerald-500/25 isolate backdrop-blur-sm"
                            >
                                <span className="flex h-1.5 w-1.5 rounded-[2rem] bg-white dark:bg-emerald-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                                <span className="text-white dark:text-emerald-50">Hire Me</span>
                            </a>
                        </div>
                    </nav>
                )}
            </header>
        </div>
    );
}
