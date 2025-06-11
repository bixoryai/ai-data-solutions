import React from 'react';
import { Layers, BrainCircuit, BotMessageSquare, PersonStanding } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const AiAdvantageSlide: React.FC<SlideProps> = ({ t }) => {
  const advantages = [
    {
      icon: <Layers size={32} className="text-blue-500" />,
      title: t('s3_item1_title'),
      desc: t('s3_item1_desc'),
    },
    {
      icon: <BrainCircuit size={32} className="text-purple-500" />,
      title: t('s3_item2_title'),
      desc: t('s3_item2_desc'),
    },
    {
      icon: <BotMessageSquare size={32} className="text-green-500" />,
      title: t('s3_item3_title'),
      desc: t('s3_item3_desc'),
    },
    {
      icon: <PersonStanding size={32} className="text-orange-500" />,
      title: t('s3_item4_title'),
      desc: t('s3_item4_desc'),
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s3_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-10">{t('s3_subheader')}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((advantage, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 border-t-4 border-blue-400">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-blue-100 mx-auto">
              {advantage.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{advantage.title}</h3>
            <p className="text-gray-600 text-center text-sm">{advantage.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAdvantageSlide; 