import React from 'react';
import { Home, Menu, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  changeLanguage: (lang: 'en' | 'zh') => void;
  toggleSidebar: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ language, changeLanguage, toggleSidebar, title }) => {
  const getBaseUrl = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('github.io')) {
      return '/ai-data-solutions';
    }
    return '';
  };

  const goToHome = () => {
    window.location.href = `${getBaseUrl()}/index.html`;
  };

  const translations = {
    en: { subtitle: 'Interactive Demo', language: '中文' },
    zh: { subtitle: '交互式演示', language: 'English' },
  };
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-indigo-800 to-purple-600 text-white flex items-center justify-between px-6 h-24 shadow">
      <div className="flex items-center space-x-4">
        <button
          onClick={goToHome}
          className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
          aria-label="Go to home"
        >
          <Home size={24} />
        </button>
        <button
          aria-label="Toggle sidebar"
          className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
        <div>
          <div className="text-xl font-bold">{title}</div>
          <div className="text-sm opacity-80">{t.subtitle}</div>
        </div>
      </div>
      <button
        className="flex items-center px-3 py-1.5 bg-white bg-opacity-10 rounded-md text-sm hover:bg-opacity-20 transition-colors"
        onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
        aria-label="Toggle language"
      >
        <Globe size={16} className="mr-1.5" />
        <span>{t.language}</span>
      </button>
    </header>
  );
};

export default Header; 