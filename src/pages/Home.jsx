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
                                company="Solana Student Africa"
                                duration="August 2025 - January 2025"
                                description={[
                                    "● Spearheaded the growth of the community from scratch to 1,000+ members, fostering high engagement within the Solana blockchain ecosystem across Africa.",
                                    "● Organized and executed educational initiatives, including workshops, hackathons, and virtual meetups to foster technical development.",
                                    "● Managed community communications and moderation on Discord, ensuring a positive and informative environment.",
                                    "● Collaborated with core Solana team members and external partners to secure resources and opportunities for community members.",
                                    "● Monitored and reported on key community metrics, such as active members, event attendance, and content engagement."
                                ]}
                            />
                            <ExperienceCard
                                type="community"
                                role="Community Manager"
                                company="Web3Afrika"
                                duration="Jun 2025 - Present"
                                description={[
                                    "● Managed a community of 2,000+ active builders and learners in a web3 ecosystem, fostering engagement and retention.",
                                    "● Designed and implemented a showcase program to streamline community support, enabling community members to showcase what they are building or working on.",
                                    "● Developed a structured onboarding process, including a reintroduction phase, leading to increased member participation.",
                                    "● Organized virtual events, workshops, and panel sessions to drive engagement and professional development."
                                ]}
                            />
                            <ExperienceCard
                                type="community"
                                role="Community Manager"
                                company="Kidsthatcode NG"
                                duration="September 2024 – Present"
                                description={[
                                    "● Cultivated and grew a vibrant online and offline community of students, parents, and educators passionate about coding.",
                                    "● Organized and promoted community events [e.g., coding challenges, webinars, parent information sessions], increasing engagement and program participation.",
                                    "● Connected members through curated introductions and personalized support, enhancing collaboration across diverse backgrounds.",
                                    "● Developed a comprehensive onboarding program to foster a welcoming environment and guide new members, boosting retention by 30%.",
                                    "● Analyzed community engagement metrics to refine strategies, resulting in sustained growth and satisfaction."
                                ]}
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
                                role="Senior Frontend Developer (Part time)"
                                company="Market Prime"
                                duration="June 2024 - June 2025"
                                link="https://github.com"
                                description={[
                                    "● Collaborate with the team to develop and maintain responsive user interfaces using React and JavaScript, improving overall website performance and user experience.",
                                    "● Assist in optimizing the website layout and functionality, enhancing accessibility and mobile responsiveness.",
                                    "● Participate in code reviews and implemented feedback to ensure high-quality standards in development."
                                ]}
                            />
                            <ExperienceCard
                                type="frontend"
                                role="Frontend Developer"
                                company="Querus Consults"
                                duration="April 2023 - February 2024"
                                link="https://github.com"
                                description={[
                                    "● Developed and launched customized WordPress websites for clients, ensuring their business requirements were met efficiently.",
                                    "● Integrated plugins and features to enhance website functionality and improve user interaction.",
                                    "● Worked closely with the design team to create visually appealing and functional websites, delivering projects within tight deadlines."
                                ]}
                            />

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
