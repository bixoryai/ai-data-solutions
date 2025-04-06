import React from 'react';

interface WhatIsSyntheticDataProps {
  language: 'en' | 'zh';
}

const WhatIsSyntheticData: React.FC<WhatIsSyntheticDataProps> = ({ language }) => {
  const content = {
    en: {
      title: 'What is Synthetic Data Generation?',
      definition: 'Definition & Core Value Proposition:',
      definitionText: 'Artificially generated data that statistically mimics real data but contains no original information.',
      valueProposition: 'Enables AI innovation while solving privacy issues and data limitations.',
      useCases: 'Key Use Cases:',
      useCasesList: [
        'Train AI models without privacy risks',
        'Test software with realistic but safe data',
        'Share data across organizations and borders',
        'Augment limited datasets with synthetic samples',
        'Simulate edge cases and rare scenarios'
      ]
    },
    zh: {
      title: '什么是合成数据生成?',
      definition: '定义与核心价值主张:',
      definitionText: '统计上模拟真实数据但不包含原始信息的人工数据',
      valueProposition: '在解决隐私问题和数据限制的同时促进AI创新',
      useCases: '主要用例:',
      useCasesList: [
        '无隐私风险地训练AI模型',
        '使用真实但安全的数据测试软件',
        '跨组织和国境共享数据',
        '用合成样本增强有限数据集',
        '模拟边缘情况和罕见场景'
      ]
    }
  };

  const { title, definition, definitionText, valueProposition, useCases, useCasesList } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-primary-400 mb-4">{definition}</h3>
          <p className="text-xl mb-4">{definitionText}</p>
          <p className="text-xl italic">{valueProposition}</p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-primary-400 mb-4">{useCases}</h3>
          <ul className="space-y-3">
            {useCasesList.map((useCase, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span className="text-lg">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className="relative w-full max-w-2xl h-64 bg-gradient-to-r from-primary-900 to-primary-700 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">
                {language === 'en' ? 'Real Data → AI Model → Synthetic Data' : '真实数据 → AI模型 → 合成数据'}
              </div>
              <div className="text-lg opacity-80">
                {language === 'en' ? 'Statistically similar, but privacy-preserving' : '统计上相似，但保护隐私'}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsSyntheticData;
