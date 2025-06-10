import React from 'react';
import { Home, Menu, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  changeLanguage: (lang: 'en' | 'zh') => void;
  title?: string;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, changeLanguage, title, toggleSidebar }) => {
  // Get the base URL for different environments
  const getBaseUrl = () => {
    const hostname = window.location.hostname;
    // Check if running on custom domain
    if (hostname === 'ai-data-solutions.bixory.ai') {
      return '';
    }
    // Check if running on GitHub Pages
    else if (hostname.includes('github.io')) {
      return '/ai-data-solutions';
    }
    // Local development
    return '';
  };

  // Function to handle going back to the main portal
  const goToHome = () => {
    window.location.href = `${getBaseUrl()}/index.html`;
  };

  const subtitle = language === 'en' ? 'Interactive Demo' : '交互式演示';

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={goToHome}
              className="p-2 mr-2 rounded-full hover:bg-primary-700 transition-colors"
              aria-label="Go to home"
            >
              <Home size={24} />
            </button>
            {/* Hamburger for mobile */}
            <button 
              onClick={toggleSidebar}
              className="p-2 mr-4 rounded-full hover:bg-primary-700 transition-colors sm:hidden"
              aria-label="Open sidebar menu"
            >
              <Menu size={24} />
            </button>
            {/* Sidebar toggle for desktop */}
            <button 
              onClick={toggleSidebar}
              className="p-2 mr-4 rounded-full hover:bg-primary-700 transition-colors hidden sm:block"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold">{title || "Manufacturing AI Analytics"}</h1>
              <p className="text-sm text-primary-100">{subtitle}</p>
            </div>
          </div>
          <button 
            className="flex items-center px-3 py-1.5 bg-white bg-opacity-10 rounded-md text-sm hover:bg-opacity-20 transition-colors"
            onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
          >
            <Globe size={16} className="mr-1.5" />
            <span>{language === 'en' ? '中文' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 