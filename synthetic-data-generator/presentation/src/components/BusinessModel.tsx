import React from 'react';

interface BusinessModelProps {
  language: 'en' | 'zh';
}

const BusinessModel: React.FC<BusinessModelProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Business Model & Revenue Streams',
      revenueTitle: 'Revenue Streams:',
      revenueStreams: [
        {
          name: 'Software Licensing',
          description: 'Enterprise licenses for on-premise deployment',
          percentage: 35,
          examples: 'Annual licenses starting at $50K'
        },
        {
          name: 'Cloud Subscriptions',
          description: 'SaaS model with tiered pricing',
          percentage: 30,
          examples: '$2K-10K/month based on data volume'
        },
        {
          name: 'Professional Services',
          description: 'Implementation, training, custom development',
          percentage: 20,
          examples: '$150-250/hour consulting rates'
        },
        {
          name: 'Data Marketplace',
          description: 'Pre-generated industry-specific datasets',
          percentage: 15,
          examples: '$5K-25K per dataset package'
        }
      ],
      costStructure: {
        title: 'Cost Structure:',
        costs: [
          { name: 'R&D', percentage: 40 },
          { name: 'Sales & Marketing', percentage: 30 },
          { name: 'Operations', percentage: 20 },
          { name: 'G&A', percentage: 10 }
        ]
      },
      unitEconomics: {
        title: 'Unit Economics (Enterprise Client):',
        metrics: [
          { name: 'Customer Acquisition Cost (CAC)', value: '$30,000' },
          { name: 'Annual Contract Value (ACV)', value: '$120,000' },
          { name: 'Gross Margin', value: '75-80%' },
          { name: 'CAC Payback Period', value: '3-4 months' },
          { name: 'Customer Lifetime Value (LTV)', value: '$360,000' },
          { name: 'LTV:CAC Ratio', value: '12:1' }
        ]
      }
    },
    zh: {
      title: '商业模式与收入来源',
      revenueTitle: '收入来源:',
      revenueStreams: [
        {
          name: '软件许可',
          description: '企业本地部署许可',
          percentage: 35,
          examples: '年度许可起价5万美元'
        },
        {
          name: '云订阅',
          description: 'SaaS模式分层定价',
          percentage: 30,
          examples: '根据数据量每月2千-1万美元'
        },
        {
          name: '专业服务',
          description: '实施、培训、定制开发',
          percentage: 20,
          examples: '咨询费率150-250美元/小时'
        },
        {
          name: '数据市场',
          description: '预生成的特定行业数据集',
          percentage: 15,
          examples: '每个数据集包5千-2.5万美元'
        }
      ],
      costStructure: {
        title: '成本结构:',
        costs: [
          { name: '研发', percentage: 40 },
          { name: '销售与营销', percentage: 30 },
          { name: '运营', percentage: 20 },
          { name: '一般管理', percentage: 10 }
        ]
      },
      unitEconomics: {
        title: '单位经济学（企业客户）:',
        metrics: [
          { name: '客户获取成本 (CAC)', value: '3万美元' },
          { name: '年度合同价值 (ACV)', value: '12万美元' },
          { name: '毛利率', value: '75-80%' },
          { name: 'CAC回收期', value: '3-4个月' },
          { name: '客户终身价值 (LTV)', value: '36万美元' },
          { name: 'LTV:CAC比率', value: '12:1' }
        ]
      }
    }
  };

  const { title, revenueTitle, revenueStreams, costStructure, unitEconomics } = content[language];

  // Colors for the revenue streams
  const revenueColors = ['#4338ca', '#3b82f6', '#06b6d4', '#10b981'];
  
  // Colors for the cost structure
  const costColors = ['#ef4444', '#f59e0b', '#10b981', '#6366f1'];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-primary-400 mb-6">{revenueTitle}</h3>
          
          {revenueStreams.map((stream, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{stream.name}</span>
                <span 
                  className="text-lg font-bold px-2 py-1 rounded" 
                  style={{ backgroundColor: revenueColors[index % revenueColors.length] }}
                >
                  {stream.percentage}%
                </span>
              </div>
              <p className="text-gray-300 mb-1">{stream.description}</p>
              <p className="text-sm text-yellow-300">{stream.examples}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-primary-400 mb-6">{costStructure.title}</h3>
          
          <div className="h-48 relative mb-6">
            {/* Simple bar chart for cost structure */}
            <div className="flex h-full items-end">
              {costStructure.costs.map((cost, index) => (
                <div 
                  key={index} 
                  className="flex-1 mx-1 relative group"
                  style={{ height: `${cost.percentage}%`, backgroundColor: costColors[index % costColors.length] }}
                >
                  <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-bold py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {cost.percentage}%
                  </div>
                </div>
              ))}
            </div>
            
            {/* Labels */}
            <div className="flex justify-between mt-2">
              {costStructure.costs.map((cost, index) => (
                <div key={index} className="text-center flex-1">
                  <div 
                    className="w-3 h-3 mx-auto mb-1"
                    style={{ backgroundColor: costColors[index % costColors.length] }}
                  ></div>
                  <span className="text-xs">{cost.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-primary-400 mb-4">{unitEconomics.title}</h3>
          <div className="space-y-2">
            {unitEconomics.metrics.map((metric, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-300">{metric.name}:</span>
                <span className="font-bold text-white">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-green-900 to-blue-900 bg-opacity-50 rounded-lg border border-green-800">
        <p className="text-center text-xl">
          {language === 'en' 
            ? "Our business model combines high-margin software revenue with strategic services, creating a sustainable and scalable enterprise."
            : "我们的商业模式结合了高利润的软件收入和战略服务，创建了一个可持续和可扩展的企业。"}
        </p>
      </div>
    </div>
  );
};

export default BusinessModel;
