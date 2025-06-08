import React from 'react';

interface DashboardHomeProps {
  language: 'en' | 'zh';
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ language }) => {
  const translations = {
    en: {
      dashboard: 'Dashboard',
      welcome: 'Welcome to the NLP Data Intelligence Dashboard',
      description: 'This interactive demo showcases advanced AI-powered text analysis. Navigate through the sections to explore different capabilities.',
      docsProcessed: 'Documents Processed',
      avgSentiment: 'Average Sentiment',
      entitiesDetected: 'Key Entities Detected',
      sentimentDist: 'Sentiment Distribution',
      entityFreq: 'Entity Frequency',
      pieChart: 'Pie Chart Placeholder',
      barChart: 'Bar Chart Placeholder',
    },
    zh: {
      dashboard: '仪表盘',
      welcome: '欢迎来到NLP数据智能仪表盘',
      description: '这个交互式演示展示了先进的 AI 驱动的文本分析。浏览各个部分以探索不同的功能。',
      docsProcessed: '已处理文档',
      avgSentiment: '平均情绪',
      entitiesDetected: '检测到的关键实体',
      sentimentDist: '情绪分布',
      entityFreq: '实体频率',
      pieChart: '饼图占位符',
      barChart: '条形图占位符',
    },
  };

  const t = translations[language];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{t.dashboard}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">{t.welcome}</h3>
        <p className="text-gray-600">{t.description}</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-500">{t.docsProcessed}</h4>
          <p className="text-3xl font-bold">1,450</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-500">{t.avgSentiment}</h4>
          <p className="text-3xl font-bold text-green-600">+0.85</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-500">{t.entitiesDetected}</h4>
          <p className="text-3xl font-bold">5,200</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">{t.sentimentDist}</h4>
          <p className="text-center text-gray-400 py-16">{t.pieChart}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">{t.entityFreq}</h4>
          <p className="text-center text-gray-400 py-16">{t.barChart}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome; 