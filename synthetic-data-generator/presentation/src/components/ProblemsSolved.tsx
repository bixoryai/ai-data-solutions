import React from 'react';

interface ProblemsSolvedProps {
  language: 'en' | 'zh';
}

const ProblemsSolved: React.FC<ProblemsSolvedProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Problems We Solve',
      subtitle: 'Key Challenges in the AI Data Ecosystem:',
      tableHeader: {
        challenge: 'Challenge',
        impact: 'Impact',
        solution: 'Our Solution'
      },
      problems: [
        {
          challenge: 'Privacy Regulations',
          impact: 'Limited use of sensitive data',
          solution: 'Privacy-by-design synthetic data'
        },
        {
          challenge: 'Data Scarcity',
          impact: 'Insufficient training datasets',
          solution: 'Data augmentation & synthesis'
        },
        {
          challenge: 'AI Model Bias',
          impact: 'Unfair or inaccurate systems',
          solution: 'Balanced synthetic data generation'
        },
        {
          challenge: 'High Data Acquisition Costs',
          impact: 'Budget constraints',
          solution: 'Cost-effective data alternatives'
        },
        {
          challenge: 'Cross-border Data Restrictions',
          impact: 'Global expansion barriers',
          solution: 'Restriction-avoiding synthetic data'
        },
        {
          challenge: 'Long Development Cycles',
          impact: 'Delayed time-to-market',
          solution: 'Accelerated data acquisition'
        }
      ]
    },
    zh: {
      title: '我们解决的问题',
      subtitle: 'AI数据生态系统中的关键挑战:',
      tableHeader: {
        challenge: '挑战',
        impact: '影响',
        solution: '我们的解决方案'
      },
      problems: [
        {
          challenge: '隐私法规',
          impact: '敏感数据使用受限',
          solution: '隐私设计优先的合成数据'
        },
        {
          challenge: '数据稀缺',
          impact: '训练数据集不足',
          solution: '数据增强与合成'
        },
        {
          challenge: 'AI模型偏见',
          impact: '不公平或不准确的系统',
          solution: '平衡的合成数据生成'
        },
        {
          challenge: '高额数据获取成本',
          impact: '预算限制',
          solution: '经济高效的数据替代方案'
        },
        {
          challenge: '跨境数据限制',
          impact: '全球扩张障碍',
          solution: '避开限制的合成数据'
        },
        {
          challenge: '漫长的开发周期',
          impact: '上市时间延迟',
          solution: '加速数据获取'
        }
      ]
    }
  };

  const { title, subtitle, tableHeader, problems } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">{title}</h2>
      <p className="text-xl text-center mb-8">{subtitle}</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary-900 bg-opacity-70">
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.challenge}</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.impact}</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.solution}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {problems.map((problem, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 bg-opacity-30' : 'bg-gray-800 bg-opacity-50'}>
                <td className="px-6 py-4 text-lg font-medium text-primary-300">{problem.challenge}</td>
                <td className="px-6 py-4 text-lg">{problem.impact}</td>
                <td className="px-6 py-4 text-lg text-green-300">{problem.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-900 bg-opacity-20 border border-yellow-800 rounded-lg">
        <p className="text-center text-lg">
          {language === 'en' 
            ? "Our synthetic data solutions directly address the most critical challenges facing organizations in the AI era."
            : "我们的合成数据解决方案直接解决了AI时代组织面临的最关键挑战。"}
        </p>
      </div>
    </div>
  );
};

export default ProblemsSolved;
