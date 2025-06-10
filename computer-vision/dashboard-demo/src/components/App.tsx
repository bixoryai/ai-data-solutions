import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Sidebar, { NavItem, NavItemInfo } from './Sidebar';
import { BarChart, Camera, Cpu, Sliders, Settings } from 'lucide-react';

// Import page components
import VisualInspectionPage from './VisualInspectionPage';
import DefectAnalyticsPage from './DefectAnalyticsPage';
import ModelPerformancePage from './ModelPerformancePage';
import UseCaseSimulationsPage from './UseCaseSimulationsPage';
import SettingsPage from './SettingsPage';

const navItems: readonly NavItemInfo[] = [
    { name: 'Visual Inspection', icon: <Camera size={20} /> },
    { name: 'Defect Analytics', icon: <BarChart size={20} /> },
    { name: 'Model Performance', icon: <Cpu size={20} /> },
    { name: 'Use Case Simulations', icon: <Sliders size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
];

const App: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeNavItem, setActiveNavItem] = useState<NavItem>('Visual Inspection');
    const [language, setLanguage] = useState<'en' | 'zh'>(() => {
        const storedLang = localStorage.getItem('language');
        return (storedLang === 'en' || storedLang === 'zh') ? storedLang : 'en';
    });

    const toggleSidebar = () => {
        setSidebarOpen(open => !open);
    };

    const changeLanguage = (lang: 'en' | 'zh') => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };
    
    const renderContent = useCallback(() => {
        switch (activeNavItem) {
            case 'Visual Inspection':
                return <VisualInspectionPage language={language} />;
            case 'Defect Analytics':
                return <DefectAnalyticsPage language={language} />;
            case 'Model Performance':
                return <ModelPerformancePage language={language} />;
            case 'Use Case Simulations':
                return <UseCaseSimulationsPage language={language} />;
            case 'Settings':
                return <SettingsPage language={language} />;
            default:
                return <VisualInspectionPage language={language} />;
        }
    }, [activeNavItem, language]);

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Header
                language={language}
                changeLanguage={changeLanguage}
                toggleSidebar={toggleSidebar}
                title="Computer Vision Dashboard"
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