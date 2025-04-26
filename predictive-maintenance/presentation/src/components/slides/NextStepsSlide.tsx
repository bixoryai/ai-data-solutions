import React from 'react';
import { PlaneLanding, Users, FileText, Wrench, Phone, Calendar, CheckCircle } from 'lucide-react';

interface NextStepsSlideProps {
  t: (key: string) => string;
}

const NextStepsSlide: React.FC<NextStepsSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "Next Steps",
      subtitle: "Begin your predictive maintenance journey with these actionable steps",
      getStarted: "Getting Started",
      assessment: "Request a Readiness Assessment",
      assessmentDesc: "We'll evaluate your current maintenance systems and identify potential implementation areas.",
      workshop: "Schedule a Workshop",
      workshopDesc: "Join our interactive workshop to see predictive maintenance in action with your data.",
      pilot: "Plan a Pilot Project",
      pilotDesc: "Start with a small-scale implementation on critical equipment to demonstrate value.",
      implementationServices: "Implementation Services",
      consulting: "Consulting Services",
      consultingDesc: "Expert guidance on strategy development and technology selection",
      integration: "System Integration",
      integrationDesc: "Seamless connection with your existing CMMS and ERP systems",
      training: "Staff Training",
      trainingDesc: "Comprehensive training for maintenance and reliability teams",
      timeline: "Implementation Timeline",
      q1: "Q1: Assessment & Planning",
      q1Desc: "System evaluation and roadmap development",
      q2: "Q2: Infrastructure Setup",
      q2Desc: "Sensor installation and data pipeline implementation",
      q3: "Q3: Initial Deployment",
      q3Desc: "Model training and validation with your equipment data",
      contact: "Contact Information",
      email: "Email: develop@bixory.ai",
      phone: "Phone: +1(408)6588538",
      website: "Website: bixory.ai/predictive-maintenance",
      schedule: "Schedule a Consultation"
    },
    zh: {
      title: "后续步骤",
      subtitle: "通过以下可行步骤开始您的预测性维护之旅",
      getStarted: "入门指南",
      assessment: "申请就绪性评估",
      assessmentDesc: "我们将评估您当前的维护系统并确定潜在的实施领域。",
      workshop: "安排研讨会",
      workshopDesc: "参加我们的互动研讨会，使用您的数据查看预测性维护的实际应用。",
      pilot: "计划试点项目",
      pilotDesc: "从关键设备的小规模实施开始，以展示价值。",
      implementationServices: "实施服务",
      consulting: "咨询服务",
      consultingDesc: "战略开发和技术选择的专家指导",
      integration: "系统集成",
      integrationDesc: "与您现有的CMMS和ERP系统无缝连接",
      training: "员工培训",
      trainingDesc: "为维护和可靠性团队提供的全面培训",
      timeline: "实施时间表",
      q1: "第一季度：评估与规划",
      q1Desc: "系统评估和路线图制定",
      q2: "第二季度：基础设施搭建",
      q2Desc: "传感器安装和数据管道实施",
      q3: "第三季度：初步部署",
      q3Desc: "使用您的设备数据进行模型训练和验证",
      contact: "联系信息",
      email: "电子邮件：develop@bixory.ai",
      phone: "电话：+1(408)6588538",
      website: "网站：bixory.ai/predictive-maintenance",
      schedule: "安排咨询"
    }
  };

  const language = t('language') === 'zh' ? 'zh' : 'en';

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">{content[language].title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
      </div>

      {/* Getting Started Section */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <PlaneLanding size={24} className="text-blue-600 mr-3" />
          <h3 className="text-xl font-bold text-blue-800">{content[language].getStarted}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
            <h4 className="font-medium text-blue-800 mb-2">1. {content[language].assessment}</h4>
            <p className="text-sm text-gray-600">{content[language].assessmentDesc}</p>
          </div>
          
          <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
            <h4 className="font-medium text-blue-800 mb-2">2. {content[language].workshop}</h4>
            <p className="text-sm text-gray-600">{content[language].workshopDesc}</p>
          </div>
          
          <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
            <h4 className="font-medium text-blue-800 mb-2">3. {content[language].pilot}</h4>
            <p className="text-sm text-gray-600">{content[language].pilotDesc}</p>
          </div>
        </div>
      </div>
      
      {/* Implementation Services */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <Wrench size={24} className="text-green-600 mr-3" />
          <h3 className="text-xl font-bold text-green-800">{content[language].implementationServices}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <Users size={20} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-1">{content[language].consulting}</h4>
              <p className="text-sm text-gray-600">{content[language].consultingDesc}</p>
            </div>
          </div>
          
          <div className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <FileText size={20} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-1">{content[language].integration}</h4>
              <p className="text-sm text-gray-600">{content[language].integrationDesc}</p>
            </div>
          </div>
          
          <div className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <Users size={20} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-1">{content[language].training}</h4>
              <p className="text-sm text-gray-600">{content[language].trainingDesc}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Implementation Timeline */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <Calendar size={24} className="text-purple-600 mr-3" />
          <h3 className="text-xl font-bold text-purple-800">{content[language].timeline}</h3>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-8 ml-10 relative">
            <div className="relative">
              <div className="absolute -left-10 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-purple-400 bg-white flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                </div>
              </div>
              <h4 className="font-medium text-purple-800 mb-1">{content[language].q1}</h4>
              <p className="text-sm text-gray-600">{content[language].q1Desc}</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-purple-400 bg-white flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                </div>
              </div>
              <h4 className="font-medium text-purple-800 mb-1">{content[language].q2}</h4>
              <p className="text-sm text-gray-600">{content[language].q2Desc}</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-purple-400 bg-white flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                </div>
              </div>
              <h4 className="font-medium text-purple-800 mb-1">{content[language].q3}</h4>
              <p className="text-sm text-gray-600">{content[language].q3Desc}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="bg-blue-50 rounded-lg shadow p-6 border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-2 mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-blue-800 mb-3">{content[language].contact}</h3>
            <div className="flex items-center text-gray-600">
              <Phone size={18} className="text-blue-600 mr-2" />
              <span>{content[language].phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FileText size={18} className="text-blue-600 mr-2" />
              <span>{content[language].email}</span>
            </div>
          </div>
          
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center shadow-md hover:bg-blue-700 transition-colors">
            <CheckCircle size={18} className="mr-2" />
            {content[language].schedule}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextStepsSlide; 