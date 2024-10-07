import { Link } from 'react-router-dom'; // Import Link
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const links = [
    { name: "Services", href: "#" },
    { name: "Process", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Work", href: "/ourWork" }, // This should lead to OurWork.jsx
    { name: "Contact", href: "/footer" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 sm:px-10 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm">
            <div className="flex items-center flex-1">
                <Link to="/">
                    <img src="logo.jpg" alt="Logo" className="w-12 sm:w-16 dark:invert" />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center flex-1 dark:text-white">
                {links.map(link => (
                    <Link 
                        to={link.href} 
                        key={link.name} 
                        className="text-lg sm:text-xl mx-2 sm:mx-4"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex justify-end flex-1 gap-2 items-center">
                <DarkModeToggle className="w-8 h-8 sm:w-11 sm:h-11"/>
                <button className="hidden sm:block border border-black rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-xl text-sm sm:text-base font-thin dark:bg-slate-800 dark:text-white">
                    Get a free estimate
                </button>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-black shadow-md md:hidden">
                    {links.map(link => (
                        <Link 
                            to={link.href} 
                            key={link.name} 
                            className="block py-2 px-4 text-lg dark:text-white border-b border-gray-200 dark:border-gray-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full text-left py-2 px-4 text-lg dark:text-white border-b border-gray-200 dark:border-gray-700">
                        Get a free estimate
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
