import React, { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { LayoutGrid, Code, Users } from 'lucide-react';

const Home = () => {
    const [activeTab, setActiveTab] = useState('community'); // 'community' or 'frontend'

    return (
        <div className="max-w-5xl mx-auto">

            {/* Toggle Section */}
            <div className="flex justify-center mb-12">
                <div className="bg-brand-50 p-1.5 rounded-2xl flex gap-2 border border-brand-100 shadow-inner">
                    <button
                        onClick={() => setActiveTab('community')}
                        className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300
              ${activeTab === 'community'
                                ? 'bg-brand-500 text-white shadow-md'
                                : 'text-brand-400 hover:text-brand-600 hover:bg-brand-100/50'}
            `}
                    >
                        <Users size={20} />
                        <span>Community Manager</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('frontend')}
                        className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300
              ${activeTab === 'frontend'
                                ? 'bg-brand-500 text-white shadow-md'
                                : 'text-brand-400 hover:text-brand-600 hover:bg-brand-100/50'}
            `}
                    >
                        <Code size={20} />
                        <span>Frontend Developer</span>
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="animate-fade-in space-y-8">
                {activeTab === 'community' ? (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-8 text-brand-900 border-l-4 border-brand-500 pl-4 py-1">
                            <h2 className="text-2xl font-bold">Community Experience</h2>
                        </div>

                        <div className="grid gap-6">
                            <ExperienceCard
                                type="community"
                                role="Community Lead"
                                company="TechHub Global"
                                duration="Jan 2023 - Present"
                                description="Spearheaded community growth strategies resulting in a 200% increase in active members. Organized weekly hybrid events, managed a team of moderators, and implemented a new onboarding workflow to improve retention."
                            />
                            <ExperienceCard
                                type="community"
                                role="Social Media Manager"
                                company="StartUp Inc"
                                duration="Jun 2021 - Dec 2022"
                                description="Curated high-quality content for Twitter and LinkedIn, growing the follower base from 1k to 10k in 18 months. Handled crisis communication effectively during platform downtimes and engaged with key industry influencers."
                            />
                            <ExperienceCard
                                type="community"
                                role="Event Coordinator"
                                company="DevConference"
                                duration="2020 - 2021"
                                description="Coordinated logistics for virtual and in-person developer conferences. Managed speaker schedules, sponsor relations, and volunteer teams to ensure seamless event execution."
                            />
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-8 text-brand-900 border-l-4 border-brand-500 pl-4 py-1">
                            <h2 className="text-2xl font-bold">Frontend Projects</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ExperienceCard
                                type="frontend"
                                role="E-commerce Dashboard"
                                company="Personal Project"
                                duration="2024"
                                link="https://github.com"
                                description="A responsive dashboard built with React and Tailwind CSS. Features include real-time data visualization, dark mode, and user authentication using Firebase."
                            />
                            <ExperienceCard
                                type="frontend"
                                role="Portfolio Site"
                                company="Client Work"
                                duration="2023"
                                link="https://github.com"
                                description="Designed and developed a minimalist portfolio for a photographer. Focused on performance optimization, achieving a 99 Lighthouse score, and implemented lazy loading for images."
                            />
                            <ExperienceCard
                                type="frontend"
                                role="Task Management App"
                                company="Open Source"
                                duration="2023"
                                link="https://github.com"
                                description="Contributed to a React-based task manager. Implemented drag-and-drop functionality using dnd-kit and fixed critical accessibility bugs."
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
