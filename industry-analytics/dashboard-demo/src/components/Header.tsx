import React from 'react';
import { Home, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  changeLanguage: (lang: 'en' | 'zh') => void;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ language, changeLanguage, title }) => {
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

  return (
    <header className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-3 px-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <button 
          onClick={goToHome}
          className="p-2 mr-3 rounded-full hover:bg-primary-700 transition-colors"
          aria-label="Go to home"
        >
          <Home size={24} />
        </button>
        <div>
          <h1 className="text-xl font-bold">
            {title || "Manufacturing AI Analytics"}
          </h1>
          <p className="text-sm text-primary-100">
            {language === 'en' ? 'Interactive Demo' : '交互式演示'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center">
        <button 
          className="flex items-center px-3 py-1.5 bg-white bg-opacity-10 rounded-md text-sm hover:bg-opacity-20 transition-colors"
          onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
        >
          <Globe size={16} className="mr-1.5" />
          <span>{language === 'en' ? '中文' : 'English'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header; 