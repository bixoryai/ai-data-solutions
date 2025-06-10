import React, { useState } from 'react';
import Header from './Header';
import Sidebar, { NavItem, NavItemInfo } from './Sidebar';
import DashboardHome from './DashboardHome';
import AnalyticsPage from './AnalyticsPage';
import ReportsPage from './ReportsPage';
import SettingsPage from './SettingsPage';
import { LayoutDashboard, BarChart2, FileText, Settings } from 'lucide-react';

const navItems: readonly NavItemInfo[] = [
  { name: 'Dashboard', icon: <LayoutDashboard /> },
  { name: 'Analytics', icon: <BarChart2 /> },
  { name: 'Reports', icon: <FileText /> },
  { name: 'Settings', icon: <Settings /> },
];

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState<NavItem>('Dashboard');
  const [language, setLanguage] = useState<'en' | 'zh'>(
    (localStorage.getItem('language') as 'en' | 'zh') || 'en'
  );

  const appTranslations = {
    en: { title: 'Customer Analytics Dashboard' },
    zh: { title: '客户分析仪表板' },
  };

  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const changeLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const renderContent = () => {
    switch (activeNavItem) {
      case 'Dashboard':
        return <DashboardHome language={language} />;
      case 'Analytics':
        return <AnalyticsPage language={language} />;
      case 'Reports':
        return <ReportsPage language={language} />;
      case 'Settings':
        return <SettingsPage language={language} changeLanguage={changeLanguage} />;
      default:
        return <DashboardHome language={language} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header
        language={language}
        changeLanguage={changeLanguage}
        toggleSidebar={toggleSidebar}
        title={appTranslations[language].title}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        language={language}
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        navItems={navItems}
      />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="pt-20">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App; 