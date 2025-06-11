import React from 'react';
import { Mail, Phone, Globe, Linkedin } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ContactNextStepsSlide: React.FC<SlideProps> = ({ t }) => {
  const contactDetails = [
    { icon: <Mail size={20} />, text: t('s18_contact_email'), href: `mailto:${t('s18_contact_email')}` },
    { icon: <Phone size={20} />, text: t('s18_contact_phone'), href: `tel:${t('s18_contact_phone')}` },
    { icon: <Globe size={20} />, text: t('s18_website'), href: `https://${t('s18_website')}` },
    { icon: <Linkedin size={20} />, text: t('s18_linkedin'), href: `https://${t('s18_linkedin')}` },
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">{t('s18_thank_you')}</h2>
      <p className="text-2xl text-gray-600 mb-10">{t('s18_discussion')}</p>
      
      <div className="bg-gray-50 max-w-lg mx-auto p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{t('s18_contact_name')}</h3>
        <div className="space-y-3">
          {contactDetails.map((detail, index) => (
            <a 
              key={index} 
              href={detail.href}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center text-gray-600 hover:text-blue-600 hover:underline"
            >
              <span className="text-blue-500">{detail.icon}</span>
              <span className="ml-3">{detail.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactNextStepsSlide; 