import Link from "next/link";
import Image from "next/image";

export default function DivisionsSection() {
    return (
        <section className="py-24 bg-navy text-white relative bg-pattern">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-gold font-bold uppercase tracking-widest text-sm">
                        Vertical Integration
                    </span>
                    <h2 className="text-5xl font-serif font-bold mt-4">Our Core Divisions</h2>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <Link
                        href="/divisions"
                        className="group relative h-96 overflow-hidden bg-gray-900 rounded-sm hover:-translate-y-2 transition-transform duration-500"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1612419983995-1c5c50c53443?q=80&w=800"
                            alt="Spinning"
                            width={800}
                            height={500}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end border border-white/10 group-hover:border-gold transition-colors">
                            <i className="fas fa-dharmachakra text-4xl text-gold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif font-bold">Spinning</h3>
                            <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Premium yarn production
                            </p>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link
                        href="/divisions"
                        className="group relative h-96 overflow-hidden bg-gray-900 rounded-sm hover:-translate-y-2 transition-transform duration-500"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1542059765-86db2542a223?q=80&w=800"
                            alt="Weaving"
                            width={800}
                            height={500}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end border border-white/10 group-hover:border-gold transition-colors">
                            <i className="fas fa-scroll text-4xl text-gold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif font-bold">Weaving</h3>
                            <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                State-of-the-art looms
                            </p>
                        </div>
                    </Link>

                    {/* Card 3 */}
                    <Link
                        href="/divisions"
                        className="group relative h-96 overflow-hidden bg-gray-900 rounded-sm hover:-translate-y-2 transition-transform duration-500"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1550963295-018d0b005391?q=80&w=800"
                            alt="Finishing"
                            width={800}
                            height={500}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end border border-white/10 group-hover:border-gold transition-colors">
                            <i className="fas fa-tshirt text-4xl text-gold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif font-bold">Finishing</h3>
                            <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Export quality stitching
                            </p>
                        </div>
                    </Link>

                    {/* Card 4 */}
                    <Link
                        href="/divisions"
                        className="group relative h-96 overflow-hidden bg-gray-900 rounded-sm hover:-translate-y-2 transition-transform duration-500"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800"
                            alt="Power"
                            width={800}
                            height={500}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end border border-white/10 group-hover:border-gold transition-colors">
                            <i className="fas fa-bolt text-4xl text-gold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif font-bold">Power</h3>
                            <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Self-sufficient generation
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
