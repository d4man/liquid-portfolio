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
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* About Text */}
                    <div className="md:w-1/2 space-y-6">
                        <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                            {"whoami"}
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-lg/relaxed">
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
                    <div className="md:w-1/2 w-full">
                        <h3 className="text-2xl font-bold tracking-tight mb-8">Technical Arsenal</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="space-y-3"
                                >
                                    <h4 className="font-mono text-sm text-emerald-500">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-md font-mono text-xs text-neutral-700 dark:text-neutral-300 hover:border-emerald-500/50 hover:text-emerald-500 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-default"
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
