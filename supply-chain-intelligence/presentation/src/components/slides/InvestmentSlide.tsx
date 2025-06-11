import React from 'react';
import { PiggyBank, Briefcase, TrendingUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const InvestmentSlide: React.FC<SlideProps> = ({ t }) => {
  const useOfFunds = [
    { area: t('slide9_fund_area1'), amount: '$600K', percentage: '30%' },
    { area: t('slide9_fund_area2'), amount: '$500K', percentage: '25%' },
    { area: t('slide9_fund_area3'), amount: '$400K', percentage: '20%' },
    { area: t('slide9_fund_area4'), amount: '$200K', percentage: '10%' },
    { area: t('slide9_fund_area5'), amount: '$300K', percentage: '15%' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide9_mainTitle')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <PiggyBank className="mr-2" /> {t('slide9_sub1_title')}
          </h3>
          <p className="text-lg font-bold text-blue-800 mb-4">{t('slide9_series_a')}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">{t('slide9_table_header1')}</th>
                  <th scope="col" className="px-6 py-3">{t('slide9_table_header2')}</th>
                  <th scope="col" className="px-6 py-3">{t('slide9_table_header3')}</th>
                </tr>
              </thead>
              <tbody>
                {useOfFunds.map((item, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.area}</td>
                    <td className="px-6 py-4">{item.amount}</td>
                    <td className="px-6 py-4">{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
            <TrendingUp className="mr-2" /> {t('slide9_sub2_title')}
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold">{t('slide9_return_metric1_title')}:</span> {t('slide9_return_metric1_text')}</li>
            <li><span className="font-semibold">{t('slide9_return_metric2_title')}:</span> {t('slide9_return_metric2_text')}</li>
            <li><span className="font-semibold">{t('slide9_return_metric3_title')}:</span> {t('slide9_return_metric3_text')}</li>
          </ul>
           <div className="mt-6 bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800">{t('slide9_highlights_title')}</h4>
            <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                <li>{t('slide9_highlight1')}</li>
                <li>{t('slide9_highlight2')}</li>
                <li>{t('slide9_highlight3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSlide; 