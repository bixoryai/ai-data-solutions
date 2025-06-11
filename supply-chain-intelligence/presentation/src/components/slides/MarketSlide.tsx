import React from 'react';
import { Target, Users, Briefcase, Globe } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const MarketSlide: React.FC<SlideProps> = ({ t }) => {
  const targetMarkets = [
    { industry: t('slide7_market1_industry'), size: t('slide7_market1_size'), pain: t('slide7_market1_pain') },
    { industry: t('slide7_market2_industry'), size: t('slide7_market2_size'), pain: t('slide7_market2_pain') },
    { industry: t('slide7_market3_industry'), size: t('slide7_market3_size'), pain: t('slide7_market3_pain') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide7_mainTitle')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <Target className="mr-2" /> {t('slide7_sub1_title')}
          </h3>
          <div className="space-y-4">
            {targetMarkets.map((market, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-blue-800">{market.industry}</p>
                <p className="text-sm text-gray-600">{market.size}</p>
                <p className="text-sm text-gray-700 mt-1">{market.pain}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <Users className="mr-2" /> {t('slide7_sub2_title')}
          </h3>
          <div className="bg-blue-50 p-4 rounded-lg space-y-2">
            <p><span className="font-semibold">{t('slide7_profile_rev_title')}:</span> {t('slide7_profile_rev_text')}</p>
            <p><span className="font-semibold">{t('slide7_profile_comp_title')}:</span> {t('slide7_profile_comp_text')}</p>
            <p><span className="font-semibold">{t('slide7_profile_pain_title')}:</span> {t('slide7_profile_pain_text')}</p>
            <p><span className="font-semibold">{t('slide7_profile_budget_title')}:</span> {t('slide7_profile_budget_text')}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">{t('slide7_sub3_title')}</h3>
        <p className="text-center text-gray-700">{t('slide7_sub3_text')}</p>
      </div>
    </div>
  );
};

export default MarketSlide; 