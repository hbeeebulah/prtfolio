import React from 'react';

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
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl flex-shrink-0 border border-brand-200">
                        TB
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold text-gray-900">Tech Bootcamps</h3>
                            <span className="text-sm font-mono text-brand-500 bg-brand-50 px-3 py-1 rounded-full w-fit">2023 - Present</span>
                        </div>
                        <p className="font-medium text-brand-800 mb-3">Lead Mentor</p>
                        <p className="text-gray-600 leading-relaxed">
                            Mentored over 50 students in full-stack web development. Conducted code reviews, hosted weekly Q&A sessions, and helped students debug complex React applications.
                        </p>
                    </div>
                </div>

                {/* Volunteer Item 2 */}
                <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl flex-shrink-0 border border-brand-200">
                        OS
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold text-gray-900">Open Source Collective</h3>
                            <span className="text-sm font-mono text-brand-500 bg-brand-50 px-3 py-1 rounded-full w-fit">2024</span>
                        </div>
                        <p className="font-medium text-brand-800 mb-3">Contributor & Maintainer</p>
                        <p className="text-gray-600 leading-relaxed">
                            Contributed documentation and accessibility fixes to key open-source libraries. Managed community issues and guided first-time contributors through the PR process.
                        </p>
                    </div>
                </div>

                {/* Volunteer Item 3 */}
                <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl flex-shrink-0 border border-brand-200">
                        C
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold text-gray-900">Community Con</h3>
                            <span className="text-sm font-mono text-brand-500 bg-brand-50 px-3 py-1 rounded-full w-fit">2022</span>
                        </div>
                        <p className="font-medium text-brand-800 mb-3">Event Organizer</p>
                        <p className="text-gray-600 leading-relaxed">
                            Helped organize specific tracks for a local tech conference. Coordinated with speakers and managed the on-site logistics for over 200 attendees.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
