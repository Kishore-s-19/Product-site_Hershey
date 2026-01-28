"use client";
import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Product } from '@/data/products';
import ProductTextOverlays from './ProductTextOverlays';

interface ProductBottleScrollProps {
    product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameCount = 120; // 0 to 119

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            setIsLoaded(false);
            const loadedImages: HTMLImageElement[] = [];
            const extension = product.imageExtension || 'webp';

            const promises = Array.from({ length: frameCount }).map((_, i) => {
                return new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = `${product.folderPath}/${i + 1}.${extension}`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        // Fallback or just resolve to avoid blocking everything (could look glitchy)
                        console.warn(`Failed to load image ${i + 1}`);
                        resolve();
                    }
                });
            });

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, [product]);

    // Draw frame
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Responsive Cover fit (Full Screen)
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth = canvasWidth;
        let drawHeight = canvasHeight;

        // If canvas is wider than image (landscape), we match width and crop height
        // If image is wider than canvas (portrait canvas), we match height and crop width
        // Wait, ratio = w/h. 
        // If canvasRatio > imgRatio: canvas is "more panoramic" than image. 
        // To cover, we must match Width. Height will be greater than canvas.
        if (canvasRatio > imgRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
        } else {
            // Canvas is taller/narrower than image.
            // To cover, we must match Height. Width will be greater than canvas.
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imgRatio;
        }

        const x = (canvasWidth - drawWidth) / 2;
        const y = (canvasHeight - drawHeight) / 2;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map 0-1 to 0-119
        const frameIndex = Math.min(
            frameCount - 1,
            Math.max(0, Math.floor(latest * frameCount))
        );

        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                if (isLoaded && images.length > 0) {
                    drawFrame(0);
                }
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize(); // Init
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]); // Redraw when loaded

    // Initial draw
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            drawFrame(0);
        }
    }, [isLoaded]);


    return (
        <div ref={containerRef} className="relative h-[500vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover pointer-events-none"
                />
                <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
