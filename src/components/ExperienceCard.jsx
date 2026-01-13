import React, { useState } from 'react';
import { Github, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const ExperienceCard = ({ role, company, duration, description, type, link }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isFrontend = type === 'frontend';

    const descriptionContent = Array.isArray(description) ? (
        <ul className="space-y-2 list-none">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    ) : (
        <div className="whitespace-pre-line">{description}</div>
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div
                className={`p-6 flex items-start gap-5 ${!isFrontend ? 'cursor-pointer select-none' : ''}`}
                onClick={() => !isFrontend && setIsOpen(!isOpen)}
            >
                {/* Logo Placeholder */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold text-2xl border border-brand-200 group-hover:scale-105 transition-transform">
                        {company.charAt(0).toUpperCase()}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-700 transition-colors">{role}</h3>
                            <p className="text-brand-600 font-medium">{company}</p>
                        </div>

                        {/* Frontend: GitHub Link */}
                        {isFrontend && link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
                                title="View Code on GitHub"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={28} />
                            </a>
                        )}

                        {/* Community: Expand Toggle */}
                        {!isFrontend && (
                            <div className={`text-brand-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                <ChevronDown size={24} />
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-3 font-mono">
                        <Calendar size={14} />
                        <span>{duration}</span>
                    </div>
                </div>
            </div>

            {/* Expandable Description for Community Manager */}
            {!isFrontend && (
                <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 mx-6 mt-2">
                            {descriptionContent}
                        </div>
                    </div>
                </div>
            )}

            {/* Always Visible Description for Frontend */}
            {isFrontend && (
                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 mx-6 mt-2">
                    {descriptionContent}
                </div>
            )}
        </div>
    );
};

export default ExperienceCard;
