import React from 'react';
import { BrainCircuit, Zap, ShieldCheck, BarChartHorizontal } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const SolutionOverviewSlide: React.FC<SlideProps> = ({ t }) => {
  const content = {
    en: {
      title: "What is AI-Powered Financial Analytics?",
      subtitle: "Intelligence That Transforms Every Financial Decision",
      definition: "AI-Powered Financial Analytics combines machine learning, real-time data processing, and domain expertise to automatically detect patterns, predict outcomes, and recommend actions across all financial operations.",
      capabilities: [
        {
          icon: <Zap className="w-8 h-8 text-blue-500" />,
          title: "Real-Time Fraud Detection",
          desc: "Analyze transactions in milliseconds with behavioral biometrics and network analysis, reducing false positives by 90%.",
        },
        {
          icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
          title: "Regulatory Compliance",
          desc: "Automated AML/KYC monitoring, real-time suspicious activity detection, and compliance reporting with 99.2% accuracy.",
        },
        {
          icon: <BarChartHorizontal className="w-8 h-8 text-purple-500" />,
          title: "Intelligent Lending",
          desc: "Assess credit risk with alternative data, automate underwriting, and approve loans in minutes, not weeks.",
        }
      ]
    },
    zh: {
      title: "什么是AI驱动的金融分析？",
      subtitle: "改变每一个金融决策的情报",
      definition: "AI驱动的金融分析结合了机器学习、实时数据处理和领域专业知识，可自动检测模式、预测结果并推荐跨所有金融业务的行动。",
      capabilities: [
        {
          icon: <Zap className="w-8 h-8 text-blue-500" />,
          title: "实时欺诈检测",
          desc: "通过行为生物识别和网络分析，在几毫秒内分析交易，将误报率降低90%。",
        },
        {
          icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
          title: "法规遵从",
          desc: "自动化的AML/KYC监控，实时可疑活动检测，以及准确率99.2%的合规报告。",
        },
        {
          icon: <BarChartHorizontal className="w-8 h-8 text-purple-500" />,
          title: "智能贷款",
          desc: "利用替代数据评估信用风险，实现承保自动化，并在几分钟内（而非数周）批准贷款。",
        }
      ]
    }
  };

  const currentContent = t('language') === 'zh' ? content.zh : content.en;
  
  return (
    <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
        <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>
        <p className="text-center mb-6">{currentContent.definition}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentContent.capabilities.map((item, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default SolutionOverviewSlide; 