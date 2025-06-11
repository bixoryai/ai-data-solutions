import React from 'react';
import { Building, Gem, Shield, BarChart2 } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const CompetitiveLandscapeSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "Market Positioning & Competition",
            subtitle: "Leading the AI Revolution in Financial Services",
            landscapeTitle: "Competitive Landscape",
            competitors: [
                { name: "Technology Giants (IBM, Microsoft, Google)", cons: "Generic AI platforms, complex implementation (12-18 months).", advantage: "Our Advantage: Pre-built financial models, 90-day deployment." },
                { name: "Traditional Financial Software (SAS, FICO, Fiserv)", cons: "Legacy architectures, batch processing.", advantage: "Our Advantage: Modern AI architecture, real-time processing." },
                { name: "AI Startups", cons: "Limited scale, lack enterprise security.", advantage: "Our Advantage: Enterprise-ready, proven at scale." },
            ],
            strategyTitle: "Market Leadership Strategy",
            strategies: [
                "Deep Financial Expertise: Combining Wall Street experience with Silicon Valley AI innovation.",
                "Rapid Implementation: 90-day deployments vs. industry average of 12-18 months.",
                "Proven ROI: Average 420% first-year return across all implementations.",
                "Enterprise Grade: SOC 2 Type II compliance with Fortune 500 security standards."
            ],
            growthTitle: "Growth Trajectory",
            growth: [
                "Year 1: 25 clients, $3.5M revenue, 95% client retention",
                "Year 2: 65 clients, $12M revenue, expansion into insurance and investment management",
                "Year 3: 150 clients, $35M revenue, international expansion"
            ]
        },
        zh: {
            title: "市场定位与竞争",
            subtitle: "引领金融服务领域的AI革命",
            landscapeTitle: "竞争格局",
            competitors: [
                { name: "科技巨头（IBM, 微软, 谷歌）", cons: "通用AI平台，实施复杂（12-18个月）。", advantage: "我们的优势：预构建的金融模型，90天部署。" },
                { name: "传统金融软件（SAS, FICO, Fiserv）", cons: "遗留架构，批处理。", advantage: "我们的优势：现代AI架构，实时处理。" },
                { name: "AI创业公司", cons: "规模有限，缺乏企业级安全。", advantage: "我们的优势：企业级就绪，经规模验证。" },
            ],
            strategyTitle: "市场领导策略",
            strategies: [
                "深厚的金融专业知识：将华尔街经验与硅谷AI创新相结合。",
                "快速实施：90天部署，而行业平均为12-18个月。",
                "经证实的投资回报率：所有实施项目平均首年回报率420%。",
                "企业级：符合SOC 2 Type II标准，具备财富500强安全标准。"
            ],
            growthTitle: "增长轨迹",
            growth: [
                "第一年：25个客户，350万美元收入，95%客户保留率",
                "第二年：65个客户，1200万美元收入，扩展到保险和投资管理领域",
                "第三年：150个客户，3500万美元收入，国际扩张"
            ]
        }
    };
    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
        <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center"><Building className="mr-2"/>{currentContent.landscapeTitle}</h3>
                <div className="space-y-3">
                    {currentContent.competitors.map((c, i) => (
                        <div key={i} className="bg-blue-50 p-3 rounded-lg border">
                            <p className="font-semibold text-gray-700">{c.name}</p>
                            <p className="text-sm text-red-600">❌ {c.cons}</p>
                            <p className="text-sm text-green-600">✅ {c.advantage}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center"><Gem className="mr-2"/>{currentContent.strategyTitle}</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {currentContent.strategies.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>
            </div>
        </div>

        <div className="pt-4">
            <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center"><BarChart2 className="mr-2"/>{currentContent.growthTitle}</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
                <ul className="list-decimal list-inside space-y-1 text-gray-700">
                    {currentContent.growth.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default CompetitiveLandscapeSlide; 