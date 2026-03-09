"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Autonomous Web-Intelligence Engine",
        date: "Feb 2026",
        type: "Personal Project",
        tags: ["Python", "Haystack", "Ollama", "MCP", "Milvus"],
        description: [
            "Engineered a RAG pipeline using a Directed Acyclic Graph to handle conditional routing between a local vector store and live web-scraping nodes.",
            "Implemented a MCP client to interface enabling the LLM to access fresh data beyond its training cutoff.",
            "Configured Ollama, utilizing llama3.2:3b for high-speed, privacy-compliant reasoning.",
            "Developed a component to perform Semantic Search on Milvus while simultaneously fetching top-k results from a live web-search tool.",
        ],
        githubUrl: "#", // Add your Github URL
        liveUrl: "#", // Add your Live Demo URL
    },
    {
        title: "Document Q&A Chatbot",
        date: "Jul 2025",
        type: "Personal Project",
        tags: ["Python", "LangChain", "ChromaDB", "Ollama", "Gradio"],
        description: [
            "Created a custom Q&A corpus by uploading 10-20 PDFs and splitting into 500+ chunks via PyMuPDFLoader.",
            "Produced embeddings and indexed them in ChromaDB for semantic retrieval.",
            "Constructed a RAG pipeline retrieving top-k context and generated answers via Llama 3.2:3b.",
            "Prepared a Gradio interface enabling users to upload documents and ask chat-based queries based on documents.",
        ],
        githubUrl: "#",
    },
    {
        title: "Multimodal Emotion Classifier with Explainability",
        date: "Dec 2024",
        type: "Thesis Project",
        tags: ["PyTorch", "ResNet50", "OpenFace", "Librosa", "SHAP", "DistilRoBERTa"],
        description: [
            "Analyzed and preprocessed 1,630 video clips combining RAVDESS and BAUM-1 datasets.",
            "Utilized bimodal DL based Performer using ResNet50 and Transformer Cross-Modal Attention for feature fusion.",
            "Achieved 98% weighted F1-score on RAVDESS and 94% on BAUM-1 surpassing all SOTA results.",
            "Trained a post-hoc MLP surrogate Explainer model using FAUs and applied SHAP for XAI analysis.",
        ],
        githubUrl: "#",
    },
    {
        title: "Medibot - A Healthcare Chatbot",
        date: "Feb 2022",
        type: "Sabudh Foundation",
        tags: ["RASA", "Python", "Streamlit", "GCP"],
        description: [
            "Generated and annotated a custom intent-entity dataset with 12 intents, 30 entities, and 500 utterances.",
            "Made a domain-specific chatbot using RASA NLU pipelines, achieving 88% intent accuracy on the test set.",
            "Used Git for version control throughout the development process.",
        ],
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-black">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-start justify-center space-y-4 mb-12">
                    <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                        {"~/projects_list"}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
                    <p className="max-w-[700px] text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed font-mono">
                        A selection of my recent AI and machine learning projects, focusing on generative models and intelligent systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between rounded-xl border border-white/10 dark:border-neutral-800/60 bg-white/40 dark:bg-black/40 backdrop-blur-md p-6 sm:p-8 hover:border-emerald-500/50 transition-colors h-full overflow-hidden shadow-sm"
                        >
                            {/* Background Glow - Liquid Glass */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/5 dark:from-emerald-500/10 dark:via-transparent dark:to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />

                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="text-sm font-mono text-emerald-500 mb-2">{project.type} &middot; {project.date}</div>
                                        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                                    </div>
                                    <div className="flex space-x-2 shrink-0">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                                                <Github className="w-5 h-5" />
                                                <span className="sr-only">GitHub Repo</span>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                                <span className="sr-only">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    {project.description.map((desc, i) => (
                                        <p key={i} className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-300 transition-colors group-hover:border-emerald-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
