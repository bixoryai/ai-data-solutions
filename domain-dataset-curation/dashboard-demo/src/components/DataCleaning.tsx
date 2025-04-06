import React, { useState } from 'react';
import { 
  FileCheck, 
  AlertTriangle, 
  Filter, 
  Trash2, 
  RefreshCw, 
  CheckCircle, 
  XCircle,
  Calendar,
  User,
  Hash,
  Tag,
  Clock
} from 'lucide-react';

interface DataCleaningProps {
  language: 'en' | 'zh';
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
}

const DataCleaning: React.FC<DataCleaningProps> = ({ language, selectedDomain }) => {
  const [activeTab, setActiveTab] = useState('missing-data');
  const [showCleaningResults, setShowCleaningResults] = useState(false);

  const content = {
    en: {
      title: 'Data Cleaning & Preprocessing',
      subtitle: 'Clean and prepare domain-specific data for analysis',
      missingDataTab: 'Missing Data',
      outlierDetectionTab: 'Outlier Detection',
      dataTransformationTab: 'Data Transformation',
      domainSpecificRulesTab: 'Domain-Specific Rules',
      applyCleaningRules: 'Apply Cleaning Rules',
      viewResults: 'View Results',
      resetDemo: 'Reset Demo',
      cleaningResults: 'Cleaning Results',
      beforeCleaning: 'Before Cleaning',
      afterCleaning: 'After Cleaning',
      issuesFixed: 'Issues Fixed',
      dataQualityScore: 'Data Quality Score',
      missingValues: 'Missing Values',
      outliers: 'Outliers',
      formatIssues: 'Format Issues',
      domainRuleViolations: 'Domain Rule Violations',
      applyToFullDataset: 'Apply to Full Dataset',
      downloadCleanedData: 'Download Cleaned Data',
      // Domain-specific content
      healthcare: {
        datasetName: 'Patient Records Dataset',
        fieldTypes: ['Patient ID', 'Date of Birth', 'Diagnosis Code', 'Treatment Date', 'Medication'],
        domainRules: [
          'Valid ICD-10 diagnosis codes',
          'Treatment date must be after admission date',
          'Medication dosage within safe range',
          'Patient age appropriate for treatment'
        ]
      },
      finance: {
        datasetName: 'Transaction Records Dataset',
        fieldTypes: ['Transaction ID', 'Account Number', 'Amount', 'Transaction Date', 'Category'],
        domainRules: [
          'Transaction amount within account limits',
          'Valid transaction categories',
          'No duplicate transaction IDs',
          'Transaction frequency within normal patterns'
        ]
      },
      manufacturing: {
        datasetName: 'Production Line Dataset',
        fieldTypes: ['Product ID', 'Batch Number', 'Production Date', 'Quality Score', 'Machine ID'],
        domainRules: [
          'Quality score within acceptable range',
          'Production date within operating hours',
          'Machine maintenance status valid',
          'Batch size within capacity limits'
        ]
      }
    },
    zh: {
      title: '数据清洗与预处理',
      subtitle: '清洗和准备特定领域的数据以进行分析',
      missingDataTab: '缺失数据',
      outlierDetectionTab: '异常值检测',
      dataTransformationTab: '数据转换',
      domainSpecificRulesTab: '领域特定规则',
      applyCleaningRules: '应用清洗规则',
      viewResults: '查看结果',
      resetDemo: '重置演示',
      cleaningResults: '清洗结果',
      beforeCleaning: '清洗前',
      afterCleaning: '清洗后',
      issuesFixed: '已修复问题',
      dataQualityScore: '数据质量评分',
      missingValues: '缺失值',
      outliers: '异常值',
      formatIssues: '格式问题',
      domainRuleViolations: '领域规则违规',
      applyToFullDataset: '应用于完整数据集',
      downloadCleanedData: '下载清洗后的数据',
      // Domain-specific content
      healthcare: {
        datasetName: '患者记录数据集',
        fieldTypes: ['患者ID', '出生日期', '诊断代码', '治疗日期', '药物'],
        domainRules: [
          '有效的ICD-10诊断代码',
          '治疗日期必须在入院日期之后',
          '药物剂量在安全范围内',
          '患者年龄适合治疗'
        ]
      },
      finance: {
        datasetName: '交易记录数据集',
        fieldTypes: ['交易ID', '账号', '金额', '交易日期', '类别'],
        domainRules: [
          '交易金额在账户限额内',
          '有效的交易类别',
          '无重复交易ID',
          '交易频率在正常模式内'
        ]
      },
      manufacturing: {
        datasetName: '生产线数据集',
        fieldTypes: ['产品ID', '批次号', '生产日期', '质量评分', '机器ID'],
        domainRules: [
          '质量评分在可接受范围内',
          '生产日期在运行时间内',
          '机器维护状态有效',
          '批次大小在容量限制内'
        ]
      }
    }
  };

  // Get domain-specific content
  const domainContent = content[language][selectedDomain];

  // Get field type icon based on field name
  const getFieldIcon = (fieldName: string) => {
    if (fieldName.includes('ID') || fieldName.includes('Number')) {
      return <Hash size={16} className="text-blue-500" />;
    } else if (fieldName.includes('Date')) {
      return <Calendar size={16} className="text-green-500" />;
    } else if (fieldName.includes('Patient') || fieldName.includes('Account')) {
      return <User size={16} className="text-purple-500" />;
    } else if (fieldName.includes('Category') || fieldName.includes('Code')) {
      return <Tag size={16} className="text-orange-500" />;
    } else {
      return <Clock size={16} className="text-gray-500" />;
    }
  };

  // Sample data for the table
  const sampleData = [
    { id: 1, missingFields: 2, outliers: 1, formatIssues: 3, ruleViolations: 2 },
    { id: 2, missingFields: 0, outliers: 2, formatIssues: 1, ruleViolations: 0 },
    { id: 3, missingFields: 3, outliers: 0, formatIssues: 0, ruleViolations: 1 },
    { id: 4, missingFields: 1, outliers: 1, formatIssues: 2, ruleViolations: 3 },
    { id: 5, missingFields: 0, outliers: 0, formatIssues: 1, ruleViolations: 0 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{content[language].title}</h2>
        <p className="mt-2 text-gray-600">{content[language].subtitle}</p>
      </div>

      {/* Dataset Information */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <FileCheck size={24} className="text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold">{domainContent.datasetName}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {domainContent.fieldTypes.map((field, index) => (
            <div key={index} className="bg-gray-50 rounded-md p-3 border border-gray-200">
              <div className="flex items-center">
                {getFieldIcon(field)}
                <span className="ml-2 text-sm font-medium text-gray-700">{field}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <AlertTriangle size={16} className="text-amber-500 mr-2" />
          <span>{language === 'en' ? 'This dataset contains quality issues that need to be addressed' : '此数据集包含需要解决的质量问题'}</span>
        </div>
      </div>

      {/* Cleaning Tools Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('missing-data')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'missing-data'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {content[language].missingDataTab}
            </button>
            <button
              onClick={() => setActiveTab('outlier-detection')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'outlier-detection'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {content[language].outlierDetectionTab}
            </button>
            <button
              onClick={() => setActiveTab('data-transformation')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'data-transformation'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {content[language].dataTransformationTab}
            </button>
            <button
              onClick={() => setActiveTab('domain-rules')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'domain-rules'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {content[language].domainSpecificRulesTab}
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'missing-data' && (
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <AlertTriangle size={20} className="text-amber-500 mr-2" />
                <h4 className="font-medium">{language === 'en' ? 'Missing Data Detection' : '缺失数据检测'}</h4>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{language === 'en' ? 'Imputation Method' : '插补方法'}</span>
                  </div>
                  <select className="select">
                    <option>{language === 'en' ? 'Mean / Mode Imputation' : '均值/众数插补'}</option>
                    <option>{language === 'en' ? 'Median Imputation' : '中位数插补'}</option>
                    <option>{language === 'en' ? 'KNN Imputation' : 'KNN插补'}</option>
                    <option>{language === 'en' ? 'Domain-Specific Rules' : '领域特定规则'}</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{language === 'en' ? 'Missing Value Threshold (%)' : '缺失值阈值 (%)'}</span>
                  </div>
                  <input type="range" min="0" max="100" defaultValue="20" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="flag-missing" className="mr-2" />
                  <label htmlFor="flag-missing" className="text-sm text-gray-700">
                    {language === 'en' ? 'Flag records with imputed values' : '标记带有插补值的记录'}
                  </label>
                </div>
              </div>
              
              <div className="mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Field' : '字段'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Missing (%)' : '缺失 (%)'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Action' : '操作'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {domainContent.fieldTypes.map((field, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center">
                            {getFieldIcon(field)}
                            <span className="ml-2">{field}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {Math.floor(Math.random() * 15)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                            <option>{language === 'en' ? 'Impute' : '插补'}</option>
                            <option>{language === 'en' ? 'Drop rows' : '删除行'}</option>
                            <option>{language === 'en' ? 'Flag as missing' : '标记为缺失'}</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'domain-rules' && (
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <Filter size={20} className="text-blue-500 mr-2" />
                <h4 className="font-medium">{language === 'en' ? 'Domain-Specific Rules' : '领域特定规则'}</h4>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  {language === 'en' 
                    ? 'Apply specialized rules based on domain knowledge to ensure data quality and compliance.' 
                    : '根据领域知识应用专门规则，确保数据质量和合规性。'}
                </p>
                
                <div className="space-y-3">
                  {domainContent.domainRules.map((rule, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" id={`rule-${index}`} defaultChecked className="mr-3" />
                      <label htmlFor={`rule-${index}`} className="text-sm text-gray-700">{rule}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <h5 className="font-medium text-gray-700">{language === 'en' ? 'Rule Violations' : '规则违规'}</h5>
                </div>
                <div className="p-4">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {language === 'en' ? 'Record ID' : '记录ID'}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {language === 'en' ? 'Rule Violation' : '规则违规'}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {language === 'en' ? 'Severity' : '严重性'}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {language === 'en' ? 'Action' : '操作'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sampleData.filter(item => item.ruleViolations > 0).map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #{item.id.toString().padStart(4, '0')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {domainContent.domainRules[item.id % domainContent.domainRules.length]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              item.ruleViolations > 2 
                                ? 'bg-red-100 text-red-800' 
                                : item.ruleViolations > 1 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {item.ruleViolations > 2 
                                ? (language === 'en' ? 'High' : '高') 
                                : item.ruleViolations > 1 
                                ? (language === 'en' ? 'Medium' : '中') 
                                : (language === 'en' ? 'Low' : '低')}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                              <option>{language === 'en' ? 'Auto-fix' : '自动修复'}</option>
                              <option>{language === 'en' ? 'Flag for review' : '标记为审查'}</option>
                              <option>{language === 'en' ? 'Exclude record' : '排除记录'}</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Other tabs would be implemented similarly */}
          {(activeTab === 'outlier-detection' || activeTab === 'data-transformation') && (
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-500">
                {language === 'en' 
                  ? 'This feature is available in the full version' 
                  : '此功能在完整版本中可用'}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => setShowCleaningResults(true)}
          className="btn btn-primary flex items-center"
        >
          <RefreshCw size={18} className="mr-2" />
          {content[language].applyCleaningRules}
        </button>
        
        <button className="btn btn-outline flex items-center">
          <Trash2 size={18} className="mr-2" />
          {content[language].resetDemo}
        </button>
      </div>
      
      {/* Cleaning Results */}
      {showCleaningResults && (
        <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800">{content[language].cleaningResults}</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-base font-medium text-gray-700 mb-4">{content[language].beforeCleaning}</h4>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 h-40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500">67%</div>
                    <div className="text-sm text-gray-500">{content[language].dataQualityScore}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-gray-700 mb-4">{content[language].afterCleaning}</h4>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 h-40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">94%</div>
                    <div className="text-sm text-gray-500">{content[language].dataQualityScore}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h4 className="text-base font-medium text-gray-700 mb-4">{content[language].issuesFixed}</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-sm text-gray-600">{content[language].missingValues}</div>
                  </div>
                  <CheckCircle size={24} className="text-green-500" />
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-sm text-gray-600">{content[language].outliers}</div>
                  </div>
                  <CheckCircle size={24} className="text-green-500" />
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">18</div>
                    <div className="text-sm text-gray-600">{content[language].formatIssues}</div>
                  </div>
                  <CheckCircle size={24} className="text-green-500" />
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">3</div>
                    <div className="text-sm text-gray-600">{content[language].domainRuleViolations}</div>
                  </div>
                  <XCircle size={24} className="text-yellow-500" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">
                {content[language].applyToFullDataset}
              </button>
              <button className="btn btn-outline">
                {content[language].downloadCleanedData}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCleaning;
