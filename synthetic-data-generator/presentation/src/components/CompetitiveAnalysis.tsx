import React from 'react';

interface CompetitiveAnalysisProps {
  language: 'en' | 'zh';
}

const CompetitiveAnalysis: React.FC<CompetitiveAnalysisProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Competitive Landscape',
      subtitle: 'Key Players & Our Differentiation:',
      tableHeader: {
        competitor: 'Competitor',
        focus: 'Focus Area',
        strengths: 'Strengths',
        weaknesses: 'Weaknesses'
      },
      competitors: [
        {
          name: 'Synthetic Data Co.',
          focus: 'Tabular data',
          strengths: 'Strong in financial services',
          weaknesses: 'Limited in unstructured data'
        },
        {
          name: 'AI DataGen',
          focus: 'Healthcare data',
          strengths: 'Medical imaging expertise',
          weaknesses: 'High pricing, narrow focus'
        },
        {
          name: 'DataSynth',
          focus: 'General purpose',
          strengths: 'Wide industry coverage',
          weaknesses: 'Less specialized solutions'
        }
      ],
      ourAdvantages: {
        title: 'Our Competitive Advantages:',
        advantages: [
          'Proprietary algorithms with 30% better statistical fidelity',
          'Flexible deployment options (cloud, on-premise, hybrid)',
          'Comprehensive data type support (tabular, text, images)',
          'Industry-specific pre-trained models',
          'Transparent pricing model with flexible licensing'
        ]
      },
      positioningStatement: 'We combine the specialization of niche players with the versatility of general-purpose solutions, all while maintaining superior data quality and privacy guarantees.'
    },
    zh: {
      title: '竞争格局',
      subtitle: '主要竞争者与我们的差异化:',
      tableHeader: {
        competitor: '竞争者',
        focus: '专注领域',
        strengths: '优势',
        weaknesses: '劣势'
      },
      competitors: [
        {
          name: 'Synthetic Data Co.',
          focus: '表格数据',
          strengths: '在金融服务领域实力强',
          weaknesses: '非结构化数据能力有限'
        },
        {
          name: 'AI DataGen',
          focus: '医疗数据',
          strengths: '医学影像专业知识',
          weaknesses: '价格高，专注范围窄'
        },
        {
          name: 'DataSynth',
          focus: '通用目的',
          strengths: '广泛的行业覆盖',
          weaknesses: '解决方案专业性较弱'
        }
      ],
      ourAdvantages: {
        title: '我们的竞争优势:',
        advantages: [
          '专有算法，统计保真度提高30%',
          '灵活的部署选项（云端、本地、混合）',
          '全面的数据类型支持（表格、文本、图像）',
          '特定行业的预训练模型',
          '透明的定价模式和灵活的许可方式'
        ]
      },
      positioningStatement: '我们结合了专业玩家的专业化和通用解决方案的多功能性，同时保持卓越的数据质量和隐私保证。'
    }
  };

  const { title, subtitle, tableHeader, competitors, ourAdvantages, positioningStatement } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">{title}</h2>
      <p className="text-xl text-center mb-8">{subtitle}</p>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary-900 bg-opacity-70">
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.competitor}</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.focus}</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.strengths}</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.weaknesses}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {competitors.map((competitor, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 bg-opacity-30' : 'bg-gray-800 bg-opacity-50'}>
                <td className="px-6 py-4 text-lg font-medium text-primary-300">{competitor.name}</td>
                <td className="px-6 py-4 text-lg">{competitor.focus}</td>
                <td className="px-6 py-4 text-lg text-green-300">{competitor.strengths}</td>
                <td className="px-6 py-4 text-lg text-red-300">{competitor.weaknesses}</td>
              </tr>
            ))}
            <tr className="bg-primary-900 bg-opacity-30">
              <td className="px-6 py-4 text-lg font-bold text-yellow-400">Our Solution</td>
              <td className="px-6 py-4 text-lg text-white">Multi-domain</td>
              <td className="px-6 py-4 text-lg text-green-300">Comprehensive, flexible, accurate</td>
              <td className="px-6 py-4 text-lg text-gray-400">Newer market entrant</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-primary-400 mb-4">{ourAdvantages.title}</h3>
        <ul className="space-y-3">
          {ourAdvantages.advantages.map((advantage, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-400 mr-2">✓</span>
              <span className="text-lg">{advantage}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-primary-900 to-primary-800 rounded-lg border border-primary-700">
        <p className="text-center text-xl italic">
          {positioningStatement}
        </p>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;
