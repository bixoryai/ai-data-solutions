import React from 'react';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const IntroductionSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-2">{t('s1_title_main')}</h1>
      <p className="text-xl text-gray-600 mb-8">{t('s1_subtitle')}</p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg mb-10 shadow-lg">
        <p className="text-2xl font-semibold italic">{t('s1_hook')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
          <div className="flex items-center mb-3">
            <TrendingUp size={28} className="text-green-500" />
            <h3 className="text-lg font-bold text-gray-800 ml-3">{t('s1_stat1_title')}</h3>
          </div>
          <p className="text-gray-600">{t('s1_stat1_desc')}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
          <div className="flex items-center mb-3">
            <Activity size={28} className="text-purple-500" />
            <h3 className="text-lg font-bold text-gray-800 ml-3">{t('s1_stat2_title')}</h3>
          </div>
          <p className="text-gray-600">{t('s1_stat2_desc')}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
          <div className="flex items-center mb-3">
            <BarChart2 size={28} className="text-orange-500" />
            <h3 className="text-lg font-bold text-gray-800 ml-3">{t('s1_stat3_title')}</h3>
          </div>
          <p className="text-gray-600">{t('s1_stat3_desc')}</p>
        </div>
      </div>

      <p className="mt-12 text-sm text-gray-500">{t('s1_presenter')}</p>
    </div>
  );
};

export default IntroductionSlide; 