import React from 'react';
import { TrendingUp, DollarSign, Shield, Cpu, Database, BarChart2 } from 'lucide-react';

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
      <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <TrendingUp className="text-blue-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-blue-300">{marketTitle}</h3>
          </div>
          <ul className="space-y-4">
            {marketPoints.map((point, index) => {
              // Choose an icon based on the index
              const icons = [
                <BarChart2 key="chart" className="text-blue-400 flex-shrink-0" size={20} />,
                <DollarSign key="dollar" className="text-green-400 flex-shrink-0" size={20} />,
                <Shield key="shield" className="text-purple-400 flex-shrink-0" size={20} />,
                <Cpu key="cpu" className="text-amber-400 flex-shrink-0" size={20} />,
                <Database key="database" className="text-red-400 flex-shrink-0" size={20} />,
                <TrendingUp key="trend" className="text-indigo-400 flex-shrink-0" size={20} />
              ];
              return (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1">{icons[index]}</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <BarChart2 className="text-blue-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-blue-300 text-center">{chartTitle}</h3>
          </div>
          <div className="h-64 flex items-end justify-between">
            {chartValues.map((value, index) => {
              const height = (value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-8 bg-gradient-to-t from-blue-700 to-blue-400 rounded-t shadow-lg"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs mt-2 transform -rotate-45 origin-top-left">
                    {chartYears[index]}
                  </div>
                  <div className="text-xs mt-1 text-blue-300 font-medium">
                    ${value}M
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <div className="flex space-x-4 items-center mb-4">
            <Cpu className="text-blue-300" size={24} />
            <Shield className="text-purple-300" size={24} />
            <Database className="text-green-300" size={24} />
          </div>
        </div>
        <div className="text-center text-xl font-medium text-gray-200">
          {language === 'en' 
            ? "Synthetic data is positioned at the intersection of AI, privacy, and data science - three of the fastest growing technology sectors."
            : "合成数据位于AI、隐私和数据科学的交叉点 - 这是三个增长最快的技术领域。"}
        </div>
      </div>
    </div>
  );
};

export default BusinessCase;
