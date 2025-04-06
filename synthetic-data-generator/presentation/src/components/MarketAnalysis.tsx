import React from 'react';

interface MarketAnalysisProps {
  language: 'en' | 'zh';
}

const MarketAnalysis: React.FC<MarketAnalysisProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Target Markets & Industries',
      subtitle: 'Initial Industry Focus:',
      industries: [
        {
          name: 'Financial Services',
          useCases: 'Credit risk models, fraud detection, transaction simulation',
          marketSize: 'Market size: $450M by 2030',
          drivers: 'Key drivers: Strict regulations, fraud prevention needs'
        },
        {
          name: 'Healthcare',
          useCases: 'Clinical trials, patient data, medical imaging',
          marketSize: 'Market size: $380M by 2030',
          drivers: 'Key drivers: HIPAA compliance, rare disease research'
        },
        {
          name: 'Retail/E-commerce',
          useCases: 'Customer behavior, inventory, price optimization',
          marketSize: 'Market size: $320M by 2030',
          drivers: 'Key drivers: Personalization needs, competitive advantage'
        }
      ],
      marketShare: {
        title: 'Market Share by Industry (2030 Projection)',
        segments: [
          { name: 'Financial Services', percentage: 30 },
          { name: 'Healthcare', percentage: 25 },
          { name: 'Retail/E-commerce', percentage: 21 },
          { name: 'Manufacturing', percentage: 12 },
          { name: 'Other', percentage: 12 }
        ]
      }
    },
    zh: {
      title: '目标市场与行业',
      subtitle: '初始行业焦点:',
      industries: [
        {
          name: '金融服务',
          useCases: '信用风险模型、欺诈检测、交易模拟',
          marketSize: '市场规模: 到2030年4.5亿美元',
          drivers: '关键驱动因素: 严格法规、欺诈防范需求'
        },
        {
          name: '医疗健康',
          useCases: '临床试验、患者数据、医学影像',
          marketSize: '市场规模: 到2030年3.8亿美元',
          drivers: '关键驱动因素: HIPAA合规、罕见疾病研究'
        },
        {
          name: '零售/电子商务',
          useCases: '客户行为、库存、价格优化',
          marketSize: '市场规模: 到2030年3.2亿美元',
          drivers: '关键驱动因素: 个性化需求、竞争优势'
        }
      ],
      marketShare: {
        title: '行业市场份额（2030年预测）',
        segments: [
          { name: '金融服务', percentage: 30 },
          { name: '医疗健康', percentage: 25 },
          { name: '零售/电子商务', percentage: 21 },
          { name: '制造业', percentage: 12 },
          { name: '其他', percentage: 12 }
        ]
      }
    }
  };

  const { title, subtitle, industries, marketShare } = content[language];

  // Colors for the pie chart segments
  const colors = ['#4338ca', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      <h3 className="text-2xl font-semibold text-center mb-6">{subtitle}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {industries.map((industry, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 flex flex-col">
            <h4 className="text-xl font-bold text-primary-400 mb-3">{industry.name}</h4>
            <p className="text-lg mb-2">{industry.useCases}</p>
            <p className="text-md text-yellow-300 mb-2">{industry.marketSize}</p>
            <p className="text-md text-gray-300 mt-auto">{industry.drivers}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 mt-8">
        <h3 className="text-xl font-semibold text-center mb-6">{marketShare.title}</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Pie Chart Visualization */}
          <div className="relative w-64 h-64 mb-6 md:mb-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {marketShare.segments.map((segment, index) => {
                // Calculate the pie segments
                const previousSegments = marketShare.segments.slice(0, index);
                const startAngle = previousSegments.reduce((sum, s) => sum + s.percentage, 0) * 3.6; // 3.6 = 360/100
                const endAngle = startAngle + segment.percentage * 3.6;
                
                // Convert angles to radians for SVG arc
                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (endAngle - 90) * Math.PI / 180;
                
                // Calculate points on the circle
                const x1 = 50 + 40 * Math.cos(startRad);
                const y1 = 50 + 40 * Math.sin(startRad);
                const x2 = 50 + 40 * Math.cos(endRad);
                const y2 = 50 + 40 * Math.sin(endRad);
                
                // Create the arc path
                const largeArcFlag = segment.percentage > 50 ? 1 : 0;
                const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                
                return (
                  <path 
                    key={index} 
                    d={pathData} 
                    fill={colors[index % colors.length]}
                    stroke="#1a1a1a"
                    strokeWidth="0.5"
                  />
                );
              })}
            </svg>
          </div>
          
          {/* Legend */}
          <div className="md:ml-8">
            {marketShare.segments.map((segment, index) => (
              <div key={index} className="flex items-center mb-2">
                <div 
                  className="w-4 h-4 mr-2" 
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></div>
                <span className="text-lg">{segment.name}: {segment.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
