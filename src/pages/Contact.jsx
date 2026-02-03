import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        // REPLACE THESE ID's WITH YOUR ACTUAL EMAILJS IDS
        // Instructions will be provided on how to get these
        const SERVICE_ID = 'service_c3n0mxi';
        const TEMPLATE_ID = 'template_yd2mfkd';
        const PUBLIC_KEY = 'Sv5ctoX4NwS-Yr2hd';

        // Check if placeholders are still present to warn the user (optional dev helper)
        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            setStatus('error');
            setErrorMessage('Please configure your EmailJS Service ID, Template ID, and Public Key in the code.');
            return;
        }

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus('success');
                    form.current.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                },
                (error) => {
                    setStatus('error');
                    setErrorMessage('Failed to send message. Please try again later.');
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="border-b border-brand-100 pb-6 mb-8 text-center md:text-left">
                <h2 className="text-3xl font-bold text-brand-900">Get in Touch</h2>
                <p className="text-brand-600 mt-2">
                    Have a project in mind or want to collaborate? Send me a message.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-brand-100 p-8">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">

                    {/* Name Field (Recommended for Context) */}
                    <div>
                        <label htmlFor="user_name" className="block text-sm font-semibold text-brand-800 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-brand-50/30"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="user_email" className="block text-sm font-semibold text-brand-800 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-400" size={18} />
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-brand-50/30"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="user_phone" className="block text-sm font-semibold text-brand-800 mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-400" size={18} />
                                <input
                                    type="tel"
                                    name="user_phone"
                                    id="user_phone"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-brand-50/30"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-brand-800 mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-brand-50/30 resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-full py-4 rounded-lg font-bold text-white shadow-md transition-all flex items-center justify-center gap-2
                            ${status === 'sending'
                                ? 'bg-brand-400 cursor-not-allowed'
                                : 'bg-brand-600 hover:bg-brand-700 hover:shadow-lg active:scale-[0.99]'
                            }`}
                    >
                        {status === 'sending' ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Send Message
                            </>
                        )}
                    </button>

                    {/* Success/Error Messages */}
                    {status === 'success' && (
                        <div className="p-4 rounded-lg bg-green-50 text-green-700 border border-green-200 flex items-center gap-3 animate-fade-in">
                            <CheckCircle size={20} />
                            <p>Message sent successfully! I'll get back to you soon.</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200 flex items-center gap-3 animate-fade-in">
                            <AlertCircle size={20} />
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
