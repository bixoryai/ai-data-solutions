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

type Section = 'equipment-monitoring' | 'sensor-analytics' | 'maintenance-scheduling' | 'failure-prediction' | 'cost-optimization' | 'anomaly-detection';

interface NavItem {
  id: Section;
  label: {
    en: string;
    zh: string;
  };
  icon: React.ReactNode;
}

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  language: 'en' | 'zh';
  isOpen: boolean;
  goToHome: () => void;
}

const navItems: NavItem[] = [
  {
    id: 'equipment-monitoring',
    label: { en: 'Equipment Monitoring', zh: '设备监控' },
    icon: <MonitorSmartphone size={20} />,
  },
  {
    id: 'sensor-analytics',
    label: { en: 'Sensor Analytics', zh: '传感器分析' },
    icon: <BarChart2 size={20} />,
  },
  {
    id: 'maintenance-scheduling',
    label: { en: 'Maintenance Scheduling', zh: '维护计划' },
    icon: <Calendar size={20} />,
  },
  {
    id: 'failure-prediction',
    label: { en: 'Failure Prediction', zh: '故障预测' },
    icon: <AlertTriangle size={20} />,
  },
  {
    id: 'cost-optimization',
    label: { en: 'Cost Optimization', zh: '成本优化' },
    icon: <TrendingDown size={20} />,
  },
  {
    id: 'anomaly-detection',
    label: { en: 'Anomaly Detection', zh: '异常检测' },
    icon: <Gauge size={20} />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  language,
  isOpen,
  goToHome
}) => {
  return (
    <aside
      className={`relative bg-gray-800 text-white w-64 fixed h-screen transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? 'left-0' : '-left-64'}`}
      role="navigation"
      aria-label={language === 'en' ? 'Main Navigation' : '主导航'}
    >
      <nav className="py-4">
        <ul>
          {navItems.map((item, idx) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 border-l-4 ${
                  activeSection === item.id
                    ? 'bg-primary-700 text-white border-primary-500'
                    : 'text-gray-300 hover:bg-gray-700 border-transparent'
                }${idx === 0 ? ' mt-2' : ''}`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label[language]}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full bg-gray-900">
        <button
          onClick={goToHome}
          className="w-full flex items-center justify-center px-4 py-3 text-gray-300 hover:bg-gray-700 transition-colors border-t border-gray-700"
        >
          <Home size={18} className="mr-2" />
          <span>{language === 'en' ? 'Return Home' : '返回主页'}</span>
        </button>
        <div className="p-4 text-xs text-gray-400 text-center">
          <p>{language === 'en' ? 'Bixory AI Technology' : 'Bixory AI 技术'}</p>
          <p>© 2025</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 