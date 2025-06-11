import React from 'react';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ThankYouSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            thankYou: "Thank You",
            invitation: "Questions & Open Discussion",
            contact: "sales@bixory.ai | 1-800-AI-FINANCE | bixory.ai",
            follow: "Follow Our Journey"
        },
        zh: {
            thankYou: "谢谢",
            invitation: "提问与自由讨论",
            contact: "sales@bixory.ai | 1-800-AI-FINANCE | bixory.ai",
            follow: "关注我们的旅程"
        }
    };
    const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-4">{currentContent.thankYou}</h2>
      <p className="text-3xl text-blue-600 mb-8">{currentContent.invitation}</p>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
        <p className="text-xl font-semibold text-gray-800">{currentContent.contact}</p>
      </div>

      <div className="mt-8">
        <p className="text-lg font-semibold text-gray-700 mb-4">{currentContent.follow}</p>
        <div className="flex space-x-6 justify-center">
            <a href="#" className="text-gray-500 hover:text-blue-600"><Linkedin size={28}/></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><Twitter size={28}/></a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSlide; 