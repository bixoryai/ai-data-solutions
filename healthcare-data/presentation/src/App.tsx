import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';

// Slide Components
import IntroductionSlide from './components/slides/IntroductionSlide';
import BusinessChallengesSlide from './components/slides/BusinessChallengesSlide';
import AiAdvantageSlide from './components/slides/AiAdvantageSlide';
import ThreePillarSolutionSlide from './components/slides/ThreePillarSolutionSlide';
import PredictiveAnalyticsDeepDiveSlide from './components/slides/PredictiveAnalyticsDeepDiveSlide';
import MedicalImagingRevolutionSlide from './components/slides/MedicalImagingRevolutionSlide';
import ResourceOptimizationImpactSlide from './components/slides/ResourceOptimizationImpactSlide';
import ProvenClinicalOutcomesSlide from './components/slides/ProvenClinicalOutcomesSlide';
import TechnologyArchitectureSlide from './components/slides/TechnologyArchitectureSlide';
import MarketOpportunitySlide from './components/slides/MarketOpportunitySlide';
import ImplementationRoadmapSlide from './components/slides/ImplementationRoadmapSlide';
import InvestmentRoiSlide from './components/slides/InvestmentRoiSlide';
import WhyChooseUsSlide from './components/slides/WhyChooseUsSlide';
import SecurityComplianceSlide from './components/slides/SecurityComplianceSlide';
import CustomerSuccessSlide from './components/slides/CustomerSuccessSlide';
import FutureRoadmapSlide from './components/slides/FutureRoadmapSlide';
import GettingStartedSlide from './components/slides/GettingStartedSlide';
import ContactNextStepsSlide from './components/slides/ContactNextStepsSlide';


