import React from 'react';
import { LineChart, AlertCircle, FileText, BrainCircuit } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ApproachSlide: React.FC<SlideProps> = ({ t }) => {
  const capabilities = [
    {
      icon: <LineChart size={40} className="text-blue-400" />,
      title: 'Predictive Analytics',
      description: 'AI models that forecast trends and outcomes with 40-60% higher accuracy.',
    },
    {
      icon: <AlertCircle size={40} className="text-yellow-400" />,
      title: 'Anomaly Detection',
      description: 'Identifying unusual patterns across complex datasets in real-time.',
    },
    {
      icon: <FileText size={40} className="text-purple-400" />,
      title: 'Natural Language Understanding',
      description: 'Industry-specific document processing and knowledge extraction.',
    },
    {
      icon: <BrainCircuit size={40} className="text-green-400" />,
      title: 'Automated Decision Support',
      description: 'Augmenting human decisions with AI-driven recommendations.',
    },
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Our AI-First Approach</h2>
      <p className="text-xl text-gray-400 mb-10">Advanced AI Tailored to Industry Needs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((item, index) => (
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
        <p className="text-lg text-green-300">
          Our capabilities deliver <span className="font-bold text-xl text-white">40-60% higher accuracy</span> than generic AI solutions
        </p>
      </div>
    </div>
  );
};

export default ApproachSlide; 