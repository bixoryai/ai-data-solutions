import React from 'react';
import { Database, FileCheck, Tag, FileText, ShieldCheck, Scale, Package } from 'lucide-react';

interface WhatIsDomainDatasetCurationProps {
  language: 'en' | 'zh';
}

const WhatIsDomainDatasetCuration: React.FC<WhatIsDomainDatasetCurationProps> = ({ language }) => {
  const content = {
    en: {
      title: 'What is Domain Dataset Curation?',
      description: 'Domain Dataset Curation is the specialized process of collecting, organizing, cleaning, and enhancing industry-specific data for AI training and analytics. It focuses on creating high-quality, domain-specific datasets that meet the unique needs of particular industries or applications.',
      keyActivities: 'Key Activities:',
      activities: [
        {
          title: 'Targeted Data Collection',
          description: 'Gathering relevant data from industry sources',
          icon: <Database className="text-blue-600" size={24} />
        },
        {
          title: 'Data Cleaning & Validation',
          description: 'Ensuring accuracy and consistency',
          icon: <FileCheck className="text-green-600" size={24} />
        },
        {
          title: 'Domain-Specific Labeling',
          description: 'Applying expert knowledge for proper annotation',
          icon: <Tag className="text-purple-600" size={24} />
        },
        {
          title: 'Metadata Enhancement',
          description: 'Adding context and relationships',
          icon: <FileText className="text-amber-600" size={24} />
        },
        {
          title: 'Quality Assurance',
          description: 'Rigorous testing for bias and completeness',
          icon: <ShieldCheck className="text-red-600" size={24} />
        },
        {
          title: 'Compliance Verification',
          description: 'Ensuring legal and ethical data usage',
          icon: <Scale className="text-indigo-600" size={24} />
        },
        {
          title: 'Custom Dataset Packaging',
          description: 'Creating ready-to-use formats for AI models',
          icon: <Package className="text-teal-600" size={24} />
        }
      ]
    },
    zh: {
      title: '什么是领域数据集策划？',
      description: '领域数据集策划是为AI训练和分析收集、组织、清洗和增强行业特定数据的专业过程。它专注于创建满足特定行业或应用独特需求的高质量、领域特定数据集。',
      keyActivities: '核心活动：',
      activities: [
        {
          title: '目标数据收集',
          description: '从行业来源收集相关数据',
          icon: <Database className="text-blue-600" size={24} />
        },
        {
          title: '数据清洗与验证',
          description: '确保准确性和一致性',
          icon: <FileCheck className="text-green-600" size={24} />
        },
        {
          title: '领域特定标注',
          description: '应用专业知识进行适当注释',
          icon: <Tag className="text-purple-600" size={24} />
        },
        {
          title: '元数据增强',
          description: '添加上下文和关系',
          icon: <FileText className="text-amber-600" size={24} />
        },
        {
          title: '质量保证',
          description: '严格测试偏差和完整性',
          icon: <ShieldCheck className="text-red-600" size={24} />
        },
        {
          title: '合规验证',
          description: '确保数据使用的合法性和道德性',
          icon: <Scale className="text-indigo-600" size={24} />
        },
        {
          title: '自定义数据集打包',
          description: '为AI模型创建即用型格式',
          icon: <Package className="text-teal-600" size={24} />
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          {content[language].description}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-6">{content[language].keyActivities}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {activity.icon}
                <h4 className="text-lg font-semibold ml-3">{activity.title}</h4>
              </div>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsDomainDatasetCuration;
