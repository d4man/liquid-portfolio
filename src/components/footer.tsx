"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, BookOpen, ExternalLink, GraduationCap, Award, BookType } from "lucide-react";

const socialCards = [
    {
        icon: Github,
        title: "GitHub",
        handle: "@damanjot-singh",
        comment: "// open-source & AI projects",
        href: "https://github.com",
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        handle: "@damanjot-singh",
        comment: "// professional network",
        href: "https://linkedin.com",
    },
    {
        icon: Mail,
        title: "Email",
        handle: "damanjs2023@yahoo.com",
        comment: "// direct contact",
        href: "mailto:damanjs2023@yahoo.com",
    },
    {
        icon: Phone,
        title: "Phone",
        handle: "+91-7087641196",
        comment: "// available for calls",
        href: "tel:+917087641196",
    },
    {
        icon: BookType,
        title: "Google Scholar",
        handle: "Damanjot Singh",
        comment: "// academic research",
        href: "https://scholar.google.com/citations?user=damanjot_singh",
    },
];

export function Footer() {
    return (
        <footer className="bg-white dark:bg-[#0A0A0A] pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                {/* Connect Section - Kirti style cards */}
                <div id="contact" className="mb-20">
                    <div className="flex flex-col items-start space-y-4 mb-10">
                        <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                            {"$ execute_connect"}
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Let&apos;s Connect
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {socialCards.map((card, index) => (
                            <motion.a
                                key={card.title}
                                href={card.href}
                                target={card.href.startsWith("http") ? "_blank" : undefined}
                                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group relative flex flex-col gap-3 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <card.icon className="w-5 h-5 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
                                    <ExternalLink className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-500 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">{card.title}</h3>
                                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">{card.handle}</p>
                                </div>
                                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600">{card.comment}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Education & Publications Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6 space-y-5"
                    >
                        <div className="flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-emerald-500" />
                            <h3 className="text-lg font-bold tracking-tight">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-2 border-emerald-500/30 pl-4">
                                <h4 className="font-semibold text-sm">M.Tech, Computer Science</h4>
                                <p className="text-xs font-mono text-emerald-500 mt-0.5">NIT Jalandhar &middot; 2023–2025</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">CGPA: 7.24 | Thesis: XAI Multimodal Emotion Recognition</p>
                            </div>
                            <div className="border-l-2 border-emerald-500/30 pl-4">
                                <h4 className="font-semibold text-sm">B.Tech, Computer Science</h4>
                                <p className="text-xs font-mono text-emerald-500 mt-0.5">IKG PTU Jalandhar &middot; 2019–2023</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">CGPA: 8.08</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Publications & Certs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6 space-y-5"
                    >
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-emerald-500" />
                            <h3 className="text-lg font-bold tracking-tight">Publications</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm group">
                                <span className="text-emerald-500 shrink-0 mt-0.5">📄</span>
                                <div>
                                    <a href="https://link.springer.com/chapter/10.1007/978-981-96-8197-6_9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-neutral-900 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                                        Ubiquity of LLM Hallucinations across Critical Domains
                                        <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </a>
                                    <p className="text-xs font-mono text-neutral-500 mt-0.5">PAKDD 2025 &middot; Springer Nature</p>
                                </div>
                            </li>
                            <li className="flex gap-3 text-sm group">
                                <span className="text-emerald-500 shrink-0 mt-0.5">📄</span>
                                <div>
                                    <a href="https://doi.org/10.1007/978-981-97-8460-8_7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-neutral-900 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                                        Generative AI for Cyberdefense
                                        <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </a>
                                    <p className="text-xs font-mono text-neutral-500 mt-0.5">Dec 2024 &middot; Springer Nature</p>
                                </div>
                            </li>
                        </ul>

                        <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                            <div className="flex items-center gap-2 mb-2">
                                <Award className="w-4 h-4 text-emerald-500" />
                                <h4 className="font-semibold text-sm">Certifications</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["RASA Developer", "Dataiku ML", "NPTEL ML (IIT Madras)"].map((cert) => (
                                    <span key={cert} className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded text-xs font-mono text-neutral-600 dark:text-neutral-300">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Minimal Terminal Footer */}
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
                    <div>
                        <span className="text-emerald-500">{">_ "}</span>$ crafted_by damdam
                    </div>
                    <div>{"/* © 2026 */"}</div>
                </div>
            </div>
        </footer>
    );
}
