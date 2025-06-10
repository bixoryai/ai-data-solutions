import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  'Avg. Purchase': number;
  'Customer Count': number;
}

interface SegmentationDetailChartProps {
  language: 'en' | 'zh';
  data: ChartData[];
}

const SegmentationDetailChart: React.FC<SegmentationDetailChartProps> = ({ language, data }) => {
  const translations = {
    en: {
      title: 'Detailed Customer Segments',
      tooltip: {
        avgPurchase: 'Avg. Purchase',
        customerCount: 'Customers',
      }
    },
    zh: {
      title: '详细客户细分',
      tooltip: {
        avgPurchase: '平均购买额',
        customerCount: '客户数',
      }
    },
  };
  const t = translations[language];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
       <h4 className="text-lg font-semibold mb-4 dark:text-white">{t.title}</h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip
            formatter={(value, name) => {
              if (name === 'Avg. Purchase') return [`$${value}`, t.tooltip.avgPurchase];
              if (name === 'Customer Count') return [value, t.tooltip.customerCount];
              return [value, name];
            }}
            cursor={{ fill: 'rgba(230, 230, 230, 0.2)' }}
          />
          <Legend />
          <Bar dataKey="Avg. Purchase" fill="#8884d8" />
          <Bar dataKey="Customer Count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SegmentationDetailChart; 