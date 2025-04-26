import React from 'react';
import { Brain, Activity, AlertCircle, ArrowRight, Database, LineChart, Zap } from 'lucide-react';

interface AISolutionSlideProps {
  t: (key: string) => string;
}

const AISolutionSlide: React.FC<AISolutionSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "AI-Powered Predictive Maintenance Solution",
      subtitle: "Our solution leverages advanced AI technologies to transform maintenance operations from reactive to predictive.",
      howItWorks: "How It Works",
      solutionDesc: "Our AI solution combines sensor data, maintenance history, and equipment specifications to predict failures before they occur, allowing for optimized maintenance scheduling.",
      dataCollection: "Data Collection",
      dataCollectionDesc: "Gather equipment sensors, maintenance logs, and operational data",
      aiProcessing: "AI Processing",
      aiProcessingDesc: "Machine learning algorithms analyze patterns and detect anomalies",
      failurePrediction: "Failure Prediction",
      failurePredictionDesc: "Calculate probability and timeframe of potential failures",
      optimizedAction: "Optimized Action",
      optimizedActionDesc: "Schedule maintenance at the optimal time to minimize impact",
      equipmentHealth: "Equipment Health Monitoring",
      bearingVibration: "Bearing Vibration",
      oilTemperature: "Oil Temperature",
      motorCurrent: "Motor Current",
      acousticEmissions: "Acoustic Emissions",
      critical: "Critical",
      warning: "Warning",
      normal: "Normal",
      failureAlert: "Predicted failure in 72 hours - Schedule maintenance",
      patternRecognition: "Pattern Recognition",
      patternRecognitionDesc: "AI algorithms identify patterns in equipment behavior that precede failures, even when those patterns are too subtle for human detection.",
      adaptiveLearning: "Adaptive Learning",
      adaptiveLearningDesc: "Models continuously improve by analyzing the outcomes of maintenance activities and incorporating new equipment data.",
      predictiveAnalytics: "Predictive Analytics",
      predictiveAnalyticsDesc: "Advanced forecasting methods predict the remaining useful life of equipment components with increasing accuracy over time.",
      learnMore: "Learn more"
    },
    zh: {
      title: "AI 驱动的预测性维护解决方案",
      subtitle: "我们的解决方案利用先进的 AI 技术将维护操作从被动转变为预测性。",
      howItWorks: "工作原理",
      solutionDesc: "我们的 AI 解决方案结合传感器数据、维护历史和设备规格来预测故障发生前的情况，从而实现优化维护安排。",
      dataCollection: "数据收集",
      dataCollectionDesc: "收集设备传感器、维护日志和操作数据",
      aiProcessing: "AI 处理",
      aiProcessingDesc: "机器学习算法分析模式并检测异常",
      failurePrediction: "故障预测",
      failurePredictionDesc: "计算潜在故障的概率和时间范围",
      optimizedAction: "优化行动",
      optimizedActionDesc: "在最佳时间安排维护以最小化影响",
      equipmentHealth: "设备健康监测",
      bearingVibration: "轴承振动",
      oilTemperature: "油温",
      motorCurrent: "电机电流",
      acousticEmissions: "声波排放",
      critical: "危急",
      warning: "警告",
      normal: "正常",
      failureAlert: "预计72小时内发生故障 - 计划维护",
      patternRecognition: "模式识别",
      patternRecognitionDesc: "AI 算法识别设备行为中预示故障的模式，即使这些模式对人类来说太微妙而无法察觉。",
      adaptiveLearning: "自适应学习",
      adaptiveLearningDesc: "模型通过分析维护活动的结果并整合新的设备数据而不断改进。",
      predictiveAnalytics: "预测分析",
      predictiveAnalyticsDesc: "先进的预测方法随着时间的推移越来越准确地预测设备组件的剩余使用寿命。",
      learnMore: "了解更多"
    }
  };

  const language = t('language') === 'zh' ? 'zh' : 'en';

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">{content[language].title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
      </div>
      
      {/* Solution Overview */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Brain size={28} className="text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-800">{content[language].howItWorks}</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              {content[language].solutionDesc}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                  <Database size={18} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700">{content[language].dataCollection}</h3>
                  <p className="text-gray-600">{content[language].dataCollectionDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <Brain size={18} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700">{content[language].aiProcessing}</h3>
                  <p className="text-gray-600">{content[language].aiProcessingDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <LineChart size={18} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-700">{content[language].failurePrediction}</h3>
                  <p className="text-gray-600">{content[language].failurePredictionDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4 mt-1">
                  <Zap size={18} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-700">{content[language].optimizedAction}</h3>
                  <p className="text-gray-600">{content[language].optimizedActionDesc}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              {/* Main visualization */}
              <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
                <div className="mb-4 border-b border-gray-200 pb-3">
                  <h3 className="text-xl font-semibold text-blue-800">{content[language].equipmentHealth}</h3>
                </div>
                
                {/* Sample visualization */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{content[language].bearingVibration}</span>
                      <span className="text-red-600 font-medium">{content[language].critical}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{content[language].oilTemperature}</span>
                      <span className="text-yellow-600 font-medium">{content[language].warning}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{content[language].motorCurrent}</span>
                      <span className="text-green-600 font-medium">{content[language].normal}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{content[language].acousticEmissions}</span>
                      <span className="text-green-600 font-medium">{content[language].normal}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-red-50 rounded-lg border border-red-100 flex items-center">
                  <AlertCircle size={20} className="text-red-600 mr-2" />
                  <span className="text-red-800 text-sm font-medium">{content[language].failureAlert}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <Activity size={28} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-3">{content[language].patternRecognition}</h3>
          <p className="text-gray-600 mb-4">
            {content[language].patternRecognitionDesc}
          </p>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            <span>{content[language].learnMore}</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <Brain size={28} className="text-green-600 mb-4" />
          <h3 className="text-xl font-bold text-green-800 mb-3">{content[language].adaptiveLearning}</h3>
          <p className="text-gray-600 mb-4">
            {content[language].adaptiveLearningDesc}
          </p>
          <div className="flex items-center text-green-600 text-sm font-medium">
            <span>{content[language].learnMore}</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <LineChart size={28} className="text-purple-600 mb-4" />
          <h3 className="text-xl font-bold text-purple-800 mb-3">{content[language].predictiveAnalytics}</h3>
          <p className="text-gray-600 mb-4">
            {content[language].predictiveAnalyticsDesc}
          </p>
          <div className="flex items-center text-purple-600 text-sm font-medium">
            <span>{content[language].learnMore}</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionSlide; 