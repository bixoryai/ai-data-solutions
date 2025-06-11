import React from 'react';

interface SlideProps {
  t: (key: string) => string;
}

const ProblemsSolvedSlide: React.FC<SlideProps> = ({ t }) => {
  const content = {
    en: {
      title: "The Problems We Solve",
      subtitle: "Addressing the Biggest Pain Points in Financial Services",
      headers: ["Challenge", "Traditional Approach", "AI-Powered Solution", "Business Impact"],
      rows: [
        ["Fraud Detection", "Manual rules, 70% false positives", "AI models, <5% false positives", "$8.8B+ savings potential"],
        ["Credit Assessment", "Limited data, 3-week process", "Alternative data, 1-hour assessment", "30% more approvals"],
        ["Compliance", "Manual checks, high overhead", "Automated monitoring, 99.2% accuracy", "50% cost reduction"],
        ["Trading", "Human analysis, slow reaction", "Algorithmic trading, sub-second execution", "15-20% alpha generation"]
      ],
      consequences: "Consequences of Inaction: Increased fraud losses, regulatory fines, missed market opportunities, loss of competitive edge."
    },
    zh: {
      title: "我们解决的问题",
      subtitle: "解决金融服务中最大的痛点",
      headers: ["挑战", "传统方法", "AI驱动的解决方案", "业务影响"],
      rows: [
        ["欺诈检测", "手动规则，70%误报", "AI模型，<5%误报", "88亿+美元潜在节省"],
        ["信用评估", "数据有限，3周流程", "替代数据，1小时评估", "审批增加30%"],
        ["合规", "手动检查，高昂开销", "自动化监控，99.2%准确率", "成本降低50%"],
        ["交易", "人工分析，反应慢", "算法交易，亚秒级执行", "产生15-20%的Alpha收益"]
      ],
      consequences: "不采取行动的后果：欺诈损失增加，监管罚款，错失市场机会，丧失竞争优势。"
    }
  };

  const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
      <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-100">
              {currentContent.headers.map((header, i) => (
                <th key={i} className="px-4 py-2 text-left text-sm font-semibold text-blue-800">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentContent.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2 border-b border-gray-200 text-gray-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="mt-6 text-center text-sm text-gray-600 italic">{currentContent.consequences}</p>
    </div>
  );
};

export default ProblemsSolvedSlide; 