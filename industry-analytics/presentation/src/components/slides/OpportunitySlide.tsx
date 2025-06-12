import React from 'react';
import { DollarSign, TrendingUp, Cpu, Database } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const OpportunitySlide: React.FC<SlideProps> = ({ t }) => {
  const opportunities = [
    {
      icon: <DollarSign size={32} className="text-green-400" />,
      title: '$7B Market by 2030',
      description: 'A rapidly growing market for industry-specific AI solutions.',
    },
    {
      icon: <TrendingUp size={32} className="text-blue-400" />,
      title: '3x Higher ROI',
      description: 'Industry-tailored AI consistently outperforms generic solutions.',
    },
    {
      icon: <Cpu size={32} className="text-purple-400" />,
      title: 'Competitive Differentiation',
      description: 'Generic AI is no longer sufficient for a competitive edge.',
    },
    {
      icon: <Database size={32} className="text-yellow-400" />,
      title: 'Data Monetization',
      description: 'Your existing systems contain valuable data waiting to be unlocked.',
    },
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">The Opportunity</h2>
      <p className="text-xl text-gray-400 mb-10">Why Industry-specific AI Analytics Now?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {opportunities.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p className="text-lg text-blue-300">
          Industry AI adoption is expected to grow at <span className="font-bold text-xl text-white">24% CAGR</span>
        </p>
      </div>
    </div>
  );
};

export default OpportunitySlide; 