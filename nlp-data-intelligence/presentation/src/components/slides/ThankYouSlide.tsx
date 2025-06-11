import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, MessageSquare, CheckCircle } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ThankYouSlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };
  
  const takeaways = [
      { icon: Lightbulb, text: t('s13_takeaway1')},
      { icon: CheckCircle, text: t('s13_takeaway2')},
      { icon: MessageSquare, text: t('s13_takeaway3')}
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="text-center flex flex-col justify-center items-center h-full">
      <motion.h2 variants={item} className="text-4xl font-bold text-blue-800 mb-4">{t('slide13Title')}</motion.h2>
      <motion.p variants={item} className="text-xl text-gray-600 mb-8">{t('slide13Subtitle')}</motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
          {takeaways.map((takeaway, i) => {
              const Icon = takeaway.icon;
              return (
                <motion.div key={i} variants={item} className="bg-gray-50 p-4 rounded-lg">
                    <Icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <p className="text-gray-700 text-sm">{takeaway.text}</p>
                </motion.div>
              );
          })}
      </div>

      <motion.div variants={item}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('s13_qa_title')}</h3>
        <a href={t('s12_contact_calendar_link')} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
            {t('s13_cta')}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouSlide; 