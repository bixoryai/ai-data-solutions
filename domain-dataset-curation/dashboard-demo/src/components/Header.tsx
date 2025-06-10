import React from 'react';
import { Home, Menu, Globe } from 'lucide-react';

console.log("HEADER COMPONENT LOADED - Domain Dataset Curation");

interface HeaderProps {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
  goToHome: () => void;
  toggleSidebar: () => void;
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, goToHome, toggleSidebar, selectedDomain }) => {
  const title = language === 'en' ? 'Domain Dataset Curation' : '领域数据集管理';
  const subtitle = language === 'en' ? 'Interactive Demo' : '交互式演示';
  const domainLabels = {
    healthcare: { en: 'Healthcare', zh: '医疗健康' },
    finance: { en: 'Finance', zh: '金融' },
    manufacturing: { en: 'Manufacturing', zh: '制造业' }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
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
            {/* Hamburger for mobile */}
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-primary-700 transition-colors mr-4 sm:hidden"
              aria-label={language === 'en' ? 'Open sidebar menu' : '打开侧边栏菜单'}
            >
              <Menu size={24} />
            </button>
            {/* Sidebar toggle for desktop */}
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-primary-700 transition-colors mr-4 hidden sm:block"
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
            <span className="text-primary-100 font-medium">{domainLabels[selectedDomain][language]}</span>
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
