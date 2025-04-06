import React from 'react';
import { 
  Database, 
  FileCheck, 
  BarChart, 
  Shield, 
  Cpu, 
  Users,
  Home
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: any) => void;
  language: 'en' | 'zh';
  goToHome: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  setActiveSection, 
  language,
  goToHome
}) => {
  const content = {
    en: {
      domainSelection: 'Domain Selection',
      dataCleaning: 'Data Cleaning',
      dataVisualization: 'Data Visualization',
      complianceTools: 'Compliance Tools',
      aiReadyPreparation: 'AI-Ready Preparation',
      collaborationWorkflow: 'Collaboration Workflow',
      returnHome: 'Return Home'
    },
    zh: {
      domainSelection: '领域选择',
      dataCleaning: '数据清洗',
      dataVisualization: '数据可视化',
      complianceTools: '合规工具',
      aiReadyPreparation: 'AI就绪准备',
      collaborationWorkflow: '协作工作流',
      returnHome: '返回主页'
    }
  };

  const navItems = [
    { 
      id: 'domain-selection', 
      label: content[language].domainSelection, 
      icon: <Database size={20} /> 
    },
    { 
      id: 'data-cleaning', 
      label: content[language].dataCleaning, 
      icon: <FileCheck size={20} /> 
    },
    { 
      id: 'data-visualization', 
      label: content[language].dataVisualization, 
      icon: <BarChart size={20} /> 
    },
    { 
      id: 'compliance-tools', 
      label: content[language].complianceTools, 
      icon: <Shield size={20} /> 
    },
    { 
      id: 'ai-ready', 
      label: content[language].aiReadyPreparation, 
      icon: <Cpu size={20} /> 
    },
    { 
      id: 'collaboration', 
      label: content[language].collaborationWorkflow, 
      icon: <Users size={20} /> 
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 h-full">
      <div className="h-full flex flex-col">
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className={`mr-3 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Return Home link at the bottom */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={goToHome}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
          >
            <span className="mr-3 text-gray-500">
              <Home size={20} />
            </span>
            {content[language].returnHome}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
