import { Product } from '@/data/products';
import { motion } from 'framer-motion';

export default function BuyNow({ product }: { product: Product }) {
    return (
        <div className="bg-white text-black py-24 px-6 pb-48 relative z-10">
            <div className="max-w-4xl mx-auto bg-orange-50 rounded-[2.5rem] p-8 md:p-16 text-orange-900 overflow-hidden relative">
                {/* Background gradient blob */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none"
                    style={{ background: product.themeColor }}
                />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-2">Order {product.name}</h2>
                            <p className="text-orange-700">{product.subName}</p>
                        </div>

                        <div className="space-y-4">
                            {product.buyNowSection.processingParams.map((param, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-600" />
                                    <span className="text-orange-800">{param}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-orange-200">
                            <p className="text-sm text-orange-600 mb-2">Delivery Partner Promise:</p>
                            <p className="text-orange-700 text-sm leading-relaxed">
                                {product.buyNowSection.deliveryPromise}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between space-y-8">
                        <div className="bg-white/80 p-6 rounded-2xl border border-orange-200 shadow-sm">
                            <div className="text-sm text-orange-600 mb-1">Price per bottle</div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-orange-900">{product.buyNowSection.price}</span>
                                <span className="text-orange-500 text-sm">{product.buyNowSection.unit}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                className="w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all hover:scale-105 active:scale-95"
                                style={{ background: product.themeColor }}
                            >
                                Add to Cart
                            </button>
                            <p className="text-center text-xs text-orange-500">
                                {product.buyNowSection.returnPolicy}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
