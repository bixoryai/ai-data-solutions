import React from 'react';
import { Database, FileSpreadsheet, Shield, BarChart2, Lock, Share2, PlusCircle, AlertTriangle, Layers } from 'lucide-react';

interface WhatIsSyntheticDataProps {
  language: 'en' | 'zh';
}

const WhatIsSyntheticData: React.FC<WhatIsSyntheticDataProps> = ({ language }) => {
  const content = {
    en: {
      title: 'What is Synthetic Data Generation?',
      description: 'Synthetic data generation is the process of creating artificial data that statistically mimics real-world data without containing any original sensitive information. It enables AI innovation while solving privacy issues and data limitations.',
      keyUseCases: 'Key Use Cases:',
      useCases: [
        {
          title: 'Privacy-Preserving AI Training',
          description: 'Train AI models without privacy risks',
          icon: <Lock className="text-blue-400" size={24} />
        },
        {
          title: 'Safe Software Testing',
          description: 'Test applications with realistic but safe data',
          icon: <Shield className="text-green-400" size={24} />
        },
        {
          title: 'Cross-Border Data Sharing',
          description: 'Share data across organizations and borders',
          icon: <Share2 className="text-purple-400" size={24} />
        },
        {
          title: 'Data Augmentation',
          description: 'Augment limited datasets with synthetic samples',
          icon: <PlusCircle className="text-amber-400" size={24} />
        },
        {
          title: 'Edge Case Simulation',
          description: 'Simulate rare scenarios and edge cases',
          icon: <AlertTriangle className="text-red-400" size={24} />
        },
        {
          title: 'Data Transformation',
          description: 'Convert between data formats while preserving patterns',
          icon: <Layers className="text-indigo-400" size={24} />
        }
      ],
      dataFlow: 'Synthetic Data Generation Process',
      realData: 'Real Data',
      aiModel: 'AI Model',
      syntheticData: 'Synthetic Data',
      statistically: 'Statistically similar, but privacy-preserving'
    },
    zh: {
      title: '什么是合成数据生成?',
      description: '合成数据生成是创建人工数据的过程，这些数据在统计上模拟真实世界的数据，但不包含任何原始敏感信息。它在解决隐私问题和数据限制的同时促进AI创新。',
      keyUseCases: '主要用例:',
      useCases: [
        {
          title: '保护隐私的AI训练',
          description: '无隐私风险地训练AI模型',
          icon: <Lock className="text-blue-400" size={24} />
        },
        {
          title: '安全软件测试',
          description: '使用真实但安全的数据测试软件',
          icon: <Shield className="text-green-400" size={24} />
        },
        {
          title: '跨境数据共享',
          description: '跨组织和国境共享数据',
          icon: <Share2 className="text-purple-400" size={24} />
        },
        {
          title: '数据增强',
          description: '用合成样本增强有限数据集',
          icon: <PlusCircle className="text-amber-400" size={24} />
        },
        {
          title: '边缘情况模拟',
          description: '模拟边缘情况和罕见场景',
          icon: <AlertTriangle className="text-red-400" size={24} />
        },
        {
          title: '数据转换',
          description: '在保留模式的同时转换数据格式',
          icon: <Layers className="text-indigo-400" size={24} />
        }
      ],
      dataFlow: '合成数据生成过程',
      realData: '真实数据',
      aiModel: 'AI模型',
      syntheticData: '合成数据',
      statistically: '统计上相似，但保护隐私'
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">{content[language].title}</h2>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto">
          {content[language].description}
        </p>
      </div>

      {/* Use Cases Grid with Icons */}
      <div>
        <h3 className="text-xl font-semibold text-blue-300 mb-6">{content[language].keyUseCases}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {useCase.icon}
                <h4 className="text-lg font-semibold ml-3 text-white">{useCase.title}</h4>
              </div>
              <p className="text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Data Flow Visualization */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-blue-300 mb-6 text-center">{content[language].dataFlow}</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 p-6 bg-gray-800 bg-opacity-50 rounded-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-2">
              <Database size={32} className="text-blue-300" />
            </div>
            <span className="text-white font-medium">{content[language].realData}</span>
          </div>
          
          <div className="hidden md:block">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H58M58 12L46 1M58 12L46 23" stroke="#60A5FA" strokeWidth="2" />
            </svg>
          </div>
          <div className="block md:hidden">
            <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V58M12 58L1 46M12 58L23 46" stroke="#60A5FA" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mb-2">
              <BarChart2 size={32} className="text-purple-300" />
            </div>
            <span className="text-white font-medium">{content[language].aiModel}</span>
          </div>
          
          <div className="hidden md:block">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H58M58 12L46 1M58 12L46 23" stroke="#60A5FA" strokeWidth="2" />
            </svg>
          </div>
          <div className="block md:hidden">
            <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V58M12 58L1 46M12 58L23 46" stroke="#60A5FA" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mb-2">
              <FileSpreadsheet size={32} className="text-green-300" />
            </div>
            <span className="text-white font-medium">{content[language].syntheticData}</span>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-4">{content[language].statistically}</p>
      </div>
    </div>
  );
};

export default WhatIsSyntheticData;
