import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Layers, Activity, AlertTriangle, TrendingUp, Search, BarChart2, FileText, Home, User, Bell, HelpCircle, Settings, Globe } from 'lucide-react';

// Translations
const translations = {
  en: {
    dashboard: "Dashboard",
    analytics: "Advanced Analytics",
    alerts: "AI Alerts",
    reports: "Reports",
    settings: "Settings",
    manufacturingEdition: "Manufacturing Edition",
    operationalEfficiency: "Operational Efficiency",
    vsLastMonth: "vs last month",
    qualityRate: "Quality Rate",
    predictiveAlerts: "Predictive Alerts",
    requiringAttention: "requiring attention",
    costOptimization: "Cost Optimization",
    potentialSavings: "potential savings",
    performanceTrends: "Performance Trends",
    aiInsight: "AI Insight:",
    efficiencyInsight: "Efficiency improvement correlates with reduced maintenance cycles. Consider adjusting preventive maintenance schedule based on AI-driven optimization.",
    resourceUtilization: "Resource Utilization",
    energyInsight: "Energy efficiency is below target. AI models suggest potential 15% improvement by optimizing equipment startup sequences and balancing loads.",
    aiPoweredAlerts: "AI-Powered Predictive Alerts",
    viewAll: "View All",
    equipment: "Equipment",
    issue: "Issue",
    risk: "Risk",
    aiRecommendation: "AI Recommendation",
    action: "Action",
    address: "Address",
    operationsDashboard: "Manufacturing Operations Dashboard",
    searchAnalytics: "Search analytics...",
    generateReport: "Generate Report",
    realTimeMonitoring: "Real-time production monitoring",
    predictiveMaintenance: "Predictive maintenance",
    qualityControl: "Quality control analytics",
    high: "High",
    medium: "Medium",
    low: "Low",
    viewDetails: "View Details",
    resolve: "Resolve",
    customAnalysisBuilder: "Custom Analysis Builder",
    createCustomAnalytics: "Create custom analytics by selecting manufacturing variables and applying AI models.",
    selectDataSource: "Select Data Source",
    analysisType: "Analysis Type",
    timePeriod: "Time Period",
    generateAnalysis: "Generate Analysis",
    productionLineData: "Production Line Data",
    qualityControlMetrics: "Quality Control Metrics",
    maintenanceRecords: "Maintenance Records",
    energyConsumption: "Energy Consumption",
    supplyChainData: "Supply Chain Data",
    correlationAnalysis: "Correlation Analysis",
    trendForecasting: "Trend Forecasting",
    anomalyDetection: "Anomaly Detection",
    rootCauseAnalysis: "Root Cause Analysis",
    customMLModel: "Custom ML Model",
    last7Days: "Last 7 Days",
    last30Days: "Last 30 Days",
    lastQuarter: "Last Quarter",
    yearToDate: "Year to Date",
    customRange: "Custom Range",
    configureAlerts: "Configure Alerts",
    activeAlerts: "Active Alerts",
    priority: "Priority",
    type: "Type",
    description: "Description",
    detected: "Detected",
    status: "Status",
    actions: "Actions",
    quality: "Quality",
    open: "Open",
    inProgress: "In Progress",
    hoursAgo: "hours ago",
    assemblyLineAlert: "Assembly Line 3 showing anomalous vibration patterns",
    defectRateAlert: "Defect rate increasing above threshold at Quality Station 2",
    reportsDescription: "The reports section contains automated manufacturing reports and analytics.",
    settingsDescription: "Configure your AI analytics preferences and integrations here.",
    anomalousVibration: "Anomalous vibration pattern detected",
    predictiveMaintenance72: "Predictive maintenance needed within 72 hours",
    defectRateIncrease: "Defect rate increasing above threshold",
    calibrationDrift: "Calibration parameters drifting from optimal",
    inventoryAnomaly: "Inventory forecasting anomaly",
    supplyChainDisruption: "Potential supply chain disruption in next cycle",
    assemblyLine3: "Assembly Line 3",
    qualityStation2: "Quality Station 2",
    materialHandling: "Material Handling",
    machineUtilization: "Machine Utilization",
    humanResources: "Human Resources",
    energyEfficiency: "Energy Efficiency",
    materialsYield: "Materials Yield",
    efficiency: "Efficiency",
    defects: "Defects",
    maintenance: "Maintenance",
    target: "Target",
    month: "Month",
    percentage: "Percentage",
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    backToPortal: "Back to Portal"
  },
  zh: {
    dashboard: "仪表板",
    analytics: "高级分析",
    alerts: "AI 警报",
    reports: "报告",
    settings: "设置",
    manufacturingEdition: "制造业版",
    operationalEfficiency: "运营效率",
    vsLastMonth: "与上月相比",
    qualityRate: "质量率",
    predictiveAlerts: "预测警报",
    requiringAttention: "需要关注",
    costOptimization: "成本优化",
    potentialSavings: "潜在节省",
    performanceTrends: "性能趋势",
    aiInsight: "AI 洞察:",
    efficiencyInsight: "效率提高与减少维护周期相关。考虑根据 AI 驱动的优化调整预防性维护计划。",
    resourceUtilization: "资源利用",
    energyInsight: "能源效率低于目标。AI 模型表明，通过优化设备启动序列和平衡负载，可能提高 15% 的效率。",
    aiPoweredAlerts: "AI 驱动的预测警报",
    viewAll: "查看全部",
    equipment: "设备",
    issue: "问题",
    risk: "风险",
    aiRecommendation: "AI 建议",
    action: "操作",
    address: "处理",
    operationsDashboard: "制造业运营仪表板",
    searchAnalytics: "搜索分析...",
    generateReport: "生成报告",
    realTimeMonitoring: "实时生产监控",
    predictiveMaintenance: "预测性维护",
    qualityControl: "质量控制分析",
    high: "高",
    medium: "中",
    low: "低",
    viewDetails: "查看详情",
    resolve: "解决",
    customAnalysisBuilder: "自定义分析构建器",
    createCustomAnalytics: "通过选择制造变量和应用AI模型创建自定义分析。",
    selectDataSource: "选择数据源",
    analysisType: "分析类型",
    timePeriod: "时间段",
    generateAnalysis: "生成分析",
    productionLineData: "生产线数据",
    qualityControlMetrics: "质量控制指标",
    maintenanceRecords: "维护记录",
    energyConsumption: "能源消耗",
    supplyChainData: "供应链数据",
    correlationAnalysis: "相关性分析",
    trendForecasting: "趋势预测",
    anomalyDetection: "异常检测",
    rootCauseAnalysis: "根本原因分析",
    customMLModel: "自定义机器学习模型",
    last7Days: "最近7天",
    last30Days: "最近30天",
    lastQuarter: "最近一季度",
    yearToDate: "年初至今",
    customRange: "自定义范围",
    configureAlerts: "配置警报",
    activeAlerts: "活动警报",
    priority: "优先级",
    type: "类型",
    description: "描述",
    detected: "检测时间",
    status: "状态",
    actions: "操作",
    quality: "质量",
    open: "待处理",
    inProgress: "处理中",
    hoursAgo: "小时前",
    assemblyLineAlert: "装配线3显示异常振动模式",
    defectRateAlert: "质量站2的缺陷率高于阈值",
    reportsDescription: "报告部分包含自动生成的制造报告和分析。",
    settingsDescription: "在此配置您的AI分析首选项和集成。",
    anomalousVibration: "检测到异常振动模式",
    predictiveMaintenance72: "需要在72小时内进行预测性维护",
    defectRateIncrease: "缺陷率高于阈值",
    calibrationDrift: "校准参数偏离最佳值",
    inventoryAnomaly: "库存预测异常",
    supplyChainDisruption: "下一周期可能出现供应链中断",
    assemblyLine3: "装配线3",
    qualityStation2: "质量工作站2",
    materialHandling: "物料处理",
    machineUtilization: "机器利用率",
    humanResources: "人力资源",
    energyEfficiency: "能源效率",
    materialsYield: "材料产出率",
    efficiency: "效率",
    defects: "缺陷",
    maintenance: "维护",
    target: "目标",
    month: "月份",
    percentage: "百分比",
    jan: "一月",
    feb: "二月",
    mar: "三月",
    apr: "四月",
    may: "五月",
    jun: "六月",
    jul: "七月",
    backToPortal: "返回门户"
  }
};

