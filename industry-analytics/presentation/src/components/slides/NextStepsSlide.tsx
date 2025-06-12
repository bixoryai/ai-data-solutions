import React from 'react';
import { Calendar, Activity, Map, ArrowUpRight } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const NextStepsSlide: React.FC<SlideProps> = ({ t }) => {
  const nextSteps = [
    {
      icon: <Calendar size={32} className="text-blue-400" />,
      title: 'Discovery Workshop',
      description: 'A 2-hour session to identify your high-value opportunities.',
      step: 1
    },
    {
      icon: <Activity size={32} className="text-purple-400" />,
      title: 'AI Value Assessment',
      description: 'A 2-week analysis of your specific environment and data.',
      step: 2
    },
    {
      icon: <Map size={32} className="text-yellow-400" />,
      title: 'Implementation Plan',
      description: 'A detailed roadmap tailored to your top priorities.',
      step: 3
    },
    {
      icon: <ArrowUpRight size={32} className="text-green-400" />,
      title: 'Pilot Deployment',
      description: 'An 8-week implementation of the first high-value use case.',
      step: 4
    },
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Next Steps</h2>
      <p className="text-xl text-gray-400 mb-10">Your Path to AI-Powered Success</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {nextSteps.map((item) => (
          <div key={item.step} className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              <span className="text-blue-400 font-bold mr-2">{item.step}.</span>
              {item.title}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-2xl inline-block transition-colors cursor-pointer">
        Schedule Your Discovery Workshop
      </div>
       <p className="mt-4 text-gray-400">develop@bixory.ai | (408) 658-8538</p>
    </div>
  );
};

export default NextStepsSlide; 