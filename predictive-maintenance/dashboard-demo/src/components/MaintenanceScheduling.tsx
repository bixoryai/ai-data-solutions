import React, { useMemo, useState } from 'react';
import { Calendar, Clock, ChevronDown, Wrench, RefreshCcw } from 'lucide-react';
import { Language, MaintenanceSchedulingProps, PriorityLevel } from '../types';
import ErrorBoundary from './ErrorBoundary';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface MaintenanceData {
  id: number;
  equipment: string;
  date: string;
  priority: PriorityLevel;
  status: 'scheduled' | 'pending' | 'notScheduled';
  cost: string;
}

const MaintenanceScheduling: React.FC<MaintenanceSchedulingProps> = ({ language, selectedSector }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const content = {
    en: {
      title: 'Maintenance Scheduling',
      description: 'Optimize maintenance schedules based on AI predictions.',
      upcomingMaintenance: 'Upcoming Maintenance',
      equipment: 'Equipment',
      recommendedDate: 'Recommended Date',
      priority: 'Priority',
      status: 'Status',
      recommendations: 'AI Recommendations',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      scheduled: 'Scheduled',
      pending: 'Pending Approval',
      notScheduled: 'Not Scheduled',
      viewDetails: 'View Details',
      scheduleNow: 'Schedule Now',
      maintenanceHistory: 'Maintenance History',
      optimizeSchedule: 'Optimize Schedule',
      today: 'Today',
      nextWeek: 'Next Week',
      nextMonth: 'Next Month',
      timeWindow: 'Time Window',
      costs: 'Est. Costs',
      dashboardUnderDevelopment: 'Additional scheduling features coming soon'
    },
    zh: {
      title: '维护计划',
      description: '基于AI预测优化维护计划。',
      upcomingMaintenance: '即将进行的维护',
      equipment: '设备',
      recommendedDate: '推荐日期',
      priority: '优先级',
      status: '状态',
      recommendations: 'AI推荐',
      high: '高',
      medium: '中',
      low: '低',
      scheduled: '已安排',
      pending: '待批准',
      notScheduled: '未安排',
      viewDetails: '查看详情',
      scheduleNow: '立即安排',
      maintenanceHistory: '维护历史',
      optimizeSchedule: '优化计划',
      today: '今天',
      nextWeek: '下周',
      nextMonth: '下个月',
      timeWindow: '时间窗口',
      costs: '预计成本',
      dashboardUnderDevelopment: '更多计划功能即将推出'
    }
  };

  // Memoized maintenance data
  const maintenanceData = useMemo(() => {
    try {
      const manufacturingData: MaintenanceData[] = [
        { id: 1, equipment: 'CNC Machine A-123', date: '2023-10-15', priority: 'high', status: 'scheduled', cost: '$450' },
        { id: 2, equipment: 'Assembly Robot B-456', date: '2023-10-08', priority: 'high', status: 'pending', cost: '$800' },
        { id: 3, equipment: 'Conveyor System C-789', date: '2023-10-02', priority: 'medium', status: 'scheduled', cost: '$350' },
        { id: 4, equipment: 'Industrial Oven D-101', date: '2023-10-25', priority: 'low', status: 'notScheduled', cost: '$250' },
      ];
      
      const energyData: MaintenanceData[] = [
        { id: 1, equipment: 'Wind Turbine #42', date: '2023-10-12', priority: 'medium', status: 'scheduled', cost: '$1,200' },
        { id: 2, equipment: 'Solar Inverter X1', date: '2023-10-05', priority: 'high', status: 'scheduled', cost: '$650' },
        { id: 3, equipment: 'Generator Unit G3', date: '2023-10-30', priority: 'low', status: 'notScheduled', cost: '$550' },
        { id: 4, equipment: 'Battery Bank B7', date: '2023-10-09', priority: 'high', status: 'pending', cost: '$900' },
      ];
      
      const transportationData: MaintenanceData[] = [
        { id: 1, equipment: 'Fleet Vehicle F-238', date: '2023-10-18', priority: 'medium', status: 'scheduled', cost: '$320' },
        { id: 2, equipment: 'Cargo Crane CC-45', date: '2023-10-03', priority: 'high', status: 'scheduled', cost: '$980' },
        { id: 3, equipment: 'Loading Dock LD-3', date: '2023-10-09', priority: 'medium', status: 'pending', cost: '$450' },
        { id: 4, equipment: 'Conveyor Belt CB-9', date: '2023-10-24', priority: 'low', status: 'notScheduled', cost: '$280' },
      ];
      
      switch(selectedSector) {
        case 'manufacturing':
          return manufacturingData;
        case 'energy':
          return energyData;
        case 'transportation':
          return transportationData;
        default:
          return manufacturingData;
      }
    } catch (err) {
      setError('Failed to load maintenance data');
      console.error('Error loading maintenance data:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [selectedSector]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!maintenanceData) {
    return null;
  }

  // Status badge mapping
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'scheduled':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">{content[language].scheduled}</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">{content[language].pending}</span>;
      case 'notScheduled':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{content[language].notScheduled}</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{content[language].notScheduled}</span>;
    }
  };

  // Priority badge mapping
  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'high':
        return <span className="inline-flex items-center text-red-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-red-500"></span>{content[language].high}</span>;
      case 'medium':
        return <span className="inline-flex items-center text-amber-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-amber-500"></span>{content[language].medium}</span>;
      case 'low':
        return <span className="inline-flex items-center text-green-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-green-500"></span>{content[language].low}</span>;
      default:
        return <span className="inline-flex items-center text-green-700"><span className="w-2 h-2 mr-1.5 rounded-full bg-green-500"></span>{content[language].low}</span>;
    }
  };

  return (
    <ErrorBoundary componentName="MaintenanceScheduling">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{content[language].title}</h1>
              <p className="text-gray-600 mt-2">{content[language].description}</p>
            </div>
            
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <RefreshCcw size={16} className="mr-2" />
              {content[language].optimizeSchedule}
            </button>
          </div>
          
          <div className="flex items-center mt-6 pb-2 border-b border-gray-100">
            <button className="py-2 px-4 text-sm font-medium text-blue-700 border-b-2 border-blue-500 mr-4">
              {content[language].upcomingMaintenance}
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              {content[language].maintenanceHistory}
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">{content[language].upcomingMaintenance}</h2>
            
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                {content[language].timeWindow}
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {content[language].equipment}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {content[language].recommendedDate}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {content[language].priority}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {content[language].status}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {content[language].costs}
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {/* Actions column */}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {maintenanceData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <Wrench size={16} className="text-gray-400 mr-2" />
                        {item.equipment}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        {item.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getPriorityBadge(item.priority)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.cost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {item.status !== 'scheduled' ? (
                        <button className="text-blue-600 hover:text-blue-900">
                          {content[language].scheduleNow}
                        </button>
                      ) : (
                        <button className="text-gray-600 hover:text-gray-900">
                          {content[language].viewDetails}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">{content[language].recommendations}</h2>
            <span className="text-sm text-gray-500">{content[language].dashboardUnderDevelopment}</span>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MaintenanceScheduling; 