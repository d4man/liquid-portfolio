"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        role: "AI Engineer",
        company: "Tata Electronics",
        location: "GIFT City, Gujarat",
        date: "Nov 2025 – Present",
        description: [
            "Worked on production-grade RAG pipeline utilizing FAISS for high-speed indexing and Redis caching, reducing latency while enabling real-time multimodal content retrieval.",
            "Engineered Agentic RAG with MCP integration for dynamic URL-based data fetching, implementing custom pipeline components for document processing, image extraction, and context-aware search.",
            "Tracked and Mitigated LLM Hallucinations using Ragas framework based metrics like faithfulness and Context Precision, resulting in grounded responses.",
            "Developed a real-time Statistical Model Health Monitoring using perplexity and semantic entropy scoring, enabling automated model health tracking with adaptive time-windowed sampling for production AI responses.",
        ],
    },
    {
        id: 2,
        role: "Data Science Intern",
        company: "Sabudh Foundation",
        location: "Chandigarh, India",
        date: "Jan 2023 – Jun 2023",
        description: [
            "Collaborated in a 3-member team to deliver a healthcare chatbot that increased disease prediction accuracy by 15%.",
            "Enhanced response quality by refining intent/entity recognition logic and ensuring precise dataset annotation.",
            "Practiced Agile-style teamwork with Git-based collaboration, daily stand-ups, and iterative progress reviews.",
        ],
    },
    {
        id: 3,
        role: "ML Intern",
        company: "Defence Research & Development Organization (SSPL)",
        location: "New Delhi, India",
        date: "Oct 2021 – Jan 2022",
        description: [
            "Implemented a stock price prediction pipeline using Random Forest for optimized short-term trend forecasting.",
            "Gathered and preprocessed time-series data via the Yahoo Finance API.",
            "Boosted forecasting accuracy by 12% over a baseline linear regression through iterative model refinement.",
            "Deployed the model and application on Heroku, enabling real-time browser-based access for 100+ test queries.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-neutral-50 dark:bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start justify-center space-y-4 mb-12">
                    <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                        {"<Experience />"}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work History</h2>
                </div>

                <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-10"
                        >
                            {/* Timeline dot */}
                            <div className="absolute w-4 h-4 rounded-full bg-emerald-500 outline outline-4 outline-white dark:outline-[#0A0A0A] -left-[9px] top-1.5" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <div className="text-lg font-mono text-neutral-600 dark:text-neutral-400 mt-1">
                                        <span className="text-emerald-500">@</span> {exp.company}
                                    </div>
                                </div>
                                <div className="text-left md:text-right font-mono text-sm text-neutral-500">
                                    <div>{exp.date}</div>
                                    <div>{exp.location}</div>
                                </div>
                            </div>

                            <div className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black/50 p-6 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 overflow-hidden">
                                {/* Subtle glow effect on hover */}
                                <div className="glow-overlay absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                                <div className="relative z-10">
                                    {/* macOS Header Dots */}
                                    <div className="flex gap-1.5 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/90 shadow-sm border border-red-500/20"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/90 shadow-sm border border-yellow-500/20"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/90 shadow-sm border border-green-500/20"></div>
                                    </div>

                                    <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm md:text-base">
                                                <span className="text-emerald-500 mt-1 flex-shrink-0">{">"}</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
