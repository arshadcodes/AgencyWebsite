const links = [
    { name: "Services", href: "#" },
    { name: "Process", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Work", href: "#" },
    { name: "Contact", href: "#" },
]
import DarkModeToggle from "./DarkModeToggle";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(); // Reference for the mobile menu
    

    // Close menu when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Add event listener when the menu is open
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

        return (
            <nav className="flex items-center justify-between px-10 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm">
                
                {/* Logo */}
                <div className="flex items-center flex-1">
                    <img src="logo.jpg" alt="Logo" className="w-16 dark:invert" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-center flex-1 dark:text-white">
                    {links.map(link => (
                        <a href="#" key={link.name} className="text-xl mx-4">{link.name}</a>
                    ))}
                </div>

                {/* Dark Mode & Button */}
                <div className="hidden md:flex justify-end flex-1 gap-2">
                <DarkModeToggle className="w-11 h-3"/>
                    <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
                        Get a free estimate
                    </button>
                </div>

                {/* Hamburger Menu Icon (Mobile) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black dark:text-white focus:outline-none"
                    >
                    <svg 
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                    </button>
                </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-white dark:bg-black shadow-lg z-20">
                    <div ref={menuRef} className="relative flex flex-col items-center py-4 dark:text-white">
                        
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-black dark:text-white focus:outline-none"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>

                        {/* Mobile links */}
                        {links.map((link) => (
                            <a
                                href={link.href}
                                key={link.name}
                                className="block text-xl my-4 text-black dark:text-white"
                                onClick={() => setIsOpen(false)} // Close menu on link click
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Dark Mode Toggle & Button for Mobile */}
                        <div className="flex flex-col items-center gap-4">
                            <DarkModeToggle className="w-11 h-3 my-4" />
                            <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
                                Get a free estimate
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </nav>
        );
    };

    export default Navbar;