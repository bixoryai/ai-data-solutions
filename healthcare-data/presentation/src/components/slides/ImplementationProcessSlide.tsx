import React from 'react';

interface SlideProps {
  t: (key: string) => string;
}

const ImplementationProcessSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-6">{t('implementationProcess')}</h2>
      <p className="text-gray-700">{t('slide_placeholder')}</p>
    </div>
  );
};

export default ImplementationProcessSlide; 