import React from 'react';
import { Briefcase, BarChart, AlertTriangle, TrendingUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const MarketOpportunitySlide: React.FC<SlideProps> = ({ t }) => {
  const content = {
    en: {
      title: "The $190 Billion Opportunity",
      subtitle: "Financial Services is Being Revolutionized by AI",
      marketReality: "The Market Reality",
      stat1: "$190.33 Billion Market by 2030",
      stat1_desc: "(30.6% CAGR)",
      stat2: "$8.8 Billion in Fraud Losses",
      stat2_desc: "(30% increase in 2022)",
      stat3: "94% Accuracy in AI-powered fraud detection",
      stat4: "$10+ Billion lost to consumer fraud in 2023 alone"
    },
    zh: {
      title: "1900亿美元的机遇",
      subtitle: "金融服务正在被AI革命化",
      marketReality: "市场现状",
      stat1: "到2030年市场规模将达到1903.3亿美元",
      stat1_desc: "（复合年增长率30.6%）",
      stat2: "88亿美元的欺诈损失",
      stat2_desc: "（2022年增长30%）",
      stat3: "AI驱动的欺诈检测准确率达94%",
      stat4: "仅2023年消费者欺诈损失就超过100亿美元"
    }
  };

  const currentContent = t('language') === 'zh' ? content.zh : content.en;
  
  return (
    <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
        <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{currentContent.marketReality}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>{currentContent.stat1} <span className="text-sm">{currentContent.stat1_desc}</span></li>
                    <li>{currentContent.stat2} <span className="text-sm">{currentContent.stat2_desc}</span></li>
                    <li>{currentContent.stat3}</li>
                    <li>{currentContent.stat4}</li>
                </ul>
            </div>
            {/* You can add another column here for a visual or more stats */}
            <div className="bg-blue-50 p-6 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-24 h-24 text-blue-400" />
            </div>
        </div>
    </div>
  );
};

export default MarketOpportunitySlide; 