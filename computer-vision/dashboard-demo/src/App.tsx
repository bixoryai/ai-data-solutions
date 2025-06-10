import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar, { NavItem, NavItemInfo } from './components/Sidebar';
import { LayoutDashboard, Eye, BarChart, BrainCircuit, PlaySquare } from 'lucide-react';

const navItems: readonly NavItemInfo[] = [
  { name: 'Dashboard', icon: <LayoutDashboard /> },
  { name: 'Visual Inspection', icon: <Eye /> },
  { name: 'Defect Analytics', icon: <BarChart /> },
  { name: 'Model Performance', icon: <BrainCircuit /> },
  { name: 'Use Case Simulations', icon: <PlaySquare /> },
];

// Placeholder components
const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="mt-4 text-gray-600">This is a placeholder page for {title}. Content will be added soon.</p>
  </div>
);

const DashboardPage = () => <Placeholder title="Dashboard" />;
const VisualInspectionPage = () => <Placeholder title="Visual Inspection" />;
const DefectAnalyticsPage = () => <Placeholder title="Defect Analytics" />;
const ModelPerformancePage = () => <Placeholder title="Model Performance" />;
const UseCaseSimulationsPage = () => <Placeholder title="Use Case Simulations" />;

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [activeNavItem, setActiveNavItem] = useState<NavItem>('Dashboard');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'zh')) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const renderContent = () => {
    switch (activeNavItem) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Visual Inspection':
        return <VisualInspectionPage />;
      case 'Defect Analytics':
        return <DefectAnalyticsPage />;
      case 'Model Performance':
        return <ModelPerformancePage />;
      case 'Use Case Simulations':
        return <UseCaseSimulationsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header
        language={language}
        changeLanguage={changeLanguage}
        toggleSidebar={toggleSidebar}
        title={language === 'en' ? 'Computer Vision Dashboard' : '计算机视觉仪表盘'}
      />
      <Sidebar
        isOpen={sidebarOpen}
        language={language}
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        navItems={navItems}
      />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="pt-20 bg-red-200">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
