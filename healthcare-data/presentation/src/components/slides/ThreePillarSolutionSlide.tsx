import React from 'react';
import { ShieldAlert, ScanSearch, AreaChart } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ThreePillarSolutionSlide: React.FC<SlideProps> = ({ t }) => {
  const pillars = [
    {
      icon: <ShieldAlert size={48} className="text-white" />,
      title: t('s4_pillar1_title'),
      desc: t('s4_pillar1_desc'),
      bgColor: 'bg-blue-600',
    },
    {
      icon: <ScanSearch size={48} className="text-white" />,
      title: t('s4_pillar2_title'),
      desc: t('s4_pillar2_desc'),
      bgColor: 'bg-teal-600',
    },
    {
      icon: <AreaChart size={48} className="text-white" />,
      title: t('s4_pillar3_title'),
      desc: t('s4_pillar3_desc'),
      bgColor: 'bg-indigo-600',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s4_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s4_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-xl shadow-2xl text-white flex flex-col items-center text-center transform hover:scale-105 transition-transform ${pillar.bgColor}`}
          >
            <div className="mb-6">
              {pillar.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
            <p className="opacity-90">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreePillarSolutionSlide; 