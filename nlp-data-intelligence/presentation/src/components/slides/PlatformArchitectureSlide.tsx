import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Database, Share2, FileCheck, Search, BarChart3, Users } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const PlatformArchitectureSlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const features = [
    { icon: FileCheck, title: "Smart Document Processing", content: "Automatic classification, key info extraction, and change detection." },
    { icon: Search, title: "Intelligent Search & Discovery", content: "Semantic search, question-answering, and content discovery." },
    { icon: BarChart3, title: "Analytics & Insights", content: "Sentiment analysis, trend identification, and risk monitoring." },
    { icon: Users, title: "Collaboration & Workflow", content: "Human-in-the-loop validation, team collaboration, and audit trails." }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">{t('slide6Title')}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item} className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center"><Layers className="mr-3 text-blue-600"/>{t('s6_doc_intel_engine_title')}</h3>
            <p className="text-gray-600">{t('s6_doc_intel_engine_content')}</p>
          </motion.div>
          <motion.div variants={item} className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center"><Cpu className="mr-3 text-blue-600"/>{t('s6_ai_analysis_layer_title')}</h3>
            <p className="text-gray-600">{t('s6_ai_analysis_layer_content')}</p>
          </motion.div>
          <motion.div variants={item} className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center"><Database className="mr-3 text-blue-600"/>{t('s6_bi_dashboard_title')}</h3>
            <p className="text-gray-600">{t('s6_bi_dashboard_content')}</p>
          </motion.div>
          <motion.div variants={item} className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center"><Share2 className="mr-3 text-blue-600"/>{t('s6_integration_api_title')}</h3>
            <p className="text-gray-600">{t('s6_integration_api_content')}</p>
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">{t('s6_key_features_title')}</h3>
            <div className="space-y-4">
                {features.map((feature, index) => (
                    <motion.div key={index} variants={item} className="bg-blue-50 p-4 rounded-lg flex items-start">
                        <feature.icon className="h-8 w-8 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-blue-800">{t(feature.title)}</h4>
                            <p className="text-sm text-gray-600">{t(feature.content)}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformArchitectureSlide; 