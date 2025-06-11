import React from 'react';
import { Briefcase, Users, Mail, Phone } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const NextStepsSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide12_mainTitle')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <Briefcase className="mr-2" /> {t('slide12_sub1_title')}
          </h3>
          <p className="text-gray-700 mb-4">{t('slide12_investor_text')}</p>
          <ul className="list-disc list-inside text-left text-gray-600 space-y-1">
            <li>{t('slide12_investor_point1')}</li>
            <li>{t('slide12_investor_point2')}</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center justify-center">
            <Users className="mr-2" /> {t('slide12_sub2_title')}
          </h3>
          <p className="text-gray-700 mb-4">{t('slide12_partner_text')}</p>
          <ul className="list-disc list-inside text-left text-gray-600 space-y-1">
            <li>{t('slide12_partner_point1')}</li>
            <li>{t('slide12_partner_point2')}</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('slide12_contact_title')}</h3>
        <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center text-gray-700">
                <Mail className="mr-2" />
                <span>{t('slide12_contact_email')}</span>
            </div>
            <div className="flex items-center text-gray-700">
                <Phone className="mr-2" />
                <span>{t('slide12_contact_phone')}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsSlide; 