const links = [
    { name: "Services", href: "#" },
    { name: "Process", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Work", href: "#" },
    { name: "Contact", href: "#" },
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-10 py-4 shadow-md fixed w-full bg-white z-10">
            <div className="flex items-center flex-1">
                <img src="logo.jpg" alt="Logo" className="w-16" />
            </div>
            <div className="flex justify-center flex-1">
                {links.map(link => (
                    <a href="#" key={link.name} className="text-xl mx-4">{link.name}</a>
                ))}
            </div>
            <div className="flex justify-end flex-1">
                <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin">
                    Get a free estimate
                </button>
            </div>
        </nav>
    );
};

export default Navbar;