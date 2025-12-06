import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="text-4xl text-gold font-serif font-bold">Z</div>
                        <div>
                            <span className="block font-serif font-bold text-2xl tracking-wide">ZAHIDJEE</span>
                            <span className="block text-[10px] text-gold uppercase tracking-[0.2em]">
                                Textile Mills Ltd
                            </span>
                        </div>
                    </div>
                    <p className="text-gray-400 max-w-sm">
                        Weaving excellence since 1987. A testament to Pakistan&apos;s industrial potential and global
                        textile dominance.
                    </p>
                </div>

                <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/divisions" className="hover:text-white transition-colors">
                                Divisions
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-white transition-colors">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/investors" className="hover:text-white transition-colors">
                                Investor Relations
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest mb-6">Contact</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>
                            <i className="fas fa-map-marker-alt w-5" /> Lahore, Pakistan
                        </li>
                        <li>
                            <i className="fas fa-phone w-5" /> +92 42 35777290
                        </li>
                        <li>
                            <i className="fas fa-envelope w-5" /> mis@zahidjee.com.pk
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-6">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-xs text-gray-500 uppercase tracking-widest">
                &copy; 2025 Zahidjee Textile Mills Limited. All Rights Reserved.
            </div>
        </footer>
    );
}
