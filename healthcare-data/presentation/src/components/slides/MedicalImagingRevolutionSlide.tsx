import React from 'react';
import { Bot, CheckCircle2, Combine } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const MedicalImagingRevolutionSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">{t('s6_title')}</h2>
        <p className="text-lg text-gray-600 mb-6">{t('s6_subheader')}</p>
        
        <div className="flex items-start">
          <Bot size={28} className="text-blue-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{t('s6_item1_title')}</h3>
            <p className="text-gray-600">{t('s6_item1_desc')}</p>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle2 size={28} className="text-green-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{t('s6_item2_title')}</h3>
            <p className="text-gray-600">{t('s6_item2_desc')}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Combine size={28} className="text-purple-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{t('s6_item3_title')}</h3>
            <p className="text-gray-600">{t('s6_item3_desc')}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg shadow-inner">
        {/* Placeholder for a visual element, e.g., an animated GIF or a static image */}
        <img src="https://placehold.co/500x400/e2e8f0/3c82f6?text=AI+Imaging+Analysis" alt={t('s6_image_alt')} className="rounded-md" />
      </div>
    </div>
  );
};

export default MedicalImagingRevolutionSlide; 