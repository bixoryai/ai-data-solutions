import React from 'react';
import { Construction } from 'lucide-react';

const ComingSoon: React.FC<{ language: 'en' | 'zh'; pageTitle: string }> = ({ language, pageTitle }) => {
  const translations = {
    en: {
      title: 'Coming Soon!',
      description: `We're currently building out the ${pageTitle} page. Check back soon for exciting new features and insights!`,
    },
    zh: {
      title: '敬请期待！',
      description: `我们目前正在构建 ${pageTitle} 页面。请稍后回来查看激动人心的新功能和见解！`,
    },
  };
  const t = translations[language];

  // A bit of a hack to get the Chinese page title
  const title_zh = pageTitle === 'Analytics' ? '分析' : pageTitle === 'Reports' ? '报告' : '设置';
  const description = language === 'zh' ? `我们目前正在构建 ${title_zh} 页面。请稍后回来查看激动人心的新功能和见解！` : t.description;


  return (
    <div className="flex flex-col items-center justify-center h-full p-10 text-center bg-gray-50 rounded-lg">
      <Construction className="w-16 h-16 mb-4 text-yellow-500" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-600 max-w-md">{description}</p>
    </div>
  );
};

export default ComingSoon; 