import React from 'react';
import { Brain, Cog, Shield, Users } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const SolutionSlide: React.FC<SlideProps> = ({ t }) => {
  const capabilities = [
    { 
      icon: <Brain className="w-10 h-10 text-blue-600 mb-2" />,
      title: t('slide4_cap1_title'),
      description: t('slide4_cap1_desc'),
      impact: t('slide4_cap1_impact')
    },
    { 
      icon: <Cog className="w-10 h-10 text-blue-600 mb-2" />,
      title: t('slide4_cap2_title'),
      description: t('slide4_cap2_desc'),
      impact: t('slide4_cap2_impact')
    },
    { 
      icon: <Shield className="w-10 h-10 text-blue-600 mb-2" />,
      title: t('slide4_cap3_title'),
      description: t('slide4_cap3_desc'),
      impact: t('slide4_cap3_impact')
    },
    { 
      icon: <Users className="w-10 h-10 text-blue-600 mb-2" />,
      title: t('slide4_cap4_title'),
      description: t('slide4_cap4_desc'),
      impact: t('slide4_cap4_impact')
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide4_mainTitle')}</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">{t('slide4_sub1_title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center">{cap.icon}</div>
              <h4 className="text-xl font-bold text-blue-800">{cap.title}</h4>
              <p className="text-gray-600 mt-2 text-sm">{cap.description}</p>
              <p className="mt-3 text-green-600 font-semibold text-sm">{cap.impact}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">{t('slide4_sub2_title')}</h3>
        <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-gray-700">{t('slide4_arch_desc')}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide; 