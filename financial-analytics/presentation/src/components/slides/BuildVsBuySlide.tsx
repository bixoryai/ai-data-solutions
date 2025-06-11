import React from 'react';
import { BrainCircuit, Banknote, HardHat, AlertTriangle, Zap } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const BuildVsBuySlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "What It Takes to Build This",
            subtitle: "The Complex Challenge of Financial AI",
            techReqTitle: "Technical Requirements",
            expertise: "AI/ML Expertise (24+ months to build)",
            expertiseDesc: "$2-5M in talent and infrastructure",
            domainKnowledge: "Financial Domain Knowledge",
            domainKnowledgeDesc: "18-36 months learning curve for non-financial teams",
            infra: "Infrastructure & Security",
            infraDesc: "$500K-2M annually",
            speedTitle: "Speed to Market Challenge",
            buildVsBuy: "Build vs. Buy Analysis:",
            internalDev: "Internal Development: 3-5 years, $10-25M investment",
            ourSolution: "Our Solution: 90-day deployment, $200K-2M total cost",
            risk: "Risk: Building from scratch has 70% failure rate in financial AI",
            whyFailTitle: "Why Most Attempts Fail",
            fails: [
                "Underestimating Complexity: Financial data requires specialized preprocessing",
                "Regulatory Compliance: 40% of projects fail due to compliance issues",
                "Model Performance: Generic AI rarely achieves required accuracy for finance",
                "Integration Challenges: Legacy banking systems integration is extremely complex"
            ]
        },
        zh: {
            title: "构建这个需要什么",
            subtitle: "金融AI的复杂挑战",
            techReqTitle: "技术要求",
            expertise: "AI/ML专业知识（构建需24个月以上）",
            expertiseDesc: "人才和基础设施投资200-500万美元",
            domainKnowledge: "金融领域知识",
            domainKnowledgeDesc: "非金融团队学习曲线为18-36个月",
            infra: "基础设施与安全",
            infraDesc: "每年50-200万美元",
            speedTitle: "上市速度挑战",
            buildVsBuy: "自建 vs. 购买分析：",
            internalDev: "内部开发：3-5年，1000-2500万美元投资",
            ourSolution: "我们的解决方案：90天部署，20-200万美元总成本",
            risk: "风险：从零开始构建金融AI的失败率为70%",
            whyFailTitle: "为什么大多数尝试都失败了",
            fails: [
                "低估复杂性：金融数据需要专门的预处理",
                "法规遵从性：40%的项目因合规问题而失败",
                "模型性能：通用AI很少能达到金融所需的准确性",
                "集成挑战：遗留银行系统集成极其复杂"
            ]
        }
    };

    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
      <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
            <BrainCircuit className="mx-auto w-10 h-10 text-blue-500 mb-2"/>
            <h4 className="font-bold text-blue-700">{currentContent.expertise}</h4>
            <p className="text-sm text-gray-600">{currentContent.expertiseDesc}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
            <Banknote className="mx-auto w-10 h-10 text-green-500 mb-2"/>
            <h4 className="font-bold text-green-700">{currentContent.domainKnowledge}</h4>
            <p className="text-sm text-gray-600">{currentContent.domainKnowledgeDesc}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <HardHat className="mx-auto w-10 h-10 text-yellow-500 mb-2"/>
            <h4 className="font-bold text-yellow-700">{currentContent.infra}</h4>
            <p className="text-sm text-gray-600">{currentContent.infraDesc}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 flex items-center mb-3"><Zap className="mr-2"/>{currentContent.speedTitle}</h3>
            <p className="font-semibold">{currentContent.buildVsBuy}</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                <li>{currentContent.internalDev}</li>
                <li className="font-bold text-blue-600">{currentContent.ourSolution}</li>
                <li className="text-red-600">{currentContent.risk}</li>
            </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 flex items-center mb-3"><AlertTriangle className="mr-2"/>{currentContent.whyFailTitle}</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                {currentContent.fails.map((fail, i) => <li key={i}>{fail}</li>)}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default BuildVsBuySlide; 