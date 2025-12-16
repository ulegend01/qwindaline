import Link from "next/link";
import { Twitter, Send } from "lucide-react"; // Using Lucid icons for generic, will use custom SVGs or text if specific branding needed but Lucid is good for generic

const Header = () => {
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Proof of Work", href: "#work" },
        { name: "Achievements", href: "#achievements" },
        { name: "Collaborations", href: "#collabs" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                            MR <span className="text-brand-blue">QWINDALINE</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-brand-blue transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Socials / Contact */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://x.com/Mrkwindaline"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://t.me/Qwindaline"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                        >
                            <Send size={20} />
                        </a>
                        <Link
                            href="#contact"
                            className="ml-4 px-4 py-2 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-full transition-all text-sm font-bold uppercase tracking-wide"
                        >
                            Let's Build
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Minimal placeholder for now */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white p-2">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
