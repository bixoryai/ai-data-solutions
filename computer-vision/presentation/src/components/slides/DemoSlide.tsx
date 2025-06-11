import React from 'react';
import { Video, BarChart, Settings, HelpCircle } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const DemoSlide: React.FC<SlideProps> = ({ t }) => {
  const demoPoints = [
    { icon: <Video className="w-8 h-8 text-blue-600" />, title: t('slide11_point1_title'), text: t('slide11_point1_text') },
    { icon: <BarChart className="w-8 h-8 text-blue-600" />, title: t('slide11_point2_title'), text: t('slide11_point2_text') },
    { icon: <Settings className="w-8 h-8 text-blue-600" />, title: t('slide11_point3_title'), text: t('slide11_point3_text') },
    { icon: <HelpCircle className="w-8 h-8 text-blue-600" />, title: t('slide11_point4_title'), text: t('slide11_point4_text') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide11_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide11_subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoPoints.map((point, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              {point.icon}
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{point.title}</h3>
            </div>
            <p className="text-gray-700">{point.text}</p>
          </div>
        ))}
      </div>
       <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{t('slide11_custom_demo_title')}</h3>
        <p className="text-gray-700">{t('slide11_custom_demo_text')}</p>
      </div>
    </div>
  );
};

export default DemoSlide; 