import React from 'react';
import { Users, Briefcase, PieChart, Calendar, BarChart3, Search, Cpu, Target, HelpCircle, ArrowRightCircle, BarChartHorizontal, TrendingUp, UserCheck, Star, ThumbsUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const IntroductionSlide: React.FC<SlideProps> = ({ t }) => {
  const coreComponents = [
    { icon: BarChart3, key: 'dataCollection' },
    { icon: Search, key: 'patternRecognition' },
    { icon: Users, key: 'segmentation' },
    { icon: Cpu, key: 'predictiveModeling' },
    { icon: Target, key: 'actionableInsights' },
  ];

  const keyQuestions = [
    { icon: Star, key: 'qValuableCustomers' },
    { icon: ArrowRightCircle, key: 'qPurchaseDecisions' },
    { icon: TrendingUp, key: 'qBuyOrChurn' },
    { icon: ThumbsUp, key: 'qRecommendations' },
    { icon: UserCheck, key: 'qOptimizeJourney' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
        {t('slide1Title')}
      </h2>
      <p className="text-xl text-center text-gray-600 mb-8">
        {t('slide1Subtitle')}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            {t('agendaTitle')}
          </h3>
          <ul className="space-y-2 text-gray-700">
            {[
              'agenda1', 'agenda2', 'agenda3', 
              'agenda4', 'agenda5', 'agenda6'
            ].map(key => (
              <li key={key} className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between">
            <div className="bg-gray-100 p-6 rounded-lg h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('slide2Title')}</h3>
                <p className="text-gray-700 mb-4">
          {t('slide2Definition')}
        </p>
                <p className="text-sm italic text-gray-500">
                {t('slide2BottomLine')}
                </p>
            </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">{t('coreComponentsTitle')}</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {coreComponents.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-blue-100">
              <Icon size={20} className="text-blue-500 mr-2" />
              <span className="text-gray-700 text-sm">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">{t('keyQuestionsTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {keyQuestions.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-start">
              <Icon size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{t(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide; 