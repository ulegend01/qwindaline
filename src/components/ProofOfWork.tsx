'use client';

import { ExternalLink, Rocket, Users, TrendingUp, Info } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Define Project Interface
interface Project {
    title: string;
    role: string;
    period: string; // e.g., "Sept 2025 - Dec 2025"
    status: "Active" | "Not Active" | "Completed" | "Advisor";
    link: string;
    logo: string;
    contributions: string[]; // Bullet points
    colSpan?: string; // Made optional, defaults to col-span-1 logic
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`relative group h-96 rounded-3xl overflow-hidden border border-white/10 hover:border-brand-blue/50 transition-all duration-500 bg-zinc-900/50 md:col-span-1`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={() => setIsExpanded(!isExpanded)} // Tap to toggle on mobile
        >
            {/* Background / Default View */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 ${isExpanded ? 'opacity-10 blur-sm scale-110' : 'opacity-100 scale-100'}`}>
                <div className="w-24 h-24 relative mb-6 rounded-2xl overflow-hidden shadow-2xl bg-black/50 p-2 border border-white/5">
                    {/* Fallback to text icon if logo fails or use generic */}
                    <Image src={project.logo} alt={project.title} fill className="object-contain" />
                </div>
                <h3 className="text-3xl font-black text-white text-center uppercase tracking-tighter mb-2">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${project.status === 'Active' ? 'border-brand-blue text-brand-blue bg-brand-blue/10' : 'border-gray-600 text-gray-400 bg-gray-600/10'}`}>
                    {project.status}
                </span>
            </div>

            {/* Hover/Expanded View Overlay */}
            <div className={`absolute inset-0 bg-black/90 backdrop-blur-md p-8 flex flex-col justify-center transition-all duration-500 ease-out ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-brand-blue text-sm font-mono">{project.role}</p>
                        <p className="text-gray-500 text-xs font-mono">{project.period}</p>
                    </div>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-brand-blue rounded-full text-white hover:bg-brand-blue-hover transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>

                <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Contributions</p>
                    <ul className="space-y-2">
                        {project.contributions.map((point, i) => (
                            <li key={i} className="text-sm text-gray-300 flex gap-2 leading-relaxed">
                                <span className="text-brand-blue mt-1.5">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ProofOfWork = () => {
    // Sorted projects: Active first, then Others
    const projects: Project[] = [
        {
            title: "MinerFun",
            role: "Raider / Community Participant",
            period: "Early 2025 – Present",
            status: "Active",
            link: "https://x.com/miner_fun2025?s=21",
            logo: "/minerfun-logo.jpg",
            contributions: [
                "Actively participated in community raids and events to support project engagement.",
                "Contributed to community growth and activity, helping increase visibility and user interaction.",
                "Collaborated with other community members to drive adoption and participation in project initiatives."
            ]
        },
        {
            title: "Cede Hub",
            role: "Community Manager",
            period: "Sep 2025 – Dec 2025",
            status: "Not Active",
            link: "https://cedehub.io",
            logo: "/cedehub-logo.png",
            contributions: [
                "Successfully onboarded 100+ users into Cede Hub’s Trade-to-Earn product.",
                "Drove consistent community engagement, fostering active discussions and participation.",
                "Guided users on how to trade, understand the platform, and navigate features effectively.",
                "Developed strong human relations and communication skills through direct interaction with a diverse user base.",
                "Acted as a bridge between users and the project, ensuring clarity, support, and smooth onboarding.",
            ]
        },
        {
            title: "Ave.ai",
            role: "Ambassador & Content Contributor",
            period: "3-Month Engagement (2025)",
            status: "Not Active",
            link: "https://x.com/aveaiglobal?s=21",
            logo: "/ave-logo.jpg",
            contributions: [
                "Invited by the Ave.ai team as a paid contributor and ambassador based on content quality and page activity.",
                "Engaged consistently with official posts through quotes, replies, and original commentary.",
                "Wrote educational threads and content explaining Ave.ai’s product, features, and updates.",
                "Created simplified content to help users understand the platform without confusion.",
                "Helped attract and onboard users, contributing to increased platform activity and awareness."
            ]
        },
        {
            title: "TFSC",
            role: "Ambassador",
            period: "2024 – 2025",
            status: "Not Active",
            link: "https://x.com/tfscchain",
            logo: "/tfsc-logo.jpg",
            contributions: [
                "Created educational and promotional content on Medium and X (Twitter) to increase awareness of TFSC.",
                "Helped communicate project features, updates, and initiatives to the community.",
                "Supported community growth through consistent content creation and engagement.",
                "Contributed to the project’s visibility and outreach in the Web3 space."
            ]
        },
        {
            title: "Marinade Finance",
            role: "Campaign Content Writer",
            period: "1-Month Campaign (2025)",
            status: "Completed",
            link: "https://x.com/marinadefinance",
            logo: "/marinade-logo.jpg",
            contributions: [
                "Selected as a content writer during a community content campaign.",
                "Delivered Twitter/X threads and written content explaining Marinade Finance, its core features, and use cases.",
                "Simplified Solana staking concepts to help users clearly understand how Marinade works.",
                "Created educational content highlighting the project’s roadmap and future direction.",
                "Contributed to increased awareness and clarity around Marinade Finance for new users."
            ]
        },
        {
            title: "SnapX",
            role: "Ambassador & Content Writer",
            period: "June 2025 – Sep 2025",
            status: "Not Active",
            link: "https://x.com/snapx_co?s=21",
            logo: "/snapx-logo.jpg",
            contributions: [
                "Created simple, user-friendly content explaining SnapX’s features and core functionality.",
                "Wrote clear updates for new feature releases, reducing repeated questions from users.",
                "Helped improve user understanding and onboarding through educational content.",
                "Successfully onboarded 30 active traders to the SnapX Telegram trading bot.",
                "Acted as a communication bridge between the product and users."
            ]
        },
        {
            title: "TDX",
            role: "Community Engager / Chat Engager",
            period: "June 2024 – June 2025",
            status: "Not Active",
            link: "https://x.com/tdxbiz?s=21",
            logo: "/tdx-logo.jpg",
            contributions: [
                "Drove consistent community engagement through active participation and conversations.",
                "Helped users understand the project’s concepts, features, and updates.",
                "Ensured the community remained active with regular interactions, discussions, and activities.",
                "Supported a positive and welcoming environment for both new and existing members."
            ]
        },
        {
            title: "HAiO",
            role: "Ambassador",
            period: "April 2025 – August 2025",
            status: "Not Active",
            link: "https://x.com/haio_official?s=21",
            logo: "/haio-logo-new.jpg",
            contributions: [
                "Created user-friendly content explaining HAiO’s AI music platform and features.",
                "Actively tested the product and provided constructive feedback to the team.",
                "Invited and onboarded users to listen to AI-generated music and create playlists.",
                "Helped drive community awareness, engagement, and platform adoption.",
                "Developed strong communication and user education skills through hands-on guidance."
            ]
        }
    ];

    return (
        <section id="work" className="py-24 bg-background relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
                        Proof of <span className="text-brand-blue">Work</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        Tap or hover on a card to reveal detailed contributions and impact stats.
                    </p>

                    {/* Legend / Filter Placeholder could go here */}
                    <div className="flex justify-center gap-4 text-sm font-mono text-gray-500">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-blue rounded-full" /> Active</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-600 rounded-full" /> Historical</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProofOfWork;
