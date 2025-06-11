import React from 'react';
import { TrendingUp, DollarSign, BarChart2 } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const BusinessModelSlide: React.FC<SlideProps> = ({ t }) => {
  const revenuePhases = [
    { title: t('slide8_phase1_title'), focus: t('slide8_phase1_focus'), target: t('slide8_phase1_target') },
    { title: t('slide8_phase2_title'), focus: t('slide8_phase2_focus'), target: t('slide8_phase2_target') },
    { title: t('slide8_phase3_title'), focus: t('slide8_phase3_focus'), target: t('slide8_phase3_target') },
  ];

  const financialProjections = [
    { stream: t('slide8_stream1'), y1: '$1,590K', y2: '$2,100K', y3: '$2,400K' },
    { stream: t('slide8_stream2'), y1: '$0', y2: '$720K', y3: '$2,160K' },
    { stream: t('slide8_stream3'), y1: '$250K', y2: '$700K', y3: '$1,350K' },
    { stream: t('slide8_stream_total'), y1: '$1,840K', y2: '$3,520K', y3: '$5,910K', isTotal: true },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide8_mainTitle')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <TrendingUp className="mr-2" /> {t('slide8_sub1_title')}
          </h3>
          <div className="space-y-4">
            {revenuePhases.map((phase, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-blue-800">{phase.title}</p>
                <p className="text-sm text-gray-700"><span className="font-semibold">{t('slide8_focus_label')}:</span> {phase.focus}</p>
                <p className="text-sm text-gray-700"><span className="font-semibold">{t('slide8_target_label')}:</span> {phase.target}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <DollarSign className="mr-2" /> {t('slide8_sub2_title')}
          </h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="space-y-2">
              <li><span className="font-semibold">{t('slide8_unit_econ1_title')}:</span> {t('slide8_unit_econ1_text')}</li>
              <li><span className="font-semibold">{t('slide8_unit_econ2_title')}:</span> {t('slide8_unit_econ2_text')}</li>
              <li><span className="font-semibold">{t('slide8_unit_econ3_title')}:</span> {t('slide8_unit_econ3_text')}</li>
              <li><span className="font-semibold">{t('slide8_unit_econ4_title')}:</span> {t('slide8_unit_econ4_text')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center flex items-center justify-center">
          <BarChart2 className="mr-2" /> {t('slide8_sub3_title')}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">{t('slide8_table_header1')}</th>
                <th scope="col" className="px-6 py-3">{t('slide8_table_header2')}</th>
                <th scope="col" className="px-6 py-3">{t('slide8_table_header3')}</th>
                <th scope="col" className="px-6 py-3">{t('slide8_table_header4')}</th>
              </tr>
            </thead>
            <tbody>
              {financialProjections.map((item, index) => (
                <tr key={index} className={`bg-white border-b ${item.isTotal ? 'font-bold text-green-800' : ''}`}>
                  <td className="px-6 py-4">{item.stream}</td>
                  <td className="px-6 py-4">{item.y1}</td>
                  <td className="px-6 py-4">{item.y2}</td>
                  <td className="px-6 py-4">{item.y3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlide; 