import React from 'react';
import { ArrowRight, Database, Brain, Siren, BarChart } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const PredictiveAnalyticsDeepDiveSlide: React.FC<SlideProps> = ({ t }) => {
  const steps = [
    { icon: <Database size={32} className="text-blue-600" />, title: t('s5_item1_title'), description: t('s5_item1_desc') },
    { icon: <Brain size={32} className="text-purple-600" />, title: t('s5_item2_title'), description: t('s5_item2_desc') },
    { icon: <BarChart size={32} className="text-green-600" />, title: t('s5_item3_title'), description: t('s5_item3_desc') },
    { icon: <Siren size={32} className="text-red-600" />, title: t('s5_item4_title'), description: t('s5_item4_desc') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s5_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s5_subheader')}</p>
      
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center p-4 max-w-[200px]">
              <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-md font-semibold text-gray-800">{step.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block">
                <ArrowRight size={32} className="text-gray-400" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PredictiveAnalyticsDeepDiveSlide; 