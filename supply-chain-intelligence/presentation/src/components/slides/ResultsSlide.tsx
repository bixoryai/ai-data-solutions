import React from 'react';

interface SlideProps {
  t: (key: string) => string;
}

const ResultsSlide: React.FC<SlideProps> = ({ t }) => {
  const resultsData = [
    { metric: t('slide5_metric1'), before: '68%', after: '89%', improvement: '+31%' },
    { metric: t('slide5_metric2'), before: '$45M', after: '$28M', improvement: '-38%' },
    { metric: t('slide5_metric3'), before: '15%', after: '4%', improvement: '-73%' },
    { metric: t('slide5_metric4'), before: '72 hours', after: '18 hours', improvement: '-75%' },
    { metric: t('slide5_metric5'), before: '$180M', after: '$145M', improvement: '-19%' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">{t('slide5_mainTitle')}</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">{t('slide5_case_study_title')}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-3">{t('slide5_challenge_title')}</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>{t('slide5_challenge1')}</li>
            <li>{t('slide5_challenge2')}</li>
            <li>{t('slide5_challenge3')}</li>
            <li>{t('slide5_challenge4')}</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">{t('slide5_impact_title')}</h3>
            <p className="text-lg text-green-700 font-bold mb-2">{t('slide5_impact1')}</p>
            <p className="text-lg text-green-700 font-bold mb-2">{t('slide5_impact2')}</p>
            <p className="text-xl text-green-700 font-extrabold">{t('slide5_impact3')}</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">{t('slide5_results_title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">{t('slide5_table_header1')}</th>
                <th scope="col" className="px-6 py-3">{t('slide5_table_header2')}</th>
                <th scope="col" className="px-6 py-3">{t('slide5_table_header3')}</th>
                <th scope="col" className="px-6 py-3 text-green-600 font-bold">{t('slide5_table_header4')}</th>
              </tr>
            </thead>
            <tbody>
              {resultsData.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.metric}</td>
                  <td className="px-6 py-4">{item.before}</td>
                  <td className="px-6 py-4">{item.after}</td>
                  <td className="px-6 py-4 text-green-600 font-bold">{item.improvement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsSlide; 