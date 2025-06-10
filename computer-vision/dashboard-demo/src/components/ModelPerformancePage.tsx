import React, { useState, useEffect } from 'react';
import { Target, Search, CheckCircle, Sliders, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';
import { generateMetrics, generateConfusionMatrix, generateRocCurve, PerformanceMetrics, ConfusionMatrixData, RocCurveData } from '../data/performance-data';

interface ModelPerformancePageProps {
  language: 'en' | 'zh';
}

const translations = {
  pageTitle: { en: 'Model Performance', zh: '模型性能' },
  kpiPrecision: { en: 'Precision', zh: '精确率' },
  kpiRecall: { en: 'Recall', zh: '召回率' },
  kpiF1: { en: 'F1-Score', zh: 'F1分数' },
  matrixTitle: { en: 'Confusion Matrix', zh: '混淆矩阵' },
  rocTitle: { en: 'ROC Curve Comparison', zh: 'ROC曲线比较' },
  actual: { en: 'Actual', zh: '实际' },
  predicted: { en: 'Predicted', zh: '预测' },
  modelV1: { en: 'Model v1.2', zh: '模型 v1.2' },
  modelV2: { en: 'Model v1.3 (New)', zh: '模型 v1.3 (新)' },
  tpr: { en: 'True Positive Rate', zh: '真阳性率' },
  fpr: { en: 'False Positive Rate', zh: '假阳性率' },
  regenerate: { en: 'Regenerate Data', zh: '重新生成数据' },
};

const KpiCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
    <div className="bg-green-500 text-white p-4 rounded-full mr-4">{icon}</div>
    <div>
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold text-gray-800 dark:text-white">{value}</p>
    </div>
  </div>
);

const ConfusionMatrix: React.FC<{ data: ConfusionMatrixData, language: 'en' | 'zh' }> = ({ data, language }) => {
  const maxVal = Math.max(...data.matrix.flat());

  return (
    <div className="relative">
      <p className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 font-bold">{translations.actual[language]}</p>
      <p className="text-center font-bold mb-2">{translations.predicted[language]}</p>
      <div className="flex justify-center items-center mb-4">
        {data.labels.map((label, index) => (
          <div key={index} className="w-24 text-center font-semibold text-sm">{label}</div>
        ))}
      </div>
      {data.matrix.map((row, i) => (
        <div key={i} className="flex justify-center items-center">
          <div className="w-24 text-right pr-4 font-semibold text-sm">{data.labels[i]}</div>
          {row.map((value, j) => (
            <div
              key={j}
              className={`w-24 h-24 flex items-center justify-center text-white font-bold text-lg border border-gray-300 dark:border-gray-600 ${i === j ? 'bg-green-600' : 'bg-red-500'}`}
              style={{ opacity: 0.3 + (value / maxVal) * 0.7 }}
            >
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ModelPerformancePage: React.FC<ModelPerformancePageProps> = ({ language }) => {
  const t = (key: keyof typeof translations) => translations[key][language];
  
  const [metrics, setMetrics] = useState<PerformanceMetrics>(generateMetrics());
  const [matrixData, setMatrixData] = useState<ConfusionMatrixData>(generateConfusionMatrix());
  const [rocData1, setRocData1] = useState<RocCurveData[]>([]);
  const [rocData2, setRocData2] = useState<RocCurveData[]>([]);

  const regenerateData = () => {
    setMetrics(generateMetrics());
    setMatrixData(generateConfusionMatrix());
    setRocData1(generateRocCurve(t('modelV1')));
    setRocData2(generateRocCurve(t('modelV2')));
  };

  useEffect(regenerateData, [language]);

  return (
    <div className="p-6 space-y-6">
       <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{t('pageTitle')}</h1>
        <button
          onClick={regenerateData}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <RefreshCw size={16} className="mr-2" />
          {t('regenerate')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard title={t('kpiPrecision')} value={metrics.precision.toFixed(3)} icon={<Target />} />
        <KpiCard title={t('kpiRecall')} value={metrics.recall.toFixed(3)} icon={<Search />} />
        <KpiCard title={t('kpiF1')} value={metrics.f1Score.toFixed(3)} icon={<CheckCircle />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t('matrixTitle')}</h2>
          <ConfusionMatrix data={matrixData} language={language} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t('rocTitle')}</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis type="number" dataKey="fpr" name={t('fpr')} label={{ value: t('fpr'), position: 'insideBottom', offset: -5 }} domain={[0, 1]} />
              <YAxis type="number" dataKey="tpr" name={t('tpr')} label={{ value: t('tpr'), angle: -90, position: 'insideLeft' }} domain={[0, 1]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="tpr" data={rocData1} name={t('modelV1')} stroke="#8884d8" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="tpr" data={rocData2} name={t('modelV2')} stroke="#82ca9d" dot={false} strokeWidth={2} />
              <Line dataKey="fpr" name="Reference" stroke="#ccc" dot={false} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ModelPerformancePage; 