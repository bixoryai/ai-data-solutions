import React from 'react';
import { PiggyBank, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const InvestmentRoiSlide: React.FC<SlideProps> = ({ t }) => {
  const roiAreas = [
    t('s12_roi_area1'),
    t('s12_roi_area2'),
    t('s12_roi_area3'),
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s12_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s12_subheader')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-start">
            <PiggyBank size={32} className="text-blue-600 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{t('s12_investment_title')}</h3>
              <p className="text-gray-600">{t('s12_investment_desc')}</p>
            </div>
          </div>
          <div className="flex items-start">
            <BarChart3 size={32} className="text-green-600 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{t('s12_roi_title')}</h3>
              <p className="text-gray-600 font-semibold">{t('s12_roi_timeline')}</p>
              <ul className="mt-2 space-y-1">
                {roiAreas.map((area, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left pt-4">
              <a href="#" className="text-blue-600 font-bold hover:underline">{t('s12_contact_prompt')}</a>
          </div>
        </div>
        
        <div className="flex justify-center items-center bg-gray-50 p-4 rounded-lg shadow-inner">
          <img src="https://placehold.co/500x350/e0e7ff/4338ca?text=ROI+Projection" alt={t('s12_image_alt')} className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentRoiSlide; 