import React from 'react';
import { TrendingUp, Award, ArrowUpRight, Cpu, Lightbulb, BarChart, RefreshCw } from 'lucide-react';

interface BusinessCaseProps {
  language: 'en' | 'zh';
}

const BusinessCase: React.FC<BusinessCaseProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Why Enter This Business?',
      subtitle: 'Key Reasons:',
      reasons: [
        {
          title: 'High Market Demand',
          description: '$2B projected market by 2030',
          icon: <TrendingUp className="text-green-600" size={24} />,
          color: 'bg-green-100'
        },
        {
          title: 'Low Competition',
          description: 'Medium competitive landscape with room for new entrants',
          icon: <Award className="text-blue-600" size={24} />,
          color: 'bg-blue-100'
        },
        {
          title: 'Low Entry Barrier',
          description: '$10-50K minimum capital requirements',
          icon: <ArrowUpRight className="text-purple-600" size={24} />,
          color: 'bg-purple-100'
        },
        {
          title: 'Increasing AI Adoption',
          description: 'Growing need for specialized training data',
          icon: <Cpu className="text-red-600" size={24} />,
          color: 'bg-red-100'
        },
        {
          title: 'Domain Knowledge Leverage',
          description: 'Value creation through industry expertise',
          icon: <Lightbulb className="text-amber-600" size={24} />,
          color: 'bg-amber-100'
        },
        {
          title: 'Scalable Business Model',
          description: 'Ability to expand across multiple verticals',
          icon: <BarChart className="text-indigo-600" size={24} />,
          color: 'bg-indigo-100'
        },
        {
          title: 'Recurring Revenue Potential',
          description: 'Ongoing data updates and maintenance',
          icon: <RefreshCw className="text-teal-600" size={24} />,
          color: 'bg-teal-100'
        }
      ]
    },
    zh: {
      title: '为什么进入这个业务？',
      subtitle: '主要原因：',
      reasons: [
        {
          title: '市场需求高',
          description: '预计到2030年市场规模达20亿美元',
          icon: <TrendingUp className="text-green-600" size={24} />,
          color: 'bg-green-100'
        },
        {
          title: '竞争较低',
          description: '中等竞争格局，有新进入者的空间',
          icon: <Award className="text-blue-600" size={24} />,
          color: 'bg-blue-100'
        },
        {
          title: '进入门槛低',
          description: '最低资本要求1-5万美元',
          icon: <ArrowUpRight className="text-purple-600" size={24} />,
          color: 'bg-purple-100'
        },
        {
          title: 'AI采用率不断提高',
          description: '对专业训练数据的需求不断增长',
          icon: <Cpu className="text-red-600" size={24} />,
          color: 'bg-red-100'
        },
        {
          title: '领域知识杠杆',
          description: '通过行业专业知识创造价值',
          icon: <Lightbulb className="text-amber-600" size={24} />,
          color: 'bg-amber-100'
        },
        {
          title: '可扩展的商业模式',
          description: '能够扩展到多个垂直领域',
          icon: <BarChart className="text-indigo-600" size={24} />,
          color: 'bg-indigo-100'
        },
        {
          title: '经常性收入潜力',
          description: '持续的数据更新和维护',
          icon: <RefreshCw className="text-teal-600" size={24} />,
          color: 'bg-teal-100'
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-6">{content[language].subtitle}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content[language].reasons.map((reason, index) => (
            <div key={index} className={`${reason.color} rounded-lg p-6 flex items-start hover:shadow-md transition-shadow`}>
              <div className="rounded-full p-3 bg-white mr-4 flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{reason.title}</h4>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <TrendingUp className="text-blue-600 mr-3" size={28} />
            <h4 className="text-xl font-semibold text-blue-800">
              {language === 'en' ? 'Market Opportunity' : '市场机会'}
            </h4>
          </div>
          <p className="mt-3 text-lg text-gray-700">
            {language === 'en' 
              ? 'The growing adoption of AI across industries creates a sustainable demand for high-quality, specialized datasets with a projected market size of $2B by 2030.'
              : 'AI在各行业的不断采用创造了对高质量、专业数据集的持续需求，预计到2030年市场规模将达到20亿美元。'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCase;
