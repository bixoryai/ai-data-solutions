import React from 'react';
import { ArrowLeft, ArrowRight, Home, Globe } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  language: 'en' | 'zh';
  changeLanguage: (lang: 'en' | 'zh') => void;
  t: (key: string) => string;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
  goToSlide,
  language,
  changeLanguage,
  t
}) => {
  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-sm border-b border-yellow-500/20 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl text-yellow-400">{t('title')}</span>
          <div className="h-6 mx-4 border-l border-gray-600"></div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => goToSlide(0)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentSlide === 0 ? 'bg-yellow-500 text-black font-medium' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {t('introduction')}
            </button>
            <button
              onClick={() => goToSlide(1)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentSlide === 1 ? 'bg-yellow-500 text-black font-medium' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {t('businessChallenges')}
            </button>
            <button
              onClick={() => goToSlide(2)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentSlide === 2 ? 'bg-yellow-500 text-black font-medium' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {t('aiSolution')}
            </button>
            {/* More menu items can be added based on viewport size */}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center space-x-1 px-2 py-1 rounded-md text-gray-300 hover:bg-gray-800"
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'EN' : '中文'}</span>
          </button>
          
          <a 
            href="/"
            className="flex items-center space-x-1 px-2 py-1 rounded-md text-gray-300 hover:bg-gray-800"
          >
            <Home size={16} />
            <span className="hidden sm:inline">{t('backToPortal')}</span>
          </a>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full ${
                currentSlide === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <ArrowLeft size={16} />
            </button>
            
            <span className="text-sm text-gray-400">
              {currentSlide + 1} / {totalSlides}
            </span>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`p-2 rounded-full ${
                currentSlide === totalSlides - 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;