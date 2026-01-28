import React, { useState } from 'react';
import { Product } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-bold text-orange-950 group-hover:text-orange-700 transition-colors">
                    {title}
                </span>
                <span className={`text-2xl font-bold text-orange-900 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-700 leading-relaxed text-sm">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ProductDetails({ product }: { product: Product }) {
    const [activeImage, setActiveImage] = useState(0);

    const productImages = [
        { src: "/images/nutrition-info.png", alt: "Hershey's Milkshake Product" },
        { src: "/images/milkshake-nc-chocolate.png", alt: "Nutritional Information" }
    ];

    return (
        <div className="bg-white text-black py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Header Section */}
                <div className="text-center space-y-2 mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-orange-950 uppercase tracking-tight font-serif">
                        Hershey's Milkshake
                    </h2>
                    <p className="text-orange-800 font-bold tracking-widest text-sm uppercase">
                        Goodness of Added Calcium & Vitamins
                    </p>
                </div>

                {/* Details Section (Accordion + Image Gallery) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
                >
                    {/* Image Gallery Column */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Thumbnail Strip: Bottom on mobile (<768px), Left on desktop (>=768px) */}
                        <div className="flex flex-row md:flex-col gap-3 order-2 md:order-1 justify-center md:justify-start overflow-x-auto pb-2 md:pb-0">
                            {productImages.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 active:scale-95 ${activeImage === index
                                        ? 'border-orange-500 shadow-xl shadow-orange-200'
                                        : 'border-gray-100 hover:border-orange-200 bg-gray-50'
                                        }`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover p-1"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Image Display: Top on mobile, Right on desktop */}
                        <div className="flex-1 bg-orange-50/50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 flex items-center justify-center overflow-hidden order-1 md:order-2 group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImage}
                                    src={productImages[activeImage].src}
                                    alt={productImages[activeImage].alt}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    className="max-w-full h-[350px] md:h-[500px] object-contain drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="space-y-2">
                        <AccordionItem title="Product Details">
                            <p>Feel refreshed in the most deliciously chocolatey way.</p>
                        </AccordionItem>

                        <AccordionItem title="Ingredients">
                            <p>Water, Milk Solids (11%), Sugar, Cocoa Solids (0.75%), Mineral (Calcium carbonate), Emulsifiers (460(i), 466, 471), Flavors (Nature Identical Flavoring Substances), Sequestrant (339(ii)), Thickeners (415, 407), Edible Common Salt, Mineral (Zinc Sulphate), Vitamin E (Acetate), Vitamin A (Acetate), Vitamin D2 (Ergocalciferol), Vitamin B1 (Thiamine Chloride Hydrochloride), and Vitamin B2 (Riboflavin).</p>
                        </AccordionItem>

                        <AccordionItem title="Allergens">
                            <p>Contains Milk.</p>
                        </AccordionItem>

                        <AccordionItem title="Additional Label Information">
                            <p className="mb-2">Vegetarian Product</p>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 border border-green-600 p-0.5 flex items-center justify-center rounded-[1px]">
                                    <div className="w-full h-full bg-green-600 rounded-full"></div>
                                </div>
                                <p className="text-xs text-gray-500">
                                    The green filled circle inside the green outlined square is the Indian vegetarian mark denoting that this product contains no meat or egg sources. This is a 100% vegetarian product.
                                </p>
                            </div>
                        </AccordionItem>
                    </div>
                </motion.div>

                {/* Freshness Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-orange-50 rounded-[3rem] p-12 md:p-24 text-center space-y-8"
                >
                    <h3 className="text-3xl md:text-5xl font-bold text-orange-900">
                        {product.freshnessSection.title}
                    </h3>
                    <p className="text-xl text-orange-800/80 max-w-4xl mx-auto leading-relaxed">
                        {product.freshnessSection.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {product.stats.map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                                <div className="text-4xl font-black text-orange-500 mb-2">{stat.val}</div>
                                <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
