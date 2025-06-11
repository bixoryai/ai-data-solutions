import React from 'react';
import { Target } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const TitleSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">
        {t('slide1_mainTitle')}
      </h1>
      <p className="text-2xl text-green-600 mb-8">
        {t('slide1_subtitle')}
      </p>
      
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto">
        <div className="flex items-center justify-center">
          <Target size={32} className="text-blue-600 mr-4" />
          <p className="text-xl italic text-gray-700">
            "{t('slide1_hook')}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide; 