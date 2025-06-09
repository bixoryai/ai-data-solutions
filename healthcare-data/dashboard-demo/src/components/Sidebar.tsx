import React from 'react';
import { Home, TrendingUp, Scan, BrainCircuit, SlidersHorizontal } from 'lucide-react';

export interface NavItemInfo {
  name: NavItem;
  icon: React.ReactNode;
}

export type NavItem = 'Predictive Analytics' | 'Medical Imaging' | 'NLP Intelligence' | 'Resource Simulator' | 'Settings';

interface SidebarProps {
  isOpen: boolean;
  language: 'en' | 'zh';
  activeNavItem: NavItem;
  setActiveNavItem: (item: NavItem) => void;
  navItems: readonly NavItemInfo[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, language, activeNavItem, setActiveNavItem, navItems }) => {
  const translations = {
    'Predictive Analytics': { en: 'Predictive Analytics', zh: '预测分析' },
    'Medical Imaging': { en: 'Medical Imaging', zh: '医学影像' },
    'NLP Intelligence': { en: 'NLP Intelligence', zh: 'NLP智能' },
    'Resource Simulator': { en: 'Resource Simulator', zh: '资源模拟' },
    'Settings': { en: 'Settings', zh: '设置' },
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-30 transition-all duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col flex-1 pt-24">
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveNavItem(item.name)}
              className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                activeNavItem === item.name
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{translations[item.name as NavItem][language]}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto px-4 pb-6">
           <button
            className="w-full flex items-center justify-center px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition-colors"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2" size={18} />
            {language === 'en' ? 'Return Home' : '返回首页'}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 