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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header with navigation */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <button 
          onClick={goToHome}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <Home size={24} />
        </button>
        <div className="text-xl font-bold">
          {language === 'en' ? 'AI Synthetic Data Generation' : 'AI合成数据生成'}
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('zh')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'zh' ? 'bg-primary-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            中文
          </button>
        </div>
      </header>

      {/* Pagination controls */}
      <div className="bg-gray-800 py-2 px-4 flex justify-between items-center border-t border-gray-700">
        <button 
          onClick={goToPreviousSlide} 
          disabled={currentSlide === 0}
          className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-600' : 'hover:bg-gray-700 text-white'} transition-colors`}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="text-center text-sm text-gray-300">
          {currentSlide + 1} / {slides.length}
        </div>
        <button 
          onClick={goToNextSlide} 
          disabled={currentSlide === slides.length - 1}
          className={`p-2 rounded-full ${currentSlide === slides.length - 1 ? 'text-gray-600' : 'hover:bg-gray-700 text-white'} transition-colors`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        {slides[currentSlide]}
      </main>
    </div>
  );
};

export default App;
