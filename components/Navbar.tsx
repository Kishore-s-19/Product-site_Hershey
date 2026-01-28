"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6"
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
            <div className="w-full px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src="/images/logo.webp" alt="Hershey's Logo" className="h-10 md:h-16 w-auto object-contain" />
                </div>

                <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
                    {/* Navigation items removed for single product focus */}
                </div>

                <button className="bg-orange-500 text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold hover:bg-orange-600 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]">
                    Order Now
                </button>
            </div>
        </motion.nav>
    );
}
