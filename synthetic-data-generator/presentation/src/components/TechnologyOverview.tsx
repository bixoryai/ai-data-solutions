import React from 'react';

interface TechnologyOverviewProps {
  language: 'en' | 'zh';
}

const TechnologyOverview: React.FC<TechnologyOverviewProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Technology Overview',
      subtitle: 'Our Proprietary Synthetic Data Platform:',
      components: [
        {
          name: 'Data Analysis Engine',
          description: 'Analyzes statistical properties and relationships in source data',
          features: ['Pattern recognition', 'Correlation mapping', 'Distribution analysis']
        },
        {
          name: 'Privacy Preservation Layer',
          description: 'Ensures no PII/PHI leakage and differential privacy guarantees',
          features: ['Differential privacy', 'K-anonymity enforcement', 'Re-identification prevention']
        },
        {
          name: 'Generation Models',
          description: 'Advanced AI models for creating synthetic data with high fidelity',
          features: ['GANs & VAEs', 'Transformer models', 'Time-series generators']
        },
        {
          name: 'Validation Framework',
          description: 'Ensures synthetic data maintains statistical properties of source data',
          features: ['Statistical validation', 'ML utility testing', 'Privacy auditing']
        }
      ],
      architectureDiagram: {
        title: 'System Architecture:',
        layers: [
          { name: 'User Interface', description: 'Web dashboard & API access' },
          { name: 'Orchestration Layer', description: 'Workflow management & job scheduling' },
          { name: 'Core Engine', description: 'Analysis, generation & validation' },
          { name: 'Data Connectors', description: 'Secure data ingestion & export' },
          { name: 'Infrastructure', description: 'Cloud/on-premise deployment options' }
        ]
      }
    },
    zh: {
      title: '技术概述',
      subtitle: '我们专有的合成数据平台:',
      components: [
        {
          name: '数据分析引擎',
          description: '分析源数据中的统计特性和关系',
          features: ['模式识别', '相关性映射', '分布分析']
        },
        {
          name: '隐私保护层',
          description: '确保无PII/PHI泄漏和差分隐私保证',
          features: ['差分隐私', 'K-匿名性强制执行', '防止重新识别']
        },
        {
          name: '生成模型',
          description: '用于创建高保真合成数据的先进AI模型',
          features: ['GANs和VAEs', 'Transformer模型', '时间序列生成器']
        },
        {
          name: '验证框架',
          description: '确保合成数据保持源数据的统计特性',
          features: ['统计验证', 'ML实用性测试', '隐私审计']
        }
      ],
      architectureDiagram: {
        title: '系统架构:',
        layers: [
          { name: '用户界面', description: 'Web仪表板和API访问' },
          { name: '编排层', description: '工作流管理和作业调度' },
          { name: '核心引擎', description: '分析、生成和验证' },
          { name: '数据连接器', description: '安全数据摄取和导出' },
          { name: '基础设施', description: '云端/本地部署选项' }
        ]
      }
    }
  };

  const { title, subtitle, components, architectureDiagram } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">{title}</h2>
      <p className="text-xl text-center mb-8">{subtitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {components.map((component, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-primary-400 mb-3">{component.name}</h3>
            <p className="text-lg mb-4">{component.description}</p>
            <ul className="space-y-2">
              {component.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-xl font-bold text-primary-400 mb-4 text-center">{architectureDiagram.title}</h3>
        
        <div className="relative">
          {/* Architecture diagram visualization */}
          <div className="flex flex-col space-y-4">
            {architectureDiagram.layers.map((layer, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border flex justify-between items-center"
                style={{ 
                  backgroundColor: `rgba(79, 70, 229, ${0.2 + index * 0.15})`,
                  borderColor: `rgba(79, 70, 229, ${0.4 + index * 0.1})`
                }}
              >
                <span className="font-bold text-lg">{layer.name}</span>
                <span className="text-gray-300">{layer.description}</span>
              </div>
            ))}
          </div>
          
          {/* Connecting lines */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-primary-500 opacity-50 -z-10"></div>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-primary-900 to-blue-900 rounded-lg border border-primary-700">
        <p className="text-center text-xl">
          {language === 'en' 
            ? "Our platform leverages cutting-edge AI and privacy-preserving technologies to generate synthetic data that is statistically identical to real data but contains no sensitive information."
            : "我们的平台利用尖端AI和隐私保护技术生成与真实数据在统计上相同但不包含敏感信息的合成数据。"}
        </p>
      </div>
    </div>
  );
};

export default TechnologyOverview;
