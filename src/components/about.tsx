"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: ["Python", "C", "SQL"],
    },
    {
        category: "Generative AI",
        items: ["Ollama", "vLLMs", "LangChain", "Haystack", "FAISS", "Milvus", "Ragas"],
    },
    {
        category: "Python Packages",
        items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PyTorch", "SHAP", "RASA"],
    },
    {
        category: "Production & Cloud",
        items: ["GitHub", "Kubernetes", "Azure", "GCP", "Vercel"],
    },
    {
        category: "Visualization",
        items: ["Power BI", "Dataiku", "Streamlit", "Gradio"],
    },
    {
        category: "Areas of Interest",
        items: ["LLM Observability", "Machine Learning", "RAG Evaluation", "Agentic Workflows"],
    },
];

export function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-24">

                    {/* About Text */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                            {"whoami"}
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 md:text-lg/relaxed leading-relaxed font-mono">
                            <p>
                                Motivated AI Engineer with a strong foundation in Python, SQL, and production-grade Generative AI.
                                Skilled in developing high-performance RAG pipelines, Agentic workflows with MCP integration, and real-time LLM observability frameworks.
                            </p>
                            <p>
                                Experienced in handling complex datasets, mitigating hallucinations using frameworks like Ragas, and deploying scalable ML models to drive actionable business insights.
                            </p>
                        </div>
                    </div>

                    {/* Skills Matrix */}
                    <div className="w-full space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                                {"~/skills"}
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Arsenal</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group relative p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 space-y-4 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col h-full overflow-hidden"
                                >
                                    {/* Lighting Glares */}
                                    <div className="glow-overlay absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                                    {/* macOS Header Dots */}
                                    <div className="flex gap-1.5 mb-1 relative z-10">
                                        <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/90 shadow-sm border border-red-500/20"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/90 shadow-sm border border-yellow-500/20"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/90 shadow-sm border border-green-500/20"></div>
                                    </div>

                                    <h4 className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-tight relative z-10">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                        {skillGroup.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-2.5 py-1 bg-white dark:bg-black/50 border border-neutral-200 dark:border-neutral-800/80 rounded-md font-mono text-xs text-neutral-600 dark:text-neutral-400 hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-300 cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
