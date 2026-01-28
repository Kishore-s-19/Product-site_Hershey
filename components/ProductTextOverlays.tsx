"use client";
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Product } from '@/data/products';

interface Props {
    product: Product;
    scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, scrollYProgress }: Props) {
    // Section 1
    const opacity1 = useTransform(scrollYProgress, [0.01, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.01, 0.25], [100, -100]);

    // Section 2
    const opacity2 = useTransform(scrollYProgress, [0.26, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.26, 0.5], [100, -100]);

    // Section 3
    const opacity3 = useTransform(scrollYProgress, [0.51, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.51, 0.75], [100, -100]);

    // Section 4
    const opacity4 = useTransform(scrollYProgress, [0.76, 0.85, 0.95, 0.99], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.76, 0.99], [100, -100]);

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center">

            {/* Section 1 */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-white drop-shadow-lg leading-none">
                    {product.section1.title}
                </h2>
                <p className="text-2xl md:text-3xl font-light text-white/90 drop-shadow-md">
                    {product.section1.subtitle}
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg leading-none">
                    {product.section2.title}
                </h2>
                <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl drop-shadow-md">
                    {product.section2.subtitle}
                </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg leading-none">
                    {product.section3.title}
                </h2>
                <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl drop-shadow-md">
                    {product.section3.subtitle}
                </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg leading-none">
                    {product.section4.title}
                </h2>
                <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl drop-shadow-md">
                    {product.section4.subtitle}
                </p>
            </motion.div>

        </div>
    );
}
