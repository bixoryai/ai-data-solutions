import React from 'react';

interface TeamAndLeadershipProps {
  language: 'en' | 'zh';
}

const TeamAndLeadership: React.FC<TeamAndLeadershipProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Team & Leadership',
      subtitle: 'Our Experienced Leadership Team:',
      leaders: [
        {
          name: 'Dr. Sarah Chen',
          title: 'CEO & Co-founder',
          background: 'Ph.D. in Machine Learning, 10+ years in AI & data privacy',
          experience: 'Former: Lead Data Scientist at Tech Giant, Research Scientist at Top University'
        },
        {
          name: 'Michael Rodriguez',
          title: 'CTO & Co-founder',
          background: 'MS in Computer Science, 15+ years in software architecture',
          experience: 'Former: VP Engineering at FinTech Startup, Principal Engineer at Enterprise Software Co.'
        },
        {
          name: 'Jennifer Wu',
          title: 'Chief Data Officer',
          background: 'Ph.D. in Statistics, 12+ years in data science',
          experience: 'Former: Head of Analytics at Healthcare Corp., Data Science Director at Consulting Firm'
        },
        {
          name: 'David Park',
          title: 'VP of Business Development',
          background: 'MBA, 8+ years in enterprise sales',
          experience: 'Former: Sales Director at Data Platform Co., Business Development at Cloud Provider'
        }
      ],
      advisors: {
        title: 'Advisory Board:',
        members: [
          'Prof. Alan Johnson - Privacy & Cryptography Expert',
          'Lisa Thompson - Former CIO of Fortune 500 Financial Institution',
          'Dr. Robert Garcia - AI Ethics Researcher & Author'
        ]
      },
      teamStats: {
        title: 'Team Composition:',
        stats: [
          { name: 'Data Scientists & ML Engineers', count: 8 },
          { name: 'Software Developers', count: 6 },
          { name: 'Privacy & Security Specialists', count: 3 },
          { name: 'Sales & Marketing', count: 4 },
          { name: 'Operations & Support', count: 3 }
        ]
      }
    },
    zh: {
      title: '团队与领导力',
      subtitle: '我们经验丰富的领导团队:',
      leaders: [
        {
          name: '陈博士',
          title: 'CEO和联合创始人',
          background: '机器学习博士，10+年AI和数据隐私经验',
          experience: '曾任：科技巨头首席数据科学家，顶尖大学研究科学家'
        },
        {
          name: '迈克尔·罗德里格斯',
          title: 'CTO和联合创始人',
          background: '计算机科学硕士，15+年软件架构经验',
          experience: '曾任：金融科技初创公司工程副总裁，企业软件公司首席工程师'
        },
        {
          name: '吴珍妮',
          title: '首席数据官',
          background: '统计学博士，12+年数据科学经验',
          experience: '曾任：医疗公司分析主管，咨询公司数据科学总监'
        },
        {
          name: '朴大卫',
          title: '业务发展副总裁',
          background: 'MBA，8+年企业销售经验',
          experience: '曾任：数据平台公司销售总监，云提供商业务发展'
        }
      ],
      advisors: {
        title: '顾问委员会:',
        members: [
          '艾伦·约翰逊教授 - 隐私与密码学专家',
          '丽莎·汤普森 - 前财富500强金融机构CIO',
          '罗伯特·加西亚博士 - AI伦理研究员和作者'
        ]
      },
      teamStats: {
        title: '团队组成:',
        stats: [
          { name: '数据科学家和ML工程师', count: 8 },
          { name: '软件开发人员', count: 6 },
          { name: '隐私和安全专家', count: 3 },
          { name: '销售和营销', count: 4 },
          { name: '运营和支持', count: 3 }
        ]
      }
    }
  };

  const { title, subtitle, leaders, advisors, teamStats } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">{title}</h2>
      <p className="text-xl text-center mb-8">{subtitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-primary-400 mb-1">{leader.name}</h3>
            <p className="text-lg font-medium text-yellow-300 mb-3">{leader.title}</p>
            <p className="mb-2"><span className="font-medium">Background:</span> {leader.background}</p>
            <p><span className="font-medium">Experience:</span> {leader.experience}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-primary-400 mb-4">{advisors.title}</h3>
          <ul className="space-y-3">
            {advisors.members.map((member, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>{member}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-primary-400 mb-4">{teamStats.title}</h3>
          <div className="space-y-3">
            {teamStats.stats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{stat.name}</span>
                <span className="font-bold text-yellow-300">{stat.count}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 border-t border-gray-700">
              <span className="font-bold">Total Team Size</span>
              <span className="font-bold text-yellow-300">
                {teamStats.stats.reduce((sum, stat) => sum + stat.count, 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-primary-900 to-primary-700 rounded-lg border border-primary-700">
        <p className="text-center text-xl">
          {language === 'en' 
            ? "Our team combines deep technical expertise in AI, data science, and privacy with strong business acumen and industry knowledge."
            : "我们的团队将AI、数据科学和隐私方面的深厚技术专长与强大的商业敏锐度和行业知识相结合。"}
        </p>
      </div>
    </div>
  );
};

export default TeamAndLeadership;
