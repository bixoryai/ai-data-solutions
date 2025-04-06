import React, { useState } from 'react';
import { BarChart3, LineChart, BarChart2 } from 'lucide-react';

interface VisualizationProps {
  language: 'en' | 'zh';
}

type ChartType = 'bar' | 'line' | 'scatter' | 'pie';

// Sample data for visualizations
const generateSampleData = () => {
  // Return empty data for demo purposes
  return { 
    ageData: [], 
    incomeData: [], 
    correlationData: [], 
    timeSeriesData: [] 
  };
};

const Visualization: React.FC<VisualizationProps> = ({ language }) => {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [dataSet, setDataSet] = useState<string>('age');
  const [sampleData, setSampleData] = useState(() => generateSampleData());
  
  // Translations
  const translations = {
    en: {
      title: 'Data Visualization',
      description: 'Compare original and synthetic data distributions',
      chartType: 'Chart Type',
      dataSet: 'Data Set',
      original: 'Original Data',
      synthetic: 'Synthetic Data',
      age: 'Age Distribution',
      income: 'Income Distribution',
      correlation: 'Age-Income Correlation',
      timeSeries: 'Time Series Data',
      bar: 'Bar Chart',
      line: 'Line Chart',
      scatter: 'Scatter Plot',
      pie: 'Pie Chart',
      xAxis: 'X Axis',
      yAxis: 'Y Axis',
      count: 'Count',
      similarity: 'Similarity Score',
      exportChart: 'Export Chart',
      regenerate: 'Regenerate Data'
    },
    zh: {
      title: '数据可视化',
      description: '比较原始和合成数据分布',
      chartType: '图表类型',
      dataSet: '数据集',
      original: '原始数据',
      synthetic: '合成数据',
      age: '年龄分布',
      income: '收入分布',
      correlation: '年龄-收入相关性',
      timeSeries: '时间序列数据',
      bar: '柱状图',
      line: '折线图',
      scatter: '散点图',
      pie: '饼图',
      xAxis: 'X轴',
      yAxis: 'Y轴',
      count: '计数',
      similarity: '相似度得分',
      exportChart: '导出图表',
      regenerate: '重新生成数据'
    }
  };
  
  const t = translations[language];
  
  // Regenerate sample data
  const regenerateData = () => {
    setSampleData(generateSampleData());
  };
  
  // Simplified similarity calculation
  const calculateSimilarity = (): number => {
    // Return a fixed value for demo purposes
    return 92.5;
  };
  
  // Simplified chart rendering
  const renderChart = () => {
    // Simplified chart rendering for demo purposes
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
        <div className="flex space-x-4 mb-6">
          <BarChart3 size={48} className="text-primary-500" />
          <LineChart size={48} className="text-secondary-emerald" />
          <BarChart2 size={48} className="text-accent-amber" />
        </div>
        <p className="text-gray-600 text-center">
          {language === 'en' 
            ? 'Interactive data visualization will be displayed here.'
            : '交互式数据可视化将显示在此处。'}
        </p>
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
          <div className="flex flex-wrap gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.chartType}
              </label>
              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded-md flex items-center ${
                    chartType === 'bar' 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                  onClick={() => setChartType('bar')}
                  disabled={dataSet === 'correlation'}
                >
                  <BarChart3 size={20} className="mr-1" />
                  <span>{t.bar}</span>
                </button>
                
                <button
                  className={`p-2 rounded-md flex items-center ${
                    chartType === 'line' 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                  onClick={() => setChartType('line')}
                  disabled={dataSet === 'correlation'}
                >
                  <LineChart size={20} className="mr-1" />
                  <span>{t.line}</span>
                </button>
                
                <button
                  className={`p-2 rounded-md flex items-center ${
                    chartType === 'scatter' 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setChartType('scatter');
                    if (dataSet !== 'correlation') setDataSet('correlation');
                  }}
                >
                  <BarChart2 size={20} className="mr-1" />
                  <span>{t.scatter}</span>
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.dataSet}
              </label>
              <select
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={dataSet}
                onChange={(e) => {
                  const newDataSet = e.target.value;
                  setDataSet(newDataSet);
                  if (newDataSet === 'correlation') {
                    setChartType('scatter');
                  } else if (chartType === 'scatter') {
                    setChartType('bar');
                  }
                }}
              >
                <option value="age">{t.age}</option>
                <option value="income">{t.income}</option>
                <option value="correlation">{t.correlation}</option>
                <option value="timeSeries">{t.timeSeries}</option>
              </select>
            </div>
            
            <div className="ml-auto">
              <button
                className="btn btn-secondary h-full flex items-center"
                onClick={regenerateData}
              >
                {t.regenerate}
              </button>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            {renderChart()}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-md flex items-center">
              <span className="font-medium mr-2">{t.similarity}:</span>
              <span>{calculateSimilarity().toFixed(2)}%</span>
            </div>
            
            <button className="btn btn-primary">
              {t.exportChart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
