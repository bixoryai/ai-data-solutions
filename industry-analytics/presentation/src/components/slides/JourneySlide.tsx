import React from 'react';
import { Search, Laptop, PieChart, BarChart4, Award } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const JourneySlide: React.FC<SlideProps> = ({ t }) => {
  const timelinePhases = [
    {
      weeks: "Weeks 1-4",
      title: 'Discovery & AI Value Assessment',
      description: "Identify high-value opportunities and establish baselines",
      icon: <Search size={32} className="text-blue-400" />
    },
    {
      weeks: "Weeks 5-6",
      title: 'First AI Model Deployment',
      description: "Implement initial models for quick wins",
      icon: <Laptop size={32} className="text-purple-400" />
    },
    {
      weeks: "Weeks 7-8",
      title: 'Initial Insights & Validation',
      description: "Evaluate results and refine models",
      icon: <PieChart size={32} className="text-yellow-400" />
    },
    {
      weeks: "Weeks 9-10",
      title: 'Process Integration',
      description: "Embed AI into workflows and systems",
      icon: <BarChart4 size={32} className="text-pink-400" />
    },
    {
      weeks: "Weeks 11-12",
      title: 'Value Measurement & Expansion',
      description: "Quantify impact and plan for future expansion",
      icon: <Award size={32} className="text-green-400" />
    }
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">The 90-Day Journey to Value</h2>
      <p className="text-xl text-gray-400 mb-10">From Discovery to Measured Value in 12 Weeks</p>
      <div className="flex justify-between items-stretch space-x-2">
        {timelinePhases.map((phase, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <div className="flex-shrink-0 mb-4">{phase.icon}</div>
              <p className="font-bold text-gray-400 text-sm mb-2">{phase.weeks}</p>
              <h3 className="text-lg font-semibold text-white mb-2 flex-grow">{phase.title}</h3>
              <p className="text-sm text-gray-400">{phase.description}</p>
            </div>
            {index < timelinePhases.length - 1 && (
              <div className="flex items-center">
                <span className="font-bold text-blue-400 text-3xl">›</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-10">
        <p className="text-lg text-green-300">
          Our structured methodology consistently delivers <span className="font-bold text-xl text-white">measurable results by week 8</span> and <span className="font-bold text-xl text-white">positive ROI by week 12</span>.
        </p>
      </div>
    </div>
  );
};

export default JourneySlide; 