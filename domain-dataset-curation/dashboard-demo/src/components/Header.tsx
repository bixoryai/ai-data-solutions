import React from 'react';
import { Home, Menu } from 'lucide-react';

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
    <header className="bg-gradient-to-r from-primary-800 to-primary-600 text-white">
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
            <span className="text-primary-100 font-medium">{domainLabels[selectedDomain][language]}</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'en' ? 'bg-white text-primary-700' : 'text-primary-100 hover:bg-primary-700'}`}
                aria-label={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
              >
                EN
              </button>
              <button
                onClick={() => language !== 'zh' && toggleLanguage()}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'zh' ? 'bg-white text-primary-700' : 'text-primary-100 hover:bg-primary-700'}`}
                aria-label={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
