import React, { useState } from 'react';
import IntroductionSlide from './components/slides/IntroductionSlide';
import BusinessChallengesSlide from './components/slides/BusinessChallengesSlide';
import AISolutionSlide from './components/slides/AISolutionSlide';
import TechnologyOverviewSlide from './components/slides/TechnologyOverviewSlide';
import ImplementationProcessSlide from './components/slides/ImplementationProcessSlide';
import CaseStudiesSlide from './components/slides/CaseStudiesSlide';
import ROIBenefitsSlide from './components/slides/ROIBenefitsSlide';
import NextStepsSlide from './components/slides/NextStepsSlide';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';

// Translations for multilingual support
const translations = {
  en: {
    title: "AI-powered Predictive Maintenance",
    introduction: "Introduction",
    businessChallenges: "Business Challenges",
    aiSolution: "AI Solution",
    technologyOverview: "Technology Overview",
    implementationProcess: "Implementation Process",
    caseStudies: "Case Studies",
    roiBenefits: "ROI & Benefits",
    nextSteps: "Next Steps",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
    of: "of"
  },
  zh: {
    title: "AI 驱动的预测性维护",
    introduction: "介绍",
    businessChallenges: "业务挑战",
    aiSolution: "AI 解决方案",
    technologyOverview: "技术概述",
    implementationProcess: "实施过程",
    caseStudies: "案例研究",
    roiBenefits: "投资回报率和收益",
    nextSteps: "后续步骤",
    previous: "上一页",
    next: "下一页",
    slide: "幻灯片",
    of: "共"
  }
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  // Initialize language from localStorage or default to English
  React.useEffect(() => {
    const savedLang = localStorage.getItem('presentation_language') as 'en' | 'zh' || 'en';
    setLanguage(savedLang);
  }, []);
  
  // Function to change language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('presentation_language', newLanguage);
  };
  
  // Translate function
  const t = (key: string) => {
    if (key === 'language') return language;
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const slides = [
    { component: IntroductionSlide, title: t('introduction') },
    { component: BusinessChallengesSlide, title: t('businessChallenges') },
    { component: AISolutionSlide, title: t('aiSolution') },
    { component: TechnologyOverviewSlide, title: t('technologyOverview') },
    { component: ImplementationProcessSlide, title: t('implementationProcess') },
    { component: CaseStudiesSlide, title: t('caseStudies') },
    { component: ROIBenefitsSlide, title: t('roiBenefits') },
    { component: NextStepsSlide, title: t('nextSteps') }
  ];

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToHome = () => {
    // Get the base URL for different environments
    const hostname = window.location.hostname;
    
    if (hostname === 'ai-data-solutions.bixory.ai') {
      // Custom domain - go to root
      window.location.href = '/';
      return;
    } else if (hostname.includes('github.io')) {
      // GitHub Pages - include repository name
      window.location.href = '/ai-data-solutions/';
      return;
    } else {
      // Local development - go to parent directory
      const currentPath = window.location.pathname;
      const parentPath = currentPath.substring(0, currentPath.indexOf('/predictive-maintenance'));
      window.location.href = parentPath || '/';
      return;
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center">
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); goToHome(); }}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-600" />
          </a>
        </div>

        {/* Centered Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl font-bold text-blue-800">{t('title')}</h1>
          <p className="text-sm text-gray-600">{slides[currentSlide].title}</p>
        </div>

        <div className="flex items-center">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50 flex items-center"
          >
            <Globe size={16} className="mr-1" />
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      {/* Navigation Controls - above the main content */}
      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          {t('previous')}
        </button>
        <div className="text-sm text-gray-500">
          {t('slide')} {currentSlide + 1} {t('of')} {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === slides.length - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          {t('next')}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
          <CurrentSlideComponent t={t} />
        </div>
      </main>
    </div>
  );
}

export default App;