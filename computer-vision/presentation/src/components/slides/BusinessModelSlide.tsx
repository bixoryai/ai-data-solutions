import React from 'react';
import { PiggyBank, BarChartHorizontal, DollarSign } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const BusinessModelSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide10_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide10_subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <PiggyBank className="mr-2 text-blue-600" />
            {t('slide10_investment_title')}
          </h3>
          <p className="text-gray-700">{t('slide10_investment_text')}</p>
          <p className="text-4xl font-bold text-blue-800 mt-4">$550K</p>
          <p className="text-sm text-gray-500">{t('slide10_investment_timeline')}</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <BarChartHorizontal className="mr-2" />
            {t('slide10_revenue_title')}
          </h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>{t('slide10_revenue_point1')}</li>
            <li>{t('slide10_revenue_point2')}</li>
            <li>{t('slide10_revenue_point3')}</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-4 text-center flex items-center justify-center">
          <DollarSign className="mr-2" />
          {t('slide10_customer_title')}
        </h3>
        <div className="flex justify-around text-center">
          <div>
            <p className="text-2xl font-bold text-green-700">$450K</p>
            <p className="text-gray-600">{t('slide10_customer_ltv')}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-700">385%</p>
            <p className="text-gray-600">{t('slide10_customer_roi')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlide; 