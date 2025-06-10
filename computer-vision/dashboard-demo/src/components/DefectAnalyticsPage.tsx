import React, { useState, useEffect } from 'react';
import { BarChart2, TrendingUp, AlertCircle, PieChart } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';
import { generateTrendData, generateDistributionData, HourlyData, DefectTypeDistribution } from '../data/analytics-data';

interface DefectAnalyticsPageProps {
  language: 'en' | 'zh';
}

const translations = {
  pageTitle: { en: 'Defect Analytics', zh: '缺陷分析' },
  kpiTotal: { en: 'Total Defects (24h)', zh: '总缺陷 (24小时)' },
  kpiRate: { en: 'Avg. Defect Rate', zh: '平均缺陷率' },
  kpiInspected: { en: 'Units Inspected', zh: '已检测单位' },
  trendTitle: { en: 'Defect Trend (Last 24 Hours)', zh: '缺陷趋势 (过去24小时)' },
  distributionTitle: { en: 'Defect Type Distribution (Pareto)', zh: '缺陷类型分布 (帕累托图)' },
  hour: { en: 'Hour', zh: '小时' },
  defects: { en: 'Defects', zh: '缺陷' },
  count: { en: 'Count', zh: '数量' },
  cumulative: { en: 'Cumulative %', zh: '累计百分比' },
};

const KpiCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
    <div className="bg-indigo-500 text-white p-4 rounded-full mr-4">{icon}</div>
    <div>
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold text-gray-800 dark:text-white">{value}</p>
    </div>
  </div>
);

const DefectAnalyticsPage: React.FC<DefectAnalyticsPageProps> = ({ language }) => {
  const t = (key: keyof typeof translations) => translations[key][language];
  
  const [trendData, setTrendData] = useState<HourlyData[]>([]);
  const [distributionData, setDistributionData] = useState<DefectTypeDistribution[]>([]);

  useEffect(() => {
    setTrendData(generateTrendData());
    setDistributionData(generateDistributionData());
  }, []);

  const totalDefects = trendData.reduce((acc, curr) => acc + curr.defects, 0);
  const totalUnits = 24 * 3600 / 5; // Assuming 1 unit every 5 seconds
  const defectRate = totalDefects > 0 ? ((totalDefects / totalUnits) * 100).toFixed(2) + '%' : '0%';

  const paretoData = distributionData.map((item, index, arr) => {
    const total = arr.reduce((sum, i) => sum + i.count, 0);
    const cumulative = arr.slice(0, index + 1).reduce((sum, i) => sum + i.count, 0);
    return { ...item, cumulative: (cumulative / total) * 100 };
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{t('pageTitle')}</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KpiCard title={t('kpiTotal')} value={totalDefects.toLocaleString()} icon={<AlertCircle />} />
        <KpiCard title={t('kpiRate')} value={defectRate} icon={<TrendingUp />} />
        <KpiCard title={t('kpiInspected')} value={totalUnits.toLocaleString()} icon={<BarChart2 />} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t('trendTitle')}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="hour" label={{ value: t('hour'), position: 'insideBottom', offset: -5 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="defects" stroke="#8884d8" name={t('defects')} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
           <h2 className="text-xl font-bold mb-4">{t('distributionTitle')}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={paretoData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2}/>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" unit="%" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="count" fill="#82ca9d" name={t('count')} />
              <Line yAxisId="right" type="monotone" dataKey="cumulative" stroke="#ff7300" name={t('cumulative')} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DefectAnalyticsPage; 