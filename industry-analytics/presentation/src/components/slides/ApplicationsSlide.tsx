import React, { useState } from 'react';
import { Heart, DollarSign, Factory, Lightbulb } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

type AppItem = {
  metric: string;
  title: string;
  description: string;
};

type TabContentType = {
  healthcare: AppItem[];
  financial: AppItem[];
  manufacturing: AppItem[];
  energy: AppItem[];
};

type TabType = 'healthcare' | 'financial' | 'manufacturing' | 'energy';

const ApplicationsSlide: React.FC<SlideProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<TabType>('manufacturing');

  const tabContent: TabContentType = {
    healthcare: [
      { metric: '22%', title: 'Patient Journey Optimization', description: 'Reducing length of stay through ML-optimized clinical pathways' },
      { metric: '97%', title: 'Medical Image Analysis', description: 'Diagnostic accuracy on radiology images with specialized computer vision' },
      { metric: '35%', title: 'Treatment Response Prediction', description: 'Personalized medicine algorithms improving outcomes' }
    ],
    financial: [
      { metric: '52%', title: 'Fraud Detection Networks', description: 'Graph-based AI detecting more fraud with 60% fewer false positives' },
      { metric: '38%', title: 'Risk Modeling', description: 'Combining traditional and alternative data for more accurate risk assessment' },
      { metric: '99.2%', title: 'Regulatory Compliance', description: 'NLP extracting obligations from complex regulations with high accuracy' }
    ],
    manufacturing: [
      { metric: '6-10x', title: 'Predictive Quality Control', description: 'Detecting defects earlier than traditional methods' },
      { metric: '15-22%', title: 'Digital Twin Optimization', description: 'Virtual simulations reducing production costs' },
      { metric: '93%', title: 'Predictive Maintenance', description: 'Accurate failure prediction preventing unplanned downtime' }
    ],
    energy: [
      { metric: '99.2%', title: 'Grid Load Forecasting', description: 'AI predicting demand patterns with high accuracy for optimal distribution' },
      { metric: '3-4 wks', title: 'Preventative Infrastructure', description: 'Predicting equipment failures weeks before occurrence' },
      { metric: '17-25%', title: 'Consumption Optimization', description: 'Reducing energy waste through intelligent usage patterns' }
    ]
  };

  const tabs = [
    { id: 'manufacturing', icon: Factory, label: 'Manufacturing' },
    { id: 'healthcare', icon: Heart, label: 'Healthcare' },
    { id: 'financial', icon: DollarSign, label: 'Financial Services' },
    { id: 'energy', icon: Lightbulb, label: 'Energy & Utilities' },
  ];

  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific AI Applications</h2>
      <p className="text-xl text-gray-400 mb-10">Tailored Solutions for Each Industry</p>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-center border-b border-gray-700 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center space-x-2 px-6 py-3 text-lg font-medium transition-colors
                ${activeTab === tab.id ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-white'}`}
            >
              <tab.icon size={22} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabContent[activeTab].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-3">{item.metric}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-10">
        <p className="text-lg text-yellow-300">
          Our solutions deliver <span className="font-bold text-xl text-white">3x faster time-to-value</span> than generic AI platforms
        </p>
      </div>
    </div>
  );
};

export default ApplicationsSlide; 