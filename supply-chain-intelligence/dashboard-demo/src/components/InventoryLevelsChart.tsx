import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface InventoryLevelsChartProps {
  data: any[];
  language: 'en' | 'zh';
}

const InventoryLevelsChart: React.FC<InventoryLevelsChartProps> = ({ data, language }) => {
  const translations = {
    title: { en: 'Inventory Levels by Warehouse', zh: '各仓库库存水平' },
    stock: { en: 'Stock', zh: '库存' },
    warehouse: { en: 'Warehouse', zh: '仓库' },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-4">{translations.title[language]}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" name={translations.warehouse[language]} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stock" fill="#8884d8" name={translations.stock[language]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryLevelsChart; 