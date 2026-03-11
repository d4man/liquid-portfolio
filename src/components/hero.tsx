"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background glow effects - Liquid Glass */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-emerald-500/20 dark:bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="z-10 max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono mb-4"
                >
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
                >
                    Building the future with <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                        AI & Code
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400 font-mono"
                >
                    Damanjot Singh | AI Engineer focusing on Generative AI, production-grade RAG pipelines, and LLM observability.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                    <Link
                        href="#projects"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 dark:bg-white px-8 text-sm font-medium text-neutral-50 dark:text-neutral-900 shadow transition-colors hover:bg-neutral-900/90 dark:hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 font-mono gap-2"
                    >
                        $ view_projects
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/daman_resume0326.pdf`}
                        target="_blank"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 font-mono gap-2"
                    >
                        <FileText className="w-4 h-4" />
                        download_resume()
                    </Link>
                </motion.div>
            </div>

            {/* Optional grid background for terminal aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none -z-10" />

            {/* Liquid Glass Overlay overlaying the grid */}
            <div className="absolute inset-0 bg-white/5 dark:bg-black/5 backdrop-blur-[1px] pointer-events-none -z-10" />
        </section>
    );
}
