import React from 'react';
import { Layers, Clock, Shield, Zap, RefreshCw, GitBranch } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const IntegrationSlide: React.FC<SlideProps> = ({ t }) => {
  const features = [
    { icon: <Layers size={32} />, title: 'AI Overlay Architecture', description: 'Intelligence layer on existing systems.' },
    { icon: <Clock size={32} />, title: 'Non-disruptive Implementation', description: 'Minimal IT resource demands (2-4 hrs/week).' },
    { icon: <Shield size={32} />, title: 'Secure & Compliant', description: 'Privacy-preserving AI, support for all regulations.' },
    { icon: <Zap size={32} />, title: 'Fast Deployment', description: 'Pre-built connectors for major enterprise systems.' },
    { icon: <RefreshCw size={32} />, title: 'No Rip-and-Replace', description: 'Enhances rather than replaces current investments.' },
    { icon: <GitBranch size={32} />, title: 'Simplified Change Management', description: 'Intuitive interfaces reduce training needs by 65%.' },
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Seamless Enterprise Integration</h2>
      <p className="text-xl text-gray-400 mb-10">AI Enhancement Without Disruption</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
        {features.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex justify-center text-blue-400 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4 text-xl text-gray-300">
        <span className="bg-blue-600 px-4 py-2 rounded-lg">Connect</span>
        <span className="font-bold text-blue-400 text-2xl">→</span>
        <span className="bg-blue-600 px-4 py-2 rounded-lg">Configure</span>
        <span className="font-bold text-blue-400 text-2xl">→</span>
        <span className="bg-blue-600 px-4 py-2 rounded-lg">Deploy</span>
        <span className="font-bold text-blue-400 text-2xl">→</span>
        <span className="bg-blue-600 px-4 py-2 rounded-lg">Measure</span>
      </div>
    </div>
  );
};

export default IntegrationSlide; 