import React from 'react';
import { BrainCircuit, LineChart, DollarSign, TrendingUp, Lightbulb, Factory } from 'lucide-react';

type TranslationKeys = 'industrySpecificAI' | 'transformingIndustries' | 'predictiveAnalytics' | 'operationalEfficiency' | 'transparentROI' | 'valueAcceleration';

interface SlideProps {
  t: (key: TranslationKeys) => string;
}

const IntroductionSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="slide flex flex-col items-center justify-center text-center bg-gray-900 p-12 rounded-lg">
      <div className="flex items-center text-blue-400 mb-4">
        <Factory size={48} className="mr-4" />
        <h1 className="text-5xl font-bold text-white">{t('industrySpecificAI')}</h1>
      </div>
      <p className="text-2xl text-gray-300 mb-8 max-w-4xl">{t('transformingIndustries')}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <BrainCircuit size={40} className="text-blue-400 mb-3" />
          <h3 className="text-xl font-semibold text-white">{t('predictiveAnalytics')}</h3>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <LineChart size={40} className="text-green-400 mb-3" />
          <h3 className="text-xl font-semibold text-white">{t('operationalEfficiency')}</h3>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <DollarSign size={40} className="text-yellow-400 mb-3" />
          <h3 className="text-xl font-semibold text-white">{t('transparentROI')}</h3>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <TrendingUp size={40} className="text-purple-400 mb-3" />
          <h3 className="text-xl font-semibold text-white">{t('valueAcceleration')}</h3>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide; 