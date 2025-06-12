import React from 'react';
import { Award, GitBranch, Shield, Lock, Zap, RefreshCw } from 'lucide-react';

type TranslationKeys = 'companyStrengths' | 'industryAIExpertise' | 'domainKnowledge' | 'provenMethodology' | 'successRate' | 'proprietaryAlgorithms' | 'betterAccuracy' | 'enterpriseGrade' | 'securityScalability' | 'transparentROI' | 'clearMetrics' | 'futureProof' | 'continuousLearning';

interface SlideProps {
  t: (key: TranslationKeys) => string;
}

const StrengthsSlide: React.FC<SlideProps> = ({ t }) => {
  const companyStrengths = [
    {
      title: t('industryAIExpertise'),
      description: t('domainKnowledge'),
      icon: <Award size={32} className="text-blue-400" />
    },
    {
      title: t('provenMethodology'),
      description: t('successRate'),
      icon: <GitBranch size={32} className="text-green-400" />
    },
    {
      title: t('proprietaryAlgorithms'),
      description: t('betterAccuracy'),
      icon: <Zap size={32} className="text-yellow-400" />
    },
    {
      title: t('enterpriseGrade'),
      description: t('securityScalability'),
      icon: <Shield size={32} className="text-red-400" />
    },
    {
      title: t('transparentROI'),
      description: t('clearMetrics'),
      icon: <Lock size={32} className="text-purple-400" />
    },
    {
      title: t('futureProof'),
      description: t('continuousLearning'),
      icon: <RefreshCw size={32} className="text-pink-400" />
    }
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-10">{t('companyStrengths')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companyStrengths.map((strength, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4">
            <div className="flex-shrink-0">{strength.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{strength.title}</h3>
              <p className="text-gray-400">{strength.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrengthsSlide; 