// Translations
const translations = {
  en: {
    // Main App
    title: "AI-Powered Healthcare Data Solutions",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
    of: "of",
    // Slide Titles from markdown
    s1_title: "Title & Opening Hook",
    s2_title: "The Healthcare Data Crisis",
    s3_title: "The AI Advantage in Healthcare",
    s4_title: "Our Three-Pillar Solution",
    s5_title: "Predictive Analytics Deep Dive",
    s6_title: "Medical Imaging Revolution",
    s7_title: "Resource Optimization Impact",
    s8_title: "Proven Clinical Outcomes",
    s9_title: "Technology Architecture",
    s10_title: "Market Opportunity & Business Model",
    s11_title: "Implementation Roadmap",
    s12_title: "Investment & ROI Analysis",
    s13_title: "Why Choose Our Solution",
    s14_title: "Security & Compliance",
    s15_title: "Customer Success Stories",
    s16_title: "Future Roadmap",
    s17_title: "Getting Started",
    s18_title: "Contact & Next Steps",
    threePillarSolution: "Our Three-Pillar Solution",
    slide_placeholder: "Content for this slide is coming soon.",

    // Slide 1
    s1_title_main: "AI-Powered Healthcare Data Solutions",
    s1_subtitle: "Transforming Patient Care Through Intelligent Analytics",
    s1_hook: "What if we could predict patient deterioration 6 hours before symptoms appear?",
    s1_stat1_title: "$45B Market by 2030",
    s1_stat1_desc: "The projected market size for AI in Healthcare, indicating massive growth.",
    s1_stat2_title: "Predictive Intelligence",
    s1_stat2_desc: "Leveraging data to move from reactive to predictive patient care.",
    s1_stat3_title: "Enhanced Outcomes",
    s1_stat3_desc: "Improving diagnostics, treatment, and operational efficiency.",
    s1_presenter: "Presented by: Bixory AI Solutions",

    // Slide 2: The Healthcare Data Crisis
    s2_subheader: "The Overwhelming Challenge of Modern Healthcare Data",
    s2_item1_title: "Data Silos",
    s2_item1_desc: "Patient data is fragmented across EHRs, imaging systems, and labs, preventing a unified view.",
    s2_item2_title: "Information Overload",
    s2_item2_desc: "Clinicians face burnout from manually processing vast amounts of complex data.",
    s2_item3_title: "Reactive Care Models",
    s2_item3_desc: "The current paradigm is reactive, treating problems after they arise, not before.",
    s2_item4_title: "High Operational Costs",
    s2_item4_desc: "Inefficiencies in data handling lead to wasted resources and increased healthcare costs.",
    s2_image_alt: "Complex web of interconnected healthcare data points",

    // Slide 3: The AI Advantage
    s3_subheader: "How AI Transforms Data into Actionable Intelligence",
    s3_item1_title: "Unified Data View",
    s3_item1_desc: "AI algorithms integrate and harmonize disparate data sources into a single, comprehensive patient profile.",
    s3_item2_title: "Predictive Insights",
    s3_item2_desc: "Machine learning models identify patterns to predict patient outcomes and disease progression.",
    s3_item3_title: "Automated Workflows",
    s3_item3_desc: "AI automates routine data analysis, freeing up clinicians to focus on patient care.",
    s3_item4_title: "Personalized Medicine",
    s3_item4_desc: "Deliver tailored treatment plans based on individual patient data and predictive models.",
    s3_image_alt: "Brain with glowing neural network connections",

    // Slide 4: Our Three-Pillar Solution
    s4_subheader: "A Comprehensive Platform for End-to-End Healthcare Analytics",
    s4_pillar1_title: "Predictive Analytics Engine",
    s4_pillar1_desc: "Proactively identifies at-risk patients and predicts disease trajectories.",
    s4_pillar2_title: "AI-Powered Medical Imaging",
    s4_pillar2_desc: "Automates analysis of medical scans for faster, more accurate diagnostics.",
    s4_pillar3_title: "Resource Optimization Suite",
    s4_pillar3_desc: "Optimizes hospital workflows, from bed management to staff scheduling.",
    s4_image_alt: "Three interconnected pillars representing the solution",

    // Slide 5: Predictive Analytics Deep Dive
    s5_subheader: "From Raw Data to Life-Saving Predictions",
    s5_item1_title: "Real-Time Data Ingestion",
    s5_item1_desc: "Continuously streams data from EHRs, IoT devices, and labs.",
    s5_item2_title: "Advanced ML Models",
    s5_item2_desc: "Utilizes LSTM and Transformer networks for temporal data analysis.",
    s5_item3_title: "Risk Stratification",
    s5_item3_desc: "Scores and segments patients by risk level in real-time.",
    s5_item4_title: "Actionable Alerts",
    s5_item4_desc: "Delivers critical alerts to clinical staff via a secure dashboard.",
    s5_image_alt: "A detailed diagram of the predictive analytics workflow",

    // Slide 6: Medical Imaging Revolution
    s6_subheader: "Enhancing Diagnostic Accuracy with AI-Powered Imaging",
    s6_item1_title: "Automated Anomaly Detection",
    s6_item1_desc: "Our CNN models scan images (X-rays, MRIs) and highlight potential anomalies in seconds.",
    s6_item2_title: "95% Accuracy",
    s6_item2_desc: "Achieved in clinical trials for identifying specific conditions, reducing false negatives.",
    s6_item3_title: "Seamless EMR Integration",
    s6_item3_desc: "Results are automatically pushed to the patient's record, with highlighted areas for radiologist review.",
    s6_image_alt: "An MRI scan with AI-highlighted areas of interest",

    // Slide 7: Resource Optimization Impact
    s7_subheader: "Driving Efficiency and Cost Savings Across Hospital Operations",
    s7_stat1_metric: "20% Reduction",
    s7_stat1_desc: "in patient wait times through optimized scheduling.",
    s7_stat2_metric: "15% Improvement",
    s7_stat2_desc: "in operating room utilization.",
    s7_stat3_metric: "10% Decrease",
    s7_stat3_desc: "in unnecessary patient readmissions.",
    s7_quote: "\"The platform has transformed our resource allocation, allowing us to do more with less.\"",
    s7_quote_author: "CFO, University Hospital",
    s7_image_alt: "A dashboard showing hospital efficiency metrics",

    // Slide 8: Proven Clinical Outcomes
    s8_subheader: "Real-World Evidence of Improved Patient Care",
    s8_item1_title: "Early Sepsis Detection",
    s8_item1_desc: "Our models predicted sepsis 6 hours earlier than traditional methods, leading to a 30% reduction in mortality.",
    s8_item1_source: "Source: NEJM Catalyst",
    s8_item2_title: "Reduced Readmissions",
    s8_item2_desc: "AI-driven post-discharge plans have cut 30-day readmission rates for heart failure patients by 18%.",
    s8_item2_source: "Source: JAMA Network Open",
    s8_image_alt: "Graphs showing improved patient outcomes",

    // Slide 9: Technology Architecture
    s9_subheader: "A Scalable, Secure, and Interoperable Platform",
    s9_layer1: "Data Ingestion Layer",
    s9_layer1_desc: "Securely connects to EHRs, PACS, and IoT devices via HL7/FHIR.",
    s9_layer2: "AI Core",
    s9_layer2_desc: "Powered by TensorFlow & PyTorch on a scalable Kubernetes cluster.",
    s9_layer3: "Integration & API Layer",
    s9_layer3_desc: "RESTful APIs for seamless integration with existing hospital systems.",
    s9_layer4: "Presentation Layer",
    s9_layer4_desc: "Intuitive web-based dashboards for clinical and administrative staff.",
    s9_image_alt: "A diagram of the 4-layer technology architecture",

    // Slide 10: Market Opportunity & Business Model
    s10_subheader: "Targeting a Multi-Billion Dollar Market with a Flexible Model",
    s10_market_title: "Total Addressable Market (TAM)",
    s10_market_value: "$45 Billion",
    s10_market_desc: "Global AI in Healthcare market by 2030.",
    s10_model_title: "Business Model",
    s10_model_tier1: "Tiered SaaS Subscription:",
    s10_model_tier1_desc: "Based on hospital size and modules deployed.",
    s10_model_tier2: "Implementation & Support:",
    s10_model_tier2_desc: "Professional services for integration and training.",
    s10_image_alt: "Charts showing market growth and business model breakdown",

    // Slide 11: Implementation Roadmap
    s11_subheader: "A Phased Approach to Ensure Success and Adoption",
    s11_phase1_title: "Phase 1: Discovery & Planning (2-4 Weeks)",
    s11_phase1_desc: "System analysis, data source identification, and project scoping.",
    s11_phase2_title: "Phase 2: Integration & Configuration (6-8 Weeks)",
    s11_phase2_desc: "Platform deployment, data pipeline setup, and model tuning.",
    s11_phase3_title: "Phase 3: Training & Go-Live (2-3 Weeks)",
    s11_phase3_desc: "User training, pilot run, and full rollout.",
    s11_phase4_title: "Phase 4: Ongoing Support & Optimization",
    s11_phase4_desc: "Continuous performance monitoring and model updates.",
    s11_image_alt: "A timeline graphic of the implementation roadmap",

    // Slide 12: Investment & ROI Analysis
    s12_subheader: "A Compelling Return on Investment for Our Partners",
    s12_investment_title: "Initial Investment",
    s12_investment_desc: "Covers licensing, implementation, and first-year support.",
    s12_roi_title: "Projected ROI",
    s12_roi_timeline: "Full ROI typically achieved within 18-24 months.",
    s12_roi_area1: "Reduced operational costs",
    s12_roi_area2: "Improved clinical outcomes",
    s12_roi_area3: "Increased revenue through higher efficiency",
    s12_contact_prompt: "Contact us for a personalized ROI calculation.",
    s12_image_alt: "A graph showing investment vs. return over time",

    // Slide 13: Why Choose Us
    s13_subheader: "Our Commitment to Partnership and Innovation",
    s13_point1_title: "Clinical & Technical Expertise",
    s13_point1_desc: "Our team includes data scientists, engineers, and clinical experts.",
    s13_point2_title: "Proven & Validated",
    s13_point2_desc: "Our models are backed by real-world studies and peer-reviewed papers.",
    s13_point3_title: "Dedicated Partnership",
    s13_point3_desc: "We provide end-to-end support to ensure your success.",
    s13_point4_title: "Future-Ready Platform",
    s13_point4_desc: "Continuously updated to stay at the forefront of AI in healthcare.",
    s13_image_alt: "A collage of team members and technology",

    // Slide 14: Security & Compliance
    s14_subheader: "Built on a Foundation of Trust and Data Protection",
    s14_hipaa: "HIPAA Compliant",
    s14_gdpr: "GDPR Ready",
    s14_soc2: "SOC 2 Type II Certified",
    s14_encryption_title: "End-to-End Encryption",
    s14_encryption_desc: "Data is encrypted at rest and in transit.",
    s14_access_title: "Role-Based Access Control",
    s14_access_desc: "Ensures users only see data they are authorized to view.",
    s14_audit_title: "Regular Audits",
    s14_audit_desc: "Third-party penetration testing and security audits.",
    s14_image_alt: "Security shields and compliance logos",

    // Slide 15: Customer Success Stories
    s15_subheader: "Transforming Healthcare for Our Partners",
    s15_story1_title: "Major Metropolitan Hospital",
    s15_story1_challenge: "Challenge: High readmission rates for cardiac patients.",
    s15_story1_solution: "Solution: Deployed our predictive post-discharge planning module.",
    s15_story1_result: "Result: 22% reduction in 30-day readmissions within 6 months.",
    s15_story2_title: "Regional Imaging Center",
    s15_story2_challenge: "Challenge: Radiologist burnout and long turnaround times.",
    s15_story2_solution: "Solution: Integrated our AI imaging analysis for preliminary scans.",
    s15_story2_result: "Result: 40% faster report turnaround and improved diagnostic confidence.",
    s15_image_alt: "Logos or photos of partner institutions",

    // Slide 16: Future Roadmap
    s16_subheader: "Our Vision for the Future of AI in Healthcare",
    s16_q3_title: "Q3 2024: Genomics Integration",
    s16_q3_desc: "Incorporate genomic data for hyper-personalized treatment plans.",
    s16_q4_title: "Q4 2024: Patient-Facing App",
    s16_q4_desc: "Launch a mobile app for patients to track their health journey.",
    s16_2025_title: "2025: Autonomous Clinical Trials",
    s16_2025_desc: "AI-driven platform to accelerate clinical trial matching and data analysis.",
    s16_image_alt: "A timeline showing future product developments",

    // Slide 17: Getting Started
    s17_subheader: "Begin Your Journey to AI-Powered Healthcare",
    s17_step1_title: "1. Initial Consultation",
    s17_step1_desc: "Schedule a free consultation with our solution experts.",
    s17_step2_title: "2. Personalized Demo",
    s17_step2_desc: "Get a live demo tailored to your organization's specific needs.",
    s17_step3_title: "3. ROI Assessment",
    s17_step3_desc: "We'll work with you to build a custom ROI projection.",
    s17_cta: "Let's Build the Future of Healthcare Together",
    s17_image_alt: "A handshake or a team collaborating",

    // Slide 18: Contact & Next Steps
    s18_thank_you: "Thank You",
    s18_discussion: "Q&A and Discussion",
    s18_contact_name: "John Doe, Chief Solutions Architect",
    s18_contact_email: "john.doe@bixory.ai",
    s18_contact_phone: "+1 (555) 123-4567",
    s18_website: "www.bixory.ai/solutions/healthcare",
    s18_linkedin: "linkedin.com/company/bixory-ai",
    s18_image_alt: "Contact icons for email, phone, web",
  },
  zh: {
    // Main App
    title: "AI驱动的医疗数据解决方案",
    previous: "上一页",
    next: "下一页",
    slide: "幻灯片",
    of: "/",
    // Slide Titles from markdown
    s1_title: "标题与开场",
    s2_title: "医疗数据的危机",
    s3_title: "AI在医疗领域的优势",
    s4_title: "我们的三大支柱解决方案",
    s5_title: "预测性分析深度解析",
    s6_title: "医学影像革命",
    s7_title: "资源优化影响",
    s8_title: "经证实的临床成果",
    s9_title: "技术架构",
    s10_title: "市场机遇与商业模式",
    s11_title: "实施路线图",
    s12_title: "投资回报率分析",
    s13_title: "为何选择我们",
    s14_title: "安全与合规",
    s15_title: "客户成功案例",
    s16_title: "未来路线图",
    s17_title: "开始使用",
    s18_title: "联系我们与后续步骤",
    threePillarSolution: "我们的三大支柱解决方案",
    slide_placeholder: "此幻灯片的内容即将推出。",

    // Slide 1
    s1_title_main: "AI驱动的医疗数据解决方案",
    s1_subtitle: "通过智能分析变革患者护理",
    s1_hook: "如果我们能在症状出现前6小时预测患者病情恶化，会怎么样？",
    s1_stat1_title: "2030年市场规模达450亿美元",
    s1_stat1_desc: "医疗领域人工智能的预计市场规模，显示出巨大的增长潜力。",
    s1_stat2_title: "预测性智能",
    s1_stat2_desc: "利用数据将患者护理从被动反应转变为主动预测。",
    s1_stat3_title: "改善成果",
    s1_stat3_desc: "改进诊断、治疗和运营效率。",
    s1_presenter: "主讲：Bixory AI解决方案",

    // Slide 2: The Healthcare Data Crisis
    s2_subheader: "现代医疗数据的巨大挑战",
    s2_item1_title: "数据孤岛",
    s2_item1_desc: "患者数据分散在电子健康记录、影像系统和实验室中，无法形成统一视图。",
    s2_item2_title: "信息过载",
    s2_item2_desc: "临床医生因手动处理大量复杂数据而面临职业倦怠。",
    s2_item3_title: "被动式护理模式",
    s2_item3_desc: "当前的模式是被动的，在问题出现后才进行治疗，而不是预防。",
    s2_item4_title: "高昂的运营成本",
    s2_item4_desc: "数据处理效率低下导致资源浪费和医疗成本增加。",
    s2_image_alt: "相互关联的医疗数据点的复杂网络",

    // Slide 3: The AI Advantage
    s3_subheader: "AI如何将数据转化为可操作的情报",
    s3_item1_title: "统一数据视图",
    s3_item1_desc: "AI算法将分散的数据源整合协调成单一、全面的患者档案。",
    s3_item2_title: "预测性洞察",
    s3_item2_desc: "机器学习模型识别模式，以预测患者结果和疾病进展。",
    s3_item3_title: "自动化工作流程",
    s3_item3_desc: "AI自动化常规数据分析，解放临床医生，使其能专注于患者护理。",
    s3_item4_title: "个性化医疗",
    s3_item4_desc: "基于个体患者数据和预测模型提供量身定制的治疗方案。",
    s3_image_alt: "发光的神经网络连接的大脑",

    // Slide 4: Our Three-Pillar Solution
    s4_subheader: "一个全面的端到端医疗分析平台",
    s4_pillar1_title: "预测性分析引擎",
    s4_pillar1_desc: "主动识别高危患者并预测疾病发展轨迹。",
    s4_pillar2_title: "AI驱动的医学影像",
    s4_pillar2_desc: "自动化分析医学扫描，实现更快、更准确的诊断。",
    s4_pillar3_title: "资源优化套件",
    s4_pillar3_desc: "优化医院工作流程，从床位管理到人员排班。",
    s4_image_alt: "代表解决方案的三个相互关联的支柱",

    // Slide 5: Predictive Analytics Deep Dive
    s5_subheader: "从原始数据到拯救生命的预测",
    s5_item1_title: "实时数据采集",
    s5_item1_desc: "持续从电子健康记录、物联网设备和实验室流式传输数据。",
    s5_item2_title: "先进的机器学习模型",
    s5_item2_desc: "利用LSTM和Transformer网络进行时间序列数据分析。",
    s5_item3_title: "风险分层",
    s5_item3_desc: "实时对患者进行风险评分和分层。",
    s5_item4_title: "可操作的警报",
    s5_item4_desc: "通过安全仪表板向临床人员发送关键警报。",
    s5_image_alt: "预测分析工作流程的详细图表",

    // Slide 6: Medical Imaging Revolution
    s6_subheader: "通过AI驱动的影像技术提升诊断准确性",
    s6_item1_title: "自动异常检测",
    s6_item1_desc: "我们的CNN模型扫描影像（X光、MRI），并在数秒内高亮显示潜在异常。",
    s6_item2_title: "95%的准确率",
    s6_item2_desc: "在识别特定疾病的临床试验中达到，减少了假阴性。",
    s6_item3_title: "无缝EMR集成",
    s6_item3_desc: "结果自动推送到患者记录中，并高亮区域供放射科医生审查。",
    s6_image_alt: "一张带有AI高亮兴趣区域的MRI扫描图",

    // Slide 7: Resource Optimization Impact
    s7_subheader: "推动医院运营的效率提升和成本节约",
    s7_stat1_metric: "减少20%",
    s7_stat1_desc: "通过优化排程减少患者等待时间。",
    s7_stat2_metric: "提高15%",
    s7_stat2_desc: "的手术室利用率。",
    s7_stat3_metric: "降低10%",
    s7_stat3_desc: "的不必要再入院率。",
    s7_quote: "“该平台改变了我们的资源分配方式，让我们能事半功倍。”",
    s7_quote_author: "大学医院首席财务官",
    s7_image_alt: "显示医院效率指标的仪表板",

    // Slide 8: Proven Clinical Outcomes
    s8_subheader: "改善患者护理的真实世界证据",
    s8_item1_title: "早期败血症检测",
    s8_item1_desc: "我们的模型比传统方法提前6小时预测败血症，使死亡率降低了30%。",
    s8_item1_source: "来源：NEJM Catalyst",
    s8_item2_title: "减少再入院率",
    s8_item2_desc: "AI驱动的出院后计划使心力衰竭患者的30天再入院率降低了18%。",
    s8_item2_source: "来源：JAMA Network Open",
    s8_image_alt: "显示患者结果改善的图表",

    // Slide 9: Technology Architecture
    s9_subheader: "一个可扩展、安全且可互操作的平台",
    s9_layer1: "数据采集层",
    s9_layer1_desc: "通过HL7/FHIR安全连接到EHR、PACS和物联网设备。",
    s9_layer2: "AI核心",
    s9_layer2_desc: "由TensorFlow和PyTorch驱动，在可扩展的Kubernetes集群上运行。",
    s9_layer3: "集成与API层",
    s9_layer3_desc: "RESTful API，用于与现有医院系统无缝集成。",
    s9_layer4: "表示层",
    s9_layer4_desc: "为临床和行政人员提供直观的基于Web的仪表板。",
    s9_image_alt: "四层技术架构图",

    // Slide 10: Market Opportunity & Business Model
    s10_subheader: "以灵活的模式瞄准数十亿美元的市场",
    s10_market_title: "潜在市场总额 (TAM)",
    s10_market_value: "450亿美元",
    s10_market_desc: "到2030年全球医疗AI市场。",
    s10_model_title: "商业模式",
    s10_model_tier1: "分层SaaS订阅：",
    s10_model_tier1_desc: "基于医院规模和部署的模块。",
    s10_model_tier2: "实施与支持：",
    s10_model_tier2_desc: "提供集成和培训的专业服务。",
    s10_image_alt: "显示市场增长和商业模式分解的图表",

    // Slide 11: Implementation Roadmap
    s11_subheader: "分阶段实施，确保成功与采纳",
    s11_phase1_title: "第一阶段：发现与规划 (2-4周)",
    s11_phase1_desc: "系统分析、数据源识别和项目范围界定。",
    s11_phase2_title: "第二阶段：集成与配置 (6-8周)",
    s11_phase2_desc: "平台部署、数据管道设置和模型调优。",
    s11_phase3_title: "第三阶段：培训与上线 (2-3周)",
    s11_phase3_desc: "用户培训、试点运行和全面推广。",
    s11_phase4_title: "第四阶段：持续支持与优化",
    s11_phase4_desc: "持续的性能监控和模型更新。",
    s11_image_alt: "实施路线图的时间轴图",

    // Slide 12: Investment & ROI Analysis
    s12_subheader: "为我们的合作伙伴带来引人注目的投资回报",
    s12_investment_title: "初始投资",
    s12_investment_desc: "涵盖许可、实施和第一年支持。",
    s12_roi_title: "预计投资回报率",
    s12_roi_timeline: "通常在18-24个月内实现全部投资回报。",
    s12_roi_area1: "降低运营成本",
    s12_roi_area2: "改善临床结果",
    s12_roi_area3: "通过提高效率增加收入",
    s12_contact_prompt: "联系我们获取个性化的投资回报率计算。",
    s12_image_alt: "显示投资与回报随时间变化的图表",

    // Slide 13: Why Choose Us
    s13_subheader: "我们对合作与创新的承诺",
    s13_point1_title: "临床与技术专长",
    s13_point1_desc: "我们的团队包括数据科学家、工程师和临床专家。",
    s13_point2_title: "经证实与验证",
    s13_point2_desc: "我们的模型有真实世界研究和同行评审论文的支持。",
    s13_point3_title: "专注的合作伙伴关系",
    s13_point3_desc: "我们提供端到端的支持，确保您的成功。",
    s13_point4_title: "面向未来的平台",
    s13_point4_desc: "持续更新，保持在医疗AI领域的前沿。",
    s13_image_alt: "团队成员和技术的拼贴画",

    // Slide 14: Security & Compliance
    s14_subheader: "建立在信任和数据保护的基础上",
    s14_hipaa: "符合HIPAA",
    s14_gdpr: "符合GDPR",
    s14_soc2: "SOC 2 Type II认证",
    s14_encryption_title: "端到端加密",
    s14_encryption_desc: "数据在静止和传输过程中都经过加密。",
    s14_access_title: "基于角色的访问控制",
    s14_access_desc: "确保用户只能看到他们被授权查看的数据。",
    s14_audit_title: "定期审计",
    s14_audit_desc: "第三方渗透测试和安全审计。",
    s14_image_alt: "安全盾牌和合规标志",

    // Slide 15: Customer Success Stories
    s15_subheader: "为我们的合作伙伴改造医疗保健",
    s15_story1_title: "大型都市医院",
    s15_story1_challenge: "挑战：心脏病患者的高再入院率。",
    s15_story1_solution: "解决方案：部署我们的预测性出院后规划模块。",
    s15_story1_result: "结果：6个月内30天再入院率降低22%。",
    s15_story2_title: "区域影像中心",
    s15_story2_challenge: "挑战：放射科医生职业倦怠和报告周转时间长。",
    s15_story2_solution: "解决方案：集成我们的AI影像分析用于初步扫描。",
    s15_story2_result: "结果：报告周转时间加快40%，诊断信心提高。",
    s15_image_alt: "合作机构的标志或照片",

    // Slide 16: Future Roadmap
    s16_subheader: "我们对医疗AI未来的愿景",
    s16_q3_title: "2024年第三季度：基因组学整合",
    s16_q3_desc: "整合基因组数据，实现超个性化治疗方案。",
    s16_q4_title: "2024年第四季度：面向患者的应用程序",
    s16_q4_desc: "推出一款移动应用，供患者追踪其健康旅程。",
    s16_2025_title: "2025年：自主临床试验",
    s16_2025_desc: "AI驱动的平台，加速临床试验匹配和数据分析。",
    s16_image_alt: "显示未来产品开发的时间轴",

    // Slide 17: Getting Started
    s17_subheader: "开启您的AI赋能医疗之旅",
    s17_step1_title: "1. 初步咨询",
    s17_step1_desc: "与我们的解决方案专家安排免费咨询。",
    s17_step2_title: "2. 个性化演示",
    s17_step2_desc: "获得根据您组织特定需求量身定制的现场演示。",
    s17_step3_title: "3. 投资回报率评估",
    s17_step3_desc: "我们将与您合作，制定定制的投资回报率预测。",
    s17_cta: "让我们共同构建医疗保健的未来",
    s17_image_alt: "握手或团队协作",

    // Slide 18: Contact & Next Steps
    s18_thank_you: "谢谢",
    s18_discussion: "问答与讨论",
    s18_contact_name: "张三，首席解决方案架构师",
    s18_contact_email: "zhang.san@bixory.ai",
    s18_contact_phone: "+86 138 1234 5678",
    s18_website: "www.bixory.ai/solutions/healthcare",
    s18_linkedin: "linkedin.com/company/bixory-ai",
    s18_image_alt: "电子邮件、电话、网络的联系图标",
  }
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('presentation_language') as 'en' | 'zh' || 'en';
    setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('presentation_language', newLanguage);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const slides = [
    { component: IntroductionSlide, title: t('s1_title') },
    { component: BusinessChallengesSlide, title: t('s2_title') },
    { component: AiAdvantageSlide, title: t('s3_title') },
    { component: ThreePillarSolutionSlide, title: t('s4_title') },
    { component: PredictiveAnalyticsDeepDiveSlide, title: t('s5_title') },
    { component: MedicalImagingRevolutionSlide, title: t('s6_title') },
    { component: ResourceOptimizationImpactSlide, title: t('s7_title') },
    { component: ProvenClinicalOutcomesSlide, title: t('s8_title') },
    { component: TechnologyArchitectureSlide, title: t('s9_title') },
    { component: MarketOpportunitySlide, title: t('s10_title') },
    { component: ImplementationRoadmapSlide, title: t('s11_title') },
    { component: InvestmentRoiSlide, title: t('s12_title') },
    { component: WhyChooseUsSlide, title: t('s13_title') },
    { component: SecurityComplianceSlide, title: t('s14_title') },
    { component: CustomerSuccessSlide, title: t('s15_title') },
    { component: FutureRoadmapSlide, title: t('s16_title') },
    { component: GettingStartedSlide, title: t('s17_title') },
    { component: ContactNextStepsSlide, title: t('s18_title') },
  ];

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToHome = () => {
    const hostname = window.location.hostname;
    if (hostname === 'ai-data-solutions.bixory.ai') {
      window.location.href = '/';
    } else if (hostname.includes('github.io')) {
      window.location.href = '/ai-data-solutions/';
    } else {
        window.location.href = '../../'; 
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center">
          <button
            onClick={goToHome}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-600" />
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl font-bold text-blue-800">{t('title')}</h1>
          <p className="text-sm text-gray-600">{slides[currentSlide].title}</p>
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50 flex items-center"
          >
            <Globe size={16} className="mr-1" />
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          {t('previous')}
        </button>
        <div className="text-sm text-gray-500">
          {t('slide')} {currentSlide + 1} {t('of')} {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === slides.length - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          {t('next')}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
          <CurrentSlideComponent t={t} />
        </div>
      </main>
    </div>
  );
}

export default App; 