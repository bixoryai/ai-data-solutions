import React from 'react';
import { Home } from 'lucide-react';

interface NavItem {
  id: string;
  label: {
    en: string;
    zh: string;
  };
  icon: React.ReactNode;
}

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  language: 'en' | 'zh';
  isOpen: boolean;
  goToHome: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  activeSection,
  setActiveSection,
  language,
  isOpen,
  goToHome
}) => {
  return (
    <aside
      className={`bg-gray-800 text-white w-64 max-w-full fixed h-full z-40 transition-all duration-300 ease-in-out shadow-lg flex flex-col
        ${isOpen ? 'left-0' : '-left-64'}
        sm:left-0 sm:shadow-none
      `}
      aria-modal="true"
      role="dialog"
    >
      <nav className="py-4 flex-1 overflow-y-auto">
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
      <div className="mt-auto bg-gray-900">
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
