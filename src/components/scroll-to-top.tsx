"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 h-11 w-11 flex items-center justify-center rounded-full border border-white/40 dark:border-white/15 bg-white/50 dark:bg-black/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] text-neutral-700 dark:text-neutral-200 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:border-emerald-500/50 active:scale-95 active:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:border-emerald-500/50 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
}
