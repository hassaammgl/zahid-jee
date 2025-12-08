import Link from "next/link";

export default function ProductsCTA() {
    return (
        <section className="py-20 bg-navy">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif font-bold text-white mb-6">Interested in our products?</h2>
                <p className="text-gray-400 mb-8">
                    Contact our sales team for inquiries, quotes, or catalog requests.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-10 py-4 border border-gold text-gold font-bold tracking-widest uppercase hover:bg-gold hover:text-navy transition-colors duration-300"
                >
                    Get a Quote
                </Link>
            </div>
        </section>
    );
}
