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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='navbar flex items-center justify-between px-4 py-1.5 shadow-md fixed w-full bg-white z-36 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm'>
      {/* Logo */}
      <div className='flex items-center flex-1'>
        <img src='logo.jpg' alt='Logo' className='w-12 h-auto dark:invert' />
      </div>

      {/* Mobile menu toggle button */}
      <div className='flex items-center md:hidden'>
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-black dark:text-white"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M3 6h18M3 12h18M3 18h18"
  />
</svg>





        </button>
      </div>

      {/* Links - hidden on mobile, shown on larger screens */}
      <div className='hidden md:flex justify-center flex-1 dark:text-white'>
        {links.map((link) => (
          <a href={link.href} key={link.name} className='text-xl mx-4 nav-item relative'>
            {link.name}
          </a>
        ))}
      </div>

      {/* Right side (dark mode toggle + button) */}
      <div className='hidden md:flex justify-end flex-1 gap-2'>
        <DarkModeToggle className='w-11 h-3' />
        <button className='border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white'>
          Get a free estimate
        </button>
      </div>

      {/* Mobile menu - displayed when the toggle button is clicked */}
      {isMobileMenuOpen && (
        <div
          className='absolute top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center md:hidden overflow-x-hidden'
        >
          {links.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className='block py-2 text-lg dark:text-white w-full text-center'
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle and Estimate button inside mobile menu */}
          <div className='flex flex-col items-center mt-4 gap-4 w-full'>
            <DarkModeToggle className='w-11 h-3' />
            <button className='border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white'>
              Get a free estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
