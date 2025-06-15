import React from 'react';
import { BarChart3, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import getTranslation from '../types/translations';

// Mock data for charts
const revenueData = [
  { month: 'Jan', revenue: 4000, profit: 2400 },
  { month: 'Feb', revenue: 3000, profit: 1398 },
  { month: 'Mar', revenue: 2000, profit: 9800 },
  { month: 'Apr', revenue: 2780, profit: 3908 },
  { month: 'May', revenue: 1890, profit: 4800 },
  { month: 'Jun', revenue: 2390, profit: 3800 },
];

const expenseData = [
  { category: 'Operations', amount: 35000 },
  { category: 'Marketing', amount: 25000 },
  { category: 'R&D', amount: 28000 },
  { category: 'Sales', amount: 32000 },
];

interface Props {
  language: 'en' | 'zh';
}

const DashboardPage: React.FC<Props> = ({ language }) => {
  const t = (key: any) => getTranslation(key, language);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t('Dashboard')}</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Total Revenue')}</p>
              <p className="text-2xl font-bold">$842,314</p>
              <p className="text-green-500 text-sm">+15% {t('vs last month')}</p>
            </div>
            <DollarSign className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Net Profit')}</p>
              <p className="text-2xl font-bold">$234,092</p>
              <p className="text-green-500 text-sm">+8% {t('vs last month')}</p>
            </div>
            <TrendingUp className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Operating Expenses')}</p>
              <p className="text-2xl font-bold">$120,000</p>
              <p className="text-red-500 text-sm">+2% {t('vs last month')}</p>
            </div>
            <BarChart3 className="text-orange-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Cash Flow')}</p>
              <p className="text-2xl font-bold">$92,314</p>
              <p className="text-green-500 text-sm">+5% {t('vs last month')}</p>
            </div>
            <PieChart className="text-purple-500" size={24} />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Profit Trend */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Revenue vs Profit Trend')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" name="Revenue" />
                <Line type="monotone" dataKey="profit" stroke="#10B981" name="Profit" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Operating Expenses Breakdown */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Operating Expenses Breakdown')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expenseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 