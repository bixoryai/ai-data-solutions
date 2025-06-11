import React from 'react';
import { Lightbulb, Globe, TestTube, Bot } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const FutureVisionSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "The Future We're Building",
            subtitle: "Transforming Global Financial Services Through AI",
            visionTitle: "Vision: The AI-First Financial Institution",
            visionPoints: [
                "Every transaction is instantly scored for fraud risk with 99%+ accuracy",
                "Credit decisions are made in seconds using 1000+ data points",
                "Regulatory compliance is automated with zero human intervention",
                "Investment strategies adapt in real-time to market conditions",
                "Customer experience is personalized for each individual's financial journey"
            ],
            impactTitle: "Industry Transformation Impact",
            impactPoints: [
                "$100B+ annual savings from reduced fraud and operational efficiency",
                "Financial inclusion for 2 billion underbanked people through AI-powered credit assessment",
                "Systemic risk reduction through real-time monitoring of financial networks",
            ],
            pipelineTitle: "Innovation Pipeline",
            pipelinePoints: [
                "Quantum-AI hybrid models for ultra-complex market prediction",
                "Federated learning enabling privacy-preserving cross-institutional intelligence",
                "Digital twins of entire financial ecosystems for stress testing"
            ],
            join: "Join the Revolution"
        },
        zh: {
            title: "我们正在构建的未来",
            subtitle: "通过AI变革全球金融服务",
            visionTitle: "愿景：AI优先的金融机构",
            visionPoints: [
                "每笔交易都以99%以上的准确率即时评分欺诈风险",
                "使用1000多个数据点在几秒钟内做出信贷决策",
                "监管合规自动化，无需人工干预",
                "投资策略实时适应市场状况",
                "为每个人的金融旅程提供个性化客户体验"
            ],
            impactTitle: "行业转型影响",
            impactPoints: [
                "通过减少欺诈和提高运营效率，每年节省1000多亿美元",
                "通过AI驱动的信用评估，为20亿无银行账户的人提供金融包容性",
                "通过实时监控金融网络，降低系统性风险"
            ],
            pipelineTitle: "创新管道",
            pipelinePoints: [
                "用于超复杂市场预测的量子-AI混合模型",
                "联邦学习实现保护隐私的跨机构智能",
                "用于压力测试的整个金融生态系统的数字孪生"
            ],
            join: "加入这场革命"
        }
    };

    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
      <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-700 flex items-center mb-3"><Lightbulb className="mr-2"/>{currentContent.visionTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {currentContent.visionPoints.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-700 flex items-center mb-3"><Globe className="mr-2"/>{currentContent.impactTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {currentContent.impactPoints.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
        <div className="bg-purple-50 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold text-purple-700 flex items-center mb-3"><TestTube className="mr-2"/>{currentContent.pipelineTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {currentContent.pipelinePoints.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        
        <p className="text-center font-bold text-2xl text-blue-600 pt-4">
            {currentContent.join}
        </p>
    </div>
  );
};

export default FutureVisionSlide; 