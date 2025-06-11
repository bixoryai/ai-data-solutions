import React from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  t: (key: string) => string;
}

const ProductsAndServicesSlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const products = [
    { name: t('s7_prod1_name'), desc: t('s7_prod1_desc'), ideal: t('s7_prod1_ideal'), benefits: t('s7_prod1_benefits') },
    { name: t('s7_prod2_name'), desc: t('s7_prod2_desc'), ideal: t('s7_prod2_ideal'), benefits: t('s7_prod2_benefits') },
    { name: t('s7_prod3_name'), desc: t('s7_prod3_desc'), ideal: t('s7_prod3_ideal'), benefits: t('s7_prod3_benefits') },
    { name: t('s7_prod4_name'), desc: t('s7_prod4_desc'), ideal: t('s7_prod4_ideal'), benefits: t('s7_prod4_benefits') },
  ];

  const services = [
    { name: t('s7_serv1_name'), desc: t('s7_serv1_desc'), value: t('s7_serv1_value') },
    { name: t('s7_serv2_name'), desc: t('s7_serv2_desc'), value: t('s7_serv2_value') },
    { name: t('s7_serv3_name'), desc: t('s7_serv3_desc'), value: t('s7_serv3_value') },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide7Title')}</h2>
      
      <motion.div variants={item}>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{t('s7_core_platform_title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue-200 px-4 py-2">{t('s7_table_header_product')}</th>
                <th className="border-b-2 border-blue-200 px-4 py-2">{t('s7_table_header_desc')}</th>
                <th className="border-b-2 border-blue-200 px-4 py-2">{t('s7_table_header_ideal')}</th>
                <th className="border-b-2 border-blue-200 px-4 py-2">{t('s7_table_header_benefits')}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="border-b border-gray-200 px-4 py-2 font-semibold">{p.name}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{p.desc}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{p.ideal}</td>
                  <td className="border-b border-gray-200 px-4 py-2" dangerouslySetInnerHTML={{ __html: p.benefits }}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{t('s7_services_title')}</h3>
        <div className="overflow-x-auto">
           <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue-200 px-4 py-2">{t('s7_table_header_service')}</th>
                <th className="border-b-2 border-blue-200 px-4 py-2">{t('s7_table_header_desc')}</th>
                <th className="border-b-2 border-blue-200 px-4 py-2">{t('s7_table_header_value')}</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="border-b border-gray-200 px-4 py-2 font-semibold">{s.name}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{s.desc}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductsAndServicesSlide; 