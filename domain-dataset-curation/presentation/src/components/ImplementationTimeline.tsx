import React from 'react';
import { Calendar, Users, Server, Target, Database, UserPlus, Settings, BarChart, Zap, Globe, Layers, DollarSign } from 'lucide-react';

interface ImplementationTimelineProps {
  language: 'en' | 'zh';
}

const ImplementationTimeline: React.FC<ImplementationTimelineProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Implementation Timeline',
      phases: [
        {
          name: 'Phase 1: Establishment (Months 1-3)',
          color: 'bg-blue-500',
          milestones: [
            { name: 'Business Registration & Legal Setup', time: 'Month 1', icon: <Calendar size={20} /> },
            { name: 'Core Team Assembly', time: 'Months 1-3', icon: <Users size={20} /> },
            { name: 'Infrastructure Development', time: 'Months 2-3', icon: <Server size={20} /> },
            { name: 'Initial Domain Selection', time: 'Month 2', icon: <Target size={20} /> }
          ]
        },
        {
          name: 'Phase 2: Market Entry (Months 4-6)',
          color: 'bg-green-500',
          milestones: [
            { name: 'Pilot Dataset Creation', time: 'Months 4-5', icon: <Database size={20} /> },
            { name: 'First Client Acquisition', time: 'Months 5-6', icon: <UserPlus size={20} /> },
            { name: 'Process Refinement', time: 'Months 5-6', icon: <Settings size={20} /> },
            { name: 'Marketing Campaign Launch', time: 'Month 6', icon: <BarChart size={20} /> }
          ]
        },
        {
          name: 'Phase 3: Growth (Months 7-12)',
          color: 'bg-purple-500',
          milestones: [
            { name: 'Service Expansion', time: 'Months 7-9', icon: <Layers size={20} /> },
            { name: 'Team Growth', time: 'Months 7-12', icon: <Users size={20} /> },
            { name: 'Additional Domain Expansion', time: 'Months 9-11', icon: <Target size={20} /> },
            { name: 'Partnership Development', time: 'Months 10-12', icon: <Users size={20} /> }
          ]
        },
        {
          name: 'Phase 4: Scaling (Year 2)',
          color: 'bg-amber-500',
          milestones: [
            { name: 'Automated Processes', time: 'Months 13-16', icon: <Zap size={20} /> },
            { name: 'Multiple Vertical Coverage', time: 'Months 14-18', icon: <Layers size={20} /> },
            { name: 'Funding Round Preparation', time: 'Months 16-18', icon: <DollarSign size={20} /> },
            { name: 'International Market Entry', time: 'Months 19-24', icon: <Globe size={20} /> }
          ]
        }
      ],
      keyMilestones: {
        title: 'Key Milestones:',
        milestones: [
          { name: 'Complete first pilot dataset ready for demonstration', phase: 'Phase 2', time: 'Month 4' },
          { name: 'Acquire first paying client', phase: 'Phase 2', time: 'Month 5' },
          { name: 'Reach operational break-even', phase: 'Phase 3', time: 'Month 10' },
          { name: 'Establish partnerships with at least two AI solution providers', phase: 'Phase 3', time: 'Month 12' },
          { name: 'Complete Series A funding (if needed for expansion)', phase: 'Phase 4', time: 'Month 21' }
        ]
      }
    },
    zh: {
      title: '实施时间表',
      phases: [
        {
          name: '第1阶段：建立（1-3个月）',
          color: 'bg-blue-500',
          milestones: [
            { name: '业务注册和法律设置', time: '第1个月', icon: <Calendar size={20} /> },
            { name: '核心团队组建', time: '第1-3个月', icon: <Users size={20} /> },
            { name: '基础设施开发', time: '第2-3个月', icon: <Server size={20} /> },
            { name: '初始领域选择', time: '第2个月', icon: <Target size={20} /> }
          ]
        },
        {
          name: '第2阶段：市场进入（4-6个月）',
          color: 'bg-green-500',
          milestones: [
            { name: '试点数据集创建', time: '第4-5个月', icon: <Database size={20} /> },
            { name: '首个客户获取', time: '第5-6个月', icon: <UserPlus size={20} /> },
            { name: '流程优化', time: '第5-6个月', icon: <Settings size={20} /> },
            { name: '营销活动启动', time: '第6个月', icon: <BarChart size={20} /> }
          ]
        },
        {
          name: '第3阶段：增长（7-12个月）',
          color: 'bg-purple-500',
          milestones: [
            { name: '服务扩展', time: '第7-9个月', icon: <Layers size={20} /> },
            { name: '团队增长', time: '第7-12个月', icon: <Users size={20} /> },
            { name: '额外领域扩展', time: '第9-11个月', icon: <Target size={20} /> },
            { name: '合作伙伴关系发展', time: '第10-12个月', icon: <Users size={20} /> }
          ]
        },
        {
          name: '第4阶段：扩展（第2年）',
          color: 'bg-amber-500',
          milestones: [
            { name: '自动化流程', time: '第13-16个月', icon: <Zap size={20} /> },
            { name: '多垂直领域覆盖', time: '第14-18个月', icon: <Layers size={20} /> },
            { name: '融资轮准备', time: '第16-18个月', icon: <DollarSign size={20} /> },
            { name: '国际市场进入', time: '第19-24个月', icon: <Globe size={20} /> }
          ]
        }
      ],
      keyMilestones: {
        title: '关键里程碑：',
        milestones: [
          { name: '完成首个可演示的试点数据集', phase: '第2阶段', time: '第4个月' },
          { name: '获取首个付费客户', phase: '第2阶段', time: '第5个月' },
          { name: '达到运营收支平衡', phase: '第3阶段', time: '第10个月' },
          { name: '与至少两家AI解决方案提供商建立合作关系', phase: '第3阶段', time: '第12个月' },
          { name: '完成A轮融资（如果需要扩展）', phase: '第4阶段', time: '第21个月' }
        ]
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{content[language].title}</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
        
        {/* Phases */}
        <div className="space-y-12">
          {content[language].phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              {/* Phase marker */}
              <div className={`absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full ${phase.color} border-4 border-white shadow-md z-10`}></div>
              
              {/* Phase content */}
              <div className="ml-16">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{phase.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <div key={milestoneIndex} className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="text-blue-600 mr-2">
                          {milestone.icon}
                        </div>
                        <h4 className="font-medium text-gray-800">{milestone.name}</h4>
                      </div>
                      <div className="text-sm text-gray-600 ml-7">{milestone.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">{content[language].keyMilestones.title}</h3>
        
        <div className="space-y-4">
          {content[language].keyMilestones.milestones.map((milestone, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{milestone.name}</h4>
                <div className="flex items-center mt-1">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">{milestone.phase}</span>
                  <span className="text-sm text-gray-600">{milestone.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementationTimeline;
