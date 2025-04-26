import React from 'react';
import { Cpu, Server, Database, Code, Layers, ArrowRight } from 'lucide-react';

interface TechnologyOverviewSlideProps {
  t: (key: string) => string;
}

const TechnologyOverviewSlide: React.FC<TechnologyOverviewSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "Technology Overview",
      subtitle: "Our predictive maintenance solution uses advanced AI technologies to transform equipment maintenance.",
      dataInfrastructure: "Data Infrastructure",
      dataInfrastructureDesc: "Robust data collection and storage systems that capture sensor data, maintenance logs, and operational metrics in real-time.",
      mlModels: "Machine Learning Models",
      rnns: "Recurrent Neural Networks (RNNs)",
      rnnsDesc: "Excellent for analyzing time-series data with temporal dependencies.",
      randomForest: "Random Forest",
      randomForestDesc: "Effective at detecting outliers and anomalies in equipment behavior.",
      cnn: "Convolutional Neural Networks (CNNs)",
      cnnDesc: "Processes spectral data from vibration and acoustic sensors.",
      tech: "Key Technologies",
      sensorIntegration: "Sensor Integration",
      sensorIntegrationDesc: "IoT devices and industrial sensors collect real-time data from equipment.",
      cloudComputing: "Cloud Computing",
      cloudComputingDesc: "Scalable infrastructure for data processing and model training.",
      edgeProcessing: "Edge Processing",
      edgeProcessingDesc: "On-site data processing for time-sensitive applications.",
      advancedAnalytics: "Advanced Analytics",
      anomalyDetection: "Anomaly Detection",
      anomalyDetectionDesc: "Identifies unusual patterns that may indicate impending failures.",
      degradationModeling: "Degradation Modeling",
      degradationModelingDesc: "Tracks equipment performance decline over time.",
      multivariateTrending: "Multivariate Trending",
      multivariateTrendingDesc: "Analyzes relationships between multiple variables simultaneously.",
      api: "API & Integration",
      apiDesc: "RESTful APIs allow integration with existing maintenance management systems.",
      viewDocs: "View documentation"
    },
    zh: {
      title: "技术概述",
      subtitle: "我们的预测性维护解决方案使用先进的人工智能技术来改革设备维护。",
      dataInfrastructure: "数据基础设施",
      dataInfrastructureDesc: "强大的数据收集和存储系统，实时捕获传感器数据、维护日志和运营指标。",
      mlModels: "机器学习模型",
      rnns: "循环神经网络（RNNs）",
      rnnsDesc: "非常适合分析具有时间依赖性的时间序列数据。",
      randomForest: "随机森林",
      randomForestDesc: "有效检测设备行为中的异常值和异常。",
      cnn: "卷积神经网络（CNNs）",
      cnnDesc: "处理来自振动和声学传感器的频谱数据。",
      tech: "关键技术",
      sensorIntegration: "传感器集成",
      sensorIntegrationDesc: "物联网设备和工业传感器从设备收集实时数据。",
      cloudComputing: "云计算",
      cloudComputingDesc: "用于数据处理和模型训练的可扩展基础架构。",
      edgeProcessing: "边缘处理",
      edgeProcessingDesc: "对时间敏感应用的现场数据处理。",
      advancedAnalytics: "高级分析",
      anomalyDetection: "异常检测",
      anomalyDetectionDesc: "识别可能表明即将发生故障的异常模式。",
      degradationModeling: "退化建模",
      degradationModelingDesc: "跟踪设备性能随时间的下降。",
      multivariateTrending: "多变量趋势分析",
      multivariateTrendingDesc: "同时分析多个变量之间的关系。",
      api: "API 和集成",
      apiDesc: "RESTful API 允许与现有维护管理系统集成。",
      viewDocs: "查看文档"
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Data Infrastructure */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <Database size={24} className="text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-800">{content[language].dataInfrastructure}</h3>
          </div>
          <p className="text-gray-600 mb-4">
            {content[language].dataInfrastructureDesc}
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex mb-2">
              <Server size={18} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <div>
                <span className="font-medium text-blue-800">Time-series database</span>
                <p className="text-sm text-gray-600">InfluxDB, TimescaleDB</p>
              </div>
            </div>
            <div className="flex mb-2">
              <Database size={18} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <div>
                <span className="font-medium text-blue-800">Data lake</span>
                <p className="text-sm text-gray-600">AWS S3, Azure Data Lake</p>
              </div>
            </div>
            <div className="flex">
              <Code size={18} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <div>
                <span className="font-medium text-blue-800">ETL pipeline</span>
                <p className="text-sm text-gray-600">Apache Airflow, AWS Glue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Machine Learning Models */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <Cpu size={24} className="text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-green-800">{content[language].mlModels}</h3>
          </div>
          
          <div className="space-y-4 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800">{content[language].rnns}</h4>
              <p className="text-sm text-gray-600">{content[language].rnnsDesc}</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800">{content[language].randomForest}</h4>
              <p className="text-sm text-gray-600">{content[language].randomForestDesc}</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800">{content[language].cnn}</h4>
              <p className="text-sm text-gray-600">{content[language].cnnDesc}</p>
            </div>
          </div>
        </div>

        {/* Key Technologies */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <Layers size={24} className="text-purple-600 mr-3" />
            <h3 className="text-xl font-bold text-purple-800">{content[language].tech}</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-lg mr-2 mt-0.5">
                <Cpu size={14} className="text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-purple-800">{content[language].sensorIntegration}</h4>
                <p className="text-sm text-gray-600">{content[language].sensorIntegrationDesc}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-lg mr-2 mt-0.5">
                <Server size={14} className="text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-purple-800">{content[language].cloudComputing}</h4>
                <p className="text-sm text-gray-600">{content[language].cloudComputingDesc}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-lg mr-2 mt-0.5">
                <Database size={14} className="text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-purple-800">{content[language].edgeProcessing}</h4>
                <p className="text-sm text-gray-600">{content[language].edgeProcessingDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced Analytics Section */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-blue-800 mb-4">{content[language].advancedAnalytics}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">{content[language].anomalyDetection}</h4>
            <p className="text-sm text-gray-600">{content[language].anomalyDetectionDesc}</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">{content[language].degradationModeling}</h4>
            <p className="text-sm text-gray-600">{content[language].degradationModelingDesc}</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">{content[language].multivariateTrending}</h4>
            <p className="text-sm text-gray-600">{content[language].multivariateTrendingDesc}</p>
          </div>
        </div>
      </div>
      
      {/* API & Integration */}
      <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-blue-800">{content[language].api}</h3>
            <p className="text-gray-600">{content[language].apiDesc}</p>
          </div>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            <span>{content[language].viewDocs}</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyOverviewSlide; 