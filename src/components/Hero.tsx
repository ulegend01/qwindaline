import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Twitter } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
            {/* Background Banner Effect */}
            <div className="absolute top-0 left-0 w-full h-[50vh] z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
                {/* Fallback pattern or image if banner loads */}
                <div className="w-full h-full relative opacity-40">
                    <Image
                        src="/banner.png"
                        alt="Banner"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-20 sm:mt-32">
                {/* Profile Avatar */}
                <div className="relative w-40 h-40 md:w-52 md:h-52 mb-8 rounded-full border-4 border-brand-blue shadow-[0_0_40px_rgba(59,130,246,0.3)] overflow-hidden animate-in fade-in zoom-in duration-700">
                    <Image
                        src="/profile-pic.png"
                        alt="Mr Qwindaline"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Text Content */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight animate-in slide-in-from-bottom-4 duration-700 delay-100 uppercase">
                    Ibekwe Victor <br />
                    <span className="text-2xl md:text-3xl font-bold text-gray-300 block mt-2">("Mr Qwindaline")</span>
                </h1>

                <div className="text-xl md:text-2xl font-bold text-brand-blue mb-6 tracking-wide uppercase max-w-4xl">
                    Web3 Ambassador • Community Manager • Project Lead
                </div>

                <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-6 animate-in slide-in-from-bottom-5 duration-700 delay-200 leading-relaxed">
                    I work as a Web3 ambassador, mini-KOL, community moderator, and content creator. I help projects with community growth, engagement, content writing, promotions, and user education.
                </p>

                <p className="max-w-3xl text-base md:text-lg text-gray-500 mb-10 animate-in slide-in-from-bottom-5 duration-700 delay-200 leading-relaxed">
                    Currently studying <strong>Project Management Technology</strong> at the Federal University of Technology, Owerri (FUTO). Deeply interested in building, supporting, and growing meaningful blockchain projects. I value consistency, responsibility, and long-term impact over hype.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-6 duration-700 delay-300">
                    <Link
                        href="#work"
                        className="px-8 py-4 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2"
                    >
                        View Work Experience <ArrowRight className="w-5 h-5" />
                    </Link>

                    <a
                        href="https://x.com/Mrkwindaline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                    >
                        Connect on X <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
