import React from 'react';
import { Briefcase, BarChart, TrendingUp, CheckCircle } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const CaseStudySlide: React.FC<SlideProps> = ({ t }) => {
  const results = [
    { metric: t('slide5_metric1'), before: "78%", after: "99.7%", improvement: "+28%" },
    { metric: t('slide5_metric2'), before: "15%", after: "1.2%", improvement: "-92%" },
    { metric: t('slide5_metric3'), before: "45 sec/unit", after: "3 sec/unit", improvement: "+1,400%" },
    { metric: t('slide5_metric4'), before: "68%", after: "97%", improvement: "+43%" },
  ];

  const businessImpacts = [
    { impact: t('slide5_impact1'), value: t('slide5_impact1_value') },
    { impact: t('slide5_impact2'), value: t('slide5_impact2_value') },
    { impact: t('slide5_impact3'), value: t('slide5_impact3_value') },
    { impact: t('slide5_impact4'), value: t('slide5_impact4_value') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide5_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide5_subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Briefcase className="mr-2 text-blue-600" />
            {t('slide5_client_background_title')}
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>{t('slide5_client_industry')}:</strong> {t('slide5_client_industry_value')}</p>
            <p><strong>{t('slide5_client_scale')}:</strong> {t('slide5_client_scale_value')}</p>
            <p><strong>{t('slide5_client_challenge')}:</strong> {t('slide5_client_challenge_value')}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="mr-2 text-blue-600" />
            {t('slide5_business_impact_title')}
          </h3>
          <div className="bg-green-50 p-4 rounded-lg">
            <ul className="space-y-2">
              {businessImpacts.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.impact}</span>
                  <span className="font-bold text-green-700">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4 pt-4 border-t border-green-200">
              <p className="text-lg font-bold">{t('slide5_total_roi')}</p>
              <p className="text-3xl font-extrabold text-green-600">{t('slide5_total_roi_value')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center flex items-center justify-center">
          <BarChart className="mr-2 text-blue-600" />
          {t('slide5_quality_metrics_title')}
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-3 font-semibold text-blue-800">{t('slide5_table_header1')}</th>
              <th className="p-3 font-semibold text-blue-800">{t('slide5_table_header2')}</th>
              <th className="p-3 font-semibold text-blue-800">{t('slide5_table_header3')}</th>
              <th className="p-3 font-semibold text-green-700">{t('slide5_table_header4')}</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-3">{row.metric}</td>
                <td className="p-3">{row.before}</td>
                <td className="p-3">{row.after}</td>
                <td className="p-3 font-bold text-green-600 flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  {row.improvement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CaseStudySlide; 