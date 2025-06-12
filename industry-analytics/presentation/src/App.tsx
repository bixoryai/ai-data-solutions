import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';

import IntroductionSlide from './components/slides/IntroductionSlide';
import OpportunitySlide from './components/slides/OpportunitySlide';
import ChallengesSlide from './components/slides/ChallengesSlide';
import ApproachSlide from './components/slides/ApproachSlide';
import ApplicationsSlide from './components/slides/ApplicationsSlide';
import IntegrationSlide from './components/slides/IntegrationSlide';
import JourneySlide from './components/slides/JourneySlide';
import StrengthsSlide from './components/slides/StrengthsSlide';
import NextStepsSlide from './components/slides/NextStepsSlide';
import ThankYouSlide from './components/slides/ThankYouSlide';

const translations = {
  en: {
    title: "Industry Analytics",
    introduction: "Introduction",
    opportunity: "The Opportunity",
    challenges: "Business Challenges",
    approach: "Our AI-First Approach",
    applications: "Industry-Specific Applications",
    integration: "Enterprise Integration",
    journey: "Journey to Value",
    strengths: "Why Our Company?",
    nextSteps: "Next Steps",
    thankYou: "Thank You",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
    of: "of",
    // Introduction Slide
    industrySpecificAI: 'Industry-specific AI Analytics',
    transformingIndustries: 'Transforming Industries with AI-Powered Insights',
    predictiveAnalytics: 'Predictive Analytics',
    operationalEfficiency: 'Operational Efficiency',
    valueAcceleration: 'Value Acceleration',
    // Strengths Slide
    industryAIExpertise: 'Industry + AI Expertise',
    domainKnowledge: 'Deep domain knowledge combined with cutting-edge AI capabilities',
    provenMethodology: 'Proven Implementation Methodology',
    successRate: '95% success rate with our 90-day deployment framework',
    proprietaryAlgorithms: 'Proprietary Algorithms',
    betterAccuracy: 'Industry-specific models delivering 30-50% better accuracy',
    enterpriseGrade: 'Enterprise-Grade Platform',
    securityScalability: 'Security, scalability, and compliance built-in',
    transparentROI: 'Transparent ROI Framework',
    clearMetrics: 'Clear measurement methodology with documented success metrics',
    futureProof: 'Future-Proof Technology',
    continuousLearning: 'Continuous learning systems that improve with every implementation',
    implementationSuccessRate: 'Implementation Success Rate',
    higherAccuracy: 'Higher Accuracy vs. Generic AI',
    fasterTimeToValue: 'Faster Time to Value',
  },
  zh: {
    title: "行业分析",
    introduction: "介绍",
    opportunity: "市场机会",
    challenges: "业务挑战",
    approach: "我们的人工智能优先方法",
    applications: "行业特定应用",
    integration: "企业集成",
    journey: "价值实现之旅",
    strengths: "为何选择我们公司？",
    nextSteps: "下一步",
    thankYou: "谢谢",
    previous: "上一个",
    next: "下一个",
    slide: "幻灯片",
    of: "之",
    // Introduction Slide
    industrySpecificAI: '行业特定AI分析',
    transformingIndustries: '以AI驱动的洞察力变革行业',
    predictiveAnalytics: '预测性分析',
    operationalEfficiency: '运营效率',
    valueAcceleration: '价值加速',
    // Strengths Slide
    industryAIExpertise: '行业+AI专业知识',
    domainKnowledge: '深厚的领域知识与尖端AI能力相结合',
    provenMethodology: '经过验证的实施方法论',
    successRate: '我们的90天部署框架成功率达95%',
    proprietaryAlgorithms: '专有算法',
    betterAccuracy: '行业特定模型，准确率提升30-50%',
    enterpriseGrade: '企业级平台',
    securityScalability: '内置安全性、可扩展性和合规性',
    transparentROI: '透明的ROI框架',
    clearMetrics: '清晰的衡量方法和记录在案的成功指标',
    futureProof: '面向未来的技术',
    continuousLearning: '随每次实施而不断改进的持续学习系统',
    implementationSuccessRate: '实施成功率',
    higherAccuracy: '相较于通用AI的更高准确率',
    fasterTimeToValue: '更快的价值实现时间',
  }
};


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('presentation_language') as 'en' | 'zh' || 'en';
    setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('presentation_language', newLanguage);
  };

  const t = (key: string) => {
    const langKey = language as 'en' | 'zh';
    return translations[langKey][key as keyof typeof translations['en']] || key;
  };

  const slides = [
    { component: IntroductionSlide, title: t('introduction') },
    { component: OpportunitySlide, title: t('opportunity') },
    { component: ChallengesSlide, title: t('challenges') },
    { component: ApproachSlide, title: t('approach') },
    { component: ApplicationsSlide, title: t('applications') },
    { component: IntegrationSlide, title: t('integration') },
    { component: JourneySlide, title: t('journey') },
    { component: StrengthsSlide, title: t('strengths') },
    { component: NextStepsSlide, title: t('nextSteps') },
    { component: ThankYouSlide, title: t('thankYou') },
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
    const hostname = window.location.hostname;
    if (hostname === 'bixory.ai' || hostname === 'ai-data-solutions.bixory.ai') {
      window.location.href = '/';
    } else if (hostname.includes('github.io')) {
      window.location.href = '/ai-data-solutions/';
    } else {
      window.location.href = `http://${hostname}:3000`;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <header className="bg-gray-900 shadow-md py-3 px-6 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <button
            onClick={goToHome}
            className="mr-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-400" />
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl font-bold text-blue-300">{t('title')}</h1>
          <p className="text-sm text-gray-400">{slides[currentSlide].title}</p>
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border border-gray-600 text-sm font-medium hover:bg-gray-700 flex items-center bg-gray-800"
          >
            <Globe size={16} className="mr-2" />
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      <div className="bg-gray-900 shadow-inner py-2 px-6 flex justify-between items-center">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            currentSlide === 0
              ? 'text-gray-600 cursor-not-allowed'
              : 'text-blue-400 hover:bg-gray-700'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          {t('previous')}
        </button>
        <div className="text-sm text-gray-400">
          {t('slide')} {currentSlide + 1} {t('of')} {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            currentSlide === slides.length - 1
              ? 'text-gray-600 cursor-not-allowed'
              : 'text-blue-400 hover:bg-gray-700'
          }`}
        >
          {t('next')}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      <main className="flex-grow p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="w-full h-full max-w-7xl mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <CurrentSlideComponent t={t} />
        </div>
      </main>
    </div>
  );
}

export default App;
