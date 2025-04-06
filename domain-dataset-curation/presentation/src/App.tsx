import React, { useState } from 'react';
import TitleSlide from './components/TitleSlide';
import WhatIsDomainDatasetCuration from './components/WhatIsDomainDatasetCuration';
import BusinessCase from './components/BusinessCase';
import Prerequisites from './components/Prerequisites';
import BusinessDevelopment from './components/BusinessDevelopment';
import FinancialProjections from './components/FinancialProjections';
import RiskAssessment from './components/RiskAssessment';
import ImplementationTimeline from './components/ImplementationTimeline';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import Conclusion from './components/Conclusion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const slides = [
    { component: TitleSlide, title: "Domain Dataset Curation" },
    { component: WhatIsDomainDatasetCuration, title: "What is Domain Dataset Curation?" },
    { component: BusinessCase, title: "Why Enter This Business?" },
    { component: Prerequisites, title: "Prerequisites for Entry" },
    { component: BusinessDevelopment, title: "Getting Started: Business Development" },
    { component: FinancialProjections, title: "Financial Projections" },
    { component: RiskAssessment, title: "Risk Assessment & Mitigation" },
    { component: ImplementationTimeline, title: "Implementation Timeline" },
    { component: CompetitiveAdvantage, title: "Competitive Advantage" },
    { component: Conclusion, title: "Conclusion & Next Steps" }
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
    let baseUrl = '';
    
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
      const parentPath = currentPath.substring(0, currentPath.indexOf('/domain-dataset-curation'));
      window.location.href = parentPath || '/';
      return;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); goToHome(); }}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-600" />
          </a>
          <h1 className="text-xl font-semibold text-gray-800">{slides[currentSlide].title}</h1>
        </div>
        <div className="flex items-center">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50"
          >
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      {/* Navigation Controls - Moved above the main content */}
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
          Previous
        </button>
        <div className="text-sm text-gray-500">
          Slide {currentSlide + 1} of {slides.length}
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
          Next
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
          <CurrentSlideComponent language={language} />
        </div>
      </main>
    </div>
  );
}

export default App;
