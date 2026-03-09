"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-9 h-9" />;

    return (
        <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </button>
    );
}
