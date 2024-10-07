import { links } from "./constants";

import DarkModeToggle from "./DarkModeToggle";


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-10 py-4 shadow-md fixed w-full bg-white z-10 dark:bg-black dark:shadow-[#605f5f] dark:shadow-sm'>
      <div className='flex items-center flex-1'>
        <img src='logo.jpg' alt='Logo' className='w-16 dark:invert' />
      </div>
      <div className=' flex justify-center flex-1 dark:text-white'>
        {links.map(link => (
          <a href='#' key={link.name} className='text-xl mx-4 nav-item relative'>
            {link.name}
          </a>
        ))}
      </div>
      <div className='flex justify-end flex-1 gap-2'>
        <DarkModeToggle className='w-11 h-3' />
        <button
          className='border border-black rounded-full px-4 py-2 shadow-xl font-thin dark:bg-slate-800 dark:text-white'>
          Get a free estimate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
