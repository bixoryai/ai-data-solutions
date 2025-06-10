import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  FileText, 
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Download,
  FileCheck
} from 'lucide-react';

interface ComplianceToolsProps {
  language: 'en' | 'zh';
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
}

const ComplianceTools: React.FC<ComplianceToolsProps> = ({ language, selectedDomain }) => {
  const [activeTab, setActiveTab] = useState('regulations');
  const [showScanResults, setShowScanResults] = useState(false);

  const content = {
    en: {
      title: 'Compliance & Governance Tools',
      subtitle: 'Ensure data compliance with industry regulations and governance policies',
      regulationsTab: 'Regulatory Compliance',
      privacyTab: 'Privacy Protection',
      auditTab: 'Audit & Documentation',
      scanDataset: 'Scan Dataset',
      generateReport: 'Generate Compliance Report',
      viewResults: 'View Results',
      complianceScore: 'Compliance Score',
      privacyScore: 'Privacy Score',
      documentationScore: 'Documentation Score',
      overallScore: 'Overall Score',
      complianceStatus: 'Compliance Status',
      issuesFound: 'Issues Found',
      criticalIssues: 'Critical Issues',
      moderateIssues: 'Moderate Issues',
      minorIssues: 'Minor Issues',
      downloadReport: 'Download Detailed Report',
      fixIssues: 'Fix Issues Automatically',
      // Domain-specific content
      healthcare: {
        title: 'Healthcare Compliance Tools',
        regulations: [
          'HIPAA (Health Insurance Portability and Accountability Act)',
          'HITECH (Health Information Technology for Economic and Clinical Health Act)',
          'FDA Regulations',
          'Clinical Trial Data Requirements'
        ],
        privacyMeasures: [
          'PHI (Protected Health Information) Detection',
          'De-identification Methods',
          'Consent Management',
          'Access Controls'
        ],
        auditRequirements: [
          'Data Lineage Documentation',
          'Processing Logs',
          'Change History',
          'Access Logs'
        ]
      },
      finance: {
        title: 'Financial Compliance Tools',
        regulations: [
          'GDPR (General Data Protection Regulation)',
          'PCI DSS (Payment Card Industry Data Security Standard)',
          'SOX (Sarbanes-Oxley Act)',
          'AML (Anti-Money Laundering) Regulations'
        ],
        privacyMeasures: [
          'PII (Personally Identifiable Information) Detection',
          'Data Masking',
          'Encryption Requirements',
          'Retention Policies'
        ],
        auditRequirements: [
          'Transaction Audit Trails',
          'Reporting Documentation',
          'Risk Assessment Records',
          'Compliance Certifications'
        ]
      },
      manufacturing: {
        title: 'Manufacturing Compliance Tools',
        regulations: [
          'ISO 9001 (Quality Management)',
          'GMP (Good Manufacturing Practice)',
          'Industry 4.0 Standards',
          'Supply Chain Compliance'
        ],
        privacyMeasures: [
          'Intellectual Property Protection',
          'Trade Secret Safeguards',
          'Vendor Data Management',
          'Employee Data Protection'
        ],
        auditRequirements: [
          'Quality Control Documentation',
          'Production Records',
          'Equipment Calibration Logs',
          'Safety Compliance Records'
        ]
      }
    },
    zh: {
      title: '合规与治理工具',
      subtitle: '确保数据符合行业法规和治理政策',
      regulationsTab: '法规合规',
      privacyTab: '隐私保护',
      auditTab: '审计与文档',
      scanDataset: '扫描数据集',
      generateReport: '生成合规报告',
      viewResults: '查看结果',
      complianceScore: '合规评分',
      privacyScore: '隐私评分',
      documentationScore: '文档评分',
      overallScore: '总体评分',
      complianceStatus: '合规状态',
      issuesFound: '发现的问题',
      criticalIssues: '严重问题',
      moderateIssues: '中等问题',
      minorIssues: '轻微问题',
      downloadReport: '下载详细报告',
      fixIssues: '自动修复问题',
      // Domain-specific content
      healthcare: {
        title: '医疗保健合规工具',
        regulations: [
          'HIPAA（健康保险便携性和责任法案）',
          'HITECH（经济和临床健康健康信息技术法案）',
          'FDA法规',
          '临床试验数据要求'
        ],
        privacyMeasures: [
          'PHI（受保护健康信息）检测',
          '去识别方法',
          '同意管理',
          '访问控制'
        ],
        auditRequirements: [
          '数据血统文档',
          '处理日志',
          '变更历史',
          '访问日志'
        ]
      },
      finance: {
        title: '金融合规工具',
        regulations: [
          'GDPR（通用数据保护条例）',
          'PCI DSS（支付卡行业数据安全标准）',
          'SOX（萨班斯-奥克斯利法案）',
          'AML（反洗钱）法规'
        ],
        privacyMeasures: [
          'PII（个人身份信息）检测',
          '数据掩码',
          '加密要求',
          '保留政策'
        ],
        auditRequirements: [
          '交易审计跟踪',
          '报告文档',
          '风险评估记录',
          '合规认证'
        ]
      },
      manufacturing: {
        title: '制造业合规工具',
        regulations: [
          'ISO 9001（质量管理）',
          'GMP（良好生产规范）',
          '工业4.0标准',
          '供应链合规'
        ],
        privacyMeasures: [
          '知识产权保护',
          '商业秘密保障',
          '供应商数据管理',
          '员工数据保护'
        ],
        auditRequirements: [
          '质量控制文档',
          '生产记录',
          '设备校准日志',
          '安全合规记录'
        ]
      }
    }
  };

  // Get domain-specific content
  const domainContent = content[language][selectedDomain];

  // Get compliance score color based on value
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get compliance status based on score
  const getComplianceStatus = (score: number) => {
    if (score >= 90) {
      return {
        text: language === 'en' ? 'Compliant' : '合规',
        color: 'bg-green-100 text-green-800',
        icon: <CheckCircle size={16} className="text-green-600" />
      };
    }
    if (score >= 70) {
      return {
        text: language === 'en' ? 'Partially Compliant' : '部分合规',
        color: 'bg-yellow-100 text-yellow-800',
        icon: <AlertTriangle size={16} className="text-yellow-600" />
      };
    }
    return {
      text: language === 'en' ? 'Non-Compliant' : '不合规',
      color: 'bg-red-100 text-red-800',
      icon: <XCircle size={16} className="text-red-600" />
    };
  };

  // Sample compliance scores
  const complianceScores = {
    regulatory: 85,
    privacy: 92,
    documentation: 78,
    overall: 85
  };

  // Sample issues found
  const issuesFound = {
    critical: 2,
    moderate: 5,
    minor: 8
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{content[language].title}</h2>
        <p className="mt-2 text-gray-600">{content[language].subtitle}</p>
      </div>

      {/* Domain-specific Compliance Tools */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <Shield size={24} className="text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold">{domainContent.title}</h3>
        </div>
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('regulations')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'regulations'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].regulationsTab}
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'privacy'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].privacyTab}
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'audit'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].auditTab}
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="mb-6">
          {activeTab === 'regulations' && (
            <div>
              <div className="flex items-center mb-4">
                <FileText size={20} className="text-blue-600 mr-2" />
                <h4 className="font-medium text-gray-800">{language === 'en' ? 'Applicable Regulations' : '适用法规'}</h4>
              </div>
              
              <div className="space-y-4">
                {domainContent.regulations.map((regulation, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle size={18} className="text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h5 className="text-sm font-medium text-gray-800">{regulation}</h5>
                        <p className="mt-1 text-xs text-gray-600">
                          {language === 'en' 
                            ? 'Compliance requirements will be checked against this regulation.' 
                            : '将根据此法规检查合规要求。'}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'privacy' && (
            <div>
              <div className="flex items-center mb-4">
                <Lock size={20} className="text-purple-600 mr-2" />
                <h4 className="font-medium text-gray-800">{language === 'en' ? 'Privacy Protection Measures' : '隐私保护措施'}</h4>
              </div>
              
              <div className="space-y-4">
                {domainContent.privacyMeasures.map((measure, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        {index % 2 === 0 ? (
                          <Eye size={18} className="text-blue-600" />
                        ) : (
                          <EyeOff size={18} className="text-purple-600" />
                        )}
                      </div>
                      <div className="ml-3">
                        <h5 className="text-sm font-medium text-gray-800">{measure}</h5>
                        <p className="mt-1 text-xs text-gray-600">
                          {language === 'en' 
                            ? 'Privacy protection measure to ensure data security and compliance.' 
                            : '确保数据安全和合规的隐私保护措施。'}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <select className="text-xs border border-gray-300 rounded-md px-2 py-1">
                          <option>{language === 'en' ? 'Enabled' : '已启用'}</option>
                          <option>{language === 'en' ? 'Disabled' : '已禁用'}</option>
                          <option>{language === 'en' ? 'Custom' : '自定义'}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'audit' && (
            <div>
              <div className="flex items-center mb-4">
                <FileCheck size={20} className="text-green-600 mr-2" />
                <h4 className="font-medium text-gray-800">{language === 'en' ? 'Audit & Documentation Requirements' : '审计和文档要求'}</h4>
              </div>
              
              <div className="space-y-4">
                {domainContent.auditRequirements.map((requirement, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <AlertCircle size={18} className="text-amber-600" />
                      </div>
                      <div className="ml-3">
                        <h5 className="text-sm font-medium text-gray-800">{requirement}</h5>
                        <p className="mt-1 text-xs text-gray-600">
                          {language === 'en' 
                            ? 'Documentation required for compliance and audit purposes.' 
                            : '合规和审计目的所需的文档。'}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          index % 3 === 0 
                            ? 'bg-green-100 text-green-800' 
                            : index % 3 === 1 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {index % 3 === 0 
                            ? (language === 'en' ? 'Complete' : '完成') 
                            : index % 3 === 1 
                            ? (language === 'en' ? 'Partial' : '部分') 
                            : (language === 'en' ? 'Missing' : '缺失')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setShowScanResults(true)}
            className="btn btn-primary flex items-center"
          >
            <Shield size={18} className="mr-2" />
            {content[language].scanDataset}
          </button>
          
          <button className="btn btn-outline flex items-center">
            <FileText size={18} className="mr-2" />
            {content[language].generateReport}
          </button>
        </div>
      </div>
      
      {/* Compliance Scan Results */}
      {showScanResults && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800">{content[language].complianceStatus}</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(complianceScores.regulatory)}`}>
                    {complianceScores.regulatory}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].complianceScore}</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(complianceScores.privacy)}`}>
                    {complianceScores.privacy}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].privacyScore}</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(complianceScores.documentation)}`}>
                    {complianceScores.documentation}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].documentationScore}</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border-2 border-blue-300 shadow-sm">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(complianceScores.overall)}`}>
                    {complianceScores.overall}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].overallScore}</div>
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      getComplianceStatus(complianceScores.overall).color
                    }`}>
                      {getComplianceStatus(complianceScores.overall).icon}
                      <span className="ml-1">{getComplianceStatus(complianceScores.overall).text}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <h4 className="text-base font-medium text-gray-700 mb-4">{content[language].issuesFound}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-red-600">{issuesFound.critical}</div>
                    <div className="text-sm text-gray-600">{content[language].criticalIssues}</div>
                  </div>
                  <XCircle size={24} className="text-red-500" />
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">{issuesFound.moderate}</div>
                    <div className="text-sm text-gray-600">{content[language].moderateIssues}</div>
                  </div>
                  <AlertTriangle size={24} className="text-yellow-500" />
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{issuesFound.minor}</div>
                    <div className="text-sm text-gray-600">{content[language].minorIssues}</div>
                  </div>
                  <AlertCircle size={24} className="text-blue-500" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary flex items-center">
                <Shield size={18} className="mr-2" />
                {content[language].fixIssues}
              </button>
              <button className="btn btn-outline flex items-center">
                <Download size={18} className="mr-2" />
                {content[language].downloadReport}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplianceTools;
