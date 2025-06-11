import React from 'react';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ThankYouSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">
        {t('slide17_mainTitle')}
      </h1>
      <p className="text-2xl text-green-600 mb-8">
        {t('slide17_subtitle')}
      </p>
      
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('slide17_contact_title')}</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-center text-gray-700">
              <Mail className="mr-3" />
              <span>{t('slide17_contact_email')}</span>
          </div>
          <div className="flex items-center justify-center text-gray-700">
              <Phone className="mr-3" />
              <span>{t('slide17_contact_phone')}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600"><Linkedin size={24}/></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><Twitter size={24}/></a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSlide; 