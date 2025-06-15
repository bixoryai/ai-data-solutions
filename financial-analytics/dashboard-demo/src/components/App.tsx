import React, { useState } from 'react';
import Header from './Header';
import Sidebar, { NavItem, NavItemInfo } from './Sidebar';
import { LayoutDashboard, ShieldCheck, TrendingUp, Settings, LineChart, PieChart } from 'lucide-react';
import DashboardPage from './DashboardPage';
import FraudDetectionPage from './FraudDetectionPage';
import RiskAssessmentPage from './RiskAssessmentPage';
import SettingsPage from './SettingsPage';
import FinancialForecastingPage from './FinancialForecastingPage';
import PortfolioAnalyticsPage from './PortfolioAnalyticsPage';

// Define nav items based on potential financial features
const navItems: readonly NavItemInfo[] = [
  { name: 'Dashboard', icon: <LayoutDashboard /> },
  { name: 'Fraud Detection', icon: <ShieldCheck /> },
  { name: 'Risk Assessment', icon: <TrendingUp /> },
  { name: 'Financial Forecasting', icon: <LineChart /> },
  { name: 'Portfolio Analytics', icon: <PieChart /> },
  { name: 'Settings', icon: <Settings /> },
];

interface AppProps {
  language?: 'en' | 'zh';
}

const App: React.FC<AppProps> = () => {
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
    const props = { language };
    
    switch (activeNavItem) {
      case 'Dashboard':
        return <DashboardPage {...props} />;
      case 'Fraud Detection':
        return <FraudDetectionPage {...props} />;
      case 'Risk Assessment':
        return <RiskAssessmentPage {...props} />;
      case 'Financial Forecasting':
        return <FinancialForecastingPage {...props} />;
      case 'Portfolio Analytics':
        return <PortfolioAnalyticsPage {...props} />;
      case 'Settings':
        return <SettingsPage {...props} />;
      default:
        return <DashboardPage {...props} />;
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