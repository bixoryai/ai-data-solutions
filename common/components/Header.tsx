import React from 'react';
import { Home, Menu, Globe } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
  language: 'en' | 'zh';
  onToggleLanguage: () => void;
  onToggleSidebar: () => void;
  onGoToHome: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  language,
  onToggleLanguage,
  onToggleSidebar,
  onGoToHome,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={onGoToHome}
              className="p-2 mr-2 rounded-full hover:bg-primary-700 transition-colors"
              aria-label="Go to home"
            >
              <Home size={24} />
            </button>
            <button
              onClick={onToggleSidebar}
              className="p-2 mr-4 rounded-full hover:bg-primary-700 transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-sm text-primary-100">{subtitle}</p>
            </div>
          </div>
          <button
            className="flex items-center px-3 py-1.5 bg-white bg-opacity-10 rounded-md text-sm hover:bg-opacity-20 transition-colors"
            onClick={onToggleLanguage}
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