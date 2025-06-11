import React from 'react';
import { TrendingDown, TrendingUp, MinusCircle, MessageSquareQuote } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ResourceOptimizationImpactSlide: React.FC<SlideProps> = ({ t }) => {
  const stats = [
    {
      icon: <TrendingDown size={40} className="text-green-500" />,
      metric: t('s7_stat1_metric'),
      desc: t('s7_stat1_desc'),
    },
    {
      icon: <TrendingUp size={40} className="text-green-500" />,
      metric: t('s7_stat2_metric'),
      desc: t('s7_stat2_desc'),
    },
    {
      icon: <MinusCircle size={40} className="text-green-500" />,
      metric: t('s7_stat3_metric'),
      desc: t('s7_stat3_desc'),
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s7_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s7_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              {stat.icon}
            </div>
            <p className="text-4xl font-extrabold text-blue-600">{stat.metric}</p>
            <p className="text-gray-600 mt-2">{stat.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg text-center">
        <MessageSquareQuote size={24} className="text-blue-700 mx-auto mb-3" />
        <p className="text-xl italic text-blue-800">{t('s7_quote')}</p>
        <p className="mt-3 font-semibold text-gray-600">- {t('s7_quote_author')}</p>
      </div>
    </div>
  );
};

export default ResourceOptimizationImpactSlide; 