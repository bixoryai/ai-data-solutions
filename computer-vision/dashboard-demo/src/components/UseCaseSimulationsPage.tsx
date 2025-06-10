import React, { useState, useMemo } from 'react';
import { Sliders, DollarSign, Zap, BarChart } from 'lucide-react';
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface UseCaseSimulationsPageProps {
  language: 'en' | 'zh';
}

const translations = {
  pageTitle: { en: 'Use Case & ROI Simulation', zh: '用例与投资回报率模拟' },
  simulatorTitle: { en: 'Operational Input Simulator', zh: '运营输入模拟器' },
  volume: { en: 'Units Produced per Month', zh: '每月生产单位' },
  cost: { en: 'Manual Inspection Cost ($/hr)', zh: '人工检测成本 ($/小时)' },
  rate: { en: 'Current Defect Rate (%)', zh: '当前缺陷率 (%)' },
  resultsTitle: { en: 'Projected ROI Analysis', zh: '预期投资回报率分析' },
  annualSaving: { en: 'Estimated Annual Savings', zh: '预计年度节省' },
  payback: { en: 'Payback Period', zh: '回报周期' },
  roi: { en: 'Return on Investment (1-Year)', zh: '投资回报率 (1年)' },
  months: { en: 'Months', zh: '月' },
  comparison: { en: 'Annual Cost Comparison', zh: '年度成本比较' },
  withoutAI: { en: 'Without AI', zh: '无AI' },
  withAI: { en: 'With AI', zh: '有AI' },
};

const SliderControl: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  format?: (val: number) => string;
}> = ({ label, value, min, max, step, onChange, format }) => (
  <div className="space-y-2">
    <label className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
      <span>{label}</span>
      <span className="font-bold">{format ? format(value) : value}</span>
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
  </div>
);

const ResultCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
}> = ({ title, value, icon }) => (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center">
        <div className="bg-blue-500 text-white p-3 rounded-full mr-4">{icon}</div>
        <div>
            <h4 className="text-gray-500 dark:text-gray-400 text-sm">{title}</h4>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
        </div>
    </div>
);

const UseCaseSimulationsPage: React.FC<UseCaseSimulationsPageProps> = ({ language }) => {
  const t = (key: keyof typeof translations) => translations[key][language];

  const [volume, setVolume] = useState(50000);
  const [cost, setCost] = useState(25);
  const [rate, setRate] = useState(3.5);

  const { annualSavings, paybackPeriod, roi, chartData } = useMemo(() => {
    const annualVolume = volume * 12;
    const annualHours = 2080; // 40 hrs/week * 52 weeks
    
    const costOfScrapWithoutAI = annualVolume * (rate / 100) * 5; // Assume $5 cost per scrap item
    const inspectionCostWithoutAI = 2 * cost * annualHours; // Assume 2 inspectors
    const totalCostWithoutAI = costOfScrapWithoutAI + inspectionCostWithoutAI;

    // AI Assumptions
    const aiReducesDefectsBy = 0.8; // 80%
    const aiReducesInspectorsBy = 0.75; // 1.5 inspectors (0.5 remains for oversight)
    const aiSystemCost = 75000; // Annual cost

    const costOfScrapWithAI = annualVolume * (rate / 100) * (1 - aiReducesDefectsBy) * 5;
    const inspectionCostWithAI = (2 - 2 * aiReducesInspectorsBy) * cost * annualHours;
    const totalCostWithAI = costOfScrapWithAI + inspectionCostWithAI + aiSystemCost;
    
    const annualSavings = totalCostWithoutAI - totalCostWithAI;
    const paybackPeriod = (aiSystemCost / annualSavings) * 12;
    const roi = (annualSavings / aiSystemCost) * 100;

    const chartData = [
        { name: t('comparison'), [t('withoutAI')]: totalCostWithoutAI, [t('withAI')]: totalCostWithAI }
    ];

    return { annualSavings, paybackPeriod, roi, chartData };
  }, [volume, cost, rate, language]);


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('pageTitle')}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Simulator Controls */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
           <h2 className="text-xl font-bold border-b pb-2">{t('simulatorTitle')}</h2>
           <SliderControl label={t('volume')} value={volume} min={10000} max={200000} step={1000} onChange={setVolume} format={v => v.toLocaleString()} />
           <SliderControl label={t('cost')} value={cost} min={15} max={50} step={1} onChange={setCost} format={v => `$${v.toFixed(2)}`} />
           <SliderControl label={t('rate')} value={rate} min={0.5} max={10} step={0.1} onChange={setRate} format={v => `${v.toFixed(1)}%`} />
        </div>

        {/* ROI Results */}
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">{t('resultsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ResultCard title={t('annualSaving')} value={`$${Math.round(annualSavings).toLocaleString()}`} icon={<DollarSign />} />
                <ResultCard title={t('payback')} value={`${paybackPeriod.toFixed(1)} ${t('months')}`} icon={<Zap />} />
                <ResultCard title={t('roi')} value={`${roi.toFixed(0)}%`} icon={<BarChart />} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                 <h3 className="text-lg font-bold mb-4 text-center">{t('comparison')}</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <RechartsBarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" tickFormatter={(val) => `$${(Number(val) / 1000).toLocaleString()}k`} />
                        <YAxis type="category" dataKey="name" hide={true} />
                        <Tooltip formatter={(val) => `$${Number(val).toLocaleString()}`} />
                        <Legend />
                        <Bar dataKey={t('withoutAI')} fill="#ef4444" />
                        <Bar dataKey={t('withAI')} fill="#22c55e" />
                    </RechartsBarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseSimulationsPage; 