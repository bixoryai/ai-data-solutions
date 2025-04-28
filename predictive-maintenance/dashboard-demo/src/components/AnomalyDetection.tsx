import React from 'react';
import { Activity, AlertCircle, Search, Filter } from 'lucide-react';

interface AnomalyDetectionProps {
  language: 'en' | 'zh';
  selectedSector: 'manufacturing' | 'energy' | 'transportation';
}

const AnomalyDetection: React.FC<AnomalyDetectionProps> = ({ language, selectedSector }) => {
  const content = {
    en: {
      title: 'Anomaly Detection',
      description: 'Detect unusual patterns and behaviors in equipment operation.',
      recentAnomalies: 'Recent Anomalies',
      anomalyType: 'Anomaly Type',
      detectedAt: 'Detected At',
      equipment: 'Equipment',
      severity: 'Severity',
      status: 'Status',
      investigate: 'Investigate',
      ignore: 'Ignore',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      open: 'Open',
      inProgress: 'In Progress',
      resolved: 'Resolved',
      timeRange: 'Time Range',
      inDevelopment: 'Full anomaly detection module coming soon',
      today: 'Today',
      yesterday: 'Yesterday',
      lastWeek: 'Last Week'
    },
    zh: {
      title: '异常检测',
      description: '检测设备运行中的异常模式和行为。',
      recentAnomalies: '最近异常',
      anomalyType: '异常类型',
      detectedAt: '检测时间',
      equipment: '设备',
      severity: '严重程度',
      status: '状态',
      investigate: '调查',
      ignore: '忽略',
      high: '高',
      medium: '中',
      low: '低',
      open: '开放',
      inProgress: '处理中',
      resolved: '已解决',
      timeRange: '时间范围',
      inDevelopment: '完整异常检测模块即将推出',
      today: '今天',
      yesterday: '昨天',
      lastWeek: '上周'
    }
  };

  // Sample anomaly data
  const anomalies = [
    { id: 1, type: 'Vibration Spike', time: '2023-09-30 09:15 AM', equipment: 'CNC Machine A-123', severity: 'high', status: 'open' },
    { id: 2, type: 'Temperature Fluctuation', time: '2023-09-30 11:42 AM', equipment: 'Wind Turbine #42', severity: 'medium', status: 'inProgress' },
    { id: 3, type: 'Pressure Drop', time: '2023-09-29 03:27 PM', equipment: 'Assembly Robot B-456', severity: 'low', status: 'resolved' },
    { id: 4, type: 'Power Consumption', time: '2023-09-29 01:05 PM', equipment: 'Conveyor System C-789', severity: 'high', status: 'open' }
  ];

  // Status badge mapping
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'open':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">{content[language].open}</span>;
      case 'inProgress':
        return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">{content[language].inProgress}</span>;
      case 'resolved':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">{content[language].resolved}</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  // Severity badge mapping
  const getSeverityBadge = (severity: string) => {
    switch(severity) {
      case 'high':
        return <span className="inline-flex items-center text-red-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-red-500"></span>{content[language].high}</span>;
      case 'medium':
        return <span className="inline-flex items-center text-amber-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-amber-500"></span>{content[language].medium}</span>;
      case 'low':
        return <span className="inline-flex items-center text-green-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-green-500"></span>{content[language].low}</span>;
      default:
        return <span className="inline-flex items-center text-green-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-green-500"></span>{severity}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{content[language].title}</h1>
            <p className="text-gray-600 mt-2">{content[language].description}</p>
          </div>
          
          <div className="flex space-x-2">
            <div className="relative">
              <input 
                type="text" 
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={language === 'en' ? 'Search anomalies...' : '搜索异常...'}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
              <Filter size={16} className="mr-2" />
              {content[language].timeRange}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">{content[language].recentAnomalies}</h2>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
              {content[language].today}
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-700 rounded hover:bg-gray-100">
              {content[language].yesterday}
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-700 rounded hover:bg-gray-100">
              {content[language].lastWeek}
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {content[language].anomalyType}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {content[language].detectedAt}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {content[language].equipment}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {content[language].severity}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {content[language].status}
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {/* Actions column */}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {anomalies.map((anomaly) => (
                <tr key={anomaly.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <Activity size={16} className="text-purple-500 mr-2" />
                      {anomaly.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {anomaly.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {anomaly.equipment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {getSeverityBadge(anomaly.severity)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {getStatusBadge(anomaly.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {anomaly.status !== 'resolved' ? (
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                        {content[language].investigate}
                      </button>
                    ) : null}
                    <button className="text-gray-600 hover:text-gray-900">
                      {anomaly.status === 'resolved' ? content[language].ignore : null}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertCircle className="text-blue-500 mr-2" size={20} />
            <h3 className="text-lg font-medium text-gray-800">{content[language].inDevelopment}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnomalyDetection; 