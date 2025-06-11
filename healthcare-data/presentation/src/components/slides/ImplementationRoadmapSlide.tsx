import React from 'react';
import { Map, Settings, PlayCircle, HeartPulse } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ImplementationRoadmapSlide: React.FC<SlideProps> = ({ t }) => {
  const phases = [
    { icon: <Map size={28} />, title: t('s11_phase1_title'), description: t('s11_phase1_desc'), color: 'text-blue-500' },
    { icon: <Settings size={28} />, title: t('s11_phase2_title'), description: t('s11_phase2_desc'), color: 'text-purple-500' },
    { icon: <PlayCircle size={28} />, title: t('s11_phase3_title'), description: t('s11_phase3_desc'), color: 'text-green-500' },
    { icon: <HeartPulse size={28} />, title: t('s11_phase4_title'), description: t('s11_phase4_desc'), color: 'text-orange-500' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s11_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s11_subheader')}</p>
      
      <div className="relative border-l-4 border-blue-200 ml-6">
        {phases.map((phase, index) => (
          <div key={index} className="mb-10 ml-10">
            <span className={`absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-8 ring-white ${phase.color}`}>
              {phase.icon}
            </span>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImplementationRoadmapSlide; 