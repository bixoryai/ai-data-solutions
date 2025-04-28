import React from 'react';
import { 
  MonitorSmartphone, 
  BarChart2, 
  Calendar, 
  AlertTriangle, 
  TrendingDown,
  Gauge,
  Home
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: any) => void;
  language: 'en' | 'zh';
  goToHome: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  setActiveSection, 
  language,
  goToHome
}) => {
  const content = {
    en: {
      equipmentMonitoring: 'Equipment Monitoring',
      sensorAnalytics: 'Sensor Analytics',
      maintenanceScheduling: 'Maintenance Scheduling',
      failurePrediction: 'Failure Prediction',
      costOptimization: 'Cost Optimization',
      anomalyDetection: 'Anomaly Detection',
      returnHome: 'Return Home'
    },
    zh: {
      equipmentMonitoring: '设备监控',
      sensorAnalytics: '传感器分析',
      maintenanceScheduling: '维护计划',
      failurePrediction: '故障预测',
      costOptimization: '成本优化',
      anomalyDetection: '异常检测',
      returnHome: '返回主页'
    }
  };

  const navItems = [
    { 
      id: 'equipment-monitoring', 
      label: content[language].equipmentMonitoring, 
      icon: <MonitorSmartphone size={20} /> 
    },
    { 
      id: 'sensor-analytics', 
      label: content[language].sensorAnalytics, 
      icon: <BarChart2 size={20} /> 
    },
    { 
      id: 'maintenance-scheduling', 
      label: content[language].maintenanceScheduling, 
      icon: <Calendar size={20} /> 
    },
    { 
      id: 'failure-prediction', 
      label: content[language].failurePrediction, 
      icon: <AlertTriangle size={20} /> 
    },
    { 
      id: 'cost-optimization', 
      label: content[language].costOptimization, 
      icon: <TrendingDown size={20} /> 
    },
    { 
      id: 'anomaly-detection', 
      label: content[language].anomalyDetection, 
      icon: <Gauge size={20} /> 
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 h-full">
      <div className="h-full flex flex-col">
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className={`mr-3 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Return Home link at the bottom */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={goToHome}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
          >
            <span className="mr-3 text-gray-500">
              <Home size={20} />
            </span>
            {content[language].returnHome}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 