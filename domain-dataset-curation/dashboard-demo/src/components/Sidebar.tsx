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
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      role="navigation"
      aria-label={language === 'en' ? 'Main Navigation' : '主导航'}
    >
      <div className="flex flex-col h-full">
        {/* Home Navigation */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={goToHome}
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            aria-label={language === 'en' ? 'Go to Home' : '返回首页'}
          >
            <Home className="h-5 w-5 mr-2" />
            <span className="font-medium">{language === 'en' ? 'Home Portal' : '首页'}</span>
          </button>
        </div>
        {/* Navigation Items */}
        <nav
          className="flex-1 overflow-y-auto py-4"
          role="navigation"
          aria-label={language === 'en' ? 'Section Navigation' : '部分导航'}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary-50 text-primary-700 border-r-4 border-primary-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                aria-label={item.label[language]}
              >
                <span className="mr-3 text-gray-500">{item.icon}</span>
                {item.label[language]}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
