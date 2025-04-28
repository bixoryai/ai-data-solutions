import React from 'react';
import { Layers, Activity, AlertTriangle, FileText, Settings } from 'lucide-react';

type Section = 'dashboard' | 'analytics' | 'alerts' | 'reports' | 'settings';

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  language: 'en' | 'zh';
  translations: Record<string, string>;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  setActiveSection, 
  language,
  translations
}) => {
  // t function to get translations
  const t = (key: string): string => {
    return translations[key] || key;
  };

  // Navigation items configuration
  const navItems = [
    { 
      id: 'dashboard', 
      label: t('dashboard'), 
      icon: <Layers size={20} /> 
    },
    { 
      id: 'analytics', 
      label: t('analytics'), 
      icon: <Activity size={20} /> 
    },
    { 
      id: 'alerts', 
      label: t('alerts'), 
      icon: <AlertTriangle size={20} /> 
    },
    { 
      id: 'reports', 
      label: t('reports'), 
      icon: <FileText size={20} /> 
    },
    { 
      id: 'settings', 
      label: t('settings'), 
      icon: <Settings size={20} /> 
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 h-full">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">
            {t('manufacturingEdition')}
          </h2>
        </div>
        
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className={`mr-3 ${activeSection === item.id ? 'text-primary-600' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 