import React from 'react';
import { ShieldCheck, Lock, KeyRound, Microscope } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const SecurityComplianceSlide: React.FC<SlideProps> = ({ t }) => {
  const complianceItems = [
    { title: t('s14_hipaa'), color: 'border-green-500', textColor: 'text-green-600' },
    { title: t('s14_gdpr'), color: 'border-blue-500', textColor: 'text-blue-600' },
    { title: t('s14_soc2'), color: 'border-indigo-500', textColor: 'text-indigo-600' },
  ];

  const securityFeatures = [
    { icon: <Lock size={24} className="text-gray-600" />, title: t('s14_encryption_title'), description: t('s14_encryption_desc') },
    { icon: <KeyRound size={24} className="text-gray-600" />, title: t('s14_access_title'), description: t('s14_access_desc') },
    { icon: <Microscope size={24} className="text-gray-600" />, title: t('s14_audit_title'), description: t('s14_audit_desc') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s14_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s14_subheader')}</p>
      
      <div className="flex justify-center items-center space-x-6 mb-12">
        {complianceItems.map((item, index) => (
          <div key={index} className={`flex items-center p-3 border-2 ${item.color} rounded-lg bg-white`}>
            <ShieldCheck size={24} className={item.textColor} />
            <span className={`ml-2 font-bold ${item.textColor}`}>{item.title}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityComplianceSlide; 