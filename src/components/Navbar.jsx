// const links = [
//     { name: "Services", href: "#" },
//     { name: "Process", href: "#" },
//     { name: "Testimonials", href: "#" },
//     { name: "Work", href: "#" },
//     { name: "Contact", href: "#" },
// ]
// import DarkModeToggle from "./DarkModeToggle";

// const Navbar = () => {
//         return (
//             <nav className="flex items-center justify-between px-10 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm">
//                 <div className="flex items-center flex-1">
//                     <img src="logo.jpg" alt="Logo" className="w-16 dark:invert" />
//                 </div>
//                 <div className="flex justify-center flex-1 dark:text-white">
//                     {links.map(link => (
//                         <a href="#" key={link.name} className="text-xl mx-4">{link.name}</a>
//                     ))}
//                 </div>
//                 <div className="flex justify-end flex-1 gap-2">
//                 <DarkModeToggle className="w-11 h-3"/>
//                     <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
//                         Get a free estimate
//                     </button>
//                 </div>
//             </nav>
//         );
//     };

//     export default Navbar;

import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { name: "Services", href: "#" },
  { name: "Process", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Work", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm">
      {/* Logo */}
      <div className="flex items-center flex-1">
        <img src="logo.jpg" alt="Logo" className="w-16 dark:invert" />
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl dark:text-white"
        >
          {isOpen ? "✖" : "☰"} {/* Toggle between hamburger and close icon */}
        </button>
      </div>

      {/* Links for Desktop View */}
      <div className="hidden lg:flex justify-center flex-1 dark:text-white">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.name}
            className="text-xl mx-4 hover:text-gray-500 dark:hover:text-gray-400"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Button and Toggle for Desktop View */}
      <div className="hidden lg:flex justify-end flex-1 gap-2">
        <DarkModeToggle className="w-11 h-3" />
        <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
          Get a free estimate
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-black transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 dark:text-white">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="text-xl hover:text-gray-500 dark:hover:text-gray-400"
            >
              {link.name}
            </a>
          ))}
          <button className="border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
            Get a free estimate
          </button>
          <DarkModeToggle className="w-11 h-3" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
