import React from 'react';
import { Trophy, Check, Star, Users, BrainCircuit } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const WhyChooseUsSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "Why Choose Us",
            subtitle: "The Only Team That Combines Financial Expertise with AI Excellence",
            advantagesTitle: "Our Unique Advantages",
            tableHeaders: ["Our Approach", "Typical AI Companies", "Traditional FinTech"],
            tableRows: [
                ["Domain Expertise", "Financial services veterans + AI PhDs", "Generic AI platform builders", "Legacy financial system experts"],
                ["Implementation Speed", "90-day deployment", "12-18 months development", "6-12 months customization"],
                ["Model Performance", "94% fraud detection accuracy", "70-80% accuracy", "Rule-based, high false positives"],
                ["Regulatory Compliance", "Built-in compliance framework", "Compliance as afterthought", "Compliant but not AI-powered"],
                ["Real-Time Processing", "Sub-100ms response", "Batch processing", "Legacy system limitations"]
            ],
            trackRecordTitle: "Proven Track Record",
            trackRecord: [
                "15+ Years combined experience in financial services AI",
                "$50M+ in fraud prevented for clients in past 12 months",
                "99.9% system uptime across all deployments",
                "95% client retention rate"
            ],
            techExcellenceTitle: "Technical Excellence",
            techExcellence: [
                "PhD-level AI team from Stanford, MIT, CMU with financial services experience",
                "Former executives from JPMorgan, Goldman Sachs, and Federal Reserve",
                "Patent-pending algorithms for financial pattern recognition"
            ],
            partnershipTitle: "Partnership Approach",
            partnership: [
                "Success-based pricing tied to measurable business outcomes",
                "24/7 support with dedicated customer success teams",
                "Continuous optimization with quarterly model performance reviews"
            ]
        },
        zh: {
            title: "为什么选择我们",
            subtitle: "唯一将金融专业知识与AI卓越技术相结合的团队",
            advantagesTitle: "我们独特的优势",
            tableHeaders: ["我们的方法", "典型AI公司", "传统金融科技公司"],
            tableRows: [
                ["领域专业知识", "金融服务资深人士+AI博士", "通用AI平台构建者", "遗留金融系统专家"],
                ["实施速度", "90天部署", "12-18个月开发", "6-12个月定制"],
                ["模型性能", "94%欺诈检测准确率", "70-80%准确率", "基于规则，高误报率"],
                ["法规遵从性", "内置合规框架", "合规是事后考虑", "合规但非AI驱动"],
                ["实时处理", "亚100毫秒响应", "批处理", "遗留系统限制"]
            ],
            trackRecordTitle: "久经考验的业绩记录",
            trackRecord: [
                "15年以上金融服务AI综合经验",
                "过去12个月为客户防止超过5000万美元的欺诈",
                "所有部署的系统正常运行时间为99.9%",
                "95%的客户保留率"
            ],
            techExcellenceTitle: "卓越技术",
            techExcellence: [
                "来自斯坦福、麻省理工、卡内基梅隆大学的博士级AI团队，拥有金融服务经验",
                "来自摩根大通、高盛和美联储的前高管",
                "拥有金融模式识别的专利申请中算法"
            ],
            partnershipTitle: "合作伙伴方法",
            partnership: [
                "与可衡量的业务成果挂钩的基于成功的定价",
                "专门的客户成功团队提供24/7支持",
                "每季度进行模型性能审查，持续优化"
            ]
        }
    };
    
    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
        <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>
        
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-center mb-2 text-blue-700">{currentContent.advantagesTitle}</h3>
            <table className="min-w-full">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        {currentContent.tableHeaders.map((h, i) => <th key={i} className={`p-2 text-left ${i === 1 ? "text-blue-600 font-semibold" : "text-gray-500"}`}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {currentContent.tableRows.map((row, i) => (
                        <tr key={i} className="border-b border-gray-200">
                            {row.map((cell, j) => <td key={j} className={`p-2 ${j === 0 ? "font-bold text-gray-700" : "text-gray-700"} ${j===1 ? "bg-blue-50 text-blue-800" : ""}`}>{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-green-700 flex items-center mb-2"><Trophy className="mr-2"/>{currentContent.trackRecordTitle}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {currentContent.trackRecord.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-700 flex items-center mb-2"><BrainCircuit className="mr-2"/>{currentContent.techExcellenceTitle}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {currentContent.techExcellence.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-yellow-700 flex items-center mb-2"><Users className="mr-2"/>{currentContent.partnershipTitle}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {currentContent.partnership.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default WhyChooseUsSlide; 