import React from 'react';
import { Building, TrendingUp, HeartPulse, BrainCircuit } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const CustomerSuccessSlide: React.FC<SlideProps> = ({ t }) => {
  const stories = [
    {
      icon: <HeartPulse size={32} className="text-rose-500" />,
      title: t('s15_story1_title'),
      challenge: t('s15_story1_challenge'),
      solution: t('s15_story1_solution'),
      result: t('s15_story1_result'),
    },
    {
      icon: <BrainCircuit size={32} className="text-indigo-500" />,
      title: t('s15_story2_title'),
      challenge: t('s15_story2_challenge'),
      solution: t('s15_story2_solution'),
      result: t('s15_story2_result'),
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s15_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s15_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {stories.map((story, index) => (
          <div key={index} className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                {story.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{story.title}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p><strong className="font-semibold text-gray-700">{t('s15_story1_challenge')}</strong> {story.challenge.split(': ')[1]}</p>
              <p><strong className="font-semibold text-gray-700">{t('s15_story1_solution')}</strong> {story.solution.split(': ')[1]}</p>
              <p className="pt-2"><strong className="font-semibold text-green-600">{t('s15_story1_result')}</strong> <span className="text-green-700 font-bold">{story.result.split(': ')[1]}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSuccessSlide; 