import React from 'react';
import { Target, Award, FileText, Settings, Shield, Zap, LayoutGrid } from 'lucide-react';

interface CompetitiveAdvantageProps {
  language: 'en' | 'zh';
}

const CompetitiveAdvantage: React.FC<CompetitiveAdvantageProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Competitive Advantage',
      advantages: [
        {
          title: 'Domain Specificity',
          description: 'Deeper industry knowledge than generalist competitors',
          icon: <Target className="text-blue-600" size={32} />,
          color: 'bg-blue-100'
        },
        {
          title: 'Quality Over Quantity',
          description: 'Focus on high-value, high-accuracy datasets',
          icon: <Award className="text-green-600" size={32} />,
          color: 'bg-green-100'
        },
        {
          title: 'Transparent Methodology',
          description: 'Clear documentation of data sources and processes',
          icon: <FileText className="text-purple-600" size={32} />,
          color: 'bg-purple-100'
        },
        {
          title: 'Customization Capability',
          description: 'Tailored solutions for specific client needs',
          icon: <Settings className="text-amber-600" size={32} />,
          color: 'bg-amber-100'
        },
        {
          title: 'Compliance Expertise',
          description: 'Built-in regulatory adherence',
          icon: <Shield className="text-red-600" size={32} />,
          color: 'bg-red-100'
        },
        {
          title: 'Agile Approach',
          description: 'Ability to quickly adapt to changing requirements',
          icon: <Zap className="text-indigo-600" size={32} />,
          color: 'bg-indigo-100'
        },
        {
          title: 'End-to-End Services',
          description: 'From strategy to implementation',
          icon: <LayoutGrid className="text-teal-600" size={32} />,
          color: 'bg-teal-100'
        }
      ],
      competitiveMatrix: {
        title: 'Competitive Matrix',
        categories: ['Domain Expertise', 'Data Quality', 'Customization', 'Compliance', 'Price'],
        competitors: [
          { name: 'Our Solution', scores: [5, 5, 5, 5, 3] },
          { name: 'Big Tech Data Providers', scores: [2, 4, 2, 3, 1] },
          { name: 'Generic Data Marketplaces', scores: [1, 3, 2, 2, 4] },
          { name: 'Industry Specialists', scores: [5, 3, 4, 4, 2] }
        ]
      }
    },
    zh: {
      title: '竞争优势',
      advantages: [
        {
          title: '领域特殊性',
          description: '比通用竞争对手拥有更深入的行业知识',
          icon: <Target className="text-blue-600" size={32} />,
          color: 'bg-blue-100'
        },
        {
          title: '质量优于数量',
          description: '专注于高价值、高准确度的数据集',
          icon: <Award className="text-green-600" size={32} />,
          color: 'bg-green-100'
        },
        {
          title: '透明方法论',
          description: '清晰记录数据来源和处理过程',
          icon: <FileText className="text-purple-600" size={32} />,
          color: 'bg-purple-100'
        },
        {
          title: '定制能力',
          description: '为特定客户需求量身定制解决方案',
          icon: <Settings className="text-amber-600" size={32} />,
          color: 'bg-amber-100'
        },
        {
          title: '合规专业知识',
          description: '内置监管遵从',
          icon: <Shield className="text-red-600" size={32} />,
          color: 'bg-red-100'
        },
        {
          title: '敏捷方法',
          description: '能够快速适应不断变化的需求',
          icon: <Zap className="text-indigo-600" size={32} />,
          color: 'bg-indigo-100'
        },
        {
          title: '端到端服务',
          description: '从策略到实施',
          icon: <LayoutGrid className="text-teal-600" size={32} />,
          color: 'bg-teal-100'
        }
      ],
      competitiveMatrix: {
        title: '竞争矩阵',
        categories: ['领域专业知识', '数据质量', '定制化', '合规性', '价格'],
        competitors: [
          { name: '我们的解决方案', scores: [5, 5, 5, 5, 3] },
          { name: '大型科技数据提供商', scores: [2, 4, 2, 3, 1] },
          { name: '通用数据市场', scores: [1, 3, 2, 2, 4] },
          { name: '行业专家', scores: [5, 3, 4, 4, 2] }
        ]
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content[language].advantages.map((advantage, index) => (
          <div key={index} className={`${advantage.color} rounded-lg p-6 hover:shadow-md transition-shadow`}>
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-white p-3 mr-4 shadow-sm">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{advantage.title}</h3>
            </div>
            <p className="text-gray-700 ml-16">{advantage.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-6">{content[language].competitiveMatrix.title}</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b"></th>
                {content[language].competitiveMatrix.categories.map((category, index) => (
                  <th key={index} className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                    {category}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content[language].competitiveMatrix.competitors.map((competitor, compIndex) => (
                <tr key={compIndex} className={compIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800 border-b">
                    {competitor.name}
                  </td>
                  {competitor.scores.map((score, scoreIndex) => (
                    <td key={scoreIndex} className="py-3 px-4 text-center border-b">
                      <div className="flex justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div 
                            key={star} 
                            className={`w-4 h-4 rounded-full mx-0.5 ${
                              star <= score ? 'bg-blue-500' : 'bg-gray-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-sm text-gray-500 text-center">
          {language === 'en' 
            ? 'Rating scale: 1 (Poor) to 5 (Excellent)'
            : '评分标准：1（差）至 5（优秀）'}
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">
          {language === 'en' ? 'Key Differentiator' : '关键差异化因素'}
        </h4>
        <p className="text-gray-700">
          {language === 'en' 
            ? 'Our unique combination of deep domain expertise and technical capabilities allows us to create datasets that are not just statistically sound but also contextually relevant and immediately useful for specific industry applications.'
            : '我们深厚的领域专业知识和技术能力的独特组合使我们能够创建不仅在统计上合理，而且在上下文中相关且可立即用于特定行业应用的数据集。'}
        </p>
      </div>
    </div>
  );
};

export default CompetitiveAdvantage;
