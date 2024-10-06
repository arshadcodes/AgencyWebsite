import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
      // Check local storage for dark mode preference
      const savedMode = localStorage.getItem('darkMode');
      return savedMode === 'true'; // return true if 'darkMode' is set to 'true'
    });

  // Toggle between dark and light modes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Save dark mode preference
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Save light mode preference
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-800 dark:border-gray-200 transition duration-300"
      >
        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}
