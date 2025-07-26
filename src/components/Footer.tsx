import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/verj_logo.svg"
                                    alt="Verj Labs Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold font-poppins">
                                Verj Labs
                            </span>
                        </div>
                        <p className="text-gray-400 font-lato mb-4 max-w-md">
                            A digital innovation studio where bold ideas become real products. 
                            We build what we believe and what you need.
                        </p>
                        <p className="text-gray-400 font-lato text-sm">
                            🍁 Proudly Canadian • Remote-first team
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
                        <ul className="space-y-2 font-lato">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-poppins">Get in Touch</h3>
                        <div className="space-y-2 font-lato">
                            <p className="text-gray-400">
                                <a href="mailto:verjlabs@gmail.com" className="hover:text-white transition-colors">
                                    verjlabs@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-400">
                                Let's build something great together
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 font-lato text-sm">
                        &copy; {new Date().getFullYear()} Verj Labs. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 space-x-6 font-lato text-sm">
                        <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;