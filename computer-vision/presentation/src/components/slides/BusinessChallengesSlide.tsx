import React from 'react';
import { DollarSign, Zap, AlertTriangle, TrendingUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const BusinessChallengesSlide: React.FC<SlideProps> = ({ t }) => {
  const challenges = [
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      title: t('slide2_financial_title'),
      points: [
        t('slide2_financial_point1'),
        t('slide2_financial_point2'),
        t('slide2_financial_point3'),
        t('slide2_financial_point4'),
      ],
      bgColor: 'bg-red-50',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: t('slide2_operational_title'),
      points: [
        t('slide2_operational_point1'),
        t('slide2_operational_point2'),
        t('slide2_operational_point3'),
        t('slide2_operational_point4'),
      ],
      bgColor: 'bg-yellow-50',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: t('slide2_market_title'),
      points: [
        t('slide2_market_point1'),
        t('slide2_market_point2'),
        t('slide2_market_point3'),
        t('slide2_market_point4'),
      ],
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide2_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide2_subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${challenge.bgColor}`}>
            <div className="flex items-center mb-4">
              {challenge.icon}
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{challenge.title}</h3>
            </div>
            <ul className="space-y-2">
              {challenge.points.map((point, i) => (
                <li key={i} className="flex">
                  <AlertTriangle className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessChallengesSlide; 