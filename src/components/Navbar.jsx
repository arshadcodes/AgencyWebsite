import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const links = [
    { name: "Services", href: "#" },
    { name: "Process", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Work", href: "#" },
    { name: "Contact", href: "#" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm">
            <div className="flex items-center flex-1">
                <img src="logo.jpg" alt="Logo" className="w-16 dark:invert" />
            </div>
            {/* Hamburger Icon for Mobile */}
            <div className="flex items-center justify-end flex-1 lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white focus:outline-none">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            {/* Desktop Menu */}

            <div className="hidden lg:flex justify-center flex-1 dark:text-white">
                {links.map(link => (
                    <a href={link.href} key={link.name} className="text-xl mx-4">
                        {link.name}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex justify-end flex-1 gap-2">
                <DarkModeToggle className="w-11 h-3" />
                <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
                    Get a free estimate
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md">
                    {links.map(link => (
                        <a
                            href={link.href}
                            key={link.name}
                            className="block text-lg text-center py-4 border-b dark:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex justify-center py-4">
                        <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
                            Get a free estimate
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
