import React from 'react';
import { Users, Target, CheckSquare, TrendingUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ImplementationSuccessSlide: React.FC<SlideProps> = ({ t }) => {
  const results = [
    { metric: t('slide9_metric1'), value: "+33%" },
    { metric: t('slide9_metric2'), value: "+300%" },
    { metric: t('slide9_metric3'), value: "-82%" },
    { metric: t('slide9_metric4'), value: "+35%" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide9_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide9_subtitle')}</p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Users className="mr-2 text-blue-600" />
          {t('slide9_partnership_background_title')}
        </h3>
        <p className="text-gray-700">{t('slide9_partnership_background_text')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="mr-2 text-blue-600" />
            {t('slide9_results_title')}
          </h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="space-y-2">
              {results.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.metric}</span>
                  <span className="font-bold text-lg text-blue-700 bg-blue-100 px-2 py-1 rounded">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
           <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <Target className="mr-2 text-green-600" />
            {t('slide9_success_factors_title')}
          </h3>
          <ul className="space-y-2 list-disc list-inside text-green-700">
            <li>{t('slide9_factor1')}</li>
            <li>{t('slide9_factor2')}</li>
            <li>{t('slide9_factor3')}</li>
          </ul>
        </div>
      </div>
       <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 italic">"{t('slide9_testimonial')}"</p>
        <p className="mt-4 font-semibold text-blue-800">- {t('slide9_testimonial_author')}</p>
      </div>
    </div>
  );
};

export default ImplementationSuccessSlide; 