import { Medal, Star, Trophy, Users, TrendingUp, Rocket, Twitter, Send, Github, Disc } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Achievements = () => {
    const milestones = [
        { year: "Growth", title: "100+ Users Onboarded", desc: "Directly onboarded users to Cede Hub", icon: <Users className="w-5 h-5" /> },
        { year: "Impact", title: "Presale Success", desc: "Drove success through strong engagement", icon: <TrendingUp className="w-5 h-5" /> },
        { year: "Retention", title: "Community Education", desc: "Impacted user knowledge & confidence", icon: <Star className="w-5 h-5" /> },
        { year: "Current", title: "Project Manager", desc: "Studying PM Technology at FUTO", icon: <Rocket className="w-5 h-5" /> },
    ];
    // Re-import Rocket locally if needed or just use Trophy for all

    return (
        <section id="achievements" className="py-20 relative z-10 container mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">MILESTONES & RECOGNITION</h2>

            <div className="max-w-3xl w-full space-y-8">
                {milestones.map((m, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-brand-blue flex items-center justify-center text-brand-blue z-10 relative group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                {m.icon}
                            </div>
                            {i !== milestones.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-brand-blue to-transparent my-2" />}
                        </div>
                        <div className="pt-2">
                            <span className="text-brand-blue font-mono text-sm mb-1 block">{m.year}</span>
                            <h3 className="text-xl font-bold text-white">{m.title}</h3>
                            <p className="text-gray-400">{m.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Simple Footer Component inline
export const Footer = () => {
    return (
        <footer id="contact" className="py-12 border-t border-white/10 bg-black text-center">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">
                <h3 className="text-2xl font-bold">Connect with <span className="text-brand-blue">Mr Qwindaline</span></h3>

                <div className="flex gap-6">
                    <a href="https://x.com/Mrkwindaline" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-brand-blue hover:text-white transition-all"><Twitter size={24} /></a>
                    <a href="https://t.me/Qwindaline" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-brand-blue hover:text-white transition-all"><Send size={24} /></a>
                    <a href="https://discordapp.com/users/qwindaline" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-brand-blue hover:text-white transition-all group" title="Discord: qwindaline">
                        {/* Discord Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2 group-hover:text-white">
                            <path d="M7.5 7H16.5" /><path d="M12 7l-3 5" /><path d="M12 7l3 5" /><circle cx="12" cy="12" r="10" /><path d="M12 16v.01" />
                        </svg>
                    </a>
                </div>



                <div className="text-gray-600 text-sm mt-8 flex flex-col items-center gap-2">
                    <p>© 2025 Mr Qwindaline. All rights reserved.</p>
                    <p className="text-xs text-gray-700">
                        Built by <a href="https://x.com/ulegend01" target="_blank" className="hover:text-brand-blue transition-colors font-medium">ulegend</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};



export default Achievements;
