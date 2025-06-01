import React from 'react';
import { Home, Menu, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
  goToHome: () => void;
  toggleSidebar: () => void;
  selectedSector: 'manufacturing' | 'energy' | 'transportation';
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, goToHome, toggleSidebar, selectedSector }) => {
  const title = language === 'en' ? 'Predictive Maintenance' : '预测性维护';
  const subtitle = language === 'en' ? 'Interactive Demo' : '交互式演示';
  const sectorLabels = {
    manufacturing: { en: 'Manufacturing', zh: '制造业' },
    energy: { en: 'Energy', zh: '能源' },
    transportation: { en: 'Transportation', zh: '交通运输' }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={goToHome}
              className="p-2 rounded-full hover:bg-primary-700 transition-colors mr-2"
              aria-label={language === 'en' ? 'Go to home' : '返回首页'}
            >
              <Home size={24} />
            </button>
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-primary-700 transition-colors mr-4"
              aria-label={language === 'en' ? 'Toggle sidebar' : '切换侧边栏'}
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold leading-tight">{title}</h1>
              <p className="text-sm text-primary-100 leading-tight">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-primary-100 font-medium">{sectorLabels[selectedSector][language]}</span>
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