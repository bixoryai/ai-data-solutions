import React from 'react';
import { BarChart2, TrendingUp, Users } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const MarketOpportunitySlide: React.FC<SlideProps> = ({ t }) => {
  const marketDrivers = [
    t('slide7_driver1'),
    t('slide7_driver2'),
    t('slide7_driver3'),
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide7_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide7_subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <BarChart2 className="mr-2 text-blue-600" />
            {t('slide7_market_size_title')}
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <p className="text-sm text-gray-600">{t('slide7_market_current')}</p>
              <p className="text-2xl font-bold text-gray-800">$8.2B</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('slide7_market_projected')}</p>
              <p className="text-2xl font-bold text-gray-800">$15.1B</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('slide7_market_cagr')}</p>
              <p className="text-2xl font-bold text-gray-800">18.3%</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="mr-2 text-blue-600" />
            {t('slide7_market_drivers_title')}
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-2 list-disc list-inside text-blue-800">
              {marketDrivers.map((driver, index) => (
                <li key={index}><span className="text-gray-700">{driver}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOpportunitySlide; 