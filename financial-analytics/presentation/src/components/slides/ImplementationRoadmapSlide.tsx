import React from 'react';
import { Rocket, DollarSign, ShieldCheck } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ImplementationRoadmapSlide: React.FC<SlideProps> = ({ t }) => {
  const content = {
    en: {
      title: "Implementation & Investment",
      subtitle: "Your Path to AI-Powered Financial Intelligence",
      frameworkTitle: "90-Day Success Framework",
      phases: [
        { name: "Phase 1: Foundation (Days 1-30)", details: "Security clearance, data integration, initial model training, stakeholder alignment." },
        { name: "Phase 2: Deployment (Days 31-60)", details: "Custom model development, system integration, security testing, user training." },
        { name: "Phase 3: Optimization (Days 61-90)", details: "Production deployment, performance monitoring, ROI validation, future roadmap." }
      ],
      investmentTitle: "Investment Options",
      packages: [
        { name: "Fraud Prevention Starter", price: "$200K-500K", ideal: "Mid-size banks, credit unions", roi: "3-5x in 6 months" },
        { name: "Comprehensive Risk Suite", price: "$500K-1.5M", ideal: "Regional banks, investment firms", roi: "5-8x in 12 months" },
        { name: "Enterprise AI Platform", price: "$1.5M-5M", ideal: "Large institutions, global banks", roi: "8-15x in 18 months" }
      ],
      riskTitle: "Risk Mitigation",
      risks: [
        "Performance Guarantees: Specific accuracy and ROI commitments",
        "Phased Implementation: Value delivery at each milestone",
        "Success-Based Pricing: Portion of fees tied to measurable outcomes",
        "Insurance Coverage: Professional liability and errors & omissions"
      ]
    },
    zh: {
      title: "实施与投资",
      subtitle: "您通往AI驱动金融智能之路",
      frameworkTitle: "90天成功框架",
      phases: [
        { name: "第一阶段：基础（1-30天）", details: "安全许可，数据集成，初始模型训练，利益相关者对齐。" },
        { name: "第二阶段：部署（31-60天）", details: "定制模型开发，系统集成，安全测试，用户培训。" },
        { name: "第三阶段：优化（61-90天）", details: "生产部署，性能监控，投资回报验证，未来路线图。" }
      ],
      investmentTitle: "投资选项",
      packages: [
        { name: "欺诈预防入门包", price: "20-50万美元", ideal: "中型银行，信用合作社", roi: "6个月内3-5倍" },
        { name: "综合风险套件", price: "50-150万美元", ideal: "区域性银行，投资公司", roi: "12个月内5-8倍" },
        { name: "企业AI平台", price: "150-500万美元", ideal: "大型机构，全球银行", roi: "18个月内8-15倍" }
      ],
      riskTitle: "风险缓解",
      risks: [
        "性能保证：具体的准确性和投资回报率承诺",
        "分阶段实施：在每个里程碑交付价值",
        "基于成功的定价：部分费用与可衡量的成果挂钩",
        "保险范围：专业责任险和错误与疏忽险"
      ]
    }
  };

  const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
      <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-700 flex items-center"><Rocket className="mr-2"/>{currentContent.frameworkTitle}</h3>
          {currentContent.phases.map((phase, i) => (
            <div key={i} className="pl-4 border-l-4 border-blue-500">
              <p className="font-bold text-gray-700">{phase.name}</p>
              <p className="text-sm text-gray-600">{phase.details}</p>
            </div>
          ))}
          
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-blue-700 flex items-center"><ShieldCheck className="mr-2"/>{currentContent.riskTitle}</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                {currentContent.risks.map((risk, i) => <li key={i}>{risk}</li>)}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-700 flex items-center"><DollarSign className="mr-2"/>{currentContent.investmentTitle}</h3>
            <div className="space-y-3">
                {currentContent.packages.map((pkg, i) => (
                    <div key={i} className="bg-blue-50 p-3 rounded-lg shadow-sm border">
                        <p className="font-bold text-blue-700">{pkg.name}</p>
                        <p className="text-sm text-gray-700"><span className="font-semibold">{t('language') === 'zh' ? '价格' : 'Price'}:</span> {pkg.price}</p>
                        <p className="text-sm text-gray-700"><span className="font-semibold">{t('language') === 'zh' ? '适用于' : 'Ideal For'}:</span> {pkg.ideal}</p>
                        <p className="text-sm text-green-600 font-semibold">{t('language') === 'zh' ? '预期ROI' : 'Expected ROI'}: {pkg.roi}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationRoadmapSlide; 