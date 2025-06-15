import React from "react";
import { TrendingUp, PieChart as PieChartIcon, Activity, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import getTranslation from '../types/translations';

// Mock data for portfolio analytics
const performanceData = [
  { month: 'Jul', portfolio: 110, benchmark: 108 },
  { month: 'Aug', portfolio: 115, benchmark: 112 },
  { month: 'Sep', portfolio: 118, benchmark: 114 },
  { month: 'Oct', portfolio: 122, benchmark: 116 },
  { month: 'Nov', portfolio: 126, benchmark: 119 },
  { month: 'Dec', portfolio: 130, benchmark: 122 },
];

const allocationData = [
  { name: 'Stocks', value: 45 },
  { name: 'Bonds', value: 25 },
  { name: 'Real Estate', value: 15 },
  { name: 'Commodities', value: 10 },
  { name: 'Cash', value: 5 },
];

const riskMetrics = [
  { metric: 'Volatility', value: 85, fullMark: 100 },
  { metric: 'Sharpe Ratio', value: 92, fullMark: 100 },
  { metric: 'Beta', value: 78, fullMark: 100 },
  { metric: 'Alpha', value: 88, fullMark: 100 },
  { metric: 'R-Squared', value: 95, fullMark: 100 },
];

const COLORS = ['#3b82f6', '#10b981', '#6366f1', '#f59e0b', '#ef4444'];

interface Props {
  language: 'en' | 'zh';
}

const PortfolioAnalyticsPage: React.FC<Props> = ({ language }) => {
  const t = (key: any) => getTranslation(key, language);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t('Portfolio Analytics')}</h1>
      
      {/* Portfolio Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Total Return')}</p>
              <p className="text-2xl font-bold">+18.5%</p>
              <p className="text-green-500 text-sm">{t('YTD Performance')}</p>
            </div>
            <TrendingUp className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Risk Score')}</p>
              <p className="text-2xl font-bold">72/100</p>
              <p className="text-blue-500 text-sm">{t('Moderate Risk')}</p>
            </div>
            <Activity className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Diversification')}</p>
              <p className="text-2xl font-bold">85%</p>
              <p className="text-purple-500 text-sm">{t('Well Diversified')}</p>
            </div>
            <PieChartIcon className="text-purple-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Alpha Generated')}</p>
              <p className="text-2xl font-bold">+3.2%</p>
              <p className="text-indigo-500 text-sm">{t('Above Benchmark')}</p>
            </div>
            <Zap className="text-indigo-500" size={24} />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Tracking Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Performance Tracking')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="portfolio" stroke="#3b82f6" name="Portfolio" strokeWidth={2} />
                <Line type="monotone" dataKey="benchmark" stroke="#6b7280" name="Benchmark" strokeWidth={2} strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Asset Allocation Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Asset Allocation')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Metrics Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Risk Metrics')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskMetrics}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Portfolio" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Portfolio Optimization Suggestions */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Portfolio Optimization')}</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-medium text-blue-700">{t('Rebalancing Opportunity')}</h3>
              <p className="text-gray-600">{t('Stock allocation is 5% above target')}</p>
              <p className="text-sm text-gray-500">{t('Suggested Action: Reduce equity exposure')}</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-medium text-green-700">{t('Diversification Suggestion')}</h3>
              <p className="text-gray-600">{t('Consider adding emerging market exposure')}</p>
              <p className="text-sm text-gray-500">{t('Target: 5-10% allocation')}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="font-medium text-yellow-700">{t('Risk Management')}</h3>
              <p className="text-gray-600">{t('Portfolio beta slightly high')}</p>
              <p className="text-sm text-gray-500">{t('Consider defensive stocks or bonds')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalyticsPage;
