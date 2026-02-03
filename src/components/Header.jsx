import React from 'react';
import { Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import profileImage from '../assets/habibi.jpg';

const Header = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="py-8 container mx-auto px-4 border-b border-brand-50 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                {/* Profile & Contact Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-500 shadow-xl flex-shrink-0">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-400px object-cover"
                        />
                    </div>

                    <div>
                        <Link to="/" className="text-4xl font-bold text-brand-900 mb-2 hover:text-brand-600 transition-colors block">
                            Habeeb Ajibola
                        </Link>
                        <p className="text-brand-600 font-medium text-lg mb-4">Community Manager & Frontend Developer</p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-500 text-sm">
                            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                                <Mail size={16} />
                                <a href="mailto:hbeebulah@gmail.com">hbeebulah@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                                <Phone size={16} />
                                <span>+2348093968816</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex gap-2 bg-brand-50 p-1.5 rounded-xl border border-brand-100">
                    <Link
                        to="/"
                        className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all
               ${isActive('/')
                                ? 'bg-white text-brand-600 shadow-sm ring-1 ring-black/5'
                                : 'text-brand-400 hover:text-brand-600 hover:bg-white/50'
                            }`}
                    >
                        Experience
                    </Link>
                    <Link
                        to="/volunteer"
                        className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all
               ${isActive('/volunteer')
                                ? 'bg-white text-brand-600 shadow-sm ring-1 ring-black/5'
                                : 'text-brand-400 hover:text-brand-600 hover:bg-white/50'
                            }`}
                    >
                        Volunteer
                    </Link>
                    <Link
                        to="/contact"
                        className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all
               ${isActive('/contact')
                                ? 'bg-white text-brand-600 shadow-sm ring-1 ring-black/5'
                                : 'text-brand-400 hover:text-brand-600 hover:bg-white/50'
                            }`}
                    >
                        Contact
                    </Link>
                </nav>

            </div>
        </header>
    );
};

export default Header;
