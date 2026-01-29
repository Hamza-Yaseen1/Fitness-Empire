'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal after a small delay when the page loads
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let autoCloseTimer: NodeJS.Timeout;

        if (isOpen) {
            // Auto-close after 3 seconds if still open
            autoCloseTimer = setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        }

        return () => {
            if (autoCloseTimer) clearTimeout(autoCloseTimer);
        };
    }, [isOpen]);

    const closeModal = () => setIsOpen(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                            aria-label="Close modal"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>

                        <div className="p-8 flex flex-col items-center text-center">
                            {/* Image Container */}
                            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-red-500/20">
                                <Image
                                    src="/hamza.png"
                                    alt="Hamza - Developer"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Welcome to Fitness Empire!
                                </h2>
                                <div className="w-12 h-1 bg-red-600 mx-auto mb-4 rounded-full" />
                                <p className="text-gray-600 leading-relaxed italic">
                                    "Created by Hamza"
                                </p>
                                <p className="mt-4 text-sm text-gray-500">
                                    We are glad to have you here. Let's start your journey together!
                                </p>
                            </motion.div>

                            {/* Action Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={closeModal}
                                className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-red-600/20 active:scale-95"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
