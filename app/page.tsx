"use client";
import React, { useEffect } from 'react';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import ProductDetails from '@/components/ProductDetails';
import BuyNow from '@/components/BuyNow';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const product = products[0]; // Always select the first (and only) product

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.setProperty('--product-gradient', product.gradient);
  }, [product]);

  return (
    <main className="min-h-screen text-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
        >
          {/* Scroll Experience */}
          <ProductBottleScroll product={product} />

          {/* Content Sections */}
          <ProductDetails product={product} />
          <BuyNow product={product} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
