import React from 'react';
import { Package, Sparkles, RefreshCw, Layers, CheckSquare, Tag, Lightbulb, Heart, Building, Briefcase } from 'lucide-react';

interface BusinessDevelopmentProps {
  language: 'en' | 'zh';
}

const BusinessDevelopment: React.FC<BusinessDevelopmentProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Getting Started: Business Development',
      productsTitle: 'Products & Services:',
      products: [
        {
          title: 'Custom Dataset Creation',
          description: 'Tailored collections for specific AI applications',
          icon: <Package className="text-blue-600" size={24} />
        },
        {
          title: 'Data Cleaning & Enhancement',
          description: 'Improving existing client datasets',
          icon: <Sparkles className="text-green-600" size={24} />
        },
        {
          title: 'Continuous Dataset Updates',
          description: 'Regular refreshes with new information',
          icon: <RefreshCw className="text-purple-600" size={24} />
        },
        {
          title: 'Data Augmentation Services',
          description: 'Expanding limited datasets through synthesis',
          icon: <Layers className="text-amber-600" size={24} />
        },
        {
          title: 'Dataset Quality Certification',
          description: 'Validating third-party data collections',
          icon: <CheckSquare className="text-red-600" size={24} />
        },
        {
          title: 'Domain-Specific Labeling',
          description: 'Expert annotation services',
          icon: <Tag className="text-indigo-600" size={24} />
        },
        {
          title: 'Data Strategy Consulting',
          description: 'Advising on data acquisition and usage',
          icon: <Lightbulb className="text-teal-600" size={24} />
        }
      ],
      focusTitle: 'Initial Focus Areas:',
      focusAreas: [
        {
          title: 'Healthcare Data',
          description: 'Medical imaging, clinical notes, pharmaceutical trials',
          icon: <Heart className="text-red-600" size={32} />
        },
        {
          title: 'Financial Services',
          description: 'Transaction patterns, risk indicators, market signals',
          icon: <Building className="text-blue-600" size={32} />
        },
        {
          title: 'Manufacturing',
          description: 'Process optimization, quality control, supply chain',
          icon: <Briefcase className="text-amber-600" size={32} />
        }
      ]
    },
    zh: {
      title: '开始：业务发展',
      productsTitle: '产品与服务：',
      products: [
        {
          title: '自定义数据集创建',
          description: '为特定AI应用量身定制的集合',
          icon: <Package className="text-blue-600" size={24} />
        },
        {
          title: '数据清洗与增强',
          description: '改进现有客户数据集',
          icon: <Sparkles className="text-green-600" size={24} />
        },
        {
          title: '持续数据集更新',
          description: '定期刷新新信息',
          icon: <RefreshCw className="text-purple-600" size={24} />
        },
        {
          title: '数据增强服务',
          description: '通过合成扩展有限数据集',
          icon: <Layers className="text-amber-600" size={24} />
        },
        {
          title: '数据集质量认证',
          description: '验证第三方数据集合',
          icon: <CheckSquare className="text-red-600" size={24} />
        },
        {
          title: '领域特定标注',
          description: '专家注释服务',
          icon: <Tag className="text-indigo-600" size={24} />
        },
        {
          title: '数据策略咨询',
          description: '关于数据获取和使用的建议',
          icon: <Lightbulb className="text-teal-600" size={24} />
        }
      ],
      focusTitle: '初始重点领域：',
      focusAreas: [
        {
          title: '医疗保健数据',
          description: '医学影像、临床笔记、药物试验',
          icon: <Heart className="text-red-600" size={32} />
        },
        {
          title: '金融服务',
          description: '交易模式、风险指标、市场信号',
          icon: <Building className="text-blue-600" size={32} />
        },
        {
          title: '制造业',
          description: '流程优化、质量控制、供应链',
          icon: <Briefcase className="text-amber-600" size={32} />
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold text-blue-700 mb-6">{content[language].productsTitle}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content[language].products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-start border-l-4 border-blue-500 hover:shadow-md transition-shadow">
              <div className="mr-4 mt-1">
                {product.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{product.title}</h4>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-6">{content[language].focusTitle}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content[language].focusAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-gray-100 p-4 mb-4">
                {area.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-blue-800 mb-4">
            {language === 'en' ? 'Strategic Approach' : '策略方法'}
          </h4>
          <p className="text-lg text-gray-700">
            {language === 'en' 
              ? 'Focus on high-value verticals with complex data needs and regulatory requirements. These industries have the greatest need for domain expertise and are willing to pay premium prices for quality data.'
              : '专注于具有复杂数据需求和监管要求的高价值垂直行业。这些行业对领域专业知识的需求最大，并愿意为高质量数据支付溢价。'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopment;
