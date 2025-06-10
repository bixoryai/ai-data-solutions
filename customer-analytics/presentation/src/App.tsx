import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';
import { translations } from './translations';

// Import slide components
import IntroductionSlide from './components/slides/IntroductionSlide';
import BusinessChallengesSlide from './components/slides/BusinessChallengesSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import TechnologyOverviewSlide from './components/slides/TechnologyOverviewSlide';
import IndustryApplicationsSlide from './components/slides/IndustryApplicationsSlide';
import SuccessStorySlide from './components/slides/SuccessStorySlide';
import ImplementationSlide from './components/slides/ImplementationSlide';
import GettingStartedSlide from './components/slides/GettingStartedSlide';

type Language = 'en' | 'zh';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('presentation_language') as Language || 'en';
    setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('presentation_language', newLanguage);
  };

  const t = (key: keyof typeof translations['en']) => {
    return translations[language][key] || key;
  };

  const slides = [
    { component: IntroductionSlide, titleKey: 'introduction' },
    { component: BusinessChallengesSlide, titleKey: 'businessChallenges' },
    { component: SolutionSlide, titleKey: 'solution' },
    { component: TechnologyOverviewSlide, titleKey: 'technologyOverview' },
    { component: IndustryApplicationsSlide, titleKey: 'industryApplications' },
    { component: SuccessStorySlide, titleKey: 'successStory' },
    { component: ImplementationSlide, titleKey: 'implementation' },
    { component: GettingStartedSlide, titleKey: 'gettingStarted' },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToHome = () => {
    if (window.location.hostname.includes('bixory.ai') || window.location.hostname.includes('github.io')) {
      window.location.href = '/ai-data-solutions/';
    } else {
      window.location.href = '/';
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;
  const currentTitle = t(slides[currentSlide].titleKey as keyof typeof translations['en']);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50">
        <button
          onClick={goToHome}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Go to home page"
        >
          <Home size={24} className="text-blue-600" />
        </button>

        <div className="text-center">
          <h1 className="text-lg font-bold text-blue-800">{t('title')}</h1>
          <p className="text-xs text-gray-500">{currentTitle}</p>
        </div>

        <button 
          onClick={toggleLanguage}
          className="px-3 py-1.5 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 flex items-center transition-colors"
        >
          <Globe size={16} className="mr-1.5" />
          {language === 'en' ? '中文' : 'English'}
        </button>
      </header>

      <div className="bg-white shadow-sm py-2 px-6 flex justify-between items-center border-b border-t">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className="flex items-center px-4 py-2 rounded-md text-sm text-blue-600 hover:bg-blue-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={18} className="mr-1" />
          {t('previous')}
        </button>
        <div className="text-sm text-gray-600">
          {t('slide')} {currentSlide + 1} {t('of')} {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center px-4 py-2 rounded-md text-sm text-blue-600 hover:bg-blue-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {t('next')}
          <ChevronRight size={18} className="ml-1" />
        </button>
      </div>

      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <CurrentSlideComponent t={t as (key: string) => string} />
        </div>
      </main>
    </div>
  );
}

export default App; 