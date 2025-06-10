import React, { useState } from 'react';
import { Check, ChevronRight, FileText, Users, Database, Shield, BarChart3, Code } from 'lucide-react';

interface UseCaseTemplatesProps {
  language: 'en' | 'zh';
}

type UseCase = {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  icon: React.ReactNode;
  configuration: {
    columns: {
      name: string;
      type: string;
      properties?: any;
    }[];
    sampleSize: number;
    method: string;
  };
};

const UseCaseTemplates: React.FC<UseCaseTemplatesProps> = ({ language }) => {
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  
  // Translations
  const translations = {
    en: {
      title: 'Use Case Templates',
      description: 'Pre-configured templates for common synthetic data generation scenarios',
      selectTemplate: 'Select a Template',
      templateDetails: 'Template Details',
      applyTemplate: 'Apply Template',
      configuration: 'Configuration',
      columns: 'Columns',
      sampleSize: 'Sample Size',
      method: 'Generation Method',
      name: 'Name',
      type: 'Type',
      properties: 'Properties'
    },
    zh: {
      title: '用例模板',
      description: '常见合成数据生成场景的预配置模板',
      selectTemplate: '选择模板',
      templateDetails: '模板详情',
      applyTemplate: '应用模板',
      configuration: '配置',
      columns: '列',
      sampleSize: '样本大小',
      method: '生成方法',
      name: '名称',
      type: '类型',
      properties: '属性'
    }
  };
  
  const t = translations[language];
  
  // Use case templates
  const useCases: UseCase[] = [
    {
      id: 'customer-data',
      title: {
        en: 'Customer Database',
        zh: '客户数据库'
      },
      description: {
        en: 'Generate synthetic customer data including demographics, purchase history, and preferences.',
        zh: '生成包括人口统计、购买历史和偏好的合成客户数据。'
      },
      icon: <Users size={24} />,
      configuration: {
        columns: [
          { name: 'customer_id', type: 'id' },
          { name: 'name', type: 'name' },
          { name: 'age', type: 'numeric', properties: { min: 18, max: 85, distribution: 'normal' } },
          { name: 'gender', type: 'categorical', properties: { categories: ['male', 'female', 'non-binary'] } },
          { name: 'email', type: 'email' },
          { name: 'address', type: 'address' },
          { name: 'signup_date', type: 'date', properties: { min: '2020-01-01', max: '2025-01-01' } },
          { name: 'purchase_count', type: 'numeric', properties: { min: 0, max: 50, distribution: 'exponential' } },
          { name: 'average_order_value', type: 'numeric', properties: { min: 10, max: 500, distribution: 'normal' } },
          { name: 'preferred_category', type: 'categorical', properties: { categories: ['electronics', 'clothing', 'home', 'beauty', 'sports'] } }
        ],
        sampleSize: 5000,
        method: 'statistical'
      }
    },
    {
      id: 'financial-transactions',
      title: {
        en: 'Financial Transactions',
        zh: '金融交易'
      },
      description: {
        en: 'Generate synthetic financial transaction data with realistic patterns and anomalies.',
        zh: '生成具有真实模式和异常的合成金融交易数据。'
      },
      icon: <BarChart3 size={24} />,
      configuration: {
        columns: [
          { name: 'transaction_id', type: 'id' },
          { name: 'customer_id', type: 'id' },
          { name: 'date', type: 'date', properties: { min: '2023-01-01', max: '2025-01-01' } },
          { name: 'amount', type: 'numeric', properties: { min: 1, max: 10000, distribution: 'exponential' } },
          { name: 'transaction_type', type: 'categorical', properties: { categories: ['purchase', 'refund', 'transfer', 'withdrawal', 'deposit'] } },
          { name: 'merchant', type: 'categorical', properties: { categories: ['Amazon', 'Walmart', 'Target', 'Starbucks', 'Apple', 'Other'] } },
          { name: 'category', type: 'categorical', properties: { categories: ['retail', 'food', 'travel', 'entertainment', 'utilities', 'other'] } },
          { name: 'is_fraud', type: 'categorical', properties: { categories: ['true', 'false'], weights: [0.01, 0.99] } }
        ],
        sampleSize: 10000,
        method: 'gan'
      }
    },
    {
      id: 'healthcare-records',
      title: {
        en: 'Healthcare Records',
        zh: '医疗记录'
      },
      description: {
        en: 'Generate synthetic patient data and medical records with privacy guarantees.',
        zh: '生成具有隐私保证的合成患者数据和医疗记录。'
      },
      icon: <Shield size={24} />,
      configuration: {
        columns: [
          { name: 'patient_id', type: 'id' },
          { name: 'age', type: 'numeric', properties: { min: 0, max: 100, distribution: 'normal' } },
          { name: 'gender', type: 'categorical', properties: { categories: ['male', 'female'] } },
          { name: 'blood_type', type: 'categorical', properties: { categories: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] } },
          { name: 'height_cm', type: 'numeric', properties: { min: 40, max: 220, distribution: 'normal' } },
          { name: 'weight_kg', type: 'numeric', properties: { min: 3, max: 150, distribution: 'normal' } },
          { name: 'condition', type: 'categorical', properties: { categories: ['healthy', 'hypertension', 'diabetes', 'asthma', 'heart disease', 'other'] } },
          { name: 'admission_date', type: 'date', properties: { min: '2023-01-01', max: '2025-01-01' } },
          { name: 'discharge_date', type: 'date', properties: { min: '2023-01-02', max: '2025-01-15' } },
          { name: 'medication_count', type: 'numeric', properties: { min: 0, max: 10, distribution: 'exponential' } }
        ],
        sampleSize: 3000,
        method: 'differential-privacy'
      }
    },
    {
      id: 'time-series-data',
      title: {
        en: 'Time Series Data',
        zh: '时间序列数据'
      },
      description: {
        en: 'Generate synthetic time series data with seasonal patterns and trends.',
        zh: '生成具有季节性模式和趋势的合成时间序列数据。'
      },
      icon: <FileText size={24} />,
      configuration: {
        columns: [
          { name: 'timestamp', type: 'date', properties: { min: '2023-01-01', max: '2025-01-01', interval: 'hourly' } },
          { name: 'temperature', type: 'numeric', properties: { min: -10, max: 40, distribution: 'normal', seasonal: true } },
          { name: 'humidity', type: 'numeric', properties: { min: 0, max: 100, distribution: 'normal', seasonal: true } },
          { name: 'pressure', type: 'numeric', properties: { min: 970, max: 1030, distribution: 'normal' } },
          { name: 'wind_speed', type: 'numeric', properties: { min: 0, max: 100, distribution: 'exponential' } },
          { name: 'precipitation', type: 'numeric', properties: { min: 0, max: 50, distribution: 'exponential', seasonal: true } },
          { name: 'solar_radiation', type: 'numeric', properties: { min: 0, max: 1000, distribution: 'normal', seasonal: true } }
        ],
        sampleSize: 8760, // One year of hourly data
        method: 'time-series'
      }
    },
    {
      id: 'machine-learning',
      title: {
        en: 'Machine Learning Dataset',
        zh: '机器学习数据集'
      },
      description: {
        en: 'Generate synthetic data for training and testing machine learning models.',
        zh: '生成用于训练和测试机器学习模型的合成数据。'
      },
      icon: <Code size={24} />,
      configuration: {
        columns: [
          { name: 'id', type: 'id' },
          { name: 'feature_1', type: 'numeric', properties: { min: 0, max: 100, distribution: 'normal' } },
          { name: 'feature_2', type: 'numeric', properties: { min: 0, max: 100, distribution: 'normal' } },
          { name: 'feature_3', type: 'numeric', properties: { min: 0, max: 100, distribution: 'normal' } },
          { name: 'feature_4', type: 'numeric', properties: { min: 0, max: 100, distribution: 'normal' } },
          { name: 'feature_5', type: 'categorical', properties: { categories: ['A', 'B', 'C', 'D', 'E'] } },
          { name: 'feature_6', type: 'categorical', properties: { categories: ['X', 'Y', 'Z'] } },
          { name: 'target', type: 'categorical', properties: { categories: ['0', '1'], weights: [0.7, 0.3] } }
        ],
        sampleSize: 10000,
        method: 'gan'
      }
    }
  ];
  
  // Get selected use case details
  const getSelectedUseCase = () => {
    return useCases.find(useCase => useCase.id === selectedUseCase);
  };
  
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-gray-800">{t.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{t.description}</p>
        </div>
        
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{t.selectTemplate}</h3>
              <div className="space-y-3">
                {useCases.map((useCase) => (
                  <div
                    key={useCase.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedUseCase === useCase.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-200'
                    }`}
                    onClick={() => setSelectedUseCase(useCase.id)}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full ${
                        selectedUseCase === useCase.id
                          ? 'bg-primary-100 text-primary-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {useCase.icon}
                      </div>
                      <div className="ml-3 flex-1">
                        <h4 className="font-medium text-gray-900">{useCase.title[language]}</h4>
                        <p className="text-sm text-gray-500 mt-1">{useCase.description[language]}</p>
                      </div>
                      <div className="ml-2">
                        <ChevronRight size={20} className={`${
                          selectedUseCase === useCase.id ? 'text-primary-500' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{t.templateDetails}</h3>
              
              {selectedUseCase ? (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <h4 className="font-medium text-gray-900">
                      {getSelectedUseCase()?.title[language]}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {getSelectedUseCase()?.description[language]}
                    </p>
                  </div>
                  
                  <div className="p-4">
                    <h5 className="font-medium text-gray-900 mb-2">{t.configuration}</h5>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">{t.sampleSize}:</span>
                        <span className="font-medium">{getSelectedUseCase()?.configuration.sampleSize}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">{t.method}:</span>
                        <span className="font-medium">{getSelectedUseCase()?.configuration.method}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h6 className="text-sm font-medium text-gray-700 mb-2">{t.columns}</h6>
                      <div className="max-h-60 overflow-y-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {t.name}
                              </th>
                              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {t.type}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {getSelectedUseCase()?.configuration.columns.map((column, index) => (
                              <tr key={index}>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                                  {column.name}
                                </td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                  {column.type}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <button className="btn btn-primary w-full flex items-center justify-center">
                        <Check size={18} className="mr-1" />
                        <span>{t.applyTemplate}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                  <Database size={48} className="text-gray-300 mb-2" />
                  <p className="text-gray-500">
                    {language === 'en' 
                      ? 'Select a template from the left to view its details' 
                      : '从左侧选择模板以查看其详细信息'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseTemplates;
