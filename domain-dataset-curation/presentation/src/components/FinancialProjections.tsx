import React from 'react';
import { DollarSign, TrendingUp, BarChart4 } from 'lucide-react';

interface FinancialProjectionsProps {
  language: 'en' | 'zh';
}

const FinancialProjections: React.FC<FinancialProjectionsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Financial Projections',
      investmentTitle: 'Initial Investment:',
      investmentItems: [
        { name: 'Equipment & Infrastructure', amount: '$15,000' },
        { name: 'Software & Tools', amount: '$10,000' },
        { name: 'Legal & Compliance', amount: '$5,000' },
        { name: 'Initial Marketing', amount: '$10,000' },
        { name: 'Working Capital', amount: '$10,000' }
      ],
      totalInvestment: 'Total Minimum Investment: $50,000',
      revenueStreamsTitle: 'Revenue Streams:',
      revenueStreams: [
        'Dataset License Fees',
        'Custom Dataset Creation Services',
        'Data Maintenance Subscriptions',
        'Consulting & Advisory Services',
        'Data Validation & Certification'
      ],
      proFormaTitle: '3-Year Pro Forma Projection:',
      roiTitle: 'ROI Analysis:',
      roiItems: [
        { name: 'Break-even', value: 'Month 10' },
        { name: '1st Year ROI', value: '40%' },
        { name: '3-Year Cumulative ROI', value: '840%' },
        { name: 'Projected Valuation (Year 3)', value: '$3-4.5M (5-6x revenue)' }
      ]
    },
    zh: {
      title: '财务预测',
      investmentTitle: '初始投资：',
      investmentItems: [
        { name: '设备和基础设施', amount: '$15,000' },
        { name: '软件和工具', amount: '$10,000' },
        { name: '法律和合规', amount: '$5,000' },
        { name: '初始营销', amount: '$10,000' },
        { name: '营运资金', amount: '$10,000' }
      ],
      totalInvestment: '最低总投资：$50,000',
      revenueStreamsTitle: '收入来源：',
      revenueStreams: [
        '数据集许可费',
        '自定义数据集创建服务',
        '数据维护订阅',
        '咨询和顾问服务',
        '数据验证和认证'
      ],
      proFormaTitle: '3年预测：',
      roiTitle: '投资回报分析：',
      roiItems: [
        { name: '收支平衡', value: '第10个月' },
        { name: '第1年投资回报率', value: '40%' },
        { name: '3年累计投资回报率', value: '840%' },
        { name: '预计估值（第3年）', value: '$3-4.5M（收入的5-6倍）' }
      ]
    }
  };

  const financialData = {
    labels: ['Year 1', 'Year 2', 'Year 3'],
    datasets: {
      revenue: [120000, 350000, 750000],
      expenses: [100000, 250000, 450000],
      profit: [20000, 100000, 300000]
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <DollarSign className="text-green-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-green-800">{content[language].investmentTitle}</h3>
          </div>
          
          <ul className="space-y-3 mb-6">
            {content[language].investmentItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-700">{item.name}</span>
                <span className="font-semibold text-green-700">{item.amount}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-lg font-bold text-green-800">{content[language].totalInvestment}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="text-blue-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-blue-800">{content[language].revenueStreamsTitle}</h3>
          </div>
          
          <ul className="space-y-3">
            {content[language].revenueStreams.map((stream, index) => (
              <li key={index} className="flex items-center border-b border-gray-100 pb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-700">{stream}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="flex items-center mb-6">
          <BarChart4 className="text-purple-600 mr-2" size={24} />
          <h3 className="text-xl font-semibold text-purple-800">{content[language].proFormaTitle}</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-purple-50">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Metric</th>
                <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700 border-b">Year 1</th>
                <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700 border-b">Year 2</th>
                <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700 border-b">Year 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="py-2 px-4 text-sm font-medium text-gray-800 border-b">Revenue Streams:</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-700 border-b pl-8">Dataset License Fees</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$45,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$120,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$240,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-700 border-b pl-8">Custom Dataset Creation</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$50,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$125,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$250,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-700 border-b pl-8">Data Maintenance Subscriptions</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$15,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$65,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$150,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-700 border-b pl-8">Consulting & Advisory Services</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$10,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$30,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$75,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-700 border-b pl-8">Data Validation & Certification</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$0</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$10,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$35,000</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b">Total Revenue</td>
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b text-right">$120,000</td>
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b text-right">$350,000</td>
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b text-right">$750,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm font-medium text-gray-800 border-b">Expenses</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$100,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$250,000</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">$450,000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b">Net Profit</td>
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b text-right">$20,000</td>
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b text-right">$100,000</td>
                <td className="py-2 px-4 text-sm font-semibold text-gray-800 border-b text-right">$300,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm font-medium text-gray-800 border-b">Profit Margin</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">17%</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">29%</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">40%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm font-medium text-gray-800 border-b">ROI</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">40%</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">200%</td>
                <td className="py-2 px-4 text-sm text-gray-700 border-b text-right">600%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Visual representation of financial growth */}
        <div className="mt-8 h-64 bg-gray-50 rounded-lg p-4 flex items-end justify-between">
          {financialData.labels.map((year, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex space-x-2">
                <div 
                  className="w-12 bg-blue-500 rounded-t-md" 
                  style={{ height: `${(financialData.datasets.revenue[index] / 750000) * 200}px` }}
                  title={`Revenue: $${financialData.datasets.revenue[index].toLocaleString()}`}
                ></div>
                <div 
                  className="w-12 bg-red-400 rounded-t-md" 
                  style={{ height: `${(financialData.datasets.expenses[index] / 750000) * 200}px` }}
                  title={`Expenses: $${financialData.datasets.expenses[index].toLocaleString()}`}
                ></div>
                <div 
                  className="w-12 bg-green-500 rounded-t-md" 
                  style={{ height: `${(financialData.datasets.profit[index] / 750000) * 200}px` }}
                  title={`Profit: $${financialData.datasets.profit[index].toLocaleString()}`}
                ></div>
              </div>
              <div className="mt-2 text-sm font-medium text-gray-700">{year}</div>
            </div>
          ))}
          <div className="absolute left-8 text-xs text-gray-500 flex flex-col justify-between h-48 mt-4">
            <span>$750K</span>
            <span>$500K</span>
            <span>$250K</span>
            <span>$0</span>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {content[language].roiItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-600 mb-1">{item.name}</h4>
              <p className="text-lg font-bold text-blue-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialProjections;
