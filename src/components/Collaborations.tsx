import Image from "next/image";

const Collaborations = () => {
    const partners = [
        { name: "CedeHub", logo: "/cedehub-logo.png", desc: "Trade-to-Earn Product", link: "https://cedehub.io" },
        { name: "HAiO", logo: "/haio-logo.png", desc: "AI Music Platform", link: "https://x.com/haio_official" },
        { name: "ulegend", logo: "/ulegend.png", desc: "Web3 Marketer & Builder", link: "https://x.com/ulegend01" },
    ];

    return (
        <section id="collabs" className="py-20 bg-background relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Trusted By <span className="text-brand-blue">Industry Leaders</span></h2>
                    <p className="text-gray-400">Collaborating with top-tier Web3 protocols and experts.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {partners.map((partner, index) => (
                        <a
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-8 border border-white/5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30"
                        >
                            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden flex items-center justify-center bg-black border border-white/5">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-1">{partner.name}</h3>
                            <p className="text-sm text-center text-gray-400 group-hover:text-brand-blue transition-colors">{partner.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collaborations;
