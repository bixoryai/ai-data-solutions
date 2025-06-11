import React from 'react';
import { Shield, TrendingUp, Cpu, Users, BarChart } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const OurSolutionsSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "What We Can Build for You",
            subtitle: "Comprehensive AI Solutions Across Financial Services",
            solutions: [
                {
                    icon: <Shield className="w-8 h-8 text-blue-500" />,
                    title: "Fraud Detection & Prevention",
                    desc: "Real-Time Transaction Monitoring with behavioral anomaly detection, network analysis, and account takeover prevention.",
                    roi: "Typical ROI: 5-8x investment"
                },
                {
                    icon: <BarChart className="w-8 h-8 text-green-500" />,
                    title: "Credit Risk & Lending",
                    desc: "Intelligent Credit Assessment with alternative data integration, dynamic pricing, and automated underwriting.",
                    impact: "Typical Impact: 25% increase in approvals, 20% reduction in defaults"
                },
                {
                    icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
                    title: "Algorithmic Trading & Investment",
                    desc: "AI-Powered Market Intelligence with high-frequency trading algorithms and portfolio optimization.",
                    performance: "Typical Performance: 15-30% alpha generation"
                },
                {
                    icon: <Users className="w-8 h-8 text-yellow-500" />,
                    title: "Customer Analytics & Experience",
                    desc: "Personalized Financial Services with lifetime value prediction, churn prevention, and recommendation engines.",
                    impact: "Typical Impact: 20-35% increase in customer retention"
                }
            ]
        },
        zh: {
            title: "我们能为您打造什么",
            subtitle: "跨金融服务的全面AI解决方案",
            solutions: [
                {
                    icon: <Shield className="w-8 h-8 text-blue-500" />,
                    title: "欺诈检测与预防",
                    desc: "实时交易监控，具有行为异常检测、网络分析和账户盗用预防功能。",
                    roi: "典型投资回报率：5-8倍投资"
                },
                {
                    icon: <BarChart className="w-8 h-8 text-green-500" />,
                    title: "信用风险与贷款",
                    desc: "智能信用评估，整合替代数据，动态定价和自动化承保。",
                    impact: "典型影响：审批率提高25%，违约率降低20%"
                },
                {
                    icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
                    title: "算法交易与投资",
                    desc: "AI驱动的市场情报，具有高频交易算法和投资组合优化功能。",
                    performance: "典型表现：产生15-30%的阿尔法收益"
                },
                {
                    icon: <Users className="w-8 h-8 text-yellow-500" />,
                    title: "客户分析与体验",
                    desc: "个性化金融服务，具有生命周期价值预测、客户流失预防和推荐引擎。",
                    impact: "典型影响：客户保留率提高20-35%"
                }
            ]
        }
    };
    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
        <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentContent.solutions.map((item, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg flex flex-col">
            <div className="flex items-center mb-3">
              {item.icon}
              <h3 className="ml-3 text-xl font-bold text-blue-700">{item.title}</h3>
            </div>
            <p className="text-gray-700 flex-grow">{item.desc}</p>
            <p className="mt-4 font-semibold text-blue-600">
                {(item as any).roi || (item as any).impact || (item as any).performance}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolutionsSlide; 