import React from 'react';
import { motion } from 'framer-motion';
import { Award, Wrench, Shield, TrendingUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const CompetitiveAdvantageSlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const advantages = [
    {
      icon: Award,
      title: t('s8_cat1_title'),
      points: [t('s8_cat1_p1'), t('s8_cat1_p2'), t('s8_cat1_p3')]
    },
    {
      icon: Wrench,
      title: t('s8_cat2_title'),
      points: [t('s8_cat2_p1'), t('s8_cat2_p2'), t('s8_cat2_p3')]
    },
    {
      icon: Shield,
      title: t('s8_cat3_title'),
      points: [t('s8_cat3_p1'), t('s8_cat3_p2')]
    },
    {
      icon: TrendingUp,
      title: t('s8_cat4_title'),
      points: [t('s8_cat4_p1'), t('s8_cat4_p2'), t('s8_cat4_p3')]
    }
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">{t('slide8Title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon;
          return (
            <motion.div key={index} variants={item} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Icon className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-700">{advantage.title}</h3>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {advantage.points.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CompetitiveAdvantageSlide; 