import React from 'react';
import { PlayCircle, MessageCircle, Calendar } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const NextStepsSlide: React.FC<SlideProps> = ({ t }) => {
    const content = {
        en: {
            title: "Your Journey to AI Transformation Starts Now",
            subtitle: "Let's Build the Future of Finance Together",
            steps: [
                {
                    icon: <PlayCircle className="w-10 h-10 text-blue-500" />,
                    title: "Schedule a Personalized Demo",
                    desc: "See how our platform solves your specific challenges. We'll tailor a demo to your data and use cases."
                },
                {
                    icon: <MessageCircle className="w-10 h-10 text-green-500" />,
                    title: "Discuss Your Use Case",
                    desc: "Our financial AI experts will work with you to define project scope, KPIs, and a clear roadmap for success."
                },
                {
                    icon: <Calendar className="w-10 h-10 text-purple-500" />,
                    title: "Launch a Proof-of-Value",
                    desc: "Let's launch a targeted proof-of-value project to demonstrate tangible ROI in 60-90 days."
                }
            ],
            contact: "Contact Us: sales@bixory.ai"
        },
        zh: {
            title: "您的AI转型之旅即刻开始",
            subtitle: "让我们共同打造金融的未来",
            steps: [
                {
                    icon: <PlayCircle className="w-10 h-10 text-blue-500" />,
                    title: "安排个性化演示",
                    desc: "了解我们的平台如何解决您的具体挑战。我们将根据您的数据和用例量身定制演示。"
                },
                {
                    icon: <MessageCircle className="w-10 h-10 text-green-500" />,
                    title: "讨论您的用例",
                    desc: "我们的金融AI专家将与您合作，定义项目范围、KPI和明确的成功路线图。"
                },
                {
                    icon: <Calendar className="w-10 h-10 text-purple-500" />,
                    title: "启动价值验证项目",
                    desc: "让我们启动一个有针对性的价值验证项目，在60-90天内展示切实的投资回报率。"
                }
            ],
            contact: "联系我们：sales@bixory.ai"
        }
    };
    const currentContent = t('language') === 'zh' ? content.zh : content.en;
  
    return (
    <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">{currentContent.title}</h2>
        <p className="text-lg text-blue-600 mb-6 text-center">{currentContent.subtitle}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.en.steps.map((step, index) => (
          <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t('language') === 'zh' ? content.zh.steps[index].title : step.title}</h3>
            <p className="text-gray-700">{t('language') === 'zh' ? content.zh.steps[index].desc : step.desc}</p>
          </div>
        ))}
      </div>
      
      <p className="text-center font-bold text-xl text-blue-800 pt-8">
        {currentContent.contact}
      </p>
    </div>
  );
};

export default NextStepsSlide; 