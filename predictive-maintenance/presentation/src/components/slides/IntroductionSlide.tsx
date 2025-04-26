import React from 'react';
import { BarChart3, Cog, LineChart, AlertTriangle } from 'lucide-react';

interface IntroductionSlideProps {
  t: (key: string) => string;
}

const IntroductionSlide: React.FC<IntroductionSlideProps> = ({ t }) => {
  // Translations specific to this slide
  const content = {
    en: {
      title: "AI-Powered Predictive Maintenance",
      subtitle: "Transform your maintenance operations from reactive to predictive using advanced AI technologies. Reduce downtime, extend equipment life, and optimize maintenance costs.",
      whatIs: "What is Predictive Maintenance?",
      description: "Predictive maintenance uses data analytics and machine learning algorithms to predict when equipment failures might occur, allowing for maintenance to be scheduled proactively before the failure happens.",
      keyAdvantages: "Key Advantages:",
      advantage1: "Increased operational reliability",
      advantage2: "Optimized maintenance scheduling",
      advantage3: "Reduced spare parts inventory",
      advantage4: "Better resource allocation",
      businessImpact: "Business Impact",
      downtime: "30-50% Less Downtime",
      downtimeDesc: "Minimize unexpected equipment failures",
      costs: "20% Lower Maintenance Costs",
      costsDesc: "Optimize maintenance activities",
      lifespan: "15% Increased Equipment Lifespan",
      lifespanDesc: "Extend the useful life of assets",
      failures: "Prevent Critical Failures",
      failuresDesc: "Avoid costly and dangerous breakdowns"
    },
    zh: {
      title: "AI 驱动的预测性维护",
      subtitle: "利用先进的 AI 技术将您的维护操作从被动转变为预测性。减少停机时间，延长设备寿命，优化维护成本。",
      whatIs: "什么是预测性维护？",
      description: "预测性维护利用数据分析和机器学习算法预测设备故障可能发生的时间，允许在故障发生前主动安排维护。",
      keyAdvantages: "主要优势：",
      advantage1: "提高运行可靠性",
      advantage2: "优化维护调度",
      advantage3: "减少备件库存",
      advantage4: "更好地分配资源",
      businessImpact: "业务影响",
      downtime: "减少 30-50% 的停机时间",
      downtimeDesc: "最小化意外设备故障",
      costs: "降低 20% 的维护成本",
      costsDesc: "优化维护活动",
      lifespan: "延长 15% 的设备寿命",
      lifespanDesc: "延长资产的使用寿命",
      failures: "防止关键故障",
      failuresDesc: "避免昂贵和危险的故障"
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-6 rounded-lg flex items-center justify-center">
            <BarChart3 size={48} className="text-blue-600" />
          </div>
          <div className="bg-green-100 p-6 rounded-lg flex items-center justify-center">
            <Cog size={48} className="text-green-600" />
          </div>
          <div className="bg-purple-100 p-6 rounded-lg flex items-center justify-center">
            <LineChart size={48} className="text-purple-600" />
          </div>
          <div className="bg-amber-100 p-6 rounded-lg flex items-center justify-center">
            <AlertTriangle size={48} className="text-amber-600" />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          {content[t('language') === 'zh' ? 'zh' : 'en'].title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto my-6">
          {content[t('language') === 'zh' ? 'zh' : 'en'].subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-4">{content[t('language') === 'zh' ? 'zh' : 'en'].whatIs}</h3>
          <p className="text-gray-600 mb-4">
            {content[t('language') === 'zh' ? 'zh' : 'en'].description}
          </p>
          
          <div className="mt-4">
            <h4 className="text-md font-semibold text-blue-600 mb-2">{content[t('language') === 'zh' ? 'zh' : 'en'].keyAdvantages}</h4>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{content[t('language') === 'zh' ? 'zh' : 'en'].advantage1}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{content[t('language') === 'zh' ? 'zh' : 'en'].advantage2}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{content[t('language') === 'zh' ? 'zh' : 'en'].advantage3}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{content[t('language') === 'zh' ? 'zh' : 'en'].advantage4}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-4">{content[t('language') === 'zh' ? 'zh' : 'en'].businessImpact}</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <BarChart3 size={24} className="text-blue-600" />
              <div>
                <h4 className="font-medium text-blue-800">{content[t('language') === 'zh' ? 'zh' : 'en'].downtime}</h4>
                <p className="text-sm text-gray-600">{content[t('language') === 'zh' ? 'zh' : 'en'].downtimeDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Cog size={24} className="text-green-600" />
              <div>
                <h4 className="font-medium text-green-800">{content[t('language') === 'zh' ? 'zh' : 'en'].costs}</h4>
                <p className="text-sm text-gray-600">{content[t('language') === 'zh' ? 'zh' : 'en'].costsDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <LineChart size={24} className="text-purple-600" />
              <div>
                <h4 className="font-medium text-purple-800">{content[t('language') === 'zh' ? 'zh' : 'en'].lifespan}</h4>
                <p className="text-sm text-gray-600">{content[t('language') === 'zh' ? 'zh' : 'en'].lifespanDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <AlertTriangle size={24} className="text-amber-600" />
              <div>
                <h4 className="font-medium text-amber-800">{content[t('language') === 'zh' ? 'zh' : 'en'].failures}</h4>
                <p className="text-sm text-gray-600">{content[t('language') === 'zh' ? 'zh' : 'en'].failuresDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide; 