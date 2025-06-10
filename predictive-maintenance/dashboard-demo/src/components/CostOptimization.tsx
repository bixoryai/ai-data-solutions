import React from 'react';
import { TrendingDown, DollarSign, BarChart2 } from 'lucide-react';

interface CostOptimizationProps {
  language: 'en' | 'zh';
  selectedSector: 'manufacturing' | 'energy' | 'transportation';
}

const CostOptimization: React.FC<CostOptimizationProps> = ({ language, selectedSector }) => {
  const content = {
    en: {
      title: 'Cost Optimization',
      description: 'Optimize maintenance costs through AI-driven recommendations.',
      currentCosts: 'Current Maintenance Costs',
      potentialSavings: 'Potential Savings',
      optimizationOpportunities: 'Optimization Opportunities',
      inDevelopment: 'This feature is currently in development.',
      month: 'Month',
      quarter: 'Quarter',
      year: 'Year',
      laborCosts: 'Labor Costs',
      partsCosts: 'Parts Costs',
      downtimeCosts: 'Downtime Costs',
      totalCosts: 'Total Costs'
    },
    zh: {
      title: '成本优化',
      description: '通过AI驱动的建议优化维护成本。',
      currentCosts: '当前维护成本',
      potentialSavings: '潜在节省',
      optimizationOpportunities: '优化机会',
      inDevelopment: '此功能目前正在开发中。',
      month: '月',
      quarter: '季度',
      year: '年',
      laborCosts: '人工成本',
      partsCosts: '零件成本',
      downtimeCosts: '停机成本',
      totalCosts: '总成本'
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-800">{content[language].title}</h1>
        <p className="text-gray-600 mt-2">{content[language].description}</p>
        
        <div className="mt-6">
          <div className="flex space-x-2 border-b border-gray-200">
            <button className="py-2 px-4 text-sm font-medium text-blue-700 border-b-2 border-blue-500">
              {content[language].month}
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              {content[language].quarter}
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              {content[language].year}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center">
        <TrendingDown size={48} className="text-indigo-500 mb-4" />
        <h2 className="text-xl font-medium text-gray-700 mb-2">{content[language].inDevelopment}</h2>
        <p className="text-gray-500 max-w-xl">
          {language === 'en' ? 
            'This module will provide comprehensive cost analysis and optimization recommendations to reduce maintenance expenses while maximizing equipment lifespan.' :
            '该模块将提供综合成本分析和优化建议，以减少维护支出，同时最大化设备寿命。'
          }
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center">
            <DollarSign className="text-indigo-500 mb-2" size={24} />
            <h3 className="font-medium text-indigo-700">{content[language].currentCosts}</h3>
            <p className="text-xl font-bold text-indigo-800">$24,850</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center">
            <TrendingDown className="text-green-500 mb-2" size={24} />
            <h3 className="font-medium text-green-700">{content[language].potentialSavings}</h3>
            <p className="text-xl font-bold text-green-800">$6,320</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center">
            <BarChart2 className="text-blue-500 mb-2" size={24} />
            <h3 className="font-medium text-blue-700">{content[language].optimizationOpportunities}</h3>
            <p className="text-xl font-bold text-blue-800">8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOptimization; 