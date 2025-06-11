import React from 'react';
import { DatabaseZap, FileWarning, Recycle, UserCog } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const BusinessChallengesSlide: React.FC<SlideProps> = ({ t }) => {
  const challenges = [
    {
      icon: <DatabaseZap size={40} className="text-red-500" />,
      title: t('s2_item1_title'),
      desc: t('s2_item1_desc'),
    },
    {
      icon: <FileWarning size={40} className="text-yellow-500" />,
      title: t('s2_item2_title'),
      desc: t('s2_item2_desc'),
    },
    {
      icon: <Recycle size={40} className="text-blue-500" />,
      title: t('s2_item3_title'),
      desc: t('s2_item3_desc'),
    },
    {
      icon: <UserCog size={40} className="text-green-500" />,
      title: t('s2_item4_title'),
      desc: t('s2_item4_desc'),
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s2_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-10">{t('s2_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="mr-5 flex-shrink-0">
              {challenge.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessChallengesSlide; 