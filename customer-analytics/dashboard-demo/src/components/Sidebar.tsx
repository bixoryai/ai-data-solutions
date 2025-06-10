import React from 'react';

export interface NavItemInfo {
  name: NavItem;
  icon: React.ReactNode;
}

export type NavItem = 'Dashboard' | 'Analytics' | 'Reports' | 'Settings';

interface SidebarProps {
  isOpen: boolean;
  language: 'en' | 'zh';
  activeNavItem: NavItem;
  setActiveNavItem: (item: NavItem) => void;
  navItems: readonly NavItemInfo[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, language, activeNavItem, setActiveNavItem, navItems }) => {
  const translations = {
    Dashboard: { en: 'Dashboard', zh: '仪表板' },
    Analytics: { en: 'Analytics', zh: '分析' },
    Reports: { en: 'Reports', zh: '报告' },
    Settings: { en: 'Settings', zh: '设置' },
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
              <span>{translations[item.name][language]}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto px-4 pb-6">
           <button
            className="w-full flex items-center justify-center px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition-colors"
            onClick={() => window.location.href = '/'}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home mr-2"><path d="M3 9.5V19a2 2 0 0 0 2 2h3.5a.5.5 0 0 0 .5-.5V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5.5a.5.5 0 0 0 .5.5H19a2 2 0 0 0 2-2V9.5a2 2 0 0 0-.59-1.41l-7-7a2 2 0 0 0-2.82 0l-7 7A2 2 0 0 0 3 9.5z"/></svg>
            {language === 'en' ? 'Return Home' : '返回首页'}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 