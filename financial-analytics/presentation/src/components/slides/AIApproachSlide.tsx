import React from 'react';
import { Cpu, Zap, Banknote, ShieldCheck } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const AIApproachSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "Our AI-First Approach",
            subtitle: "Advanced Intelligence Tailored to Financial Services",
            coreTechTitle: "Core AI Technologies",
            mlTitle: "Machine Learning Excellence",
            mlPoints: [
                "Deep Neural Networks: Pattern recognition in complex financial data with 95%+ accuracy",
                "Ensemble Methods: Combining multiple models for robust fraud detection",
                "Graph Analytics: Uncovering hidden relationships in transaction networks"
            ],
            fsTitle: "Financial Services Specialization",
            fsPoints: [
                "Proprietary feature engineering for financial data",
                "Models pre-trained on terabytes of financial transaction data",
                "Built-in explainability for regulatory compliance (XAI)"
            ]
        },
        zh: {
            title: "我们的AI优先方法",
            subtitle: "为金融服务量身定制的先进智能",
            coreTechTitle: "核心AI技术",
            mlTitle: "卓越的机器学习",
            mlPoints: [
                "深度神经网络：以95%以上的准确率识别复杂金融数据中的模式",
                "集成方法：结合多个模型进行稳健的欺诈检测",
                "图分析：揭示交易网络中隐藏的关系"
            ],
            fsTitle: "金融服务专业化",
            fsPoints: [
                "专有的金融数据特征工程",
                "在TB级金融交易数据上预训练的模型",
                "为法规遵从性内置的可解释性（XAI）"
            ]
        }
    };
    
    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
        <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center"><Cpu className="mr-2"/>{currentContent.mlTitle}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {currentContent.mlPoints.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center"><Banknote className="mr-2"/>{currentContent.fsTitle}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {currentContent.fsPoints.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default AIApproachSlide; 