import React from 'react';
import { Award, Target, Users } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const PartnershipValuePropSlide: React.FC<SlideProps> = ({ t }) => {
  const sections = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: t('slide8_section1_title'),
      points: [
        t('slide8_section1_point1'),
        t('slide8_section1_point2'),
        t('slide8_section1_point3'),
      ],
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: t('slide8_section2_title'),
      points: [
        t('slide8_section2_point1'),
        t('slide8_section2_point2'),
        t('slide8_section2_point3'),
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: t('slide8_section3_title'),
      points: [
        t('slide8_section3_point1'),
        t('slide8_section3_point2'),
        t('slide8_section3_point3'),
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide8_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide8_subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              {section.icon}
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{section.title}</h3>
            </div>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipValuePropSlide; 