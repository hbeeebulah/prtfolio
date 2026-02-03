import React from 'react';
import gdgLogo from '../assets/GDGL.jfif';
import mteLogo from '../assets/MTE.jfif';
import lsceLogo from '../assets/LSCE.jfif';

const Volunteer = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="border-b border-brand-100 pb-6">
                <h2 className="text-3xl font-bold text-brand-900">Volunteer Experience</h2>
                <p className="text-brand-600 mt-2">Giving back to the community and mentoring the next generation.</p>
            </div>

            <div className="grid gap-6">
                {/* Volunteer Item 1 */}
                <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-brand-200 flex-shrink-0">
                        <img src={gdgLogo} alt="GDG Lagos" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold text-gray-900">GDG Lagos</h3>
                            <span className="text-sm font-mono text-brand-500 bg-brand-50 px-3 py-1 rounded-full w-fit">2025 - Present</span>
                        </div>
                        <p className="font-medium text-brand-800 mb-3">GDG Sec ops Lagos Organizer</p>
                        <p className="text-gray-600 leading-relaxed">
                            Mentored over 50 students in full-stack web development. Conducted code reviews, hosted weekly Q&A sessions, and helped students debug complex React applications.
                        </p>
                    </div>
                </div>

                {/* Volunteer Item 2 */}
                <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-brand-200 flex-shrink-0">
                        <img src={mteLogo} alt="Muslim Tech Expo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold text-gray-900">Muslim Tech Expo</h3>
                            <span className="text-sm font-mono text-brand-500 bg-brand-50 px-3 py-1 rounded-full w-fit">2026</span>
                        </div>
                        <p className="font-medium text-brand-800 mb-3">Sponsorship Team</p>
                        <p className="text-gray-600 leading-relaxed">
                            Currently serving on the Sponsorship Team for the Muslim Tech Expo, where I bridge the gap between innovation and investment. I specialize in crafting high-impact sponsorship decks and managing strategic partnerships to ensure the success and sustainability of the ecosystem. I am the first point of contact for organizations looking to support the intersection of faith and technology.
                        </p>
                    </div>
                </div>

                {/* Volunteer Item 3 */}
                <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl flex-shrink-0 border border-brand-200">
                        <img src={lsceLogo} alt="LSCE" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold text-gray-900">Lagos Student Career Expo</h3>
                            <span className="text-sm font-mono text-brand-500 bg-brand-50 px-3 py-1 rounded-full w-fit">2022</span>
                        </div>
                        <p className="font-medium text-brand-800 mb-3">Community Manager</p>
                        <p className="text-gray-600 leading-relaxed">
                            I manage the community making sure the community members have have all the information tha is needed for future events and activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
