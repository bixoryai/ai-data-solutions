import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DemandForecastChartProps {
  data: any[];
  language: 'en' | 'zh';
}

const DemandForecastChart: React.FC<DemandForecastChartProps> = ({ data, language }) => {
  const translations = {
    title: { en: 'Demand Forecast', zh: '需求预测' },
    demand: { en: 'Demand', zh: '需求' },
    forecast: { en: 'Forecast', zh: '预测' },
    date: { en: 'Date', zh: '日期' },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{translations.title[language]}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" name={translations.date[language]} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="demand" stroke="#8884d8" name={translations.demand[language]} />
          <Line type="monotone" dataKey="forecast" stroke="#82ca9d" name={translations.forecast[language]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DemandForecastChart; 