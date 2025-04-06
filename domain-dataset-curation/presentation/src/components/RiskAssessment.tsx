import React from 'react';
import { AlertTriangle, Shield, Users, Cpu, DollarSign, UserPlus, Database } from 'lucide-react';

interface RiskAssessmentProps {
  language: 'en' | 'zh';
}

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Risk Assessment & Mitigation',
      risks: [
        {
          risk: 'Data Privacy Regulations',
          impact: 'High',
          probability: 'High',
          mitigation: 'Robust compliance framework, regular legal audits',
          icon: <Shield className="text-red-600" size={24} />
        },
        {
          risk: 'Quality Control Issues',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Automated + human verification, clear QA processes',
          icon: <AlertTriangle className="text-amber-600" size={24} />
        },
        {
          risk: 'Client Dependency',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Diversify client base across industries',
          icon: <Users className="text-blue-600" size={24} />
        },
        {
          risk: 'Technology Changes',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Continuous skill development, flexible architecture',
          icon: <Cpu className="text-purple-600" size={24} />
        },
        {
          risk: 'Pricing Pressure',
          impact: 'Medium',
          probability: 'High',
          mitigation: 'Focus on specialized niches with high-value datasets',
          icon: <DollarSign className="text-green-600" size={24} />
        },
        {
          risk: 'Talent Acquisition',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Partner with universities, offer equity, remote work',
          icon: <UserPlus className="text-indigo-600" size={24} />
        },
        {
          risk: 'Data Source Limitations',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Develop multiple sourcing channels, synthetic data capabilities',
          icon: <Database className="text-teal-600" size={24} />
        }
      ]
    },
    zh: {
      title: '风险评估与缓解',
      risks: [
        {
          risk: '数据隐私法规',
          impact: '高',
          probability: '高',
          mitigation: '健全的合规框架，定期法律审计',
          icon: <Shield className="text-red-600" size={24} />
        },
        {
          risk: '质量控制问题',
          impact: '高',
          probability: '中',
          mitigation: '自动化+人工验证，明确的质量保证流程',
          icon: <AlertTriangle className="text-amber-600" size={24} />
        },
        {
          risk: '客户依赖',
          impact: '中',
          probability: '中',
          mitigation: '跨行业多样化客户群',
          icon: <Users className="text-blue-600" size={24} />
        },
        {
          risk: '技术变革',
          impact: '中',
          probability: '中',
          mitigation: '持续技能发展，灵活架构',
          icon: <Cpu className="text-purple-600" size={24} />
        },
        {
          risk: '价格压力',
          impact: '中',
          probability: '高',
          mitigation: '专注于具有高价值数据集的专业领域',
          icon: <DollarSign className="text-green-600" size={24} />
        },
        {
          risk: '人才招聘',
          impact: '高',
          probability: '中',
          mitigation: '与大学合作，提供股权，远程工作',
          icon: <UserPlus className="text-indigo-600" size={24} />
        },
        {
          risk: '数据源限制',
          impact: '高',
          probability: '中',
          mitigation: '开发多种采购渠道，合成数据能力',
          icon: <Database className="text-teal-600" size={24} />
        }
      ]
    }
  };

  const getImpactColor = (impact: string) => {
    if (impact === 'High' || impact === '高') return 'bg-red-100 text-red-800';
    if (impact === 'Medium' || impact === '中') return 'bg-amber-100 text-amber-800';
    return 'bg-green-100 text-green-800';
  };

  const getProbabilityColor = (probability: string) => {
    if (probability === 'High' || probability === '高') return 'bg-red-100 text-red-800';
    if (probability === 'Medium' || probability === '中') return 'bg-amber-100 text-amber-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                  {language === 'en' ? 'Risk' : '风险'}
                </th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                  {language === 'en' ? 'Impact' : '影响'}
                </th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                  {language === 'en' ? 'Probability' : '概率'}
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                  {language === 'en' ? 'Mitigation Strategy' : '缓解策略'}
                </th>
              </tr>
            </thead>
            <tbody>
              {content[language].risks.map((risk, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 text-sm text-gray-700 border-b">
                    <div className="flex items-center">
                      <div className="mr-3">{risk.icon}</div>
                      <span className="font-medium">{risk.risk}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm border-b">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getImpactColor(risk.impact)}`}>
                      {risk.impact}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm border-b">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getProbabilityColor(risk.probability)}`}>
                      {risk.probability}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 border-b">{risk.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            {language === 'en' ? 'Regulatory Compliance' : '监管合规'}
          </h3>
          <p className="text-gray-700">
            {language === 'en' 
              ? 'Establish a robust compliance framework that adapts to changing regulations across different jurisdictions.'
              : '建立一个强大的合规框架，适应不同司法管辖区的不断变化的法规。'}
          </p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {language === 'en' ? 'Quality Assurance' : '质量保证'}
          </h3>
          <p className="text-gray-700">
            {language === 'en' 
              ? 'Implement multi-layered verification processes combining automated checks with expert human review.'
              : '实施多层验证流程，将自动检查与专家人工审核相结合。'}
          </p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            {language === 'en' ? 'Diversification' : '多样化'}
          </h3>
          <p className="text-gray-700">
            {language === 'en' 
              ? 'Spread risk by diversifying across multiple industries, data sources, and service offerings.'
              : '通过跨多个行业、数据源和服务产品多样化来分散风险。'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
