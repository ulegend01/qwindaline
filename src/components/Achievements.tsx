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
                        {/* Official Discord Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 127.14 96.36" fill="currentColor" className="w-6 h-6 group-hover:text-white">
                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c1.25-23.6-3.26-47.56-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
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
