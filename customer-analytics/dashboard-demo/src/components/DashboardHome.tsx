import React from 'react';
import KpiCard from './KpiCard';
import CustomerCharts from './CustomerCharts';
import Recommendations from './Recommendations';
import { Users, DollarSign, BarChart, TrendingDown } from 'lucide-react';

const DashboardHome: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  const translations = {
    en: {
      welcome: 'Welcome to your Customer Analytics Dashboard',
      description: 'Here are the key metrics for your business.',
      totalCustomers: 'Total Customers',
      avgOrderValue: 'Average Order Value',
      customerLifetimeValue: 'Customer Lifetime Value',
      churnRate: 'Churn Rate',
    },
    zh: {
      welcome: '欢迎来到您的客户分析仪表板',
      description: '以下是您业务的关键指标。',
      totalCustomers: '总客户数',
      avgOrderValue: '平均订单价值',
      customerLifetimeValue: '客户终身价值',
      churnRate: '客户流失率',
    },
  };

  const t = translations[language];

  const kpiData = [
    { title: t.totalCustomers, value: '12,458', icon: Users, change: '12.5%', changeType: 'increase' as const },
    { title: t.avgOrderValue, value: '$84.50', icon: DollarSign, change: '2.1%', changeType: 'increase' as const },
    { title: t.customerLifetimeValue, value: '$342.10', icon: BarChart, change: '5.0%', changeType: 'increase' as const },
    { title: t.churnRate, value: '3.2%', icon: TrendingDown, change: '0.8%', changeType: 'decrease' as const },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{t.welcome}</h1>
      <p className="text-gray-600 mb-6">{t.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
      </div>
      <CustomerCharts language={language} />
      <Recommendations language={language} />
    </div>
  );
};

export default DashboardHome; 