import React from 'react';
import { Rocket, ListChecks, ThumbsUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const NextStepsSlide: React.FC<SlideProps> = ({ t }) => {
  const phases = [
    { title: t('slide12_phase1_title'), duration: t('slide12_phase1_duration'), points: [t('slide12_phase1_point1'), t('slide12_phase1_point2')] },
    { title: t('slide12_phase2_title'), duration: t('slide12_phase2_duration'), points: [t('slide12_phase2_point1'), t('slide12_phase2_point2')] },
    { title: t('slide12_phase3_title'), duration: t('slide12_phase3_duration'), points: [t('slide12_phase3_point1'), t('slide12_phase3_point2')] },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide12_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide12_subtitle')}</p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Rocket className="mr-2 text-blue-600" />
          {t('slide12_action_plan_title')}
        </h3>
        <div className="relative border-l-2 border-blue-200 pl-8">
          {phases.map((phase, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
              <p className="font-bold text-blue-700">{phase.title} <span className="font-normal text-gray-500">({phase.duration})</span></p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {phase.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-green-100 p-6 rounded-lg border border-green-300">
        <ThumbsUp className="mx-auto text-green-700 mb-2" size={40} />
        <h3 className="text-2xl font-bold text-green-800">{t('slide12_cta_title')}</h3>
        <p className="text-gray-700 mt-2">{t('slide12_cta_text')}</p>
      </div>
    </div>
  );
};

export default NextStepsSlide; 