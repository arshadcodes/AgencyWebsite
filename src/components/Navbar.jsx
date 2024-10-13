import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import './Style/Navbar.css';

const links = [
  { name: 'Services', href: '#' },
  { name: 'Process', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Contact', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm">
    
      <div className="flex items-center flex-1">
        <img src="logo.jpg" alt="Logo" className="w-16 dark:invert" />
      </div>

      
      <div className="flex-1 justify-end lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
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
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      
      <div className="hidden lg:flex justify-center flex-1 dark:text-white">
        {links.map(link => (
          <a
            href={link.href}
            key={link.name}
            className="text-xl mx-4 nav-item relative"
          >
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

      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black flex flex-col items-center lg:hidden z-20">
          {links.map(link => (
            <a
              href={link.href}
              key={link.name}
              className="text-xl py-2 dark:text-white w-full text-center"
              onClick={toggleMenu} 
            >
              {link.name}
            </a>
          ))}
          <button className="border border-black rounded-full px-4 py-2 mt-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white">
            Get a free estimate
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