// Sample data for manufacturing industry
const performanceData = [
  { name: 'jan', efficiency: 78, defects: 2.1, maintenance: 12, target: 85 },
  { name: 'feb', efficiency: 75, defects: 2.3, maintenance: 8, target: 85 },
  { name: 'mar', efficiency: 80, defects: 1.9, maintenance: 10, target: 85 },
  { name: 'apr', efficiency: 82, defects: 1.7, maintenance: 6, target: 85 },
  { name: 'may', efficiency: 81, defects: 1.8, maintenance: 9, target: 85 },
  { name: 'jun', efficiency: 85, defects: 1.4, maintenance: 5, target: 85 },
  { name: 'jul', efficiency: 87, defects: 1.2, maintenance: 4, target: 85 }
];

const resourceData = [
  { name: 'machineUtilization', value: 78 },
  { name: 'humanResources', value: 92 },
  { name: 'energyEfficiency', value: 65 },
  { name: 'materialsYield', value: 83 }
];

const alertsData = [
  { id: 1, equipment: 'assemblyLine3', issue: 'anomalousVibration', risk: 'High', ai: 'predictiveMaintenance72' },
  { id: 2, equipment: 'qualityStation2', issue: 'defectRateIncrease', risk: 'Medium', ai: 'calibrationDrift' },
  { id: 3, equipment: 'materialHandling', issue: 'inventoryAnomaly', risk: 'Low', ai: 'supplyChainDisruption' }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Add touch-friendly styles to the component
const touchFriendlyStyles = {
  button: "touch-manipulation select-none active:scale-95 transition-transform",
  card: "touch-manipulation active:shadow-lg transition-shadow",
  link: "touch-manipulation select-none"
};

// Update the navigation buttons
const NavigationButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`${touchFriendlyStyles.button} flex items-center space-x-2 px-4 py-2 rounded-lg ${
      isActive ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

// Update the main navigation
const Navigation = ({ activeTab, setActiveTab, t, language, changeLanguage }) => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex space-x-4">
          <NavigationButton
            icon={Home}
            label={t('dashboard')}
            isActive={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <NavigationButton
            icon={BarChart2}
            label={t('analytics')}
            isActive={activeTab === 'analytics'}
            onClick={() => setActiveTab('analytics')}
          />
          <NavigationButton
            icon={AlertTriangle}
            label={t('alerts')}
            isActive={activeTab === 'alerts'}
            onClick={() => setActiveTab('alerts')}
          />
          <NavigationButton
            icon={FileText}
            label={t('reports')}
            isActive={activeTab === 'reports'}
            onClick={() => setActiveTab('reports')}
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            className={`${touchFriendlyStyles.button} p-2 rounded-full hover:bg-gray-100`}
            onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
          >
            <Globe size={20} />
          </button>
          <button
            className={`${touchFriendlyStyles.button} p-2 rounded-full hover:bg-gray-100`}
          >
            <Settings size={20} />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// Update action buttons in the dashboard
const ActionButton = ({ icon: Icon, label, onClick, variant = 'primary' }) => (
  <button
    onClick={onClick}
    className={`${touchFriendlyStyles.button} flex items-center space-x-2 px-4 py-2 rounded-lg ${
      variant === 'primary' 
        ? 'bg-primary-600 text-white hover:bg-primary-700' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

// Main component
const IndustryAIAnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState('en');
  const industry = 'Manufacturing';
  
  // Add global CSS to fix Chinese text orientation
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    // Add CSS rules to ensure horizontal text display
    style.textContent = `
      h1, h2, h3, p, span, div, button, text, tspan {
        writing-mode: horizontal-tb !important;
        text-orientation: mixed !important;
        text-combine-upright: none !important;
      }
    `;
    // Append the style to the document head
    document.head.appendChild(style);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Initialize language from localStorage or default to English
  useEffect(() => {
    const savedLang = localStorage.getItem('dashboard_language') || 'en';
    setLanguage(savedLang);
  }, []);
  
  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('dashboard_language', lang);
  };
  
  // Get translation
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  // Render the appropriate component based on the active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard t={t} />;
      case 'analytics':
        return <Analytics t={t} />;
      case 'alerts':
        return <Alerts t={t} />;
      case 'reports':
        return <Reports t={t} />;
      case 'settings':
        return <SettingsPanel t={t} />;
      default:
        return <Dashboard t={t} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        t={t} 
        language={language}
        changeLanguage={changeLanguage}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
};

