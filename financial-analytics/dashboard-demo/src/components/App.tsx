import React, { useState } from 'react';
import Header from './Header';
import Sidebar, { NavItem, NavItemInfo } from './Sidebar';
import { LayoutDashboard, ShieldCheck, TrendingUp, Settings } from 'lucide-react';
import DashboardPage from './DashboardPage';
import FraudDetectionPage from './FraudDetectionPage';
import RiskAssessmentPage from './RiskAssessmentPage';
import SettingsPage from './SettingsPage';

// Define nav items based on potential financial features
const navItems: readonly NavItemInfo[] = [
  { name: 'Dashboard', icon: <LayoutDashboard /> },
  { name: 'Fraud Detection', icon: <ShieldCheck /> },
  { name: 'Risk Assessment', icon: <TrendingUp /> },
  { name: 'Settings', icon: <Settings /> },
];

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState<NavItem>('Dashboard');
  const [language, setLanguage] = useState<'en' | 'zh'>(
    (localStorage.getItem('language') as 'en' | 'zh') || 'en'
  );

  const appTranslations = {
    en: { title: 'Financial Analytics' },
    zh: { title: '金融分析' },
  };

  const toggleSidebar = () => setSidebarOpen(open => !open);
  const changeLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const renderContent = () => {
    switch (activeNavItem) {
      case 'Dashboard':
        return <DashboardPage language={language} />;
      case 'Fraud Detection':
        return <FraudDetectionPage language={language} />;
      case 'Risk Assessment':
        return <RiskAssessmentPage language={language} />;
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
        <div className="pt-20">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App; 