import React from 'react';
import { BarChart2, TrendingUp, AlertTriangle } from 'lucide-react';

interface SensorAnalyticsProps {
  language: 'en' | 'zh';
  selectedSector: 'manufacturing' | 'energy' | 'transportation';
}

const SensorAnalytics: React.FC<SensorAnalyticsProps> = ({ language, selectedSector }) => {
  const content = {
    en: {
      title: 'Sensor Analytics',
      description: 'Advanced analytics of your equipment sensor data.',
      trends: 'Sensor Trends',
      patterns: 'Anomaly Patterns',
      correlations: 'Data Correlations',
      insights: 'Key Insights',
      temperature: 'Temperature',
      vibration: 'Vibration',
      pressure: 'Pressure',
      humidity: 'Humidity',
      viewDetails: 'View Details',
      lastHours: 'Last 24 Hours',
      lastDays: 'Last 7 Days',
      lastMonth: 'Last 30 Days',
      custom: 'Custom Range',
      dashboardUnderDevelopment: 'This dashboard section is under development.'
    },
    zh: {
      title: '传感器分析',
      description: '设备传感器数据的高级分析。',
      trends: '传感器趋势',
      patterns: '异常模式',
      correlations: '数据相关性',
      insights: '关键见解',
      temperature: '温度',
      vibration: '振动',
      pressure: '压力',
      humidity: '湿度',
      viewDetails: '查看详情',
      lastHours: '过去24小时',
      lastDays: '过去7天',
      lastMonth: '过去30天',
      custom: '自定义范围',
      dashboardUnderDevelopment: '此仪表板部分正在开发中。'
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{content[language].title}</h1>
            <p className="text-gray-600 mt-2">{content[language].description}</p>
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
              {content[language].lastHours}
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-700 rounded hover:bg-gray-100">
              {content[language].lastDays}
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-700 rounded hover:bg-gray-100">
              {content[language].lastMonth}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center">
        <AlertTriangle size={48} className="text-amber-500 mb-4" />
        <h2 className="text-xl font-medium text-gray-700 mb-2">{content[language].dashboardUnderDevelopment}</h2>
        <p className="text-gray-500">
          {language === 'en' ? 
            'This component will show advanced sensor analytics with real-time data visualization.' :
            '该组件将显示具有实时数据可视化的高级传感器分析。'
          }
        </p>
        
        <div className="grid grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <BarChart2 size={36} className="text-blue-500 mb-3" />
            <span className="font-medium text-gray-700">{content[language].trends}</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <AlertTriangle size={36} className="text-amber-500 mb-3" />
            <span className="font-medium text-gray-700">{content[language].patterns}</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <TrendingUp size={36} className="text-green-500 mb-3" />
            <span className="font-medium text-gray-700">{content[language].correlations}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorAnalytics; 