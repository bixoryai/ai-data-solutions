import React, { useState } from 'react';
import { SlidersHorizontal, Calendar, PieChart, Filter } from 'lucide-react';
import SegmentationDetailChart from './SegmentationDetailChart';
import FunnelAnalysisChart from './FunnelAnalysisChart';
import RfmAnalysisChart from './RfmAnalysisChart';
import { analyticsDataByDateRange } from '../data/mockData';

type AnalyticsTab = 'segmentation' | 'funnel' | 'rfm';
type SegmentFilter = 'All' | 'New' | 'Returning';
type DateRangeFilter = '90' | '60' | '30';

const AnalyticsPage: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<AnalyticsTab>('segmentation');
  const [segmentFilter, setSegmentFilter] = useState<SegmentFilter>('All');
  const [dateRangeFilter, setDateRangeFilter] = useState<DateRangeFilter>('90');

  const translations = {
    en: {
      title: 'Customer Analytics',
      description: 'Explore deep insights into customer behavior and trends.',
      tabs: {
        segmentation: 'Segmentation',
        funnel: 'Funnel Analysis',
        rfm: 'RFM Analysis',
      },
      filters: {
        dateRange: 'Date Range',
        customerSegment: 'Customer Segment',
      },
      comingSoon: 'This analytics view is under construction. Check back soon!',
    },
    zh: {
      title: '客户分析',
      description: '深入探索客户行为和趋势。',
      tabs: {
        segmentation: '客户细分',
        funnel: '漏斗分析',
        rfm: 'RFM 分析',
      },
      filters: {
        dateRange: '日期范围',
        customerSegment: '客户群体',
      },
      comingSoon: '此分析视图正在建设中。请稍后查看！',
    },
  };

  const t = translations[language];
  
  const funnelTranslations = {
    'Visited Site': { en: 'Visited Site', zh: '访问网站' },
    'Viewed Product': { en: 'Viewed Product', zh: '查看产品' },
    'Added to Cart': { en: 'Added to Cart', zh: '加入购物车' },
    'Started Checkout': { en: 'Started Checkout', zh: '开始结账' },
    'Purchased': { en: 'Purchased', zh: '完成购买' },
  };

  const renderContent = () => {
    const dataForDateRange = analyticsDataByDateRange[dateRangeFilter];

    switch (activeTab) {
      case 'segmentation':
        const segmentationData = dataForDateRange.segmentation[segmentFilter];
        return <SegmentationDetailChart language={language} data={segmentationData} />;
      case 'funnel':
        const funnelData = dataForDateRange.funnel.map(item => ({
            ...item,
            name: funnelTranslations[item.name as keyof typeof funnelTranslations][language],
        }));
        return <FunnelAnalysisChart language={language} data={funnelData} />;
      case 'rfm':
        return <RfmAnalysisChart language={language} data={dataForDateRange.rfm} />;
      default:
        return (
          <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-center">
              <PieChart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-lg text-gray-500 dark:text-gray-400">{t.comingSoon}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">{t.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">{t.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-lg font-semibold mb-6 flex items-center dark:text-white">
            <SlidersHorizontal className="w-5 h-5 mr-3" />
            {t.filters.customerSegment}
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.filters.dateRange}</label>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                <select
                  value={dateRangeFilter}
                  onChange={(e) => setDateRangeFilter(e.target.value as DateRangeFilter)}
                  className="w-full bg-gray-50 dark:bg-gray-700 rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="90">Last 90 days</option>
                  <option value="60">Last 60 days</option>
                  <option value="30">Last 30 days</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.filters.customerSegment}</label>
              <div className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-gray-400" />
                <select
                  value={segmentFilter}
                  onChange={(e) => setSegmentFilter(e.target.value as SegmentFilter)}
                  className="w-full bg-gray-50 dark:bg-gray-700 rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  disabled={activeTab !== 'segmentation'}
                >
                  <option>All</option>
                  <option>New</option>
                  <option>Returning</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <nav className="-mb-px flex space-x-6">
              {(Object.keys(t.tabs) as AnalyticsTab[]).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {t.tabs[tab]}
                </button>
              ))}
            </nav>
          </div>
          <div>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage; 