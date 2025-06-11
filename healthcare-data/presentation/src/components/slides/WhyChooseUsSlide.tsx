import React from 'react';
import { Award, TestTube2, Handshake, Rocket } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const WhyChooseUsSlide: React.FC<SlideProps> = ({ t }) => {
  const points = [
    { icon: <Award size={28} className="text-white" />, title: t('s13_point1_title'), description: t('s13_point1_desc') },
    { icon: <TestTube2 size={28} className="text-white" />, title: t('s13_point2_title'), description: t('s13_point2_desc') },
    { icon: <Handshake size={28} className="text-white" />, title: t('s13_point3_title'), description: t('s13_point3_desc') },
    { icon: <Rocket size={28} className="text-white" />, title: t('s13_point4_title'), description: t('s13_point4_desc') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s13_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s13_subheader')}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((point, index) => (
          <div key={index} className="bg-blue-600 text-white p-6 rounded-lg shadow-xl hover:bg-blue-700 transition-colors transform hover:-translate-y-2 duration-300">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-white bg-opacity-20 mb-5 mx-auto">
              {point.icon}
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{point.title}</h3>
            <p className="text-center text-sm opacity-90">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSlide; 