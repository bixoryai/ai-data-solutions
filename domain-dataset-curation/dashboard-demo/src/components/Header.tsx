import React from 'react';
import { Home, Database, FileCheck, Tag } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
  goToHome: () => void;
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, goToHome, selectedDomain }) => {
  const content = {
    en: {
      title: 'Domain Dataset Curation',
      subtitle: 'Interactive Demo',
      healthcare: 'Healthcare',
      finance: 'Finance',
      manufacturing: 'Manufacturing'
    },
    zh: {
      title: '领域数据集策划',
      subtitle: '交互式演示',
      healthcare: '医疗保健',
      finance: '金融',
      manufacturing: '制造业'
    }
  };

  // Get domain-specific color
  const getDomainColor = () => {
    switch (selectedDomain) {
      case 'healthcare':
        return 'text-red-600';
      case 'finance':
        return 'text-blue-600';
      case 'manufacturing':
        return 'text-amber-600';
      default:
        return 'text-teal-600';
    }
  };

  // Get domain-specific icon
  const getDomainIcon = () => {
    switch (selectedDomain) {
      case 'healthcare':
        return <FileCheck className={getDomainColor()} />;
      case 'finance':
        return <Database className={getDomainColor()} />;
      case 'manufacturing':
        return <Tag className={getDomainColor()} />;
      default:
        return <Database className={getDomainColor()} />;
    }
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); goToHome(); }}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Go to home page"
            >
              <Home size={24} className="text-blue-600" />
            </a>
            <div>
              <h1 className="text-xl font-semibold text-gray-800 flex items-center">
                {content[language].title}
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-lg font-medium text-gray-600">{content[language].subtitle}</span>
              </h1>
              <div className="flex items-center mt-1">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">{getDomainIcon()}</span>
                  <span className={`font-medium ${getDomainColor()}`}>
                    {content[language][selectedDomain]}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50"
            >
              {language === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
