import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  BarChart, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Settings,
  Layers,
  Code,
  RefreshCw
} from 'lucide-react';

interface AIReadyPreparationProps {
  language: 'en' | 'zh';
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
}

const AIReadyPreparation: React.FC<AIReadyPreparationProps> = ({ language, selectedDomain }) => {
  const [activeTab, setActiveTab] = useState('feature-engineering');
  const [showEvaluationResults, setShowEvaluationResults] = useState(false);

  const content = {
    en: {
      title: 'AI-Ready Data Preparation',
      subtitle: 'Prepare domain-specific data for AI model training and deployment',
      featureEngineeringTab: 'Feature Engineering',
      dataBalancingTab: 'Data Balancing',
      modelReadinessTab: 'Model Readiness',
      evaluateDataset: 'Evaluate Dataset',
      exportAIReadyData: 'Export AI-Ready Data',
      viewResults: 'View Results',
      resetDemo: 'Reset Demo',
      evaluationResults: 'AI Readiness Evaluation',
      featureQuality: 'Feature Quality',
      dataBalance: 'Data Balance',
      modelCompatibility: 'Model Compatibility',
      overallReadiness: 'Overall Readiness',
      readyForAI: 'Ready for AI',
      partiallyReady: 'Partially Ready',
      notReady: 'Not Ready',
      applyRecommendations: 'Apply Recommendations',
      // Domain-specific content
      healthcare: {
        title: 'Healthcare AI Preparation',
        features: [
          'Patient Demographics',
          'Diagnostic Codes',
          'Treatment Outcomes',
          'Medication History'
        ],
        balancingFactors: [
          'Age Distribution',
          'Gender Balance',
          'Condition Prevalence',
          'Treatment Groups'
        ],
        modelTypes: [
          'Diagnostic Prediction',
          'Treatment Recommendation',
          'Risk Stratification',
          'Patient Outcome Prediction'
        ]
      },
      finance: {
        title: 'Financial AI Preparation',
        features: [
          'Transaction Patterns',
          'Customer Segments',
          'Risk Indicators',
          'Market Signals'
        ],
        balancingFactors: [
          'Transaction Volume',
          'Customer Types',
          'Risk Categories',
          'Time Periods'
        ],
        modelTypes: [
          'Fraud Detection',
          'Credit Scoring',
          'Market Prediction',
          'Customer Behavior Analysis'
        ]
      },
      manufacturing: {
        title: 'Manufacturing AI Preparation',
        features: [
          'Production Metrics',
          'Quality Indicators',
          'Equipment Parameters',
          'Supply Chain Variables'
        ],
        balancingFactors: [
          'Production Lines',
          'Product Categories',
          'Defect Types',
          'Time Periods'
        ],
        modelTypes: [
          'Predictive Maintenance',
          'Quality Control',
          'Production Optimization',
          'Supply Chain Forecasting'
        ]
      }
    },
    zh: {
      title: 'AI就绪数据准备',
      subtitle: '准备特定领域的数据用于AI模型训练和部署',
      featureEngineeringTab: '特征工程',
      dataBalancingTab: '数据平衡',
      modelReadinessTab: '模型就绪性',
      evaluateDataset: '评估数据集',
      exportAIReadyData: '导出AI就绪数据',
      viewResults: '查看结果',
      resetDemo: '重置演示',
      evaluationResults: 'AI就绪性评估',
      featureQuality: '特征质量',
      dataBalance: '数据平衡',
      modelCompatibility: '模型兼容性',
      overallReadiness: '整体就绪性',
      readyForAI: '已准备好用于AI',
      partiallyReady: '部分准备好',
      notReady: '未准备好',
      applyRecommendations: '应用建议',
      // Domain-specific content
      healthcare: {
        title: '医疗保健AI准备',
        features: [
          '患者人口统计',
          '诊断代码',
          '治疗结果',
          '药物历史'
        ],
        balancingFactors: [
          '年龄分布',
          '性别平衡',
          '疾病流行率',
          '治疗组'
        ],
        modelTypes: [
          '诊断预测',
          '治疗建议',
          '风险分层',
          '患者结果预测'
        ]
      },
      finance: {
        title: '金融AI准备',
        features: [
          '交易模式',
          '客户细分',
          '风险指标',
          '市场信号'
        ],
        balancingFactors: [
          '交易量',
          '客户类型',
          '风险类别',
          '时间段'
        ],
        modelTypes: [
          '欺诈检测',
          '信用评分',
          '市场预测',
          '客户行为分析'
        ]
      },
      manufacturing: {
        title: '制造业AI准备',
        features: [
          '生产指标',
          '质量指标',
          '设备参数',
          '供应链变量'
        ],
        balancingFactors: [
          '生产线',
          '产品类别',
          '缺陷类型',
          '时间段'
        ],
        modelTypes: [
          '预测性维护',
          '质量控制',
          '生产优化',
          '供应链预测'
        ]
      }
    }
  };

  // Get domain-specific content
  const domainContent = content[language][selectedDomain];

  // Get readiness status based on score
  const getReadinessStatus = (score: number) => {
    if (score >= 85) {
      return {
        text: content[language].readyForAI,
        color: 'bg-green-100 text-green-800',
        icon: <CheckCircle size={16} className="text-green-600" />
      };
    }
    if (score >= 65) {
      return {
        text: content[language].partiallyReady,
        color: 'bg-yellow-100 text-yellow-800',
        icon: <AlertTriangle size={16} className="text-yellow-600" />
      };
    }
    return {
      text: content[language].notReady,
      color: 'bg-red-100 text-red-800',
      icon: <AlertTriangle size={16} className="text-red-600" />
    };
  };

  // Sample readiness scores
  const readinessScores = {
    featureQuality: 78,
    dataBalance: 92,
    modelCompatibility: 85,
    overall: 85
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{content[language].title}</h2>
        <p className="mt-2 text-gray-600">{content[language].subtitle}</p>
      </div>

      {/* AI-Ready Preparation Tools */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <Cpu size={24} className="text-purple-600 mr-3" />
          <h3 className="text-lg font-semibold">{domainContent.title}</h3>
        </div>
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('feature-engineering')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'feature-engineering'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].featureEngineeringTab}
            </button>
            <button
              onClick={() => setActiveTab('data-balancing')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'data-balancing'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].dataBalancingTab}
            </button>
            <button
              onClick={() => setActiveTab('model-readiness')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'model-readiness'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].modelReadinessTab}
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="mb-6">
          {activeTab === 'feature-engineering' && (
            <div>
              <div className="flex items-center mb-4">
                <Database size={20} className="text-purple-600 mr-2" />
                <h4 className="font-medium text-gray-800">{language === 'en' ? 'Feature Engineering' : '特征工程'}</h4>
              </div>
              
              <div className="space-y-4">
                {domainContent.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Code size={18} className="text-purple-600" />
                      </div>
                      <div className="ml-3 flex-grow">
                        <h5 className="text-sm font-medium text-gray-800">{feature}</h5>
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">{language === 'en' ? 'Feature Importance' : '特征重要性'}</span>
                            <span className="text-xs font-medium text-gray-700">{70 + index * 5}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full" 
                              style={{ width: `${70 + index * 5}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <select className="text-xs border border-gray-300 rounded-md px-2 py-1">
                          <option>{language === 'en' ? 'Include' : '包括'}</option>
                          <option>{language === 'en' ? 'Exclude' : '排除'}</option>
                          <option>{language === 'en' ? 'Transform' : '转换'}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <Settings size={18} className="text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-800">
                      {language === 'en' ? 'Feature Engineering Options' : '特征工程选项'}
                    </h5>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="normalize" className="mr-2" defaultChecked />
                        <label htmlFor="normalize" className="text-sm text-gray-700">
                          {language === 'en' ? 'Normalize numerical features' : '归一化数值特征'}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="encode" className="mr-2" defaultChecked />
                        <label htmlFor="encode" className="text-sm text-gray-700">
                          {language === 'en' ? 'One-hot encode categorical features' : '独热编码分类特征'}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="interactions" className="mr-2" />
                        <label htmlFor="interactions" className="text-sm text-gray-700">
                          {language === 'en' ? 'Create feature interactions' : '创建特征交互'}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="pca" className="mr-2" />
                        <label htmlFor="pca" className="text-sm text-gray-700">
                          {language === 'en' ? 'Apply dimensionality reduction (PCA)' : '应用降维 (PCA)'}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'data-balancing' && (
            <div>
              <div className="flex items-center mb-4">
                <BarChart size={20} className="text-green-600 mr-2" />
                <h4 className="font-medium text-gray-800">{language === 'en' ? 'Data Balancing' : '数据平衡'}</h4>
              </div>
              
              <div className="space-y-4">
                {domainContent.balancingFactors.map((factor, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Layers size={18} className="text-green-600" />
                      </div>
                      <div className="ml-3 flex-grow">
                        <h5 className="text-sm font-medium text-gray-800">{factor}</h5>
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">{language === 'en' ? 'Balance Score' : '平衡得分'}</span>
                            <span className={`text-xs font-medium ${
                              index % 3 === 0 ? 'text-green-600' : index % 3 === 1 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {index % 3 === 0 ? 'Good' : index % 3 === 1 ? 'Fair' : 'Poor'}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                index % 3 === 0 ? 'bg-green-500' : index % 3 === 1 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: index % 3 === 0 ? '85%' : index % 3 === 1 ? '60%' : '35%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <select className="text-xs border border-gray-300 rounded-md px-2 py-1">
                          <option>{language === 'en' ? 'No Action' : '无操作'}</option>
                          <option>{language === 'en' ? 'Oversample' : '过采样'}</option>
                          <option>{language === 'en' ? 'Undersample' : '欠采样'}</option>
                          <option>{language === 'en' ? 'SMOTE' : 'SMOTE'}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <Settings size={18} className="text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-800">
                      {language === 'en' ? 'Balancing Strategy' : '平衡策略'}
                    </h5>
                    <div className="mt-3">
                      <select className="select text-sm">
                        <option>{language === 'en' ? 'Automatic (recommended)' : '自动（推荐）'}</option>
                        <option>{language === 'en' ? 'Manual per factor' : '按因素手动'}</option>
                        <option>{language === 'en' ? 'Class weight adjustment' : '类权重调整'}</option>
                        <option>{language === 'en' ? 'No balancing' : '无平衡'}</option>
                      </select>
                      
                      <div className="mt-3 flex items-center">
                        <input type="checkbox" id="preserve-rare" className="mr-2" defaultChecked />
                        <label htmlFor="preserve-rare" className="text-sm text-gray-700">
                          {language === 'en' ? 'Preserve rare cases' : '保留稀有案例'}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'model-readiness' && (
            <div>
              <div className="flex items-center mb-4">
                <FileText size={20} className="text-blue-600 mr-2" />
                <h4 className="font-medium text-gray-800">{language === 'en' ? 'Model Readiness' : '模型就绪性'}</h4>
              </div>
              
              <div className="space-y-4">
                {domainContent.modelTypes.map((modelType, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Cpu size={18} className="text-blue-600" />
                      </div>
                      <div className="ml-3 flex-grow">
                        <h5 className="text-sm font-medium text-gray-800">{modelType}</h5>
                        <p className="mt-1 text-xs text-gray-600">
                          {language === 'en' 
                            ? 'Compatibility with current dataset structure and features.' 
                            : '与当前数据集结构和特征的兼容性。'}
                        </p>
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">{language === 'en' ? 'Readiness' : '就绪性'}</span>
                            <span className="text-xs font-medium text-gray-700">{75 + index * 5}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${75 + index * 5}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <input 
                          type="radio" 
                          name="model-type" 
                          id={`model-${index}`} 
                          defaultChecked={index === 0} 
                          className="mr-2" 
                        />
                        <label htmlFor={`model-${index}`} className="text-xs text-gray-700">
                          {language === 'en' ? 'Select' : '选择'}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <Settings size={18} className="text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-800">
                      {language === 'en' ? 'Model Preparation Settings' : '模型准备设置'}
                    </h5>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="train-test-split" className="mr-2" defaultChecked />
                        <label htmlFor="train-test-split" className="text-sm text-gray-700">
                          {language === 'en' ? 'Create train/test split (80/20)' : '创建训练/测试分割（80/20）'}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="validation-set" className="mr-2" defaultChecked />
                        <label htmlFor="validation-set" className="text-sm text-gray-700">
                          {language === 'en' ? 'Include validation set' : '包含验证集'}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="metadata" className="mr-2" defaultChecked />
                        <label htmlFor="metadata" className="text-sm text-gray-700">
                          {language === 'en' ? 'Include feature metadata' : '包含特征元数据'}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="schema" className="mr-2" />
                        <label htmlFor="schema" className="text-sm text-gray-700">
                          {language === 'en' ? 'Generate schema documentation' : '生成架构文档'}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setShowEvaluationResults(true)}
            className="btn btn-primary flex items-center"
          >
            <Cpu size={18} className="mr-2" />
            {content[language].evaluateDataset}
          </button>
          
          <button className="btn btn-outline flex items-center">
            <Database size={18} className="mr-2" />
            {content[language].exportAIReadyData}
          </button>
        </div>
      </div>
      
      {/* AI Readiness Evaluation Results */}
      {showEvaluationResults && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-purple-50 border-b border-purple-100">
            <h3 className="text-lg font-semibold text-purple-800">{content[language].evaluationResults}</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {readinessScores.featureQuality}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].featureQuality}</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {readinessScores.dataBalance}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].dataBalance}</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {readinessScores.modelCompatibility}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].modelCompatibility}</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border-2 border-purple-300 shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {readinessScores.overall}%
                  </div>
                  <div className="text-sm text-gray-600">{content[language].overallReadiness}</div>
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      getReadinessStatus(readinessScores.overall).color
                    }`}>
                      {getReadinessStatus(readinessScores.overall).icon}
                      <span className="ml-1">{getReadinessStatus(readinessScores.overall).text}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <div className="flex items-center mb-3">
                <AlertTriangle size={18} className="text-amber-500 mr-2" />
                <h4 className="font-medium text-gray-800">
                  {language === 'en' ? 'Improvement Recommendations' : '改进建议'}
                </h4>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-0.5 mr-2">•</span>
                  {language === 'en' 
                    ? 'Normalize numerical features to improve model convergence' 
                    : '归一化数值特征以改善模型收敛性'}
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-0.5 mr-2">•</span>
                  {language === 'en' 
                    ? 'Address class imbalance in target variable using SMOTE' 
                    : '使用SMOTE解决目标变量中的类不平衡'}
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-0.5 mr-2">•</span>
                  {language === 'en' 
                    ? 'Consider feature selection to reduce dimensionality' 
                    : '考虑特征选择以减少维度'}
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-0.5 mr-2">•</span>
                  {language === 'en' 
                    ? 'Add domain-specific feature interactions to improve model performance' 
                    : '添加特定领域的特征交互以提高模型性能'}
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary flex items-center">
                <RefreshCw size={18} className="mr-2" />
                {content[language].applyRecommendations}
              </button>
              <button className="btn btn-outline flex items-center">
                <Database size={18} className="mr-2" />
                {content[language].exportAIReadyData}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIReadyPreparation;
