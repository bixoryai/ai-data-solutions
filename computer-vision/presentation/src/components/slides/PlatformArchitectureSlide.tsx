import React from 'react';
import { ArrowRight, Database, Cloud, Share2 } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const PlatformArchitectureSlide: React.FC<SlideProps> = ({ t }) => {
  const valueProps = [
    { title: t('slide4_prop1_title'), text: t('slide4_prop1_text') },
    { title: t('slide4_prop2_title'), text: t('slide4_prop2_text') },
    { title: t('slide4_prop3_title'), text: t('slide4_prop3_text') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('slide4_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-8">{t('slide4_subtitle')}</p>
      
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t('slide4_diagram_title')}</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="p-4 bg-white rounded-lg shadow-md text-center w-full md:w-1/4">
            <Database className="mx-auto mb-2 text-blue-600" size={32} />
            <p className="font-semibold">{t('slide4_diagram_box1_title')}</p>
            <p className="text-sm text-gray-600">{t('slide4_diagram_box1_subtitle')}</p>
          </div>
          <ArrowRight className="text-gray-400" size={32} />
          <div className="p-4 bg-white rounded-lg shadow-md text-center w-full md:w-1/4">
            <Cloud className="mx-auto mb-2 text-blue-600" size={32} />
            <p className="font-semibold">{t('slide4_diagram_box2_title')}</p>
            <p className="text-sm text-gray-600">{t('slide4_diagram_box2_subtitle')}</p>
          </div>
          <ArrowRight className="text-gray-400" size={32} />
          <div className="p-4 bg-white rounded-lg shadow-md text-center w-full md:w-1/4">
            <Share2 className="mx-auto mb-2 text-blue-600" size={32} />
            <p className="font-semibold">{t('slide4_diagram_box3_title')}</p>
            <p className="text-sm text-gray-600">{t('slide4_diagram_box3_subtitle')}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t('slide4_value_props_title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-blue-700 mb-2">{prop.title}</h4>
              <p className="text-gray-700">{prop.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformArchitectureSlide; 