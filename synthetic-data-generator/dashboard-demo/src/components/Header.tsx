import React from 'react';
import { Home, Menu, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
  goToHome: () => void;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, goToHome, toggleSidebar }) => {
  const title = language === 'en' ? 'Synthetic Data Generator' : '合成数据生成器';
  const subtitle = language === 'en' ? 'Interactive Demo' : '交互式演示';

  return (
    <header className="bg-gradient-to-r from-primary-800 to-primary-600 text-white relative">
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
            <button 
              onClick={toggleSidebar}
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
          
          <div className="language-toggle">
            <button 
              className="flex items-center px-3 py-1.5 bg-white bg-opacity-10 rounded-md text-sm hover:bg-opacity-20 transition-colors"
              onClick={toggleLanguage}
            >
              <Globe size={16} className="mr-1.5" />
              <span>{language === 'en' ? '中文' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
