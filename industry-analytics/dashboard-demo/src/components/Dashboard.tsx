import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, BarChart2, Search } from 'lucide-react';

interface DashboardProps {
  translations: Record<string, string>;
}

const Dashboard: React.FC<DashboardProps> = ({ translations }) => {
  // t function to get translations
  const t = (key: string): string => {
    return translations[key] || key;
  };

  // Performance data for chart
  const performanceData = [
    { name: t('jan'), efficiency: 65, defects: 12, maintenance: 18, target: 80 },
    { name: t('feb'), efficiency: 68, defects: 11, maintenance: 16, target: 80 },
    { name: t('mar'), efficiency: 72, defects: 9, maintenance: 14, target: 80 },
    { name: t('apr'), efficiency: 75, defects: 8, maintenance: 12, target: 80 },
    { name: t('may'), efficiency: 82, defects: 6, maintenance: 10, target: 80 },
    { name: t('jun'), efficiency: 87, defects: 5, maintenance: 8, target: 80 },
    { name: t('jul'), efficiency: 85, defects: 7, maintenance: 9, target: 80 }
  ];

  // Resource utilization data for pie chart
  const resourceData = [
    { name: t('machineUtilization'), value: 65 },
    { name: t('humanResources'), value: 15 },
    { name: t('energyEfficiency'), value: 10 },
    { name: t('materialsYield'), value: 10 }
  ];

  // Pie chart colors
  const COLORS = ['#6366F1', '#10B981', '#F97316', '#EAB308'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{t('operationsDashboard')}</h2>
        <div className="flex items-center">
          <div className="relative mr-3">
            <input 
              type="text" 
              placeholder={t('searchAnalytics')}
              className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <BarChart2 size={16} className="mr-2" />
            {t('generateReport')}
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Operational Efficiency KPI Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">{t('operationalEfficiency')}</h3>
                <div className="flex items-baseline mt-1">
                  <span className="text-3xl font-bold text-gray-900">85%</span>
                  <span className="text-sm text-green-600 ml-2">+5.2% {t('vsLastMonth')}</span>
                </div>
              </div>
              <div className="p-2 bg-primary-100 rounded-lg">
                <TrendingUp size={24} className="text-primary-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Quality Rate KPI Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">{t('qualityRate')}</h3>
                <div className="flex items-baseline mt-1">
                  <span className="text-3xl font-bold text-gray-900">93.8%</span>
                  <span className="text-sm text-green-600 ml-2">+2.1% {t('vsLastMonth')}</span>
                </div>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <BarChart2 size={24} className="text-green-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Cost Optimization KPI Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">{t('costOptimization')}</h3>
                <div className="flex items-baseline mt-1">
                  <span className="text-3xl font-bold text-gray-900">$28.5K</span>
                  <span className="text-sm text-green-600 ml-2">{t('potentialSavings')}</span>
                </div>
              </div>
              <div className="p-2 bg-amber-100 rounded-lg">
                <TrendingUp size={24} className="text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance Trends Chart */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{t('performanceTrends')}</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="efficiency" stroke="#6366F1" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="defects" stroke="#EF4444" />
                <Line type="monotone" dataKey="maintenance" stroke="#10B981" />
                <Line type="monotone" dataKey="target" stroke="#374151" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <TrendingUp size={18} className="text-blue-600 mt-0.5" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-blue-800">{t('aiInsight')}:</h4>
                <p className="mt-1 text-sm text-blue-700">{t('efficiencyInsight')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resource Utilization */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{t('resourceUtilization')}</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {resourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-green-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BarChart2 size={18} className="text-green-600 mt-0.5" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-green-800">{t('aiInsight')}:</h4>
                  <p className="mt-1 text-sm text-green-700">{t('energyInsight')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI-Powered Alerts */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{t('aiPoweredAlerts')}</h3>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                {t('viewAll')}
              </button>
            </div>
            <div className="space-y-3">
              <div className="border border-red-100 bg-red-50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-red-800">{t('assemblyLine3')}</p>
                    <p className="text-xs text-red-700 mt-1">{t('anomalousVibration')}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-200 text-red-800">
                    {t('high')}
                  </span>
                </div>
                <div className="flex justify-end mt-2">
                  <button className="bg-white text-red-700 border border-red-300 px-3 py-1 text-xs rounded hover:bg-red-50 transition-colors mr-2">
                    {t('viewDetails')}
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 text-xs rounded hover:bg-red-700 transition-colors">
                    {t('address')}
                  </button>
                </div>
              </div>
              
              <div className="border border-yellow-100 bg-yellow-50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-yellow-800">{t('qualityStation2')}</p>
                    <p className="text-xs text-yellow-700 mt-1">{t('defectRateIncrease')}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-200 text-yellow-800">
                    {t('medium')}
                  </span>
                </div>
                <div className="flex justify-end mt-2">
                  <button className="bg-white text-yellow-700 border border-yellow-300 px-3 py-1 text-xs rounded hover:bg-yellow-50 transition-colors mr-2">
                    {t('viewDetails')}
                  </button>
                  <button className="bg-yellow-600 text-white px-3 py-1 text-xs rounded hover:bg-yellow-700 transition-colors">
                    {t('address')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 