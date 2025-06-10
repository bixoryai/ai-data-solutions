import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  GitBranch, 
  Clock, 
  CheckCircle,
  UserPlus,
  FileText,
  Share2,
  History,
  Lock
} from 'lucide-react';

interface CollaborationWorkflowProps {
  language: 'en' | 'zh';
  selectedDomain: 'healthcare' | 'finance' | 'manufacturing';
}

const CollaborationWorkflow: React.FC<CollaborationWorkflowProps> = ({ language, selectedDomain }) => {
  const [activeTab, setActiveTab] = useState('team-management');

  const content = {
    en: {
      title: 'Collaboration & Workflow',
      subtitle: 'Manage team collaboration and workflow for domain dataset curation',
      teamManagementTab: 'Team Management',
      versionControlTab: 'Version Control',
      approvalWorkflowTab: 'Approval Workflow',
      inviteTeamMember: 'Invite Team Member',
      createNewBranch: 'Create New Branch',
      viewHistory: 'View History',
      // Domain-specific content
      healthcare: {
        title: 'Healthcare Collaboration',
        roles: [
          'Medical Data Scientist',
          'Clinical Expert',
          'Compliance Officer',
          'Data Engineer'
        ],
        workflowSteps: [
          'Data Collection',
          'Clinical Validation',
          'Compliance Review',
          'Final Approval'
        ]
      },
      finance: {
        title: 'Financial Collaboration',
        roles: [
          'Financial Analyst',
          'Risk Management Specialist',
          'Compliance Officer',
          'Data Engineer'
        ],
        workflowSteps: [
          'Data Collection',
          'Risk Assessment',
          'Compliance Review',
          'Final Approval'
        ]
      },
      manufacturing: {
        title: 'Manufacturing Collaboration',
        roles: [
          'Production Specialist',
          'Quality Control Expert',
          'Process Engineer',
          'Data Scientist'
        ],
        workflowSteps: [
          'Data Collection',
          'Quality Validation',
          'Process Verification',
          'Final Approval'
        ]
      }
    },
    zh: {
      title: '协作与工作流',
      subtitle: '管理领域数据集策划的团队协作和工作流',
      teamManagementTab: '团队管理',
      versionControlTab: '版本控制',
      approvalWorkflowTab: '审批工作流',
      inviteTeamMember: '邀请团队成员',
      createNewBranch: '创建新分支',
      viewHistory: '查看历史',
      // Domain-specific content
      healthcare: {
        title: '医疗保健协作',
        roles: [
          '医疗数据科学家',
          '临床专家',
          '合规官',
          '数据工程师'
        ],
        workflowSteps: [
          '数据收集',
          '临床验证',
          '合规审查',
          '最终批准'
        ]
      },
      finance: {
        title: '金融协作',
        roles: [
          '金融分析师',
          '风险管理专家',
          '合规官',
          '数据工程师'
        ],
        workflowSteps: [
          '数据收集',
          '风险评估',
          '合规审查',
          '最终批准'
        ]
      },
      manufacturing: {
        title: '制造业协作',
        roles: [
          '生产专家',
          '质量控制专家',
          '流程工程师',
          '数据科学家'
        ],
        workflowSteps: [
          '数据收集',
          '质量验证',
          '流程验证',
          '最终批准'
        ]
      }
    }
  };

  // Get domain-specific content
  const domainContent = content[language][selectedDomain];

  // Sample team members
  const teamMembers = [
    { id: 1, name: 'Alex Johnson', role: domainContent.roles[0], status: 'active' },
    { id: 2, name: 'Sarah Chen', role: domainContent.roles[1], status: 'active' },
    { id: 3, name: 'Michael Rodriguez', role: domainContent.roles[2], status: 'pending' },
    { id: 4, name: 'Emma Wilson', role: domainContent.roles[3], status: 'active' }
  ];

  // Sample version history
  const versionHistory = [
    { id: 'v1.2.3', date: '2025-04-01', author: 'Alex Johnson', description: 'Updated feature engineering' },
    { id: 'v1.2.2', date: '2025-03-28', author: 'Sarah Chen', description: 'Added domain-specific rules' },
    { id: 'v1.2.1', date: '2025-03-25', author: 'Emma Wilson', description: 'Data cleaning improvements' },
    { id: 'v1.2.0', date: '2025-03-20', author: 'Alex Johnson', description: 'Initial dataset curation' }
  ];

  // Sample workflow tasks
  const workflowTasks = [
    { id: 1, name: domainContent.workflowSteps[0], assignee: 'Alex Johnson', status: 'completed', dueDate: '2025-03-25' },
    { id: 2, name: domainContent.workflowSteps[1], assignee: 'Sarah Chen', status: 'in-progress', dueDate: '2025-04-05' },
    { id: 3, name: domainContent.workflowSteps[2], assignee: 'Michael Rodriguez', status: 'pending', dueDate: '2025-04-10' },
    { id: 4, name: domainContent.workflowSteps[3], assignee: 'Team Lead', status: 'not-started', dueDate: '2025-04-15' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{content[language].title}</h2>
        <p className="mt-2 text-gray-600">{content[language].subtitle}</p>
      </div>

      {/* Collaboration Tools */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <Users size={24} className="text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold">{domainContent.title}</h3>
        </div>
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('team-management')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'team-management'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].teamManagementTab}
            </button>
            <button
              onClick={() => setActiveTab('version-control')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'version-control'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].versionControlTab}
            </button>
            <button
              onClick={() => setActiveTab('approval-workflow')}
              className={`py-3 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'approval-workflow'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].approvalWorkflowTab}
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="mb-6">
          {activeTab === 'team-management' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Users size={20} className="text-blue-600 mr-2" />
                  <h4 className="font-medium text-gray-800">{language === 'en' ? 'Team Members' : '团队成员'}</h4>
                </div>
                <button className="btn btn-outline text-sm py-1 flex items-center">
                  <UserPlus size={16} className="mr-1" />
                  {content[language].inviteTeamMember}
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Name' : '姓名'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Role' : '角色'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Status' : '状态'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Actions' : '操作'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teamMembers.map((member) => (
                      <tr key={member.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            member.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {member.status === 'active' 
                              ? (language === 'en' ? 'Active' : '活跃') 
                              : (language === 'en' ? 'Pending' : '待定')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            {language === 'en' ? 'Edit' : '编辑'}
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            {language === 'en' ? 'Remove' : '移除'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <MessageSquare size={18} className="text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium text-gray-800">
                      {language === 'en' ? 'Team Communication' : '团队沟通'}
                    </h5>
                    <p className="mt-1 text-sm text-gray-600">
                      {language === 'en' 
                        ? 'Coordinate with team members on dataset curation tasks.' 
                        : '与团队成员协调数据集策划任务。'}
                    </p>
                    <div className="mt-3 flex space-x-2">
                      <button className="btn btn-outline text-sm py-1">
                        {language === 'en' ? 'Message Team' : '消息团队'}
                      </button>
                      <button className="btn btn-outline text-sm py-1">
                        {language === 'en' ? 'Schedule Meeting' : '安排会议'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'version-control' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <GitBranch size={20} className="text-purple-600 mr-2" />
                  <h4 className="font-medium text-gray-800">{language === 'en' ? 'Version Control' : '版本控制'}</h4>
                </div>
                <button className="btn btn-outline text-sm py-1 flex items-center">
                  <GitBranch size={16} className="mr-1" />
                  {content[language].createNewBranch}
                </button>
              </div>
              
              <div className="mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-medium text-gray-800">
                        {language === 'en' ? 'Current Branch' : '当前分支'}
                      </h5>
                      <div className="flex items-center mt-1">
                        <GitBranch size={16} className="text-green-600 mr-1" />
                        <span className="text-sm text-gray-700">main</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-800">
                        {language === 'en' ? 'Latest Version' : '最新版本'}
                      </h5>
                      <div className="flex items-center mt-1">
                        <Clock size={16} className="text-blue-600 mr-1" />
                        <span className="text-sm text-gray-700">v1.2.3</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-800">
                        {language === 'en' ? 'Last Updated' : '最后更新'}
                      </h5>
                      <div className="flex items-center mt-1">
                        <Clock size={16} className="text-gray-600 mr-1" />
                        <span className="text-sm text-gray-700">2025-04-01</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h5 className="text-sm font-medium text-gray-800 mb-3">
                  {language === 'en' ? 'Version History' : '版本历史'}
                </h5>
                
                <div className="space-y-3">
                  {versionHistory.map((version) => (
                    <div key={version.id} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start">
                        <History size={18} className="text-purple-600 mr-2 mt-0.5" />
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h6 className="text-sm font-medium text-gray-800">{version.id}</h6>
                            <span className="text-xs text-gray-500">{version.date}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">{version.description}</p>
                          <div className="mt-2 text-xs text-gray-500">
                            {language === 'en' ? 'By' : '由'} {version.author}
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            {language === 'en' ? 'View' : '查看'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <button className="btn btn-outline text-sm py-1 flex items-center mx-auto">
                    <History size={16} className="mr-1" />
                    {content[language].viewHistory}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'approval-workflow' && (
            <div>
              <div className="flex items-center mb-4">
                <FileText size={20} className="text-amber-600 mr-2" />
                <h4 className="font-medium text-gray-800">{language === 'en' ? 'Approval Workflow' : '审批工作流'}</h4>
              </div>
              
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  {workflowTasks.map((task, index) => (
                    <div key={task.id} className="relative mb-6 pl-10">
                      <div className="absolute left-0 top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200 z-10">
                        {task.status === 'completed' ? (
                          <CheckCircle size={20} className="text-green-600" />
                        ) : task.status === 'in-progress' ? (
                          <Clock size={20} className="text-blue-600" />
                        ) : task.status === 'pending' ? (
                          <Lock size={20} className="text-amber-600" />
                        ) : (
                          <Clock size={20} className="text-gray-400" />
                        )}
                      </div>
                      
                      <div className={`bg-white rounded-lg p-4 border ${
                        task.status === 'completed' 
                          ? 'border-green-200' 
                          : task.status === 'in-progress' 
                          ? 'border-blue-200' 
                          : 'border-gray-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="text-sm font-medium text-gray-800">{task.name}</h5>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            task.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : task.status === 'in-progress' 
                              ? 'bg-blue-100 text-blue-800' 
                              : task.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {task.status === 'completed' 
                              ? (language === 'en' ? 'Completed' : '已完成') 
                              : task.status === 'in-progress' 
                              ? (language === 'en' ? 'In Progress' : '进行中') 
                              : task.status === 'pending' 
                              ? (language === 'en' ? 'Pending' : '待定') 
                              : (language === 'en' ? 'Not Started' : '未开始')}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Users size={16} className="mr-1" />
                          <span>{language === 'en' ? 'Assignee: ' : '负责人：'}{task.assignee}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock size={16} className="mr-1" />
                          <span>{language === 'en' ? 'Due: ' : '截止日期：'}{task.dueDate}</span>
                        </div>
                        
                        {task.status === 'in-progress' && (
                          <div className="mt-3">
                            <button className="btn btn-primary text-sm py-1 w-full">
                              {language === 'en' ? 'Submit for Approval' : '提交审批'}
                            </button>
                          </div>
                        )}
                        
                        {task.status === 'pending' && (
                          <div className="mt-3 flex space-x-2">
                            <button className="btn btn-primary text-sm py-1 flex-1">
                              {language === 'en' ? 'Approve' : '批准'}
                            </button>
                            <button className="btn btn-outline text-sm py-1 flex-1">
                              {language === 'en' ? 'Request Changes' : '请求更改'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="flex items-start">
                  <Share2 size={18} className="text-amber-600 mr-2 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium text-gray-800">
                      {language === 'en' ? 'Workflow Settings' : '工作流设置'}
                    </h5>
                    <p className="mt-1 text-sm text-gray-600">
                      {language === 'en' 
                        ? 'Configure approval requirements and notification settings.' 
                        : '配置审批要求和通知设置。'}
                    </p>
                    <div className="mt-3">
                      <button className="btn btn-outline text-sm py-1">
                        {language === 'en' ? 'Configure Workflow' : '配置工作流'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollaborationWorkflow;
