import React from 'react';

interface AnalyticsProps {
  translations: Record<string, string>;
}

const Analytics: React.FC<AnalyticsProps> = ({ translations }) => {
  // t function to get translations
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">{t('analytics')}</h2>
      
      {/* Custom Analysis Builder */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800">{t('customAnalysisBuilder')}</h3>
          <p className="text-gray-600 mt-1">{t('createCustomAnalytics')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Data Source Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('selectDataSource')}
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="production">{t('productionLineData')}</option>
                <option value="quality">{t('qualityControlMetrics')}</option>
                <option value="maintenance">{t('maintenanceRecords')}</option>
                <option value="energy">{t('energyConsumption')}</option>
                <option value="supply">{t('supplyChainData')}</option>
              </select>
            </div>
            
            {/* Analysis Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('analysisType')}
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="correlation">{t('correlationAnalysis')}</option>
                <option value="forecast">{t('trendForecasting')}</option>
                <option value="anomaly">{t('anomalyDetection')}</option>
                <option value="rootcause">{t('rootCauseAnalysis')}</option>
                <option value="custom">{t('customMLModel')}</option>
              </select>
            </div>
            
            {/* Time Period Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('timePeriod')}
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="7d">{t('last7Days')}</option>
                <option value="30d">{t('last30Days')}</option>
                <option value="quarter">{t('lastQuarter')}</option>
                <option value="ytd">{t('yearToDate')}</option>
                <option value="custom">{t('customRange')}</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
              {t('generateAnalysis')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Analytics Placeholder Content */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="text-center">
            <p className="text-gray-500 text-lg font-medium">
              {t('selectDataSource')} & {t('analysisType')}
            </p>
            <p className="text-gray-400 mt-1">
              {t('analytics')} {t('createCustomAnalytics')}
            </p>
          </div>
        </div>
      </div>
      
      {/* ML Model Explanation Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Model Parameters</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confidence Threshold
              </label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                defaultValue="75"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Low (50%)</span>
                <span>High (95%)</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prediction Horizon
              </label>
              <input 
                type="range" 
                min="1" 
                max="30" 
                defaultValue="7"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 day</span>
                <span>30 days</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Feature Importance</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="min-w-[60px] text-sm text-gray-700 ml-3">85%</span>
              <span className="text-sm text-gray-600 ml-2">Maintenance Interval</span>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '72%' }}></div>
              </div>
              <span className="min-w-[60px] text-sm text-gray-700 ml-3">72%</span>
              <span className="text-sm text-gray-600 ml-2">Operational Hours</span>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <span className="min-w-[60px] text-sm text-gray-700 ml-3">65%</span>
              <span className="text-sm text-gray-600 ml-2">Vibration Patterns</span>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '58%' }}></div>
              </div>
              <span className="min-w-[60px] text-sm text-gray-700 ml-3">58%</span>
              <span className="text-sm text-gray-600 ml-2">Temperature Delta</span>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
              <span className="min-w-[60px] text-sm text-gray-700 ml-3">42%</span>
              <span className="text-sm text-gray-600 ml-2">Power Consumption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 