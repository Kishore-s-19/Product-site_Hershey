export default function Footer() {
    return (
        <footer className="bg-[#8D6E63] text-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <img src="/images/logo.webp" alt="Hershey's Logo" className="h-12 w-auto mb-2" />
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The future of freshness. Cold-pressed goodness delivered straight to your door.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Shop</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Order Now</li>
                        <li className="hover:text-white cursor-pointer">Bundles</li>
                        <li className="hover:text-white cursor-pointer">Subscriptions</li>
                        <li className="hover:text-white cursor-pointer">Gift Cards</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Support</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">FAQ</li>
                        <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
                        <li className="hover:text-white cursor-pointer">Contact Us</li>
                        <li className="hover:text-white cursor-pointer">Terms of Service</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Stay Fresh</h4>
                    <p className="text-gray-400 text-sm">Join our newsletter for exclusive offers.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-[#5D4037] border-none rounded-lg px-4 py-2 text-white placeholder-white/60 focus:ring-2 focus:ring-orange-300 outline-none w-full"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                            →
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center space-y-4">
                <p className="text-white/40 text-xs">
                    © 2024 Hershey. All rights reserved.
                </p>
                <p className="text-white/30 text-[10px] leading-relaxed max-w-2xl mx-auto italic">
                    Disclaimer: This is a non-commercial, educational UI/UX project created for learning purposes. All brand names, logos, and product images are used solely for demonstration and are not affiliated with or endorsed by Hershey’s.
                </p>
            </div>
        </footer>
    );
}
