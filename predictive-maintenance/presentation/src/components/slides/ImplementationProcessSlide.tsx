import React from 'react';
import { ClipboardList, Workflow, Settings, BarChart, Gauge, Laptop } from 'lucide-react';

interface ImplementationProcessSlideProps {
  t: (key: string) => string;
}

const ImplementationProcessSlide: React.FC<ImplementationProcessSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "Implementation Process",
      subtitle: "A systematic approach to implementing predictive maintenance in your organization.",
      phase1: "Phase 1: Assessment",
      phase1Duration: "4-6 weeks",
      phase1Tasks: [
        "Evaluate existing equipment and maintenance practices",
        "Identify high-value assets for implementation",
        "Assess data availability and quality",
        "Define success metrics and ROI targets"
      ],
      phase2: "Phase 2: Infrastructure Setup",
      phase2Duration: "6-8 weeks",
      phase2Tasks: [
        "Install necessary sensors and data collection devices",
        "Set up data storage and processing infrastructure",
        "Establish data pipelines and integration points",
        "Configure security and access controls"
      ],
      phase3: "Phase 3: Model Development",
      phase3Duration: "8-12 weeks",
      phase3Tasks: [
        "Collect and preprocess historical data",
        "Develop and train initial predictive models",
        "Validate model performance against historical failures",
        "Iterate and refine models based on feedback"
      ],
      phase4: "Phase 4: Deployment & Integration",
      phase4Duration: "4-6 weeks",
      phase4Tasks: [
        "Integrate with existing maintenance management systems",
        "Develop visualization dashboards and alerts",
        "Train maintenance staff on new procedures",
        "Implement notification and workflow automation"
      ],
      phase5: "Phase 5: Continuous Improvement",
      phase5Duration: "Ongoing",
      phase5Tasks: [
        "Monitor model performance and refine as needed",
        "Expand to additional equipment and failure modes",
        "Analyze maintenance effectiveness and optimize",
        "Regular review and adjustment of prediction thresholds"
      ],
      keyConsiderations: "Key Considerations",
      dataSecurity: "Data Security",
      dataSecurityDesc: "Ensure all collected data is properly secured and compliant with regulations.",
      changeManagement: "Change Management",
      changeManagementDesc: "Address cultural shifts required for maintenance teams to adopt predictive approaches.",
      skillsGap: "Skills Gap Analysis",
      skillsGapDesc: "Identify training needs for maintenance staff to leverage new technology effectively."
    },
    zh: {
      title: "实施过程",
      subtitle: "在组织中实施预测性维护的系统方法。",
      phase1: "第 1 阶段: 评估",
      phase1Duration: "4-6 周",
      phase1Tasks: [
        "评估现有设备和维护实践",
        "确定高价值资产进行实施",
        "评估数据可用性和质量",
        "定义成功指标和投资回报率目标"
      ],
      phase2: "第 2 阶段: 基础设施搭建",
      phase2Duration: "6-8 周",
      phase2Tasks: [
        "安装必要的传感器和数据收集设备",
        "设置数据存储和处理基础设施",
        "建立数据管道和集成点",
        "配置安全和访问控制"
      ],
      phase3: "第 3 阶段: 模型开发",
      phase3Duration: "8-12 周",
      phase3Tasks: [
        "收集和预处理历史数据",
        "开发和训练初始预测模型",
        "根据历史故障验证模型性能",
        "基于反馈迭代和改进模型"
      ],
      phase4: "第 4 阶段: 部署与集成",
      phase4Duration: "4-6 周",
      phase4Tasks: [
        "与现有维护管理系统集成",
        "开发可视化仪表板和警报",
        "培训维护人员新程序",
        "实施通知和工作流自动化"
      ],
      phase5: "第 5 阶段: 持续改进",
      phase5Duration: "持续进行",
      phase5Tasks: [
        "监控模型性能并根据需要改进",
        "扩展到其他设备和故障模式",
        "分析维护有效性并优化",
        "定期审查和调整预测阈值"
      ],
      keyConsiderations: "关键考虑因素",
      dataSecurity: "数据安全",
      dataSecurityDesc: "确保所有收集的数据都得到适当保护并符合法规要求。",
      changeManagement: "变更管理",
      changeManagementDesc: "解决维护团队采用预测方法所需的文化转变。",
      skillsGap: "技能差距分析",
      skillsGapDesc: "确定维护人员有效利用新技术所需的培训需求。"
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
      
      {/* Implementation Phases */}
      <div className="grid grid-cols-1 gap-4">
        {/* Phase 1 */}
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-400">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <ClipboardList size={32} className="text-blue-600" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-bold text-blue-800">{content[language].phase1}</h3>
                <span className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">{content[language].phase1Duration}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {content[language].phase1Tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600 text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Phase 2 */}
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-green-400">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Settings size={32} className="text-green-600" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-bold text-green-800">{content[language].phase2}</h3>
                <span className="text-sm bg-green-100 text-green-800 py-1 px-3 rounded-full">{content[language].phase2Duration}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {content[language].phase2Tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Phase 3 */}
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-purple-400">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Workflow size={32} className="text-purple-600" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-bold text-purple-800">{content[language].phase3}</h3>
                <span className="text-sm bg-purple-100 text-purple-800 py-1 px-3 rounded-full">{content[language].phase3Duration}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {content[language].phase3Tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-600 text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Phase 4 */}
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-amber-400">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Laptop size={32} className="text-amber-600" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-bold text-amber-800">{content[language].phase4}</h3>
                <span className="text-sm bg-amber-100 text-amber-800 py-1 px-3 rounded-full">{content[language].phase4Duration}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {content[language].phase4Tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-600 text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Phase 5 */}
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-indigo-400">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <BarChart size={32} className="text-indigo-600" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-bold text-indigo-800">{content[language].phase5}</h3>
                <span className="text-sm bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full">{content[language].phase5Duration}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {content[language].phase5Tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-600 text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Considerations */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-blue-800 mb-4">{content[language].keyConsiderations}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Gauge size={20} className="text-blue-600 mr-2" />
              <h4 className="font-semibold text-blue-800">{content[language].dataSecurity}</h4>
            </div>
            <p className="text-sm text-gray-600">{content[language].dataSecurityDesc}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <ClipboardList size={20} className="text-blue-600 mr-2" />
              <h4 className="font-semibold text-blue-800">{content[language].changeManagement}</h4>
            </div>
            <p className="text-sm text-gray-600">{content[language].changeManagementDesc}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Settings size={20} className="text-blue-600 mr-2" />
              <h4 className="font-semibold text-blue-800">{content[language].skillsGap}</h4>
            </div>
            <p className="text-sm text-gray-600">{content[language].skillsGapDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationProcessSlide; 