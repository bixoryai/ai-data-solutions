import React, { useState, useEffect } from 'react';
import './Presentation.css';
import { 
  BrainCircuit,
  LineChart,
  DollarSign,
  TrendingUp,
  Database,
  Network,
  AlertTriangle,
  Workflow,
  Server,
  GitBranch,
  AlertCircle,
  FileText,
  Heart,
  Factory,
  Lightbulb,
  Shield,
  Clock,
  Layers,
  Zap,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  Home,
  Search,
  Laptop,
  PieChart,
  BarChart4,
  Award,
  Code,
  Target,
  Lock,
  Cpu,
  Calendar,
  ArrowUpRight,
  Map,
  Activity,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

// Define types for tab content
type AppItem = {
  metric: string;
  title: string;
  description: string;
};

type TabContentType = {
  healthcare: AppItem[];
  financial: AppItem[];
  manufacturing: AppItem[];
  energy: AppItem[];
};

type TabType = 'healthcare' | 'financial' | 'manufacturing' | 'energy';

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('healthcare');
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  // Define translations
  const translations = {
    en: {
      title: 'Industry Analytics',
      subtitle: 'AI-Powered Solutions for Manufacturing Excellence',
      nextSlide: 'Next Slide',
      prevSlide: 'Previous Slide',
      slideOf: 'of',
      thankYou: 'Thank You',
      forYourAttention: 'For Your Attention',
      contactUs: 'Contact Us',
      email: 'Email',
      phone: 'Phone',
      website: 'Website',
      discovery: 'Discovery & AI Value Assessment',
      firstModel: 'First AI Model Deployment',
      insights: 'Initial Insights & Validation',
      integration: 'Process Integration',
      measurement: 'Value Measurement',
      // Slide titles and content
      industrySpecificAI: 'Industry-specific AI Analytics',
      transformingIndustries: 'Transforming Industries with AI-Powered Insights',
      predictiveAnalytics: 'Predictive Analytics',
      operationalEfficiency: 'Operational Efficiency',
      valueAcceleration: 'Value Acceleration',
      // Company strengths
      industryAIExpertise: 'Industry + AI Expertise',
      domainKnowledge: 'Deep domain knowledge combined with cutting-edge AI capabilities',
      provenMethodology: 'Proven Implementation Methodology',
      successRate: '95% success rate with our 90-day deployment framework',
      proprietaryAlgorithms: 'Proprietary Algorithms',
      betterAccuracy: 'Industry-specific models delivering 30-50% better accuracy',
      enterpriseGrade: 'Enterprise-Grade Platform',
      securityScalability: 'Security, scalability, and compliance built into our core architecture',
      transparentROI: 'Transparent ROI Framework',
      clearMetrics: 'Clear measurement methodology with documented success metrics',
      futureProof: 'Future-Proof Technology',
      continuousLearning: 'Continuous learning systems that improve with every implementation',
      // Company stats
      implementationSuccessRate: 'Implementation Success Rate',
      higherAccuracy: 'Higher Accuracy vs. Generic AI',
      fasterTimeToValue: 'Faster Time to Value',
      // Next steps
      discoveryWorkshop: 'Discovery Workshop',
      twoHourSession: '2-hour session to identify high-value opportunities',
      aiValueAssessment: 'AI Value Assessment',
      twoWeekAnalysis: '2-week analysis of your specific environment',
      implementationPlan: 'Implementation Plan',
      detailedRoadmap: 'Detailed roadmap tailored to your priorities',
      pilotDeployment: 'Pilot Deployment',
      eightWeekImplementation: '8-week implementation of first high-value use case'
    },
    zh: {
      title: '行业分析',
      subtitle: '制造业卓越的AI驱动解决方案',
      nextSlide: '下一张幻灯片',
      prevSlide: '上一张幻灯片',
      slideOf: '/',
      thankYou: '谢谢',
      forYourAttention: '感谢您的关注',
      contactUs: '联系我们',
      email: '电子邮件',
      phone: '电话',
      website: '网站',
      discovery: '发现和AI价值评估',
      firstModel: '首个AI模型部署',
      insights: '初步洞察和验证',
      integration: '流程整合',
      measurement: '价值衡量',
      // Slide titles and content
      industrySpecificAI: '行业特定AI分析',
      transformingIndustries: '使用AI驱动的洞察力改变行业',
      predictiveAnalytics: '预测分析',
      operationalEfficiency: '运营效率',
      valueAcceleration: '价值加速',
      // Company strengths
      industryAIExpertise: '行业 + AI专业知识',
      domainKnowledge: '深度的领域知识与尖端的AI能力相结合',
      provenMethodology: '经过验证的实施方法',
      successRate: '我们的90天部署框架成功率达95%',
      proprietaryAlgorithms: '专有算法',
      betterAccuracy: '行业特定模型提供30-50%的更高准确度',
      enterpriseGrade: '企业级平台',
      securityScalability: '安全性、可扩展性和合规性内置于核心架构',
      transparentROI: '透明的ROI框架',
      clearMetrics: '清晰的测量方法和有文档记录的成功指标',
      futureProof: '面向未来的技术',
      continuousLearning: '随着每次实施而不断改进的持续学习系统',
      // Company stats
      implementationSuccessRate: '实施成功率',
      higherAccuracy: '相比通用AI的更高准确度',
      fasterTimeToValue: '更快的价值实现时间',
      // Next steps
      discoveryWorkshop: '发现工作坊',
      twoHourSession: '2小时会议以识别高价值机会',
      aiValueAssessment: 'AI价值评估',
      twoWeekAnalysis: '2周分析您的特定环境',
      implementationPlan: '实施计划',
      detailedRoadmap: '根据您的优先事项量身定制的详细路线图',
      pilotDeployment: '试点部署',
      eightWeekImplementation: '8周实施第一个高价值用例'
    }
  };

  // Helper function to get translated text
  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || key;
  };

  // Timeline content for Slide 7
  const timelinePhases = [
    {
      weeks: language === 'en' ? "Week 1-4" : "第1-4周",
      title: t('discovery'),
      description: language === 'en' ? "Identify high-value opportunities and establish baselines" : "识别高价值机会并建立基准"
    },
    {
      weeks: language === 'en' ? "Week 5-6" : "第5-6周",
      title: t('firstModel'),
      description: language === 'en' ? "Implement initial models for quick wins" : "实施初步模型以获得快速成果"
    },
    {
      weeks: language === 'en' ? "Week 7-8" : "第7-8周",
      title: t('insights'),
      description: language === 'en' ? "Evaluate results and refine models" : "评估结果并优化模型"
    },
    {
      weeks: language === 'en' ? "Week 9-10" : "第9-10周",
      title: t('integration'),
      description: language === 'en' ? "Embed AI into workflows and systems" : "将AI嵌入工作流程和系统"
    },
    {
      weeks: language === 'en' ? "Week 11-12" : "第11-12周",
      title: t('measurement'),
      description: language === 'en' ? "Quantify impact and plan expansion" : "量化影响并计划扩展"
    }
  ];

  // Tab content for industry applications
  const tabContent: TabContentType = {
    healthcare: [
      { metric: '22%', title: 'Patient Journey Optimization', description: 'Reducing length of stay through ML-optimized clinical pathways' },
      { metric: '97%', title: 'Medical Image Analysis', description: 'Diagnostic accuracy on radiology images with specialized computer vision' },
      { metric: '35%', title: 'Treatment Response Prediction', description: 'Personalized medicine algorithms improving outcomes' }
    ],
    financial: [
      { metric: '52%', title: 'Fraud Detection Networks', description: 'Graph-based AI detecting more fraud with 60% fewer false positives' },
      { metric: '38%', title: 'Risk Modeling', description: 'Combining traditional and alternative data for more accurate risk assessment' },
      { metric: '99.2%', title: 'Regulatory Compliance', description: 'NLP extracting obligations from complex regulations with high accuracy' }
    ],
    manufacturing: [
      { metric: '6-10x', title: 'Predictive Quality Control', description: 'Detecting defects earlier than traditional methods' },
      { metric: '15-22%', title: 'Digital Twin Optimization', description: 'Virtual simulations reducing production costs' },
      { metric: '93%', title: 'Predictive Maintenance', description: 'Accurate failure prediction preventing unplanned downtime' }
    ],
    energy: [
      { metric: '99.2%', title: 'Grid Load Forecasting', description: 'AI predicting demand patterns with high accuracy for optimal distribution' },
      { metric: '3-4 wks', title: 'Preventative Infrastructure', description: 'Predicting equipment failures weeks before occurrence' },
      { metric: '17-25%', title: 'Consumption Optimization', description: 'Reducing energy waste through intelligent usage patterns' }
    ]
  };

  // Company strengths content for Slide 11
  const companyStrengths = [
    {
      title: t('industryAIExpertise'),
      description: t('domainKnowledge')
    },
    {
      title: t('provenMethodology'),
      description: t('successRate')
    },
    {
      title: t('proprietaryAlgorithms'),
      description: t('betterAccuracy')
    },
    {
      title: t('enterpriseGrade'),
      description: t('securityScalability')
    },
    {
      title: t('transparentROI'),
      description: t('clearMetrics')
    },
    {
      title: t('futureProof'),
      description: t('continuousLearning')
    }
  ];

  // Company stats
  const companyStats = [
    {
      value: "95%",
      label: t('implementationSuccessRate')
    },
    {
      value: "30-50%",
      label: t('higherAccuracy')
    },
    {
      value: "3x",
      label: t('fasterTimeToValue')
    }
  ];

  // Next steps content for Slide 12
  const nextSteps = [
    {
      title: t('discoveryWorkshop'),
      description: t('twoHourSession')
    },
    {
      title: t('aiValueAssessment'),
      description: t('twoWeekAnalysis')
    },
    {
      title: t('implementationPlan'),
      description: t('detailedRoadmap')
    },
    {
      title: t('pilotDeployment'),
      description: t('eightWeekImplementation')
    }
  ];

  const slides = [
    {
      title: "Industry-specific AI Analytics",
      subtitle: "Transforming Industries with AI-Powered Insights",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1>{t('industrySpecificAI')}</h1>
            <h3>{t('transformingIndustries')}</h3>
            
            <div className="tagline">
              <span>{t('predictiveAnalytics')}</span>
              <span className="divider">•</span>
              <span>{t('operationalEfficiency')}</span>
              <span className="divider">•</span>
              <span>{t('valueAcceleration')}</span>
            </div>
          </div>
          
          <div className="logo-container">
            <div className="logo-circle">
              <img src={`${process.env.PUBLIC_URL}/images/favicon.png`} alt="Bixing Technology Logo" />
            </div>
            <div className="company-name">Bixing AI Technology</div>
          </div>
        </div>
      )
    },
    {
      title: "The Opportunity",
      subtitle: "Why Industry-specific AI Analytics Now?",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1>The Opportunity</h1>
            <h3>Why Industry-specific AI Analytics Now?</h3>
            
            <div className="opportunity-points">
              <div className="opportunity-item">
                <div className="opportunity-icon">
                  <DollarSign size={28} />
                </div>
                <div className="opportunity-text">
                  <span className="value">$7B</span> market by 2030
                </div>
              </div>
              
              <div className="opportunity-item">
                <div className="opportunity-icon">
                  <TrendingUp size={28} />
                </div>
                <div className="opportunity-text">
                  <span className="value">3X</span> higher ROI from industry-tailored AI
                </div>
              </div>
              
              <div className="opportunity-item">
                <div className="opportunity-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="opportunity-text">
                  <div className="opportunity-title">Competitive Differentiation</div>
                  Generic AI no longer sufficient for competitive advantage
                </div>
              </div>
              
              <div className="opportunity-item">
                <div className="opportunity-icon">
                  <Database size={28} />
                </div>
                <div className="opportunity-text">
                  <div className="opportunity-title">Data Monetization</div>
                  Existing systems contain valuable data waiting to be unlocked
                </div>
              </div>
            </div>
            
            <div className="tagline opportunity-tagline">
              <div className="pulse-indicator"></div>
              <span>Industry AI adoption expected to grow at</span>
              <span className="highlight">24% CAGR</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Key Business Challenges We Solve",
      subtitle: "Industry Pain Points",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1>Key Business Challenges We Solve</h1>
            <h3>Industry Pain Points</h3>
            
            <div className="challenges-matrix">
              <div className="challenge-card top-left">
                <div className="card-icon decision-icon">
                  <Network size={28} />
                </div>
                <div className="card-title">Complex Decision Making</div>
                <div className="card-description">Multiple variables, non-linear relationships</div>
              </div>
              
              <div className="challenge-card top-right">
                <div className="card-icon predictive-icon">
                  <AlertTriangle size={28} />
                </div>
                <div className="card-title">Predictive Gaps</div>
                <div className="card-description">Unable to anticipate failures, trends, and opportunities</div>
              </div>
              
              <div className="challenge-card bottom-left">
                <div className="card-icon operational-icon">
                  <Workflow size={28} />
                </div>
                <div className="card-title">Operational Inefficiencies</div>
                <div className="card-description">Sub-optimal processes despite abundant data</div>
              </div>
              
              <div className="challenge-card bottom-right">
                <div className="card-icon data-value-icon">
                  <Server size={28} />
                </div>
                <div className="card-title">Untapped Data Value</div>
                <div className="card-description">Existing systems store data but don't extract insights</div>
              </div>
              
              <div className="challenge-card center">
                <div className="card-icon adoption-icon">
                  <GitBranch size={28} />
                </div>
                <div className="card-title">AI Adoption Barriers</div>
                <div className="card-description">Fragmented systems, technical complexity, ROI uncertainty</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our AI-First Approach",
      subtitle: "Industry-Specific AI Solutions",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1>{language === 'en' ? 'Our AI-First Approach' : '我们的AI优先方法'}</h1>
            <h3>{language === 'en' ? 'Advanced AI Tailored to Industry Needs' : '针对行业需求量身定制的高级AI'}</h3>
            
            <div className="ai-capabilities-section">
              <div className="section-title">{language === 'en' ? 'Cross-Industry AI Capabilities:' : '跨行业AI能力:'}</div>
              <div className="capabilities-grid">
                <div className="capability-card">
                  <div className="card-icon predictive-icon">
                    <LineChart size={32} />
                  </div>
                  <div className="card-content">
                    <div className="card-title">
                      Predictive Analytics
                    </div>
                    <div className="card-description">AI models that forecast trends and outcomes with 40-60% higher accuracy</div>
                  </div>
                </div>
                
                <div className="capability-card">
                  <div className="card-icon anomaly-icon">
                    <AlertCircle size={32} />
                  </div>
                  <div className="card-content">
                    <div className="card-title">
                      Anomaly Detection
                    </div>
                    <div className="card-description">Identifying unusual patterns across complex datasets in real-time</div>
                  </div>
                </div>
                
                <div className="capability-card">
                  <div className="card-icon nlp-icon">
                    <FileText size={32} />
                  </div>
                  <div className="card-content">
                    <div className="card-title">
                      Natural Language Understanding
                    </div>
                    <div className="card-description">Industry-specific document processing and knowledge extraction</div>
                  </div>
                </div>
                
                <div className="capability-card">
                  <div className="card-icon decision-icon">
                    <BrainCircuit size={32} />
                  </div>
                  <div className="card-content">
                    <div className="card-title">
                      Automated Decision Support
                    </div>
                    <div className="card-description">Augmenting human decisions with AI-driven recommendations</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="key-differentiator">
              <span>Our capabilities deliver <strong>40-60% higher accuracy</strong> than generic AI solutions</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Industry-Specific AI Applications",
      subtitle: "Tailored Solutions for Each Industry",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1>{language === 'en' ? 'Industry-Specific AI Applications' : '行业特定AI应用'}</h1>
            <h3>{language === 'en' ? 'Tailored Solutions for Each Industry' : '针对每个行业的定制解决方案'}</h3>
            
            <div className="industry-applications-section">
              <div className="applications-tabs">
                <div className="tab-headers">
                  <div 
                    className={`tab-header ${activeTab === 'healthcare' ? 'active' : ''}`}
                    onClick={() => handleTabClick('healthcare')}
                  >
                    <Heart size={20} />
                    <span>Healthcare</span>
                  </div>
                  <div 
                    className={`tab-header ${activeTab === 'financial' ? 'active' : ''}`}
                    onClick={() => handleTabClick('financial')}
                  >
                    <DollarSign size={20} />
                    <span>Financial Services</span>
                  </div>
                  <div 
                    className={`tab-header ${activeTab === 'manufacturing' ? 'active' : ''}`}
                    onClick={() => handleTabClick('manufacturing')}
                  >
                    <Factory size={20} />
                    <span>Manufacturing</span>
                  </div>
                  <div 
                    className={`tab-header ${activeTab === 'energy' ? 'active' : ''}`}
                    onClick={() => handleTabClick('energy')}
                  >
                    <Lightbulb size={20} />
                    <span>Energy & Utilities</span>
                  </div>
                </div>
                
                <div className="tab-content">
                  <div className="applications-grid">
                    {tabContent[activeTab].map((item: AppItem, index: number) => (
                      <div className="application-card" key={index}>
                        <div className="metric">{item.metric}</div>
                        <div className="app-title">{item.title}</div>
                        <div className="app-description">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="key-differentiator">
              <span>Our solutions deliver <strong>3x faster time-to-value</strong> than generic AI platforms</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Seamless Enterprise Integration",
      subtitle: "AI Enhancement Without Disruption",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1>{language === 'en' ? 'Seamless Enterprise Integration' : '无缝企业集成'}</h1>
            <h3>{language === 'en' ? 'AI Enhancement Without Disruption' : '无中断的AI增强'}</h3>
            
            <div className="integration-section">
              <div className="integration-grid">
                <div className="integration-card">
                  <div className="integration-icon">
                    <Layers size={26} />
                  </div>
                  <div className="integration-content">
                    <div className="integration-title">AI Overlay Architecture</div>
                    <div className="integration-description">Intelligence layer on existing systems</div>
                  </div>
                </div>
                
                <div className="integration-card">
                  <div className="integration-icon">
                    <Clock size={26} />
                  </div>
                  <div className="integration-content">
                    <div className="integration-title">Non-disruptive Implementation</div>
                    <div className="integration-description">Minimal IT resource demands (2-4 hrs/week)</div>
                  </div>
                </div>
                
                <div className="integration-card">
                  <div className="integration-icon">
                    <Shield size={26} />
                  </div>
                  <div className="integration-content">
                    <div className="integration-title">Secure & Compliant</div>
                    <div className="integration-description">Privacy-preserving AI, support for all regulations</div>
                  </div>
                </div>
                
                <div className="integration-card">
                  <div className="integration-icon">
                    <Zap size={26} />
                  </div>
                  <div className="integration-content">
                    <div className="integration-title">Fast Deployment</div>
                    <div className="integration-description">Pre-built connectors for major enterprise systems</div>
                  </div>
                </div>
                
                <div className="integration-card">
                  <div className="integration-icon">
                    <RefreshCw size={26} />
                  </div>
                  <div className="integration-content">
                    <div className="integration-title">No Rip-and-Replace</div>
                    <div className="integration-description">Enhances rather than replaces current investments</div>
                  </div>
                </div>
                
                <div className="integration-card">
                  <div className="integration-icon">
                    <GitBranch size={26} />
                  </div>
                  <div className="integration-content">
                    <div className="integration-title">Simplified Change Management</div>
                    <div className="integration-description">Intuitive interfaces reduce training needs by 65%</div>
                  </div>
                </div>
              </div>
              
              <div className="integration-workflow">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-label">Connect</div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-label">Configure</div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-label">Deploy</div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">4</div>
                  <div className="step-label">Measure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The 90-Day Journey to Value",
      subtitle: "Rapid, Measurable Impact",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1>{language === 'en' ? 'The 90-Day Journey to Value' : '90天价值实现之旅'}</h1>
            <h3>{language === 'en' ? 'Rapid, Measurable Impact' : '快速、可衡量的影响'}</h3>
            
            <div className="slide7-container">
              <div className="slide7-journey-title">{language === 'en' ? 'From Discovery to Measured Value in 90 Days' : '90天内从发现到可衡量的价值'}</div>
              
              <div className="slide7-timeline">
                {timelinePhases.map((phase, index) => (
                  <div className="slide7-phase" key={index}>
                    <div className="slide7-phase-icon">
                      {index === 0 ? <Search size={24} /> : 
                       index === 1 ? <Laptop size={24} /> : 
                       index === 2 ? <PieChart size={24} /> : 
                       index === 3 ? <BarChart4 size={24} /> : 
                       <Award size={24} />}
                    </div>
                    <div className="slide7-phase-week">{phase.weeks}</div>
                    <div className="slide7-phase-title">{phase.title}</div>
                    <div className="slide7-phase-description">{phase.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="slide7-key-message">
                <span>{language === 'en' ? 'Our structured methodology consistently delivers ' : '我们的结构化方法始终在'}<strong>{language === 'en' ? 'measurable results' : '第8周提供可衡量的结果'}</strong>{language === 'en' ? ' by week 8 and ' : '，并在'}<strong>{language === 'en' ? 'positive ROI' : '第12周实现正收益'}</strong>{language === 'en' ? ' by week 12' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Why Our Company?",
      subtitle: "Uniquely Positioned to Deliver Value",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1 className="slide11-title">{language === 'en' ? 'Why Our Company?' : '为什么选择我们公司？'}</h1>
            <h3 className="slide11-subtitle">{language === 'en' ? 'Uniquely Positioned to Deliver Value' : '独特定位以提供价值'}</h3>
            
            <div className="slide11-container">
              <div className="slide11-section-title">{language === 'en' ? 'Our Distinct Advantages' : '我们的独特优势'}</div>
              
              <div className="slide11-strengths-grid">
                {companyStrengths.map((strength, index) => (
                  <div className="slide11-strength-card" key={index}>
                    <div className="slide11-strength-icon">
                      {index === 0 ? <Database size={22} /> : 
                       index === 1 ? <Target size={22} /> : 
                       index === 2 ? <Code size={22} /> : 
                       index === 3 ? <Lock size={22} /> : 
                       index === 4 ? <TrendingUp size={22} /> : 
                       <Cpu size={22} />}
                    </div>
                    <div className="slide11-strength-title">{strength.title}</div>
                    <div className="slide11-strength-description">{strength.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="slide11-stats-container">
                <div className="slide11-stats-grid">
                  {companyStats.map((stat, index) => (
                    <div className="slide11-stat-item" key={index}>
                      <div className="slide11-stat-value">{stat.value}</div>
                      <div className="slide11-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Next Steps",
      subtitle: "Begin Your AI Transformation",
      content: (
        <div className="title-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="title-content">
            <h1 className="slide12-title">{language === 'en' ? 'Next Steps' : '下一步'}</h1>
            <h3 className="slide12-subtitle">{language === 'en' ? 'Begin Your AI Transformation' : '开始您的AI转型'}</h3>
            
            <div className="slide12-container">
              <div className="slide12-section-title">{language === 'en' ? 'Your Path to AI-Powered Success' : '您通往AI驱动成功的道路'}</div>
              
              <div className="slide12-steps-flow">
                {nextSteps.map((step, index) => (
                  <div className="slide12-step" key={index}>
                    <div className="slide12-step-icon">
                      {index === 0 ? <Calendar size={22} /> : 
                       index === 1 ? <Activity size={22} /> : 
                       index === 2 ? <Map size={22} /> : 
                       <ArrowUpRight size={22} />}
                    </div>
                    <div className="slide12-step-number">{index + 1}</div>
                    <div className="slide12-step-title">{step.title}</div>
                    <div className="slide12-step-description">{step.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="slide12-cta">
                <div className="slide12-cta-text">Ready to unlock the value of your data?</div>
                <button className="slide12-cta-button">Schedule Your Discovery Workshop</button>
                <div className="slide12-contact">develop@bixory.ai | (408)658-8538</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Thank You",
      subtitle: "For Your Attention",
      content: (
        <div className="title-slide">
          <div className="bg-graphics animated">
            <div className="data-point point1 pulse"></div>
            <div className="data-point point2 pulse"></div>
            <div className="data-point point3 pulse"></div>
            <div className="data-line line1 glow"></div>
            <div className="data-line line2 glow"></div>
            <div className="data-flow flow1"></div>
            <div className="data-flow flow2"></div>
            <div className="data-flow flow3"></div>
            <div className="data-flow flow4"></div>
            <div className="data-flow flow5"></div>
          </div>
          
          <div className="title-content">
            <div className="slide10-container expanded">
              <div className="slide10-contact-section horizontal">
                <div className="slide10-contact-item">
                  <div className="slide10-contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="slide10-contact-label">{t('email')}</div>
                  <div className="slide10-contact-value">develop@bixory.ai</div>
                </div>
                
                <div className="slide10-contact-item">
                  <div className="slide10-contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="slide10-contact-label">{t('phone')}</div>
                  <div className="slide10-contact-value">(408) 658-8538</div>
                </div>
                
                <div className="slide10-contact-item">
                  <div className="slide10-contact-icon">
                    <Globe size={24} />
                  </div>
                  <div className="slide10-contact-label">{t('website')}</div>
                  <div className="slide10-contact-value">bixory.ai</div>
                </div>
              </div>
            </div>
            
            <div className="slide10-center-content">
              <h1 className="slide10-title">{t('thankYou')}</h1>
              <h3 className="slide10-subtitle">{t('forYourAttention')}</h3>
            </div>
            
            <div className="slide10-logo animated centered">
              <div className="logo-circle pulse-slow">
                <img src={`${process.env.PUBLIC_URL}/images/favicon.png`} alt="Bixing Technology Logo" />
              </div>
              <div className="company-name fade-in">Bixing AI Technology</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Function to handle tab click
  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const goToHome = () => {
    // Get the base URL for different environments
    const hostname = window.location.hostname;
    
    if (hostname === 'ai-data-solutions.bixory.ai') {
      // Custom domain - go to root
      window.location.href = '/';
      return;
    } else if (hostname.includes('github.io')) {
      // GitHub Pages - include repository name
      window.location.href = '/ai-data-solutions/';
      return;
    } else {
      // Local development - go to parent directory
      const currentPath = window.location.pathname;
      const parentPath = currentPath.substring(0, currentPath.indexOf('/industry-analytics'));
      window.location.href = parentPath || '/';
      return;
    }
  };

  return (
    <div className="presentation-container">
      <div className="home-button">
        <button
          onClick={goToHome}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Go to home page"
        >
          <Home size={24} className="text-gray-700" />
        </button>
      </div>
      <div className="language-toggle">
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50"
        >
          {language === 'en' ? '中文' : 'English'}
        </button>
      </div>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentSlide / (slides.length - 1)) * 100}%` }}
        ></div>
      </div>
      
      <div className="slide-content">
        {slides[currentSlide].content}
        
        <button 
          className="edge-nav-btn prev-edge-btn" 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          title={t('prevSlide')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button 
          className="edge-nav-btn next-edge-btn" 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          title={t('nextSlide')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <div className="slide-info">
          <div className="slide-number">
            {currentSlide + 1} {t('slideOf')} {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation; 