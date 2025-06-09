import React from 'react';
import { Menu, Globe, Home } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  changeLanguage: (lang: 'en' | 'zh') => void;
  toggleSidebar: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({
  language,
  changeLanguage,
  toggleSidebar,
  title,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-primary-800 to-primary-600 text-white z-40 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => (window.location.href = '/')}
              className="p-2 mr-2 rounded-full hover:bg-primary-700 transition-colors"
              aria-label="Go to home"
            >
              <Home size={22} />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 mr-4 rounded-full hover:bg-primary-700 transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu size={22} />
            </button>
            <div>
              <h1 className="text-lg font-bold">{title}</h1>
              <p className="text-xs text-primary-200" data-i18n="interactiveDemo">Interactive Demo</p>
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