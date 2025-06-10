import React from 'react';

interface CallToActionProps {
  language: 'en' | 'zh';
}

const CallToAction: React.FC<CallToActionProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Next Steps & Call to Action',
      subtitle: 'Join Us in Revolutionizing the Data Landscape',
      nextSteps: {
        title: 'Immediate Next Steps:',
        steps: [
          'Schedule a technical demo of our synthetic data platform',
          'Discuss your specific data challenges and use cases',
          'Explore partnership opportunities in your industry',
          'Join our early adopter program with preferential terms'
        ]
      },
      benefits: {
        title: 'Benefits of Early Engagement:',
        items: [
          'Shape product development to address your specific needs',
          'Gain competitive advantage through advanced data capabilities',
          'Special pricing and terms for founding customers',
          'Priority access to new features and capabilities'
        ]
      },
      contact: {
        title: 'Contact Information:',
        email: 'info@synthetic-data-solutions.com',
        phone: '+1 (555) 123-4567',
        website: 'www.synthetic-data-solutions.com'
      },
      finalMessage: 'Transform your data strategy with privacy-preserving synthetic data. Let\'s innovate together!'
    },
    zh: {
      title: '下一步与行动呼吁',
      subtitle: '加入我们，共同革新数据格局',
      nextSteps: {
        title: '即时下一步:',
        steps: [
          '安排我们合成数据平台的技术演示',
          '讨论您特定的数据挑战和用例',
          '探索您所在行业的合作机会',
          '加入我们的早期采用者计划，享受优惠条件'
        ]
      },
      benefits: {
        title: '早期参与的好处:',
        items: [
          '塑造产品开发以满足您的特定需求',
          '通过先进的数据能力获得竞争优势',
          '创始客户特殊定价和条款',
          '优先访问新功能和能力'
        ]
      },
      contact: {
        title: '联系信息:',
        email: 'info@synthetic-data-solutions.com',
        phone: '+1 (555) 123-4567',
        website: 'www.synthetic-data-solutions.com'
      },
      finalMessage: '通过保护隐私的合成数据转变您的数据策略。让我们一起创新！'
    }
  };

  const { title, subtitle, nextSteps, benefits, contact, finalMessage } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">{title}</h2>
      <p className="text-xl text-center mb-8">{subtitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-primary-400 mb-4">{nextSteps.title}</h3>
          <ul className="space-y-3">
            {nextSteps.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">{index + 1}.</span>
                <span className="text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-primary-400 mb-4">{benefits.title}</h3>
          <ul className="space-y-3">
            {benefits.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-primary-900 bg-opacity-50 p-8 rounded-lg border border-primary-700 mb-8 text-center">
        <h3 className="text-xl font-bold text-white mb-4">{contact.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">✉️</span>
            <span className="text-lg">{contact.email}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">📱</span>
            <span className="text-lg">{contact.phone}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">🌐</span>
            <span className="text-lg">{contact.website}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg border border-yellow-500">
        <p className="text-center text-xl font-bold text-gray-900">
          {finalMessage}
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
