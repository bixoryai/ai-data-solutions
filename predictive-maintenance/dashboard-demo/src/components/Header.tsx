import React from 'react';
import { Home, Cog, Activity, BarChart3 } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
  goToHome: () => void;
  selectedSector: 'manufacturing' | 'energy' | 'transportation';
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, goToHome, selectedSector }) => {
  const content = {
    en: {
      title: 'Predictive Maintenance',
      subtitle: 'Interactive Demo',
      manufacturing: 'Manufacturing',
      energy: 'Energy',
      transportation: 'Transportation'
    },
    zh: {
      title: '预测性维护',
      subtitle: '交互式演示',
      manufacturing: '制造业',
      energy: '能源',
      transportation: '交通运输'
    }
  };

  // Get sector-specific color
  const getSectorColor = () => {
    switch (selectedSector) {
      case 'manufacturing':
        return 'text-blue-600';
      case 'energy':
        return 'text-amber-600';
      case 'transportation':
        return 'text-green-600';
      default:
        return 'text-blue-600';
    }
  };

  // Get sector-specific icon
  const getSectorIcon = () => {
    switch (selectedSector) {
      case 'manufacturing':
        return <Cog className={getSectorColor()} />;
      case 'energy':
        return <Activity className={getSectorColor()} />;
      case 'transportation':
        return <BarChart3 className={getSectorColor()} />;
      default:
        return <Cog className={getSectorColor()} />;
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
                  <span className="mr-2">{getSectorIcon()}</span>
                  <span className={`font-medium ${getSectorColor()}`}>
                    {content[language][selectedSector]}
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