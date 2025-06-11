import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Microscope } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const WhyNowSlide: React.FC<SlideProps> = ({ t }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const sections = [
    { 
      icon: TrendingUp, 
      titleKey: 'slide4Section1Title', 
      points: ['slide4Section1Point1', 'slide4Section1Point2', 'slide4Section1Point3'] 
    },
    { 
      icon: Briefcase, 
      titleKey: 'slide4Section2Title', 
      points: ['slide4Section2Point1', 'slide4Section2Point2', 'slide4Section2Point3'] 
    },
    { 
      icon: Microscope, 
      titleKey: 'slide4Section3Title', 
      points: ['slide4Section3Point1', 'slide4Section3Point2', 'slide4Section3Point3'] 
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">{t('slide4Title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div key={index} variants={itemVariants} className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Icon className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-blue-700">{t(section.titleKey)}</h3>
              </div>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                {section.points.map((pointKey, i) => (
                  <li key={i}>{t(pointKey)}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WhyNowSlide; 