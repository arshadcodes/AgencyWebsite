const links = [
    { name: "Services", href: "#" },
    { name: "Process", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Work", href: "#" },
    { name: "Contact", href: "#" },
];
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm">
            <div className="flex items-center flex-1">
                {/* Logo adjusts size based on screen width */}
                <img src="logo.jpg" alt="Logo" className="w-12 md:w-16 dark:invert" />
            </div>
            <div className="hidden md:flex justify-center flex-1 dark:text-white">
                {links.map(link => (
                    <a
                        href={link.href}
                        key={link.name}
                        className="text-sm sm:text-lg md:text-xl mx-2 md:mx-4 hover:underline"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
            <div className="flex justify-end flex-1 gap-2 items-center">
                <DarkModeToggle className="w-6 h-6 md:w-8 md:h-8" />
                {/* Button is responsive to screen size */}
                <button className="border border-black rounded-full px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base shadow-xl font-thin dark:bg-slate-800 dark:text-white">
                    Get a free estimate
                </button>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
                {/* You can add a hamburger menu icon here for mobile navigation */}
                <button className="text-black dark:text-white">☰</button>
            </div>
        </nav>
    );
};

export default Navbar;
