import React from 'react';
import { CheckCircle, TrendingUp, Target, Server, FileText, Users } from 'lucide-react';

interface ConclusionProps {
  language: 'en' | 'zh';
}

const Conclusion: React.FC<ConclusionProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Conclusion & Next Steps',
      summary: 'Domain Dataset Curation presents a compelling business opportunity with relatively low barriers to entry and strong growth potential. The increasing adoption of AI across industries creates sustainable demand for high-quality, specialized datasets.',
      nextStepsTitle: 'Immediate Next Steps:',
      nextSteps: [
        {
          title: 'Finalize domain focus based on team expertise',
          icon: <Target className="text-blue-600" size={24} />
        },
        {
          title: 'Develop detailed technical infrastructure plan',
          icon: <Server className="text-green-600" size={24} />
        },
        {
          title: 'Create legal framework for data acquisition',
          icon: <FileText className="text-purple-600" size={24} />
        },
        {
          title: 'Identify and approach potential pilot clients',
          icon: <Users className="text-amber-600" size={24} />
        },
        {
          title: 'Secure initial funding',
          icon: <TrendingUp className="text-red-600" size={24} />
        }
      ],
      callToAction: 'Ready to transform industry data into valuable AI assets?',
      buttonText: 'Get Started Now'
    },
    zh: {
      title: '结论与下一步',
      summary: '领域数据集策划提供了一个引人注目的商业机会，进入门槛相对较低，增长潜力强劲。AI在各行业的不断采用为高质量、专业数据集创造了持续需求。',
      nextStepsTitle: '即时下一步：',
      nextSteps: [
        {
          title: '根据团队专业知识确定领域重点',
          icon: <Target className="text-blue-600" size={24} />
        },
        {
          title: '制定详细的技术基础设施计划',
          icon: <Server className="text-green-600" size={24} />
        },
        {
          title: '为数据采集创建法律框架',
          icon: <FileText className="text-purple-600" size={24} />
        },
        {
          title: '识别并接触潜在的试点客户',
          icon: <Users className="text-amber-600" size={24} />
        },
        {
          title: '获取初始资金',
          icon: <TrendingUp className="text-red-600" size={24} />
        }
      ],
      callToAction: '准备好将行业数据转化为有价值的AI资产了吗？',
      buttonText: '立即开始'
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          {content[language].summary}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-6">{content[language].nextStepsTitle}</h3>
        
        <div className="space-y-6">
          {content[language].nextSteps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-4">
                  {index + 1}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex-grow border-l-4 border-blue-500">
                <div className="flex items-center">
                  <div className="mr-3">{step.icon}</div>
                  <h4 className="text-lg font-medium text-gray-800">{step.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{content[language].callToAction}</h3>
        <div className="flex justify-center mt-6">
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors flex items-center">
            <CheckCircle className="mr-2" size={20} />
            {content[language].buttonText}
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">$2B</div>
          <p className="text-gray-700">
            {language === 'en' ? 'Projected Market by 2030' : '预计2030年市场规模'}
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
          <p className="text-gray-700">
            {language === 'en' ? '1st Year ROI' : '第一年投资回报率'}
          </p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
          <p className="text-gray-700">
            {language === 'en' ? 'Months to Break-even' : '收支平衡月数'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
