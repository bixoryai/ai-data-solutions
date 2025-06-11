import React from 'react';
import { Lightbulb, Presentation, Calculator } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const GettingStartedSlide: React.FC<SlideProps> = ({ t }) => {
  const steps = [
    { icon: <Lightbulb size={32} className="text-blue-500" />, title: t('s17_step1_title'), description: t('s17_step1_desc') },
    { icon: <Presentation size={32} className="text-purple-500" />, title: t('s17_step2_title'), description: t('s17_step2_desc') },
    { icon: <Calculator size={32} className="text-green-500" />, title: t('s17_step3_title'), description: t('s17_step3_desc') },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">{t('s17_title')}</h2>
      <p className="text-lg text-gray-600 mb-12">{t('s17_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform">
            <div className="flex justify-center items-center w-20 h-20 bg-gray-100 rounded-full mx-auto mb-5">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-blue-700 transition-colors shadow-lg">
        {t('s17_cta')}
      </button>
    </div>
  );
};

export default GettingStartedSlide; 