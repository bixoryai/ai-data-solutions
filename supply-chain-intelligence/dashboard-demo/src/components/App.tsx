import React, { useState } from 'react';
import Header from './Header';
import Sidebar, { NavItem, NavItemInfo } from './Sidebar';
import { LayoutDashboard, Boxes, Users, Settings } from 'lucide-react';
import DashboardPage from './DashboardPage';
import DemandAndInventoryPage from './DemandAndInventoryPage';
import SupplierPerformancePage from './SupplierPerformancePage';
import SettingsPage from './SettingsPage';

const navItems: readonly NavItemInfo[] = [
  { name: 'Dashboard', icon: <LayoutDashboard /> },
  { name: 'Demand & Inventory', icon: <Boxes /> },
  { name: 'Supplier Performance', icon: <Users /> },
  { name: 'Settings', icon: <Settings /> },
];

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState<NavItem>('Dashboard');
  const [language, setLanguage] = useState<'en' | 'zh'>(
    (localStorage.getItem('language') as 'en' | 'zh') || 'en'
  );

  // Placeholder for translations
  const appTranslations = {
    en: { title: 'Supply Chain Intelligence' },
    zh: { title: '供应链智能' },
  };

  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const changeLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const renderContent = () => {
    switch (activeNavItem) {
      case 'Dashboard':
        return <DashboardPage language={language} />;
      case 'Demand & Inventory':
        return <DemandAndInventoryPage language={language} />;
      case 'Supplier Performance':
        return <SupplierPerformancePage language={language} />;
      case 'Settings':
        return <SettingsPage language={language} />;
      default:
        return <DashboardPage language={language} />;
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
        <div className="pt-20">{renderContent()}</div>
      </main>
    </div>
  );
};

export default App; 