import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface GenerationMethodsProps {
  language: 'en' | 'zh';
}

type GenerationMethod = 'statistical' | 'gan' | 'differential-privacy' | 'time-series';

const GenerationMethods: React.FC<GenerationMethodsProps> = ({ language }) => {
  const [selectedMethod, setSelectedMethod] = useState<GenerationMethod>('statistical');
  
  // Translations
  const translations = {
    en: {
      title: 'Generation Methods',
      description: 'Select and configure the synthetic data generation technique',
      statistical: 'Statistical Modeling',
      statisticalDesc: 'Uses statistical distributions and correlations to generate synthetic data that preserves the statistical properties of the original dataset.',
      gan: 'GAN-based Generation',
      ganDesc: 'Uses Generative Adversarial Networks to create highly realistic synthetic data that captures complex patterns and relationships.',
      differentialPrivacy: 'Differential Privacy',
      differentialPrivacyDesc: 'Incorporates differential privacy guarantees to ensure the synthetic data cannot be used to identify individuals in the original dataset.',
      timeSeries: 'Time-Series Generation',
      timeSeriesDesc: 'Specialized generation for time-series data that preserves temporal patterns and seasonality.',
      configureMethod: 'Configure Method',
      advancedSettings: 'Advanced Settings',
      apply: 'Apply Settings',
      epsilon: 'Privacy Budget (ε)',
      delta: 'Delta (δ)',
      epochs: 'Training Epochs',
      batchSize: 'Batch Size',
      learningRate: 'Learning Rate',
      preserveCorrelations: 'Preserve Correlations',
      preserveOutliers: 'Preserve Outliers',
      seasonality: 'Seasonality',
      trend: 'Trend Component',
      noise: 'Noise Level',
      low: 'Low',
      medium: 'Medium',
      high: 'High'
    },
    zh: {
      title: '生成方法',
      description: '选择和配置合成数据生成技术',
      statistical: '统计建模',
      statisticalDesc: '使用统计分布和相关性生成保留原始数据集统计特性的合成数据。',
      gan: '基于GAN的生成',
      ganDesc: '使用生成对抗网络创建高度逼真的合成数据，捕捉复杂的模式和关系。',
      differentialPrivacy: '差分隐私',
      differentialPrivacyDesc: '融入差分隐私保证，确保合成数据不能用于识别原始数据集中的个人。',
      timeSeries: '时间序列生成',
      timeSeriesDesc: '专门针对时间序列数据的生成，保留时间模式和季节性。',
      configureMethod: '配置方法',
      advancedSettings: '高级设置',
      apply: '应用设置',
      epsilon: '隐私预算 (ε)',
      delta: 'Delta (δ)',
      epochs: '训练轮次',
      batchSize: '批量大小',
      learningRate: '学习率',
      preserveCorrelations: '保留相关性',
      preserveOutliers: '保留异常值',
      seasonality: '季节性',
      trend: '趋势组件',
      noise: '噪声水平',
      low: '低',
      medium: '中',
      high: '高'
    }
  };
  
  const t = translations[language];
  
  // Render configuration options based on selected method
  const renderConfiguration = () => {
    switch (selectedMethod) {
      case 'statistical':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.preserveCorrelations}
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Enabled</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.preserveOutliers}
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Enabled</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.noise}
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="low"
              >
                <option value="low">{t.low}</option>
                <option value="medium">{t.medium}</option>
                <option value="high">{t.high}</option>
              </select>
            </div>
          </div>
        );
        
      case 'gan':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.epochs}
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="100"
                min="1"
                max="1000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.batchSize}
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="32"
                min="1"
                max="256"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.learningRate}
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="0.001"
                min="0.0001"
                max="0.1"
                step="0.0001"
              />
            </div>
          </div>
        );
        
      case 'differential-privacy':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.epsilon}
              </label>
              <input
                type="range"
                className="mt-1 block w-full"
                min="0.1"
                max="10"
                step="0.1"
                defaultValue="1"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.1 (More Private)</span>
                <span>10 (Less Private)</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.delta}
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="0.00001"
                min="0.000001"
                max="0.1"
                step="0.000001"
              />
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-blue-400" />
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
            </div>
          </div>
        );
        
      case 'time-series':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.seasonality}
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="daily"
              >
                <option value="none">None</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.trend}
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="linear"
              >
                <option value="none">None</option>
                <option value="linear">Linear</option>
                <option value="exponential">Exponential</option>
                <option value="logarithmic">Logarithmic</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.noise}
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="low"
              >
                <option value="low">{t.low}</option>
                <option value="medium">{t.medium}</option>
                <option value="high">{t.high}</option>
              </select>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-gray-800">{t.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{t.description}</p>
        </div>
        
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div 
              className={`cursor-pointer rounded-lg p-4 border-2 transition-all ${
                selectedMethod === 'statistical' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
              onClick={() => setSelectedMethod('statistical')}
            >
              <h3 className="font-medium text-gray-900">{t.statistical}</h3>
              <p className="mt-1 text-sm text-gray-500">{t.statisticalDesc}</p>
            </div>
            
            <div 
              className={`cursor-pointer rounded-lg p-4 border-2 transition-all ${
                selectedMethod === 'gan' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
              onClick={() => setSelectedMethod('gan')}
            >
              <h3 className="font-medium text-gray-900">{t.gan}</h3>
              <p className="mt-1 text-sm text-gray-500">{t.ganDesc}</p>
            </div>
            
            <div 
              className={`cursor-pointer rounded-lg p-4 border-2 transition-all ${
                selectedMethod === 'differential-privacy' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
              onClick={() => setSelectedMethod('differential-privacy')}
            >
              <h3 className="font-medium text-gray-900">{t.differentialPrivacy}</h3>
              <p className="mt-1 text-sm text-gray-500">{t.differentialPrivacyDesc}</p>
            </div>
            
            <div 
              className={`cursor-pointer rounded-lg p-4 border-2 transition-all ${
                selectedMethod === 'time-series' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
              onClick={() => setSelectedMethod('time-series')}
            >
              <h3 className="font-medium text-gray-900">{t.timeSeries}</h3>
              <p className="mt-1 text-sm text-gray-500">{t.timeSeriesDesc}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{t.configureMethod}</h3>
            
            {renderConfiguration()}
            
            <div className="mt-6 flex justify-end">
              <button className="btn btn-primary">
                {t.apply}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationMethods;
