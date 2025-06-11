import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ProvenClinicalOutcomesSlide: React.FC<SlideProps> = ({ t }) => {
  const outcomes = [
    {
      icon: <ShieldCheck size={40} className="text-teal-500" />,
      title: t('s8_item1_title'),
      desc: t('s8_item1_desc'),
      source: t('s8_item1_source'),
    },
    {
      icon: <HeartHandshake size={40} className="text-rose-500" />,
      title: t('s8_item2_title'),
      desc: t('s8_item2_desc'),
      source: t('s8_item2_source'),
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s8_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s8_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {outcomes.map((outcome, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500">
            <div className="flex items-center mb-4">
              {outcome.icon}
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">{outcome.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{outcome.desc}</p>
            <p className="text-sm text-gray-500 italic text-right">{outcome.source}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
         {/* Placeholder for charts */}
        <img src="https://placehold.co/600x300/eef2ff/6366f1?text=Clinical+Outcome+Charts" alt={t('s8_image_alt')} className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default ProvenClinicalOutcomesSlide; 