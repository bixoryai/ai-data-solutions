import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';

// Import slide components
import TitleSlide from './components/TitleSlide';
import ExecutiveSummary from './components/ExecutiveSummary';
import WhatIsSyntheticData from './components/WhatIsSyntheticData';
import ProblemsSolved from './components/ProblemsSolved';
import CoreActivities from './components/CoreActivities';
import BusinessCase from './components/BusinessCase';
import MarketAnalysis from './components/MarketAnalysis';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import BusinessModel from './components/BusinessModel';
import TechnologyOverview from './components/TechnologyOverview';
import RoadmapAndTimeline from './components/RoadmapAndTimeline';
import TeamAndLeadership from './components/TeamAndLeadership';
import CallToAction from './components/CallToAction';

// Define available languages
type Language = 'en' | 'zh';

const App: React.FC = () => {
  // State for current slide and language
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<Language>('en');

  // Array of slide components
  const slides = [
    <TitleSlide language={language} />,
    <ExecutiveSummary language={language} />,
    <WhatIsSyntheticData language={language} />,
    <ProblemsSolved language={language} />,
    <CoreActivities language={language} />,
    <BusinessCase language={language} />,
    <MarketAnalysis language={language} />,
    <CompetitiveAnalysis language={language} />,
    <BusinessModel language={language} />,
    <TechnologyOverview language={language} />,
    <RoadmapAndTimeline language={language} />,
    <TeamAndLeadership language={language} />,
    <CallToAction language={language} />
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
    // Navigate back to the main portal
    window.location.href = '../../../index.html';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); goToHome(); }}
            className="mr-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-400" />
          </a>
          <h1 className="text-xl font-semibold text-white">
            {language === 'en' ? 'AI Synthetic Data Generation' : 'AI合成数据生成'}
          </h1>
        </div>
        <div className="flex items-center">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-500 text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      {/* Navigation Controls */}
      <div className="bg-gray-800 shadow-md py-3 px-6 flex justify-between items-center border-t border-gray-700">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === 0
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-blue-400 hover:bg-gray-700'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          {language === 'en' ? 'Previous' : '上一页'}
        </button>
        <div className="text-sm text-gray-400">
          {language === 'en' ? 'Slide' : '页面'} {currentSlide + 1} {language === 'en' ? 'of' : '/'} {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === slides.length - 1
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-blue-400 hover:bg-gray-700'
          }`}
        >
          {language === 'en' ? 'Next' : '下一页'}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-8">
          {slides[currentSlide]}
        </div>
      </main>
    </div>
  );
};

export default App;
