import React from 'react';
import { Target, Briefcase, Check } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const MarketOpportunitySlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s10_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s10_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Market Size Section */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg text-center">
          <Target size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">{t('s10_market_title')}</h3>
          <p className="text-6xl font-extrabold text-blue-600 my-4">{t('s10_market_value')}</p>
          <p className="text-gray-600">{t('s10_market_desc')}</p>
        </div>

        {/* Business Model Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <Briefcase size={40} className="mx-auto text-blue-800 mb-4" />
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">{t('s10_model_title')}</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-800">{t('s10_model_tier1')}</span>
                <p className="text-gray-600">{t('s10_model_tier1_desc')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-800">{t('s10_model_tier2')}</span>
                <p className="text-gray-600">{t('s10_model_tier2_desc')}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketOpportunitySlide; 