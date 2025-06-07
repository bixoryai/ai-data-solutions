import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { segmentationData, purchaseTrendsData } from '../data/mockData';

const CustomerCharts: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  const translations = {
    en: {
      segmentation: 'Customer Segmentation',
      trends: 'Purchase Trends (YoY)',
    },
    zh: {
      segmentation: '客户细分',
      trends: '购买趋势（年度同比）',
    },
  };
  const t = translations[language];

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.segmentation}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={segmentationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {segmentationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.trends}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={purchaseTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="2023" fill="#8884d8" />
            <Bar dataKey="2024" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerCharts; 