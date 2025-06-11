import React from 'react';
import { GitMerge, Smartphone, FlaskConical } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const FutureRoadmapSlide: React.FC<SlideProps> = ({ t }) => {
  const roadmapItems = [
    {
      icon: <GitMerge size={32} className="text-white" />,
      title: t('s16_q3_title'),
      description: t('s16_q3_desc'),
      bgColor: 'bg-blue-500',
    },
    {
      icon: <Smartphone size={32} className="text-white" />,
      title: t('s16_q4_title'),
      description: t('s16_q4_desc'),
      bgColor: 'bg-purple-500',
    },
    {
      icon: <FlaskConical size={32} className="text-white" />,
      title: t('s16_2025_title'),
      description: t('s16_2025_desc'),
      bgColor: 'bg-green-500',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s16_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s16_subheader')}</p>
      
      <div className="space-y-8">
        {roadmapItems.map((item, index) => (
          <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6 ${item.bgColor}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureRoadmapSlide; 