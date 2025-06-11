import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';
import IntroductionSlide from './components/slides/IntroductionSlide';
import MarketOpportunitySlide from './components/slides/MarketOpportunitySlide';
import SolutionOverviewSlide from './components/slides/SolutionOverviewSlide';
import ProblemsSolvedSlide from './components/slides/ProblemsSolvedSlide';
import AIApproachSlide from './components/slides/AIApproachSlide';
import CaseStudiesSlide from './components/slides/CaseStudiesSlide';
import OurSolutionsSlide from './components/slides/OurSolutionsSlide';
import TechnologyAdvantageSlide from './components/slides/TechnologyAdvantageSlide';
import BuildVsBuySlide from './components/slides/BuildVsBuySlide';
import WhyChooseUsSlide from './components/slides/WhyChooseUsSlide';
import ImplementationRoadmapSlide from './components/slides/ImplementationRoadmapSlide';
import CompetitiveLandscapeSlide from './components/slides/CompetitiveLandscapeSlide';
import FutureVisionSlide from './components/slides/FutureVisionSlide';
import NextStepsSlide from './components/slides/NextStepsSlide';
import ThankYouSlide from './components/slides/ThankYouSlide';

// Translations for multilingual support
const translations = {
  en: {
    title: "AI-powered Financial Analytics",
    introduction: "Introduction",
    marketOpportunity: "Market Opportunity",
    solutionOverview: "Solution Overview",
    problemsSolved: "Problems Solved",
    aiApproach: "AI-First Approach",
    caseStudies: "Proven Results",
    ourSolutions: "Our Solutions",
    techAdvantage: "Technology Advantage",
    buildVsBuy: "Build vs. Buy",
    whyChooseUs: "Why Choose Us",
    roadmap: "Implementation",
    competition: "Competition",
    vision: "Future Vision",
    nextSteps: "Next Steps",
    thankYou: "Thank You",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
    of: "of",
    language: "en"
  },
  zh: {
    title: "AI驱动的金融分析",
    introduction: "介绍",
    marketOpportunity: "市场机遇",
    solutionOverview: "解决方案概述",
    problemsSolved: "解决的问题",
    aiApproach: "AI优先方法",
    caseStudies: "成果证明",
    ourSolutions: "我们的解决方案",
    techAdvantage: "技术优势",
    buildVsBuy: "自建 vs. 购买",
    whyChooseUs: "为何选择我们",
    roadmap: "实施路线",
    competition: "竞争格局",
    vision: "未来愿景",
    nextSteps: "后续步骤",
    thankYou: "谢谢",
    previous: "上一页",
    next: "下一页",
    slide: "幻灯片",
    of: "共",
    language: "zh"
  }
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  // Initialize language from localStorage
  useEffect(() => {
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

  // Define slide components with titles
  const slides = [
    { component: IntroductionSlide, title: t('introduction') },
    { component: MarketOpportunitySlide, title: t('marketOpportunity') },
    { component: SolutionOverviewSlide, title: t('solutionOverview') },
    { component: ProblemsSolvedSlide, title: t('problemsSolved') },
    { component: AIApproachSlide, title: t('aiApproach') },
    { component: CaseStudiesSlide, title: t('caseStudies') },
    { component: OurSolutionsSlide, title: t('ourSolutions') },
    { component: TechnologyAdvantageSlide, title: t('techAdvantage') },
    { component: BuildVsBuySlide, title: t('buildVsBuy') },
    { component: WhyChooseUsSlide, title: t('whyChooseUs') },
    { component: ImplementationRoadmapSlide, title: t('roadmap') },
    { component: CompetitiveLandscapeSlide, title: t('competition') },
    { component: FutureVisionSlide, title: t('vision') },
    { component: NextStepsSlide, title: t('nextSteps') },
    { component: ThankYouSlide, title: t('thankYou') },
  ];

  // Navigation functions
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
      const parentPath = currentPath.substring(0, currentPath.indexOf('/financial-analytics'));
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