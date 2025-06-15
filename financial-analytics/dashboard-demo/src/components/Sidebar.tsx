import React from 'react';
import { Home } from 'lucide-react';
import getTranslation from '../types/translations';

export type NavItem = 
  | 'Dashboard' 
  | 'Fraud Detection' 
  | 'Risk Assessment' 
  | 'Financial Forecasting' 
  | 'Portfolio Analytics'
  | 'Settings';

export interface NavItemInfo {
  name: NavItem;
  icon: React.ReactNode;
}

interface SidebarProps {
  isOpen: boolean;
  language: 'en' | 'zh';
  activeNavItem: NavItem;
  setActiveNavItem: (item: NavItem) => void;
  navItems: readonly NavItemInfo[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  language,
  activeNavItem,
  setActiveNavItem,
  navItems,
}) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className={`text-2xl font-bold ${!isOpen && 'hidden'}`}>Bixory</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          {navItems.map(({ name, icon }) => (
            <li
              key={name}
              onClick={() => setActiveNavItem(name)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                activeNavItem === name
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-700'
              }`}
            >
              {icon}
              <span className={`ml-4 ${!isOpen && 'hidden'}`}>{getTranslation(name, language)}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
        <a href="../../../../index.html" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
          <Home />
          <span className={`ml-4 ${!isOpen && 'hidden'}`}>{getTranslation('Return to Portal', language)}</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar; 