// Dashboard component
const Dashboard = ({ t }) => (
  <div className="p-4 space-y-6">
    {/* Performance Trends Chart */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">{t('performanceTrends')}</h3>
      <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 200 : 300}>
        <LineChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="efficiency" stroke="#8884d8" name={t('efficiency')} />
          <Line type="monotone" dataKey="defects" stroke="#82ca9d" name={t('defects')} />
          <Line type="monotone" dataKey="maintenance" stroke="#ffc658" name={t('maintenance')} />
          <Line type="monotone" dataKey="target" stroke="#ff7300" name={t('target')} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Resource Utilization Chart */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">{t('resourceUtilization')}</h3>
      <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 200 : 300}>
        <PieChart>
          <Pie
            data={resourceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={window.innerWidth < 768 ? 60 : 80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {resourceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Analytics component
const Analytics = ({ t }) => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{t('analytics')}</h1>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center">
        <TrendingUp size={16} className="mr-2" />
        {t('generateReport')}
      </button>
    </div>
    
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">{t('customAnalysisBuilder')}</h2>
      <p className="text-gray-600 mb-4">{t('createCustomAnalytics')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('selectDataSource')}</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>{t('productionLineData')}</option>
            <option>{t('qualityControlMetrics')}</option>
            <option>{t('maintenanceRecords')}</option>
            <option>{t('energyConsumption')}</option>
            <option>{t('supplyChainData')}</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('analysisType')}</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>{t('correlationAnalysis')}</option>
            <option>{t('trendForecasting')}</option>
            <option>{t('anomalyDetection')}</option>
            <option>{t('rootCauseAnalysis')}</option>
            <option>{t('customMLModel')}</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('timePeriod')}</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>{t('last7Days')}</option>
            <option>{t('last30Days')}</option>
            <option>{t('lastQuarter')}</option>
            <option>{t('yearToDate')}</option>
            <option>{t('customRange')}</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          {t('generateAnalysis')}
        </button>
      </div>
    </div>
  </div>
);

// Alerts component
const Alerts = ({ t }) => (
  <div className="p-4">
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">{t('aiPoweredAlerts')}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('equipment')}</th>
              <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('issue')}</th>
              <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('risk')}</th>
              <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('aiRecommendation')}</th>
              <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('action')}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {alertsData.map((alert) => (
              <tr key={alert.id} className="hover:bg-gray-50">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t(alert.equipment)}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t(alert.issue)}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    alert.risk === 'High' ? 'bg-red-100 text-red-800' : 
                    alert.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {t(alert.risk.toLowerCase())}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">{t(alert.ai)}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-indigo-600 hover:text-indigo-900">{t('viewDetails')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Reports component
const Reports = ({ t }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">{t('reports')}</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-lg text-gray-600">{t('reportsDescription')}</p>
    </div>
  </div>
);

// Settings component
const SettingsPanel = ({ t }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">{t('settings')}</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-lg text-gray-600">{t('settingsDescription')}</p>
    </div>
  </div>
);

export default IndustryAIAnalyticsDashboard; 