import React from 'react';
import { AlertOctagon, AlertTriangle, Clock } from 'lucide-react';

interface FailurePredictionProps {
  language: 'en' | 'zh';
  selectedSector: 'manufacturing' | 'energy' | 'transportation';
}

const FailurePrediction: React.FC<FailurePredictionProps> = ({ language, selectedSector }) => {
  const content = {
    en: {
      title: 'Failure Prediction',
      description: 'AI-powered predictive analytics to forecast potential equipment failures.',
      comingSoon: 'Advanced visualization coming soon',
      highRisk: 'High Risk',
      mediumRisk: 'Medium Risk',
      lowRisk: 'Low Risk',
      timeToFailure: 'Estimated Time to Failure',
      equipment: 'Equipment',
      status: 'Status',
      confidence: 'Confidence',
      actions: 'Recommended Actions',
      inDevelopment: 'This feature is currently in development.'
    },
    zh: {
      title: '故障预测',
      description: 'AI驱动的预测分析，用于预测潜在的设备故障。',
      comingSoon: '高级可视化即将推出',
      highRisk: '高风险',
      mediumRisk: '中风险',
      lowRisk: '低风险',
      timeToFailure: '预计故障时间',
      equipment: '设备',
      status: '状态',
      confidence: '置信度',
      actions: '推荐措施',
      inDevelopment: '此功能目前正在开发中。'
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-800">{content[language].title}</h1>
        <p className="text-gray-600 mt-2">{content[language].description}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center">
        <AlertOctagon size={48} className="text-blue-500 mb-4" />
        <h2 className="text-xl font-medium text-gray-700 mb-2">{content[language].inDevelopment}</h2>
        <p className="text-gray-500 max-w-xl">
          {language === 'en' ? 
            'This module will provide advanced AI-based predictions about potential equipment failures before they occur, allowing for proactive maintenance strategies.' :
            '该模块将提供基于先进人工智能的设备潜在故障预测，让您能够在故障发生前采取主动维护策略。'
          }
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-center">
            <AlertTriangle className="text-red-500 mr-3" size={24} />
            <div>
              <h3 className="font-medium text-red-700">{content[language].highRisk}</h3>
              <p className="text-sm text-red-600">3 {content[language].equipment}</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex items-center">
            <AlertTriangle className="text-amber-500 mr-3" size={24} />
            <div>
              <h3 className="font-medium text-amber-700">{content[language].mediumRisk}</h3>
              <p className="text-sm text-amber-600">5 {content[language].equipment}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-center">
            <Clock className="text-green-500 mr-3" size={24} />
            <div>
              <h3 className="font-medium text-green-700">{content[language].lowRisk}</h3>
              <p className="text-sm text-green-600">12 {content[language].equipment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailurePrediction; 