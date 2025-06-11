import React from 'react';
import { Target } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string; // Translation function
}

const IntroductionSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">{t('slide1_title')}</h2>
      <p className="text-xl text-gray-600 mb-8">{t('slide1_subtitle')}</p>
      
      <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-800 p-6 rounded-lg max-w-3xl mx-auto shadow-md">
        <p className="text-2xl font-semibold italic">
          "{t('slide1_hook')}"
        </p>
      </div>

      <div className="mt-12 flex justify-center items-center text-gray-500">
        <Target size={20} className="mr-2" />
        <span>{t('slide1_tagline')}</span>
      </div>
    </div>
  );
};

export default IntroductionSlide; 