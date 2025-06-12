import React from 'react';
import { Database, Target, Code, Lock, TrendingUp, Cpu } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const StrengthsSlide: React.FC<SlideProps> = ({ t }) => {
  const companyStrengths = [
    { icon: <Database size={28} />, title: t('industryAIExpertise'), description: t('domainKnowledge') },
    { icon: <Target size={28} />, title: t('provenMethodology'), description: t('successRate') },
    { icon: <Code size={28} />, title: t('proprietaryAlgorithms'), description: t('betterAccuracy') },
    { icon: <Lock size={28} />, title: t('enterpriseGrade'), description: t('securityScalability') },
    { icon: <TrendingUp size={28} />, title: t('transparentROI'), description: t('clearMetrics') },
    { icon: <Cpu size={28} />, title: t('futureProof'), description: t('continuousLearning') },
  ];

  const companyStats = [
    { value: "95%", label: t('implementationSuccessRate') },
    { value: "30-50%", label: t('higherAccuracy') },
    { value: "3x", label: t('fasterTimeToValue') },
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg">
      <h2 className="text-4xl font-bold text-white text-center mb-4">{t('strengths')}</h2>
      <p className="text-xl text-gray-400 text-center mb-10">Uniquely Positioned to Deliver Value</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {companyStrengths.map((strength, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex justify-center text-blue-400 mb-4">{strength.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{strength.title}</h3>
            <p className="text-sm text-gray-400">{strength.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center py-4 md:py-0">
              <p className="text-4xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthsSlide; 