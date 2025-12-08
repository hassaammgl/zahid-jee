import Link from "next/link";

export default function SustainabilitySection() {
    return (
        <section className="py-24 bg-slate">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-serif font-bold text-navy mb-6">Sustainable Growth</h2>
                        <p className="text-gray-600 mb-6">
                            At Zahidjee, we believe in weaving a greener future. Our commitment to environmental
                            responsibility is reflected in our state-of-the-art power generation and waste management
                            protocols.
                        </p>
                        <Link
                            href="/media"
                            className="text-gold font-bold uppercase tracking-wider text-sm border-b-2 border-gold pb-1 inline-block hover:text-navy hover:border-navy transition-all"
                        >
                            Read CSR Report
                        </Link>
                    </div>
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                            <i className="fas fa-leaf text-3xl text-gold mb-4" />
                            <h3 className="text-xl font-bold text-navy mb-2">Eco-Friendly</h3>
                            <p className="text-gray-500 text-sm">
                                Minimizing carbon footprint through efficient energy use.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                            <i className="fas fa-hand-holding-heart text-3xl text-gold mb-4" />
                            <h3 className="text-xl font-bold text-navy mb-2">Social Responsibility</h3>
                            <p className="text-gray-500 text-sm">
                                Empowering our workforce and supporting local communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
