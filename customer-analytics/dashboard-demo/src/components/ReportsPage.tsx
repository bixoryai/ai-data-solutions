import React from 'react';
import { FileText, Download } from 'lucide-react';

interface Report {
  title: string;
  description: string;
  date: string;
}

const ReportsPage: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  const translations = {
    en: {
      title: 'Reports',
      description: 'View and download your latest business intelligence reports.',
      download: 'Download',
      reports: [
        { title: 'Q1 2024 Customer Cohort Analysis', description: 'Deep dive into customer retention and lifetime value for the first quarter.', date: 'April 5, 2024' },
        { title: 'March 2024 Sales Performance', description: 'A complete overview of sales metrics, top products, and regional performance.', date: 'April 1, 2024' },
        { title: '2023 Annual Customer Segmentation Study', description: 'Year-end analysis of customer segments and their purchasing behaviors.', date: 'January 15, 2024' },
      ],
    },
    zh: {
      title: '报告',
      description: '查看和下载您最新的商业智能报告。',
      download: '下载',
      reports: [
        { title: '2024年第一季度客户群组分析', description: '深入探讨第一季度的客户保留率和生命周期价值。', date: '2024年4月5日' },
        { title: '2024年3月销售业绩', description: '销售指标、热门产品和区域业绩的完整概述。', date: '2024年4月1日' },
        { title: '2023年度客户细分研究', description: '客户细分及其购买行为的年终分析。', date: '2024年1月15日' },
      ],
    },
  };

  const t = translations[language];

  const handleDownload = (reportTitle: string) => {
    // In a real app, this would trigger a file download.
    // For this demo, we'll just show an alert.
    alert(`Downloading "${reportTitle}"... (demo only)`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-gray-600 mb-8">{t.description}</p>
      <div className="space-y-6">
        {t.reports.map((report: Report, index: number) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="w-10 h-10 text-blue-500 mr-6" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                <p className="text-xs text-gray-400 mt-2">{report.date}</p>
              </div>
            </div>
            <button
              onClick={() => handleDownload(report.title)}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              {t.download}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage; 