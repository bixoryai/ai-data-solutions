import React from 'react';
import { BrainCircuit, Cpu, ShieldCheck, Settings } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const TechnologyDeepDiveSlide: React.FC<SlideProps> = ({ t }) => {
  const techPillars = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
      title: t('slide6_pillar1_title'),
      points: [
        t('slide6_pillar1_point1'),
        t('slide6_pillar1_point2'),
        t('slide6_pillar1_point3'),
      ],
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: t('slide6_pillar2_title'),
      points: [
        t('slide6_pillar2_point1'),
        t('slide6_pillar2_point2'),
        t('slide6_pillar2_point3'),
      ],
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: t('slide6_pillar3_title'),
      points: [
        t('slide6_pillar3_point1'),
        t('slide6_pillar3_point2'),
        t('slide6_pillar3_point3'),
      ],
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: t('slide6_pillar4_title'),
      points: [
        t('slide6_pillar4_point1'),
        t('slide6_pillar4_point2'),
        t('slide6_pillar4_point3'),
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide6_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide6_subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techPillars.map((pillar, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              {pillar.icon}
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{pillar.title}</h3>
            </div>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {pillar.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyDeepDiveSlide; 