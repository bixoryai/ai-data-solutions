import React from 'react';
import { LayoutDashboard, BrainCircuit, ShieldAlert, Smartphone } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const DemoSlide: React.FC<SlideProps> = ({ t }) => {
  const features = [
    { 
      icon: <LayoutDashboard className="w-8 h-8 text-blue-600" />,
      title: t('slide6_feature1_title'),
      points: [t('slide6_feature1_point1'), t('slide6_feature1_point2'), t('slide6_feature1_point3')]
    },
    { 
      icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
      title: t('slide6_feature2_title'),
      points: [t('slide6_feature2_point1'), t('slide6_feature2_point2'), t('slide6_feature2_point3')]
    },
    { 
      icon: <ShieldAlert className="w-8 h-8 text-blue-600" />,
      title: t('slide6_feature3_title'),
      points: [t('slide6_feature3_point1'), t('slide6_feature3_point2'), t('slide6_feature3_point3')]
    },
    { 
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: t('slide6_feature4_title'),
      points: [t('slide6_feature4_point1'), t('slide6_feature4_point2'), t('slide6_feature4_point3')]
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide6_mainTitle')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 mr-4 mt-1">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {feature.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 italic">{t('slide6_screenshot_placeholder')}</p>
      </div>
    </div>
  );
};

export default DemoSlide; 