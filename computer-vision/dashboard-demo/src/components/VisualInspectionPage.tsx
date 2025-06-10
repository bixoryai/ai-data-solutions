import React, { useState, useEffect } from 'react';
import { Camera, Upload, Play, Pause, AlertTriangle } from 'lucide-react';
import { Defect, generateMockDefect } from '../data/inspection-data';

interface VisualInspectionPageProps {
  language: 'en' | 'zh';
}

const translations = {
  pageTitle: {
    en: 'Live Visual Inspection',
    zh: '实时视觉检测',
  },
  controlPanel: { en: 'Control Panel', zh: '控制面板' },
  productLine: { en: 'Product Line', zh: '产品线' },
  circuitBoards: { en: 'Circuit Boards', zh: '电路板' },
  automotive: { en: 'Automotive Parts', zh: '汽车零件' },
  textiles: { en: 'Textiles', zh: '纺织品' },
  liveFeed: { en: 'Live Feed Controls', zh: '实时控制' },
  pauseFeed: { en: 'Pause Feed', zh: '暂停' },
  resumeFeed: { en: 'Resume Feed', zh: '恢复' },
  upload: { en: 'Upload & Analyze', zh: '上传分析' },
  detections: { en: 'Real-time Detections', zh: '实时检测' },
  noDetections: { en: 'No defects detected.', zh: '未检测到缺陷' },
  confidence: { en: 'Confidence', zh: '置信度' },
  severity: { en: 'Severity', zh: '严重性' },
  feedPaused: { en: 'Feed Paused', zh: '视频暂停' },
};

const VisualInspectionPage: React.FC<VisualInspectionPageProps> = ({ language }) => {
  const t = (key: keyof typeof translations) => translations[key][language];
  
  const [defects, setDefects] = useState<Defect[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDefects(prev => [generateMockDefect(), ...prev.slice(0, 4)]);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('pageTitle')}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Feed Section */}
        <div className="lg:col-span-2 bg-gray-900 rounded-lg shadow-lg overflow-hidden relative aspect-video">
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <Camera className="text-gray-700 w-24 h-24" />
          </div>
          {isPaused && (
             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <Pause className="text-white w-24 h-24 mb-4" />
              <p className="text-white text-2xl font-bold">{t('feedPaused')}</p>
            </div>
          )}
          {/* Simulated Bounding Boxes */}
          {!isPaused && defects.map((defect, index) => (
             <div
              key={defect.id}
              className={`absolute border-2 animate-pulse ${index === 0 ? 'border-red-500' : 'border-yellow-400'}`}
              style={{
                left: `${defect.coordinates.x * 100}%`,
                top: `${defect.coordinates.y * 100}%`,
                width: `${defect.coordinates.width * 100}%`,
                height: `${defect.coordinates.height * 100}%`,
                animationDelay: `${index * 100}ms`
              }}
            >
               <span className={`absolute -top-6 left-0 text-xs text-white p-1 rounded ${index === 0 ? 'bg-red-500' : 'bg-yellow-500'}`}>
                {defect.type}
              </span>
            </div>
          ))}
        </div>

        {/* Control Panel Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">{t('controlPanel')}</h2>

          <div>
            <label htmlFor="product-line" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('productLine')}</label>
            <select id="product-line" className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>{t('circuitBoards')}</option>
              <option>{t('automotive')}</option>
              <option>{t('textiles')}</option>
            </select>
          </div>
          
          <div className="space-y-2">
             <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('liveFeed')}</h3>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-full flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isPaused ? <Play className="mr-2" size={16}/> : <Pause className="mr-2" size={16} />}
              {isPaused ? t('resumeFeed') : t('pauseFeed')}
            </button>
            <button className="w-full flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <Upload className="mr-2" size={16} />
              {t('upload')}
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{t('detections')}</h3>
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {defects.length > 0 ? defects.map(d => (
                <div key={d.id} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center"><AlertTriangle size={16} className="mr-2 text-red-500" />{d.type}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{d.timestamp}</span>
                  </div>
                  <div className="text-sm mt-1">
                    <p>{t('confidence')}: <span className="font-medium text-gray-800 dark:text-white">{(d.confidence * 100).toFixed(1)}%</span></p>
                    <p>{t('severity')}: <span className="font-medium text-gray-800 dark:text-white">{d.severity}</span></p>
                  </div>
                </div>
              )) : (
                <p className="text-gray-500 dark:text-gray-400">{t('noDetections')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualInspectionPage; 