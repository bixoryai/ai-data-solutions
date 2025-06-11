import React from 'react';
import { Layers, Zap, Shield, GitMerge, Server } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const TechnologyAdvantageSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "Our Technology Advantage",
            subtitle: "Enterprise-Grade AI Architecture Built for Finance",
            techExcellenceTitle: "Technical Excellence",
            differentiatorsTitle: "Key Differentiators",
            differentiators: [
                "Sub-100ms Response Time: Real-time processing for critical financial decisions",
                "99.9% Uptime: Enterprise-grade reliability with disaster recovery",
                "Linear Scalability: Handle 10M+ transactions per hour without performance degradation",
                "Explainable AI: Transparent decision-making for regulatory compliance",
                "Security-First: End-to-end encryption with SOC 2 Type II compliance"
            ],
            integrationTitle: "Integration Capabilities",
            integrations: [
                "50+ Pre-Built Connectors: Major banking platforms, trading systems, compliance tools",
                "API-First Design: RESTful APIs for seamless system integration",
                "Cloud-Native: Deploy on AWS, Azure, Google Cloud, or hybrid environments",
                "Real-Time Streaming: Apache Kafka, Kinesis for live data processing"
            ]
        },
        zh: {
            title: "我们的技术优势",
            subtitle: "为金融打造的企业级AI架构",
            techExcellenceTitle: "卓越技术",
            differentiatorsTitle: "关键差异化因素",
            differentiators: [
                "亚100毫秒响应时间：关键金融决策的实时处理",
                "99.9%正常运行时间：企业级可靠性与灾难恢复",
                "线性可扩展性：每小时处理1000万+交易而无性能下降",
                "可解释AI：为法规遵从提供透明的决策",
                "安全第一：端到端加密，符合SOC 2 Type II标准"
            ],
            integrationTitle: "集成能力",
            integrations: [
                "50多个预构建连接器：主要银行平台、交易系统、合规工具",
                "API优先设计：用于无缝系统集成的RESTful API",
                "云原生：可部署在AWS、Azure、Google Cloud或混合环境中",
                "实时流处理：Apache Kafka、Kinesis用于实时数据处理"
            ]
        }
    };

    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
      <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center"><Zap className="mr-2"/>{currentContent.differentiatorsTitle}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {currentContent.differentiators.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center"><GitMerge className="mr-2"/>{currentContent.integrationTitle}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {currentContent.integrations.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAdvantageSlide; 