import React from 'react';
import { Layers, Activity, AlertTriangle, FileText, Settings, Home } from 'lucide-react';

type Section = 'dashboard' | 'analytics' | 'alerts' | 'reports' | 'settings';

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
  goToHome?: () => void;
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: { en: 'Dashboard', zh: '仪表盘' },
    icon: <Layers size={20} />,
  },
  {
    id: 'analytics',
    label: { en: 'Analytics', zh: '分析' },
    icon: <Activity size={20} />,
  },
  {
    id: 'alerts',
    label: { en: 'Alerts', zh: '警报' },
    icon: <AlertTriangle size={20} />,
  },
  {
    id: 'reports',
    label: { en: 'Reports', zh: '报告' },
    icon: <FileText size={20} />,
  },
  {
    id: 'settings',
    label: { en: 'Settings', zh: '设置' },
    icon: <Settings size={20} />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  language,
  isOpen,
  goToHome = () => window.location.href = '/'
}) => {
  return (
    <aside 
      className={`bg-gray-800 text-white w-64 fixed h-full transition-all duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'left-0' : '-left-64'
      }`}
    >
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">
          {language === 'en' ? 'Navigation' : '导航'}
        </h2>
      </div>
      <nav className="py-4">
        <ul>
          {navItems.map((item, idx) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
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