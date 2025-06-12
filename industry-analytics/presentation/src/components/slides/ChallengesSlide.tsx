import React from 'react';
import { Network, AlertTriangle, Workflow, Server, GitBranch } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ChallengesSlide: React.FC<SlideProps> = ({ t }) => {
  const challenges = [
    {
      icon: <Network size={32} className="text-blue-400" />,
      title: 'Complex Decision Making',
      description: 'Multiple variables, non-linear relationships.',
    },
    {
      icon: <AlertTriangle size={32} className="text-yellow-400" />,
      title: 'Predictive Gaps',
      description: 'Unable to anticipate failures, trends, and opportunities.',
    },
    {
      icon: <Workflow size={32} className="text-purple-400" />,
      title: 'Operational Inefficiencies',
      description: 'Sub-optimal processes despite abundant data.',
    },
    {
      icon: <Server size={32} className="text-green-400" />,
      title: 'Untapped Data Value',
      description: 'Existing systems store data but don\'t extract insights.',
    },
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Key Business Challenges We Solve</h2>
      <p className="text-xl text-gray-400 mb-10">Common Industry Pain Points</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {challenges.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto flex items-center justify-center space-x-4">
        <GitBranch size={40} className="text-red-400" />
        <div>
          <h3 className="text-xl font-semibold text-white">AI Adoption Barriers</h3>
          <p className="text-gray-400">Fragmented systems, technical complexity, and ROI uncertainty.</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSlide; 