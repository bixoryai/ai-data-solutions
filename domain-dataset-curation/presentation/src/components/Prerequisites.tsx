import React from 'react';
import { Briefcase, Database, Server, CheckCircle, Scale, Users, DollarSign } from 'lucide-react';

interface PrerequisitesProps {
  language: 'en' | 'zh';
}

const Prerequisites: React.FC<PrerequisitesProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Prerequisites for Entry',
      subtitle: 'Essential Requirements:',
      requirements: [
        {
          title: 'Domain Expertise',
          description: 'Deep knowledge in at least one industry vertical',
          icon: <Briefcase className="text-blue-600" size={32} />
        },
        {
          title: 'Data Science Skills',
          description: 'Understanding of data structures and AI requirements',
          icon: <Database className="text-green-600" size={32} />
        },
        {
          title: 'Technical Infrastructure',
          description: 'Data storage, processing, and delivery capabilities',
          icon: <Server className="text-purple-600" size={32} />
        },
        {
          title: 'Quality Control Processes',
          description: 'Methods to ensure data accuracy and relevance',
          icon: <CheckCircle className="text-amber-600" size={32} />
        },
        {
          title: 'Legal Knowledge',
          description: 'Understanding of data privacy and licensing regulations',
          icon: <Scale className="text-red-600" size={32} />
        },
        {
          title: 'Industry Connections',
          description: 'Network for data sourcing and customer acquisition',
          icon: <Users className="text-indigo-600" size={32} />
        },
        {
          title: 'Initial Capital',
          description: '$10-50K startup funding (equipment, software, staff)',
          icon: <DollarSign className="text-teal-600" size={32} />
        }
      ]
    },
    zh: {
      title: '进入先决条件',
      subtitle: '基本要求：',
      requirements: [
        {
          title: '领域专业知识',
          description: '至少一个行业垂直领域的深入知识',
          icon: <Briefcase className="text-blue-600" size={32} />
        },
        {
          title: '数据科学技能',
          description: '理解数据结构和AI要求',
          icon: <Database className="text-green-600" size={32} />
        },
        {
          title: '技术基础设施',
          description: '数据存储、处理和交付能力',
          icon: <Server className="text-purple-600" size={32} />
        },
        {
          title: '质量控制流程',
          description: '确保数据准确性和相关性的方法',
          icon: <CheckCircle className="text-amber-600" size={32} />
        },
        {
          title: '法律知识',
          description: '了解数据隐私和许可法规',
          icon: <Scale className="text-red-600" size={32} />
        },
        {
          title: '行业关系',
          description: '数据采购和客户获取网络',
          icon: <Users className="text-indigo-600" size={32} />
        },
        {
          title: '初始资本',
          description: '1-5万美元启动资金（设备、软件、人员）',
          icon: <DollarSign className="text-teal-600" size={32} />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].requirements.map((requirement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-gray-100 p-4 mb-4">
                {requirement.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{requirement.title}</h4>
              <p className="text-gray-600">{requirement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-blue-800 mb-4">
            {language === 'en' ? 'Key Insight' : '关键见解'}
          </h4>
          <p className="text-lg text-gray-700">
            {language === 'en' 
              ? 'The combination of domain expertise and technical capabilities creates a strong competitive advantage in this market. Successful entrants will balance industry knowledge with data science skills.'
              : '领域专业知识和技术能力的结合在这个市场中创造了强大的竞争优势。成功的进入者将平衡行业知识和数据科学技能。'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prerequisites;
