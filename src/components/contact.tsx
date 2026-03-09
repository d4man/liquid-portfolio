"use client";

import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-neutral-50 dark:bg-[#0A0A0A] border-t border-neutral-200 dark:border-neutral-800">
            <div className="container px-4 md:px-6 mx-auto max-w-2xl">
                <div className="flex flex-col items-center justify-center space-y-4 mb-12 text-center">
                    <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                        {"./contact_me.sh"}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg/relaxed font-mono">
                        Have a question or want to work together? Keep in mind I&apos;m currently looking for new opportunities.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black/50 p-6 md:p-8 shadow-sm backdrop-blur-md"
                >
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />

                    <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium font-mono">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium font-mono">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium font-mono">Message</label>
                            <textarea
                                id="message"
                                placeholder="How can I help you?"
                                rows={4}
                                className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 dark:bg-white px-8 text-sm font-medium text-neutral-50 dark:text-neutral-900 shadow transition-colors hover:bg-neutral-900/90 dark:hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 font-mono"
                        >
                            $ send_message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
