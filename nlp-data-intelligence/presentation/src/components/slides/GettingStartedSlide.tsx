import React from 'react';
import { motion } from 'framer-motion';
import { Target, Check, Phone } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const GettingStartedSlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const options = [
    { name: t('s12_opt1_name'), desc: t('s12_opt1_desc'), investment: t('s12_opt1_inv') },
    { name: t('s12_opt2_name'), desc: t('s12_opt2_desc'), investment: t('s12_opt2_inv') },
    { name: t('s12_opt3_name'), desc: t('s12_opt3_desc'), investment: t('s12_opt3_inv') }
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">{t('slide12Title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {options.map((opt, index) => (
          <motion.div key={index} variants={item} className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{opt.name}</h3>
            <p className="text-gray-700 flex-grow">{opt.desc}</p>
            <p className="text-sm text-blue-600 mt-4 font-semibold">{t('s12_investment_label')}: {opt.investment}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item} className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('s12_contact_title')}</h3>
        <p className="text-gray-600">{t('s12_contact_email')} | {t('s12_contact_phone')} | {t('s12_contact_website')}</p>
        <a href={t('s12_contact_calendar_link')} className="mt-4 inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
          {t('s12_contact_cta')}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default GettingStartedSlide; 