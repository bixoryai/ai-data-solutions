import React from 'react';
import { Award, Zap, Code, Cpu } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const SolutionSlide: React.FC<SlideProps> = ({ t }) => {
  const features = [
    { text: t('slide3_feature1'), value: "99.7%" },
    { text: t('slide3_feature2'), value: t('slide3_feature2_value') },
    { text: t('slide3_feature3'), value: "24/7" },
    { text: t('slide3_feature4'), value: t('slide3_feature4_value') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide3_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide3_subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">{feature.value}</p>
            <p className="text-gray-700">{feature.text}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t('slide3_capabilities_title')}</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 p-3 text-lg font-semibold text-gray-700">{t('slide3_table_col1_header')}</th>
              <th className="border-b-2 border-gray-300 p-3 text-lg font-semibold text-blue-700 bg-blue-100">{t('slide3_table_col2_header')}</th>
              <th className="border-b-2 border-gray-300 p-3 text-lg font-semibold text-gray-700">{t('slide3_table_col3_header')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 p-3">{t('slide3_table_row1_col1')}</td>
              <td className="border-b border-gray-200 p-3 bg-blue-50 font-medium text-blue-800">{t('slide3_table_row1_col2')}</td>
              <td className="border-b border-gray-200 p-3">{t('slide3_table_row1_col3')}</td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 p-3">{t('slide3_table_row2_col1')}</td>
              <td className="border-b border-gray-200 p-3 bg-blue-50 font-medium text-blue-800">{t('slide3_table_row2_col2')}</td>
              <td className="border-b border-gray-200 p-3">{t('slide3_table_row2_col3')}</td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 p-3">{t('slide3_table_row3_col1')}</td>
              <td className="border-b border-gray-200 p-3 bg-blue-50 font-medium text-blue-800">{t('slide3_table_row3_col2')}</td>
              <td className="border-b border-gray-200 p-3">{t('slide3_table_row3_col3')}</td>
            </tr>
             <tr>
              <td className="p-3">{t('slide3_table_row4_col1')}</td>
              <td className="p-3 bg-blue-50 font-medium text-blue-800">{t('slide3_table_row4_col2')}</td>
              <td className="p-3">{t('slide3_table_row4_col3')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolutionSlide; 