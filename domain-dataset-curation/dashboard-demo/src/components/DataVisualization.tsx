import React, { useState } from 'react';
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  Share2, 
  Download, 
  Filter,
  Maximize2,
  Sliders,
  Layers,
  Eye
} from 'lucide-react';

interface DataVisualizationProps {
  language: 'en' | 'zh';
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ language, selectedDomain }) => {
  const [activeChart, setActiveChart] = useState('distribution');
  const [showFilters, setShowFilters] = useState(false);

  const content = {
    en: {
      title: 'Data Visualization & Exploration',
      subtitle: 'Visualize and explore domain-specific patterns and insights',
      distributionChart: 'Distribution Analysis',
      correlationChart: 'Correlation Analysis',
      timeSeriesChart: 'Time Series Analysis',
      domainSpecificChart: 'Domain-Specific Visualizations',
      filterData: 'Filter Data',
      exportVisualization: 'Export Visualization',
      fullScreenView: 'Full Screen View',
      applyFilters: 'Apply Filters',
      resetFilters: 'Reset Filters',
      showFilters: 'Show Filters',
      hideFilters: 'Hide Filters',
      visualizationSettings: 'Visualization Settings',
      // Domain-specific content
      healthcare: {
        title: 'Healthcare Data Visualization',
        charts: [
          'Patient Age Distribution',
          'Diagnosis Frequency',
          'Treatment Effectiveness',
          'Readmission Rates'
        ],
        filters: [
          'Diagnosis Type',
          'Patient Demographics',
          'Treatment Period',
          'Facility Location'
        ]
      },
      finance: {
        title: 'Financial Data Visualization',
        charts: [
          'Transaction Volume by Category',
          'Fraud Detection Patterns',
          'Customer Spending Trends',
          'Risk Assessment Metrics'
        ],
        filters: [
          'Transaction Type',
          'Account Category',
          'Date Range',
          'Amount Range'
        ]
      },
      manufacturing: {
        title: 'Manufacturing Data Visualization',
        charts: [
          'Production Efficiency Metrics',
          'Quality Control Distribution',
          'Equipment Performance',
          'Supply Chain Flow'
        ],
        filters: [
          'Product Line',
          'Production Facility',
          'Time Period',
          'Quality Rating'
        ]
      }
    },
    zh: {
      title: '数据可视化与探索',
      subtitle: '可视化和探索特定领域的模式和见解',
      distributionChart: '分布分析',
      correlationChart: '相关性分析',
      timeSeriesChart: '时间序列分析',
      domainSpecificChart: '领域特定可视化',
      filterData: '筛选数据',
      exportVisualization: '导出可视化',
      fullScreenView: '全屏查看',
      applyFilters: '应用筛选器',
      resetFilters: '重置筛选器',
      showFilters: '显示筛选器',
      hideFilters: '隐藏筛选器',
      visualizationSettings: '可视化设置',
      // Domain-specific content
      healthcare: {
        title: '医疗保健数据可视化',
        charts: [
          '患者年龄分布',
          '诊断频率',
          '治疗有效性',
          '再入院率'
        ],
        filters: [
          '诊断类型',
          '患者人口统计',
          '治疗期间',
          '设施位置'
        ]
      },
      finance: {
        title: '金融数据可视化',
        charts: [
          '按类别划分的交易量',
          '欺诈检测模式',
          '客户消费趋势',
          '风险评估指标'
        ],
        filters: [
          '交易类型',
          '账户类别',
          '日期范围',
          '金额范围'
        ]
      },
      manufacturing: {
        title: '制造数据可视化',
        charts: [
          '生产效率指标',
          '质量控制分布',
          '设备性能',
          '供应链流程'
        ],
        filters: [
          '产品线',
          '生产设施',
          '时间段',
          '质量评级'
        ]
      }
    }
  };

  // Get domain-specific content
  const domainContent = content[language][selectedDomain];

  // Get domain-specific color
  const getDomainColor = () => {
    switch (selectedDomain) {
      case 'healthcare':
        return 'text-red-600';
      case 'finance':
        return 'text-blue-600';
      case 'manufacturing':
        return 'text-amber-600';
      default:
        return 'text-teal-600';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{content[language].title}</h2>
        <p className="mt-2 text-gray-600">{content[language].subtitle}</p>
      </div>

      {/* Visualization Controls */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{domainContent.title}</h3>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline flex items-center text-sm py-1"
            >
              <Filter size={16} className="mr-1" />
              {showFilters ? content[language].hideFilters : content[language].showFilters}
            </button>
            
            <button className="btn btn-outline flex items-center text-sm py-1">
              <Maximize2 size={16} className="mr-1" />
              {content[language].fullScreenView}
            </button>
            
            <button className="btn btn-outline flex items-center text-sm py-1">
              <Download size={16} className="mr-1" />
              {content[language].exportVisualization}
            </button>
          </div>
        </div>
        
        {/* Filters Section */}
        {showFilters && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center mb-3">
              <Sliders size={18} className="mr-2 text-gray-600" />
              <h4 className="font-medium text-gray-700">{content[language].filterData}</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {domainContent.filters.map((filter, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {filter}
                  </label>
                  <select className="select text-sm">
                    <option>{language === 'en' ? 'All' : '全部'}</option>
                    <option>{language === 'en' ? 'Option 1' : '选项1'}</option>
                    <option>{language === 'en' ? 'Option 2' : '选项2'}</option>
                    <option>{language === 'en' ? 'Option 3' : '选项3'}</option>
                  </select>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button className="btn btn-primary text-sm py-1">
                {content[language].applyFilters}
              </button>
              <button className="btn btn-outline text-sm py-1">
                {content[language].resetFilters}
              </button>
            </div>
          </div>
        )}
        
        {/* Chart Type Selection */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <div className="flex overflow-x-auto space-x-4">
            <button
              onClick={() => setActiveChart('distribution')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeChart === 'distribution'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BarChart size={16} className="mr-2" />
              {content[language].distributionChart}
            </button>
            
            <button
              onClick={() => setActiveChart('correlation')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeChart === 'correlation'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Share2 size={16} className="mr-2" />
              {content[language].correlationChart}
            </button>
            
            <button
              onClick={() => setActiveChart('timeseries')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeChart === 'timeseries'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LineChart size={16} className="mr-2" />
              {content[language].timeSeriesChart}
            </button>
            
            <button
              onClick={() => setActiveChart('domain-specific')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeChart === 'domain-specific'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Layers size={16} className="mr-2" />
              {content[language].domainSpecificChart}
            </button>
          </div>
        </div>
      </div>
      
      {/* Visualization Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {domainContent.charts.map((chart, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <h4 className="font-medium text-gray-700">{chart}</h4>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
                  <Eye size={16} />
                </button>
                <button className="p-1 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
                  <Download size={16} />
                </button>
                <button className="p-1 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="h-64 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                {index === 0 && (
                  <BarChart size={64} className={`${getDomainColor()} opacity-20`} />
                )}
                {index === 1 && (
                  <PieChart size={64} className={`${getDomainColor()} opacity-20`} />
                )}
                {index === 2 && (
                  <LineChart size={64} className={`${getDomainColor()} opacity-20`} />
                )}
                {index === 3 && (
                  <Layers size={64} className={`${getDomainColor()} opacity-20`} />
                )}
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>{language === 'en' ? 'Sample visualization for demonstration purposes.' : '用于演示目的的示例可视化。'}</p>
                <p className="mt-2">
                  {language === 'en' 
                    ? 'In the full version, interactive D3.js visualizations would be implemented here.' 
                    : '在完整版本中，这里将实现交互式D3.js可视化。'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Visualization Settings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <Sliders size={20} className="mr-2 text-gray-600" />
          <h3 className="text-lg font-medium">{content[language].visualizationSettings}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Chart Type' : '图表类型'}
            </label>
            <select className="select">
              <option>{language === 'en' ? 'Bar Chart' : '条形图'}</option>
              <option>{language === 'en' ? 'Line Chart' : '折线图'}</option>
              <option>{language === 'en' ? 'Pie Chart' : '饼图'}</option>
              <option>{language === 'en' ? 'Scatter Plot' : '散点图'}</option>
              <option>{language === 'en' ? 'Heat Map' : '热图'}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Color Scheme' : '配色方案'}
            </label>
            <select className="select">
              <option>{language === 'en' ? 'Default' : '默认'}</option>
              <option>{language === 'en' ? 'Categorical' : '分类'}</option>
              <option>{language === 'en' ? 'Sequential' : '顺序'}</option>
              <option>{language === 'en' ? 'Diverging' : '发散'}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Data Aggregation' : '数据聚合'}
            </label>
            <select className="select">
              <option>{language === 'en' ? 'Sum' : '总和'}</option>
              <option>{language === 'en' ? 'Average' : '平均值'}</option>
              <option>{language === 'en' ? 'Count' : '计数'}</option>
              <option>{language === 'en' ? 'Minimum' : '最小值'}</option>
              <option>{language === 'en' ? 'Maximum' : '最大值'}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
