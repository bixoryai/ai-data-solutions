import React from 'react';
import { TrendingUp, CheckCircle, Clock, Users } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const CaseStudiesSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "Proven Results That Matter",
            subtitle: "ROI That Speaks for Itself",
            caseStudyTitle: "Case Study: Regional Bank ($5B Assets)",
            challenge: "Challenge: $2M annual fraud losses, 3-week loan approval process, regulatory compliance costs",
            headers: ["Metric", "Before", "After", "Improvement"],
            rows: [
                ["Fraud Detection Rate", "65%", "94%", "+45%"],
                ["False Positives", "70%", "<5%", "-93%"],
                ["Loan Approval Time", "21 days", "2 hours", "-99%"],
                ["Compliance Costs", "$500K/year", "$200K/year", "-60%"],
                ["Customer Satisfaction", "72%", "89%", "+24%"]
            ],
            financialImpactTitle: "Financial Impact:",
            impacts: [
                "$1.8M prevented fraud losses (90% reduction)",
                "$850K operational cost savings annually",
                "35% increase in loan volume through faster approvals",
                "ROI: 420% in first year"
            ],
            keyInsightsTitle: "Key AI Insights Delivered:",
            insights: [
                "Identified 3 new fraud patterns missed by traditional systems",
                "Discovered optimal lending criteria increasing approvals by 35% while reducing defaults by 20%",
                "Automated 85% of compliance reporting, reducing manual effort by 12 hours/week"
            ]
        },
        zh: {
            title: "经证实的重要成果",
            subtitle: "不言自明的投资回报率",
            caseStudyTitle: "案例研究：区域性银行（50亿美元资产）",
            challenge: "挑战：每年200万美元的欺诈损失，3周的贷款审批流程，合规成本高",
            headers: ["指标", "之前", "之后", "改进"],
            rows: [
                ["欺诈检测率", "65%", "94%", "+45%"],
                ["误报率", "70%", "<5%", "-93%"],
                ["贷款审批时间", "21天", "2小时", "-99%"],
                ["合规成本", "50万美元/年", "20万美元/年", "-60%"],
                ["客户满意度", "72%", "89%", "+24%"]
            ],
            financialImpactTitle: "财务影响：",
            impacts: [
                "防止了180万美元的欺诈损失（减少90%）",
                "每年节省85万美元的运营成本",
                "通过更快的审批使贷款量增加35%",
                "第一年投资回报率：420%"
            ],
            keyInsightsTitle: "交付的关键AI洞察：",
            insights: [
                "识别出传统系统遗漏的3种新欺诈模式",
                "发现最佳贷款标准，使审批率提高35%，同时将违约率降低20%",
                "自动化85%的合规报告，每周减少12小时的人工工作"
            ]
        }
    };
    
    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
      <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{currentContent.caseStudyTitle}</h3>
        <p className="italic text-gray-600 mb-4">{currentContent.challenge}</p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border">
            <thead className="bg-blue-100">
              <tr>
                {currentContent.headers.map((header, i) => (
                  <th key={i} className="px-4 py-2 text-left text-sm font-semibold text-blue-800">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentContent.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="px-4 py-2 text-gray-700 border-b">{row[0]}</td>
                    <td className="px-4 py-2 text-gray-700 border-b">{row[1]}</td>
                    <td className="px-4 py-2 text-green-700 font-bold border-b">{row[2]}</td>
                    <td className="px-4 py-2 text-blue-700 font-bold border-b">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-green-700">{currentContent.financialImpactTitle}</h4>
                <ul className="list-disc list-inside space-y-1 mt-2 text-green-700">
                    {currentContent.impacts.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-700">{currentContent.keyInsightsTitle}</h4>
                <ul className="list-disc list-inside space-y-1 mt-2 text-blue-700">
                    {currentContent.insights.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSlide; 