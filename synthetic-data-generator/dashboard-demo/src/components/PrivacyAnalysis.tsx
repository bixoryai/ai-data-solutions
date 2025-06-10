import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Info, Lock, Unlock } from 'lucide-react';

interface PrivacyAnalysisProps {
  language: 'en' | 'zh';
}

type PrivacyMetric = {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  score: number;
  threshold: number;
  status: 'good' | 'warning' | 'danger';
};

type PrivacyRisk = {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  severity: 'low' | 'medium' | 'high';
  recommendation: {
    en: string;
    zh: string;
  };
};

const PrivacyAnalysis: React.FC<PrivacyAnalysisProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'risks' | 'recommendations'>('metrics');
  const [epsilonValue, setEpsilonValue] = useState<number>(1);
  
  // Translations
  const translations = {
    en: {
      title: 'Privacy Analysis',
      description: 'Evaluate the privacy characteristics of your synthetic data',
      metrics: 'Privacy Metrics',
      risks: 'Identified Risks',
      recommendations: 'Recommendations',
      overallScore: 'Overall Privacy Score',
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      poor: 'Poor',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      severity: 'Severity',
      metric: 'Metric',
      score: 'Score',
      status: 'Status',
      threshold: 'Threshold',
      risk: 'Risk',
      desc: 'Description',
      recommendation: 'Recommendation',
      adjustPrivacy: 'Adjust Privacy Level',
      applySettings: 'Apply Settings',
      lessPrivate: 'Less Private',
      morePrivate: 'More Private',
      privacyBudget: 'Privacy Budget (ε)',
      rerunAnalysis: 'Re-run Analysis',
      downloadReport: 'Download Report'
    },
    zh: {
      title: '隐私分析',
      description: '评估合成数据的隐私特性',
      metrics: '隐私指标',
      risks: '已识别风险',
      recommendations: '建议',
      overallScore: '整体隐私评分',
      excellent: '优秀',
      good: '良好',
      fair: '一般',
      poor: '较差',
      high: '高',
      medium: '中',
      low: '低',
      severity: '严重程度',
      metric: '指标',
      score: '评分',
      status: '状态',
      threshold: '阈值',
      risk: '风险',
      desc: '描述',
      recommendation: '建议',
      adjustPrivacy: '调整隐私级别',
      applySettings: '应用设置',
      lessPrivate: '较少隐私',
      morePrivate: '更多隐私',
      privacyBudget: '隐私预算 (ε)',
      rerunAnalysis: '重新运行分析',
      downloadReport: '下载报告'
    }
  };
  
  const t = translations[language];
  
  // Privacy metrics data
  const privacyMetrics: PrivacyMetric[] = [
    {
      id: 'k-anonymity',
      name: {
        en: 'K-Anonymity',
        zh: 'K-匿名性'
      },
      description: {
        en: 'Measures how many records are similar enough to provide anonymity',
        zh: '衡量有多少记录足够相似以提供匿名性'
      },
      score: 15,
      threshold: 10,
      status: 'good'
    },
    {
      id: 'l-diversity',
      name: {
        en: 'L-Diversity',
        zh: 'L-多样性'
      },
      description: {
        en: 'Measures the diversity of sensitive attributes within anonymity sets',
        zh: '衡量匿名集合中敏感属性的多样性'
      },
      score: 8,
      threshold: 5,
      status: 'good'
    },
    {
      id: 'differential-privacy',
      name: {
        en: 'Differential Privacy (ε)',
        zh: '差分隐私 (ε)'
      },
      description: {
        en: 'Measures the privacy guarantee of the data generation process',
        zh: '衡量数据生成过程的隐私保证'
      },
      score: 1.2,
      threshold: 2.0,
      status: 'good'
    },
    {
      id: 'identifiability',
      name: {
        en: 'Identifiability Risk',
        zh: '可识别风险'
      },
      description: {
        en: 'Probability of re-identifying individuals from the synthetic data',
        zh: '从合成数据中重新识别个人的概率'
      },
      score: 0.05,
      threshold: 0.1,
      status: 'good'
    },
    {
      id: 'attribute-disclosure',
      name: {
        en: 'Attribute Disclosure Risk',
        zh: '属性披露风险'
      },
      description: {
        en: 'Risk of sensitive attributes being disclosed',
        zh: '敏感属性被披露的风险'
      },
      score: 0.12,
      threshold: 0.1,
      status: 'warning'
    }
  ];
  
  // Privacy risks data
  const privacyRisks: PrivacyRisk[] = [
    {
      id: 'outliers',
      name: {
        en: 'Outlier Preservation',
        zh: '异常值保留'
      },
      description: {
        en: 'Unique or rare values in the original data may be preserved in the synthetic data, potentially allowing re-identification.',
        zh: '原始数据中的唯一或罕见值可能在合成数据中保留，可能允许重新识别。'
      },
      severity: 'medium',
      recommendation: {
        en: 'Apply additional noise to outlier values or exclude them from the generation process.',
        zh: '对异常值应用额外的噪声或将其排除在生成过程之外。'
      }
    },
    {
      id: 'attribute-correlation',
      name: {
        en: 'Attribute Correlation',
        zh: '属性相关性'
      },
      description: {
        en: 'Strong correlations between attributes may allow inference of sensitive information.',
        zh: '属性之间的强相关性可能允许推断敏感信息。'
      },
      severity: 'medium',
      recommendation: {
        en: 'Reduce the strength of correlations in the synthetic data or apply differential privacy to sensitive attributes.',
        zh: '降低合成数据中相关性的强度或对敏感属性应用差分隐私。'
      }
    },
    {
      id: 'membership-inference',
      name: {
        en: 'Membership Inference',
        zh: '成员推断'
      },
      description: {
        en: 'An attacker may be able to determine if a specific record was part of the training data.',
        zh: '攻击者可能能够确定特定记录是否是训练数据的一部分。'
      },
      severity: 'low',
      recommendation: {
        en: 'Increase the privacy budget (epsilon) for differential privacy or use a larger training dataset.',
        zh: '增加差分隐私的隐私预算（epsilon）或使用更大的训练数据集。'
      }
    }
  ];
  
  // Calculate overall privacy score
  const calculateOverallScore = (): number => {
    const totalMetrics = privacyMetrics.length;
    const goodMetrics = privacyMetrics.filter(metric => metric.status === 'good').length;
    const warningMetrics = privacyMetrics.filter(metric => metric.status === 'warning').length;
    
    return (goodMetrics * 1.0 + warningMetrics * 0.5) / totalMetrics * 100;
  };
  
  // Get score rating
  const getScoreRating = (score: number): string => {
    if (score >= 90) return t.excellent;
    if (score >= 75) return t.good;
    if (score >= 60) return t.fair;
    return t.poor;
  };
  
  // Get status icon
  const getStatusIcon = (status: 'good' | 'warning' | 'danger') => {
    switch (status) {
      case 'good':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'warning':
        return <AlertTriangle size={18} className="text-yellow-500" />;
      case 'danger':
        return <AlertTriangle size={18} className="text-red-500" />;
      default:
        return null;
    }
  };
  
  // Get severity badge
  const getSeverityBadge = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'low':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {t.low}
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            {t.medium}
          </span>
        );
      case 'high':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {t.high}
          </span>
        );
      default:
        return null;
    }
  };
  
  // Render privacy metrics tab
  const renderMetricsTab = () => {
    return (
      <div>
        <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{t.overallScore}</h3>
              <p className="text-sm text-gray-500">
                {language === 'en' 
                  ? 'Based on all privacy metrics' 
                  : '基于所有隐私指标'}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-800 text-xl font-bold">
                {Math.round(calculateOverallScore())}%
              </div>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {getScoreRating(calculateOverallScore())}
              </p>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.metric}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.score}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.threshold}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.status}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {privacyMetrics.map((metric) => (
                <tr key={metric.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {metric.name[language]}
                        </div>
                        <div className="text-sm text-gray-500">
                          {metric.description[language]}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {metric.score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {metric.id === 'differential-privacy' || metric.id === 'identifiability' || metric.id === 'attribute-disclosure'
                      ? `< ${metric.threshold}`
                      : `> ${metric.threshold}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(metric.status)}
                      <span className="ml-1.5 text-sm text-gray-900">
                        {metric.status === 'good' 
                          ? (language === 'en' ? 'Good' : '良好') 
                          : metric.status === 'warning' 
                            ? (language === 'en' ? 'Warning' : '警告') 
                            : (language === 'en' ? 'Danger' : '危险')}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  // Render privacy risks tab
  const renderRisksTab = () => {
    return (
      <div className="space-y-4">
        {privacyRisks.map((risk) => (
          <div key={risk.id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <AlertTriangle size={20} className={`
                  ${risk.severity === 'high' ? 'text-red-500' : 
                    risk.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'}
                `} />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">{risk.name[language]}</h3>
                  <div>
                    {getSeverityBadge(risk.severity)}
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-600">{risk.description[language]}</p>
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Info size={16} className="text-primary-500" />
                    </div>
                    <div className="ml-2">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">{t.recommendation}:</span> {risk.recommendation[language]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Render recommendations tab
  const renderRecommendationsTab = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">{t.adjustPrivacy}</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.privacyBudget}
            </label>
            <div className="flex items-center">
              <span className="mr-3 text-sm text-gray-500">
                <Lock size={16} className="inline" /> {t.morePrivate}
              </span>
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={epsilonValue}
                onChange={(e) => setEpsilonValue(parseFloat(e.target.value))}
                className="flex-1"
              />
              <span className="ml-3 text-sm text-gray-500">
                {t.lessPrivate} <Unlock size={16} className="inline" />
              </span>
            </div>
            <div className="mt-1 text-center">
              <span className="text-sm font-medium">ε = {epsilonValue.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-md mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info size={18} className="text-blue-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  {language === 'en' 
                    ? 'Lower epsilon values provide stronger privacy guarantees but may reduce data utility.' 
                    : '较低的epsilon值提供更强的隐私保证，但可能降低数据实用性。'}
                </p>
              </div>
            </div>
          </div>
          
          <button className="btn btn-primary w-full">
            {t.applySettings}
          </button>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {language === 'en' ? 'General Recommendations' : '一般建议'}
          </h3>
          
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span className="ml-2">
                {language === 'en' 
                  ? 'Use differential privacy for sensitive attributes like medical conditions or income.' 
                  : '对敏感属性（如医疗状况或收入）使用差分隐私。'}
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span className="ml-2">
                {language === 'en' 
                  ? 'Avoid including direct identifiers (names, IDs) in the synthetic data.' 
                  : '避免在合成数据中包含直接标识符（姓名、ID）。'}
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span className="ml-2">
                {language === 'en' 
                  ? 'Consider reducing the precision of quasi-identifiers (age, zip code) to enhance privacy.' 
                  : '考虑降低准标识符（年龄、邮政编码）的精度以增强隐私。'}
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span className="ml-2">
                {language === 'en' 
                  ? 'Implement access controls and usage policies for the synthetic data.' 
                  : '为合成数据实施访问控制和使用策略。'}
              </span>
            </li>
          </ul>
        </div>
        
        <div className="flex space-x-4">
          <button className="btn btn-primary flex-1">
            {t.rerunAnalysis}
          </button>
          <button className="btn btn-secondary flex-1">
            {t.downloadReport}
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-gray-800">{t.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{t.description}</p>
        </div>
        
        <div className="card-body">
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'metrics'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('metrics')}
                >
                  {t.metrics}
                </button>
                <button
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'risks'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('risks')}
                >
                  {t.risks}
                </button>
                <button
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'recommendations'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('recommendations')}
                >
                  {t.recommendations}
                </button>
              </nav>
            </div>
          </div>
          
          <div>
            {activeTab === 'metrics' && renderMetricsTab()}
            {activeTab === 'risks' && renderRisksTab()}
            {activeTab === 'recommendations' && renderRecommendationsTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAnalysis;
