import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const FailingSolutionsSlide: React.FC<SlideProps> = ({ t }) => {
  const traditionalLimitations = [
    { challenge: t('slide3_challenge1'), solution: t('slide3_trad_solution1'), impact: t('slide3_impact1') },
    { challenge: t('slide3_challenge2'), solution: t('slide3_trad_solution2'), impact: t('slide3_impact2') },
    { challenge: t('slide3_challenge3'), solution: t('slide3_trad_solution3'), impact: t('slide3_impact3') },
    { challenge: t('slide3_challenge4'), solution: t('slide3_trad_solution4'), impact: t('slide3_impact4') },
  ];

  const aiAdvantages = [
    t('slide3_advantage1'),
    t('slide3_advantage2'),
    t('slide3_advantage3'),
    t('slide3_advantage4'),
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide3_mainTitle')}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">{t('slide3_sub1_title')}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">{t('slide3_table_header1')}</th>
                  <th scope="col" className="px-6 py-3">{t('slide3_table_header2')}</th>
                  <th scope="col" className="px-6 py-3">{t('slide3_table_header3')}</th>
                </tr>
              </thead>
              <tbody>
                {traditionalLimitations.map((item, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.challenge}</td>
                    <td className="px-6 py-4">{item.solution}</td>
                    <td className="px-6 py-4 text-red-600">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">{t('slide3_sub2_title')}</h3>
          <ul className="space-y-3">
            {aiAdvantages.map((advantage, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">{advantage}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800">{t('slide3_result_title')}</h4>
            <p className="text-green-700">{t('slide3_result_text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailingSolutionsSlide; 