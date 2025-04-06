import React from 'react';

interface BusinessCaseProps {
  language: 'en' | 'zh';
}

const BusinessCase: React.FC<BusinessCaseProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Why This Business Makes Sense',
      marketTitle: 'Market & Growth Factors:',
      marketPoints: [
        'Projected $1.5B market by 2030, with moderate competition',
        'Low entry barriers: $50-200K startup capital requirement',
        'Growing privacy regulations (GDPR, CCPA, HIPAA) driving demand',
        'Accelerating AI adoption across industries',
        'Data scarcity becoming a key bottleneck',
        'Diversified revenue streams and business models'
      ],
      chartTitle: 'Market Growth Projection',
      chartYears: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
      chartValues: [300, 450, 600, 750, 900, 1100, 1300, 1500]
    },
    zh: {
      title: '为什么这个业务有意义',
      marketTitle: '市场与增长因素:',
      marketPoints: [
        '到2030年预计15亿美元市场，竞争强度中等',
        '低进入门槛: 5-20万美元启动资金需求',
        '不断增长的隐私法规(GDPR, CCPA, HIPAA)推动需求',
        '各行业AI采用加速',
        '数据稀缺成为关键瓶颈',
        '多元化收入来源和商业模式'
      ],
      chartTitle: '市场增长预测',
      chartYears: ['2023年', '2024年', '2025年', '2026年', '2027年', '2028年', '2029年', '2030年'],
      chartValues: [300, 450, 600, 750, 900, 1100, 1300, 1500]
    }
  };

  const { title, marketTitle, marketPoints, chartTitle, chartYears, chartValues } = content[language];

  // Calculate max value for chart scaling
  const maxValue = Math.max(...chartValues);
  
  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-primary-400 mb-4">{marketTitle}</h3>
          <ul className="space-y-3">
            {marketPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span className="text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-primary-400 mb-4 text-center">{chartTitle}</h3>
          <div className="h-64 flex items-end justify-between">
            {chartValues.map((value, index) => {
              const height = (value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-8 bg-gradient-to-t from-primary-700 to-primary-400 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs mt-2 transform -rotate-45 origin-top-left">
                    {chartYears[index]}
                  </div>
                  <div className="text-xs mt-1 text-primary-300">
                    ${value}M
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-primary-900 to-primary-800 bg-opacity-50 rounded-lg border border-primary-700">
        <div className="text-center text-xl">
          {language === 'en' 
            ? "Synthetic data is positioned at the intersection of AI, privacy, and data science - three of the fastest growing technology sectors."
            : "合成数据位于AI、隐私和数据科学的交叉点 - 这是三个增长最快的技术领域。"}
        </div>
      </div>
    </div>
  );
};

export default BusinessCase;
