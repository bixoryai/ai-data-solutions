import React from 'react';
import { TrendingUp, DollarSign, LineChart, BarChart as BarChartIcon } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import getTranslation from '../types/translations';

// Mock data for forecasting
const revenueProjections = [
  { month: 'Jul', actual: 5200, predicted: 5300, optimistic: 5500, pessimistic: 5100 },
  { month: 'Aug', actual: 5400, predicted: 5600, optimistic: 5900, pessimistic: 5300 },
  { month: 'Sep', actual: 5800, predicted: 5900, optimistic: 6200, pessimistic: 5600 },
  { month: 'Oct', predicted: 6200, optimistic: 6500, pessimistic: 5900 },
  { month: 'Nov', predicted: 6500, optimistic: 6900, pessimistic: 6100 },
  { month: 'Dec', predicted: 6800, optimistic: 7200, pessimistic: 6400 },
];

const expenseProjections = [
  { category: 'Operations', current: 35000, projected: 38000 },
  { category: 'Marketing', current: 25000, projected: 28000 },
  { category: 'R&D', current: 28000, projected: 32000 },
  { category: 'Sales', current: 32000, projected: 35000 },
];

const marketTrends = [
  { month: 'Jul', marketIndex: 100, companyGrowth: 102 },
  { month: 'Aug', marketIndex: 102, companyGrowth: 105 },
  { month: 'Sep', marketIndex: 103, companyGrowth: 108 },
  { month: 'Oct', marketIndex: 105, companyGrowth: 112 },
  { month: 'Nov', marketIndex: 106, companyGrowth: 115 },
  { month: 'Dec', marketIndex: 108, companyGrowth: 118 },
];

interface Props {
  language: 'en' | 'zh';
}

const FinancialForecastingPage: React.FC<Props> = ({ language }) => {
  const t = (key: any) => getTranslation(key, language);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t('Financial Forecasting')}</h1>
      
      {/* AI Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Projected Growth')}</p>
              <p className="text-2xl font-bold">+15.8%</p>
              <p className="text-green-500 text-sm">{t('Next Quarter')}</p>
            </div>
            <TrendingUp className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Revenue Target')}</p>
              <p className="text-2xl font-bold">$6.8M</p>
              <p className="text-blue-500 text-sm">{t('End of Year')}</p>
            </div>
            <DollarSign className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Market Position')}</p>
              <p className="text-2xl font-bold">+9.2%</p>
              <p className="text-purple-500 text-sm">{t('Above Market')}</p>
            </div>
            <LineChart className="text-purple-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Cost Optimization')}</p>
              <p className="text-2xl font-bold">-8.5%</p>
              <p className="text-indigo-500 text-sm">{t('Projected Savings')}</p>
            </div>
            <BarChartIcon className="text-indigo-500" size={24} />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Forecast Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Revenue Forecast')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={revenueProjections}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#2563eb" name="Actual" strokeWidth={2} />
                <Line type="monotone" dataKey="predicted" stroke="#10b981" name="Predicted" strokeWidth={2} />
                <Line type="monotone" dataKey="optimistic" stroke="#6366f1" name="Optimistic" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="pessimistic" stroke="#ef4444" name="Pessimistic" strokeDasharray="3 3" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Projections */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Expense Projections')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expenseProjections}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" fill="#3b82f6" name="Current" />
                <Bar dataKey="projected" fill="#10b981" name="Projected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Market Trend Analysis */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Market Trend Analysis')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={marketTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="marketIndex" stroke="#6366f1" name="Market Index" />
                <Line type="monotone" dataKey="companyGrowth" stroke="#10b981" name="Company Growth" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Scenario Analysis */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Scenario Analysis')}</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-medium text-green-700">{t('Optimistic Scenario')}</h3>
              <p className="text-gray-600">{t('Market expansion leads to 20% growth')}</p>
              <p className="text-sm text-gray-500">{t('Probability')}: 25%</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-medium text-blue-700">{t('Base Scenario')}</h3>
              <p className="text-gray-600">{t('Steady growth continues at 15%')}</p>
              <p className="text-sm text-gray-500">{t('Probability')}: 60%</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="font-medium text-red-700">{t('Conservative Scenario')}</h3>
              <p className="text-gray-600">{t('Market slowdown reduces growth to 8%')}</p>
              <p className="text-sm text-gray-500">{t('Probability')}: 15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialForecastingPage;
