import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, HeartPulse, Landmark, Factory } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ApplicationsSlide: React.FC<SlideProps> = ({ t }) => {
  const industries = [
    { name: 'Legal & Professional Services', icon: Briefcase, contentKey: 'legalContent' },
    { name: 'Healthcare', icon: HeartPulse, contentKey: 'healthcareContent' },
    { name: 'Financial Services', icon: Landmark, contentKey: 'financialContent' },
    { name: 'Manufacturing & Supply Chain', icon: Factory, contentKey: 'manufacturingContent' },
  ];

  const [selected, setSelected] = useState(industries[0]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">{t('slide5Title')}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <ul className="space-y-2">
            {industries.map(industry => (
              <li
                key={industry.name}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selected.name === industry.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-blue-100'
                }`}
                onClick={() => setSelected(industry)}
              >
                <div className="flex items-center">
                  <industry.icon className="h-6 w-6 mr-3" />
                  <span className="font-semibold">{t(industry.name)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-xl h-full"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">{t(selected.name)}</h3>
              <div dangerouslySetInnerHTML={{ __html: t(selected.contentKey) }} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSlide; 