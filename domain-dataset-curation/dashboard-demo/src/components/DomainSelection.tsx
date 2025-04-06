import React from 'react';
import { Heart, Building, Briefcase, Database, FileText, BarChart4 } from 'lucide-react';

interface DomainSelectionProps {
  language: 'en' | 'zh';
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
  setSelectedDomain: (domain: 'healthcare' | 'finance' | 'manufacturing') => void;
}

const DomainSelection: React.FC<DomainSelectionProps> = ({ 
  language, 
  selectedDomain, 
  setSelectedDomain 
}) => {
  const content = {
    en: {
      title: 'Domain Selection & Data Profiling',
      subtitle: 'Select an industry domain to explore domain-specific dataset curation',
      description: 'Each industry has unique data requirements, quality standards, and regulatory considerations. Choose a domain to see how specialized curation techniques can be applied.',
      healthcareTitle: 'Healthcare',
      healthcareDescription: 'Medical imaging, clinical notes, pharmaceutical trials',
      financeTitle: 'Finance',
      financeDescription: 'Transaction patterns, risk indicators, market signals',
      manufacturingTitle: 'Manufacturing',
      manufacturingDescription: 'Process optimization, quality control, supply chain',
      dataProfileTitle: 'Data Profile Overview',
      schemaExploration: 'Schema Exploration',
      statisticalProfile: 'Statistical Profile',
      qualityAssessment: 'Quality Assessment',
      viewSampleData: 'View Sample Data',
      selectDomain: 'Select Domain'
    },
    zh: {
      title: '领域选择与数据分析',
      subtitle: '选择一个行业领域以探索特定领域的数据集策划',
      description: '每个行业都有独特的数据要求、质量标准和监管考虑。选择一个领域，了解如何应用专业策划技术。',
      healthcareTitle: '医疗保健',
      healthcareDescription: '医学影像、临床笔记、药物试验',
      financeTitle: '金融',
      financeDescription: '交易模式、风险指标、市场信号',
      manufacturingTitle: '制造业',
      manufacturingDescription: '流程优化、质量控制、供应链',
      dataProfileTitle: '数据概况总览',
      schemaExploration: '架构探索',
      statisticalProfile: '统计概况',
      qualityAssessment: '质量评估',
      viewSampleData: '查看示例数据',
      selectDomain: '选择领域'
    }
  };

  const domains = [
    {
      id: 'healthcare',
      title: content[language].healthcareTitle,
      description: content[language].healthcareDescription,
      icon: <Heart size={40} className="text-red-600" />,
      color: 'bg-red-100 border-red-200',
      activeColor: 'bg-red-50 border-red-500',
      stats: {
        tables: 12,
        fields: 347,
        records: '2.3M',
        dataTypes: 8
      }
    },
    {
      id: 'finance',
      title: content[language].financeTitle,
      description: content[language].financeDescription,
      icon: <Building size={40} className="text-blue-600" />,
      color: 'bg-blue-100 border-blue-200',
      activeColor: 'bg-blue-50 border-blue-500',
      stats: {
        tables: 18,
        fields: 412,
        records: '8.7M',
        dataTypes: 6
      }
    },
    {
      id: 'manufacturing',
      title: content[language].manufacturingTitle,
      description: content[language].manufacturingDescription,
      icon: <Briefcase size={40} className="text-amber-600" />,
      color: 'bg-amber-100 border-amber-200',
      activeColor: 'bg-amber-50 border-amber-500',
      stats: {
        tables: 15,
        fields: 286,
        records: '5.1M',
        dataTypes: 7
      }
    }
  ];

  // Get the currently selected domain object
  const currentDomain = domains.find(domain => domain.id === selectedDomain) || domains[0];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{content[language].title}</h2>
        <p className="mt-2 text-gray-600">{content[language].subtitle}</p>
        <p className="mt-4 text-gray-700">{content[language].description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <div 
            key={domain.id}
            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
              selectedDomain === domain.id 
                ? domain.activeColor + ' shadow-md' 
                : domain.color + ' hover:shadow-sm'
            }`}
            onClick={() => setSelectedDomain(domain.id as 'healthcare' | 'finance' | 'manufacturing')}
          >
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-white p-3 mr-4 shadow-sm">
                {domain.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{domain.title}</h3>
                <p className="text-sm text-gray-600">{domain.description}</p>
              </div>
            </div>
            {selectedDomain === domain.id && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  {content[language].selectDomain}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Data Profile Overview */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">{content[language].dataProfileTitle}</h3>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center">
              {currentDomain.icon}
              <h4 className="ml-3 text-lg font-medium">{currentDomain.title} {language === 'en' ? 'Dataset' : '数据集'}</h4>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">{currentDomain.stats.tables}</div>
                <div className="text-sm text-gray-600">{language === 'en' ? 'Tables' : '表格'}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">{currentDomain.stats.fields}</div>
                <div className="text-sm text-gray-600">{language === 'en' ? 'Fields' : '字段'}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">{currentDomain.stats.records}</div>
                <div className="text-sm text-gray-600">{language === 'en' ? 'Records' : '记录'}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">{currentDomain.stats.dataTypes}</div>
                <div className="text-sm text-gray-600">{language === 'en' ? 'Data Types' : '数据类型'}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Database size={20} className="text-blue-600 mr-2" />
                  <h5 className="font-medium">{content[language].schemaExploration}</h5>
                </div>
                <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{language === 'en' ? 'Schema Visualization' : '架构可视化'}</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <BarChart4 size={20} className="text-green-600 mr-2" />
                  <h5 className="font-medium">{content[language].statisticalProfile}</h5>
                </div>
                <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{language === 'en' ? 'Statistical Charts' : '统计图表'}</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <FileText size={20} className="text-purple-600 mr-2" />
                  <h5 className="font-medium">{content[language].qualityAssessment}</h5>
                </div>
                <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{language === 'en' ? 'Quality Metrics' : '质量指标'}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="btn btn-primary">
                {content[language].viewSampleData}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;
