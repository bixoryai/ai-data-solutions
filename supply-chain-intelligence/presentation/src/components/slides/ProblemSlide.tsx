import React from 'react';
import { AlertTriangle, TrendingUp, DollarSign, Package } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ProblemSlide: React.FC<SlideProps> = ({ t }) => {
  const problems = [
    { icon: <DollarSign className="text-red-500" />, text: t('slide2_problem1') },
    { icon: <AlertTriangle className="text-red-500" />, text: t('slide2_problem2') },
    { icon: <Package className="text-red-500" />, text: t('slide2_problem3') },
    { icon: <TrendingUp className="text-red-500" />, text: t('slide2_problem4') },
  ];

  const opportunities = [
    { title: t('slide2_opportunity1_title'), value: "$24.3B", description: t('slide2_opportunity1_desc') },
    { title: t('slide2_opportunity2_title'), value: "73%", description: t('slide2_opportunity2_desc') },
    { title: t('slide2_opportunity3_title'), value: "15%", description: t('slide2_opportunity3_desc') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">{t('slide2_mainTitle')}</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">{t('slide2_title')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">{t('slide2_sub1_title')}</h3>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">{problem.icon}</div>
                <span className="text-gray-700">{problem.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">{t('slide2_sub2_title')}</h3>
          <div className="space-y-4">
            {opportunities.map((opp, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-green-700">{opp.value}</p>
                <p className="text-md font-semibold text-green-800">{opp.title}</p>
                <p className="text-sm text-gray-600">{opp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide; 