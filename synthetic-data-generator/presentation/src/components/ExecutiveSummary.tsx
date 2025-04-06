import React from 'react';

interface ExecutiveSummaryProps {
  language: 'en' | 'zh';
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Executive Summary',
      points: [
        { label: 'Solution:', text: 'AI-driven synthetic data generation platform' },
        { label: 'Market:', text: 'Growing $1.5B market with low entry barriers ($50-200K)' },
        { label: 'Pain Points:', text: 'Data privacy regulations, data scarcity, AI model training needs' },
        { label: 'Value Proposition:', text: 'Privacy-preserving synthetic data that maintains statistical properties' }
      ]
    },
    zh: {
      title: '执行摘要',
      points: [
        { label: '内容:', text: 'AI驱动的合成数据生成平台' },
        { label: '市场:', text: '正在增长的15亿美元市场，进入门槛低(5-20万美元)' },
        { label: '痛点:', text: '数据隐私法规、数据稀缺、AI模型训练需求' },
        { label: '解决方案:', text: '在保持统计特性的同时保护隐私的合成数据' }
      ]
    }
  };

  const { title, points } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700">
        <ul className="space-y-6">
          {points.map((point, index) => (
            <li key={index} className="flex flex-col md:flex-row md:items-start">
              <span className="font-bold text-primary-400 md:w-1/4 text-xl mb-2 md:mb-0">{point.label}</span>
              <span className="md:w-3/4 text-xl">{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8 p-6 bg-primary-900 bg-opacity-30 rounded-lg border border-primary-700">
        <p className="text-center text-xl italic">
          {language === 'en' 
            ? "Creating synthetic data that enables AI innovation while solving privacy challenges and data limitations."
            : "创造合成数据，在解决隐私挑战和数据限制的同时促进AI创新。"}
        </p>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
