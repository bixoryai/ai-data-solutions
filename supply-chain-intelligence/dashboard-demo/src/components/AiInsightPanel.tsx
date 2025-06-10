import React from 'react';
import { Lightbulb } from 'lucide-react';

interface AiInsightPanelProps {
  title: string;
  insight: string;
  recommendation: string;
  language: 'en' | 'zh';
}

const AiInsightPanel: React.FC<AiInsightPanelProps> = ({ title, insight, recommendation, language }) => {
  const translations = {
    recommendationTitle: { en: 'Recommendation', zh: '建议' },
  };

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg shadow-md mt-6">
      <div className="flex items-center mb-2">
        <Lightbulb className="h-6 w-6 mr-3" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="mb-3">{insight}</p>
      <div>
        <h4 className="font-bold">{translations.recommendationTitle[language]}</h4>
        <p>{recommendation}</p>
      </div>
    </div>
  );
};

export default AiInsightPanel; 