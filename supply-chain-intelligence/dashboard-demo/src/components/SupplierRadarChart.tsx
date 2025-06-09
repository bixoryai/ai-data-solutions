import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface SupplierRadarChartProps {
  data: any[];
  language: 'en' | 'zh';
}

const SupplierRadarChart: React.FC<SupplierRadarChartProps> = ({ data, language }) => {
  const translations = {
    title: { en: 'Supplier Performance Scorecard', zh: '供应商表现记分卡' },
    quality: { en: 'Quality', zh: '质量' },
    onTime: { en: 'On-Time', zh: '准时' },
    cost: { en: 'Cost', zh: '成本' },
    service: { en: 'Service', zh: '服务' },
    innovation: { en: 'Innovation', zh: '创新' },
  };

  // Note: Recharts currently doesn't support dynamic name translation in the same way as other labels.
  // The legend will reflect the supplier names directly from the data.

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{translations.title[language]}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Radar name="Supplier A" dataKey="supplierA" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Supplier B" dataKey="supplierB" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Radar name="Supplier C" dataKey="supplierC" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SupplierRadarChart; 