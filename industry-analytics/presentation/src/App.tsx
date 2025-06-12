import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';
import IntroductionSlide from './components/slides/IntroductionSlide';
import StrengthsSlide from './components/slides/StrengthsSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const translations = {
    en: {
      title: 'Industry Analytics',
      subtitle: 'AI-Powered Solutions for Manufacturing Excellence',
      nextSlide: 'Next',
      prevSlide: 'Previous',
      slide: 'Slide',
      slideOf: 'of',
      // Slide titles and content
      industrySpecificAI: 'Industry-specific AI Analytics',
      transformingIndustries: 'Transforming Industries with AI-Powered Insights',
      predictiveAnalytics: 'Predictive Analytics',
      operationalEfficiency: 'Operational Efficiency',
      valueAcceleration: 'Value Acceleration',
      companyStrengths: 'Why Partner With Us?',
      // Company strengths
      industryAIExpertise: 'Industry + AI Expertise',
      domainKnowledge: 'Deep domain knowledge combined with cutting-edge AI capabilities',
      provenMethodology: 'Proven Implementation Methodology',
      successRate: '95% success rate with our 90-day deployment framework',
      proprietaryAlgorithms: 'Proprietary Algorithms',
      betterAccuracy: 'Industry-specific models delivering 30-50% better accuracy',
      enterpriseGrade: 'Enterprise-Grade Platform',
      securityScalability: 'Security, scalability, and compliance built into our core architecture',
      transparentROI: 'Transparent ROI Framework',
      clearMetrics: 'Clear measurement methodology with documented success metrics',
      futureProof: 'Future-Proof Technology',
      continuousLearning: 'Continuous learning systems that improve with every implementation',
    },
    zh: {
      title: '行业分析',
      subtitle: '制造业卓越的AI驱动解决方案',
      nextSlide: '下一页',
      prevSlide: '上一页',
      slide: '页面',
      slideOf: '/',
      // Slide titles and content
      industrySpecificAI: '行业特定AI分析',
      transformingIndustries: '使用AI驱动的洞察力改变行业',
      predictiveAnalytics: '预测分析',
      operationalEfficiency: '运营效率',
      valueAcceleration: '价值加速',
      companyStrengths: '为何与我们合作？',
      // Company strengths
      industryAIExpertise: '行业 + AI专业知识',
      domainKnowledge: '深度的领域知识与尖端的AI能力相结合',
      provenMethodology: '经过验证的实施方法',
      successRate: '我们的90天部署框架成功率达95%',
      proprietaryAlgorithms: '专有算法',
      betterAccuracy: '行业特定模型提供30-50%的更高准确度',
      enterpriseGrade: '企业级平台',
      securityScalability: '安全性、可扩展性和合规性内置于核心架构',
      transparentROI: '透明的ROI框架',
      clearMetrics: '清晰的测量方法和有文档记录的成功指标',
      futureProof: '面向未来的技术',
      continuousLearning: '随着每次实施而不断改进的持续学习系统',
    }
  };

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || key;
  };
  
  const slides = [
    <IntroductionSlide t={t} />,
    <StrengthsSlide t={t} />
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
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // On GitHub Pages, the home path includes the repository name.
    // On a custom domain or local server, the home path is the root '/'.
    const homePath = isGitHubPages ? '/ai-data-solutions/' : '/';
    window.location.href = homePath;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={goToHome}
            className="mr-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-400" />
          </button>
          <h1 className="text-xl font-semibold text-white">{t('title')}</h1>
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
          {t('prevSlide')}
        </button>
        <div className="text-sm text-gray-400">
          {t('slide')} {currentSlide + 1} {t('slideOf')} {slides.length}
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
          {t('nextSlide')}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-8">
          {slides[currentSlide]}
        </div>
      </main>
    </div>
  );
};

export default App;
