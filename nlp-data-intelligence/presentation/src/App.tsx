import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';
// Import slide components
import TitleSlide from './components/slides/TitleSlide';
import DataCrisisSlide from './components/slides/DataCrisisSlide';
import WhatIsNLPSlide from './components/slides/WhatIsNLPSlide';
import WhyNowSlide from './components/slides/WhyNowSlide';
import ApplicationsSlide from './components/slides/ApplicationsSlide';
import PlatformArchitectureSlide from './components/slides/PlatformArchitectureSlide';
import ProductsAndServicesSlide from './components/slides/ProductsAndServicesSlide';
import CompetitiveAdvantageSlide from './components/slides/CompetitiveAdvantageSlide';
import ImplementationFrameworkSlide from './components/slides/ImplementationFrameworkSlide';
import ROISlide from './components/slides/ROISlide';
import DemoPreviewSlide from './components/slides/DemoPreviewSlide';
import GettingStartedSlide from './components/slides/GettingStartedSlide';
import ThankYouSlide from './components/slides/ThankYouSlide';

// Translations for multilingual support
const translations = {
  en: {
    // General
    title: "NLP Data Intelligence",
    companyName: "AI Data Solutions",
    tagline: "Where Documents Meet Intelligence",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
    of: "of",

    // Slide 1: Title
    slide1Title: "NLP Data Intelligence",
    slide1Subtitle: "Transforming Text into Business Intelligence",
    slide1Hook: "What if 80% of your most valuable business data was invisible to your analytics?",
    
    // Slide 2: Data Crisis
    slide2Title: "The $2.5 Trillion Unstructured Data Problem",
    dataImbalanceTitle: "The Data Imbalance",
    dataImbalancePoint1: "80-90% of enterprise data is unstructured text (emails, contracts, reports, documents)",
    dataImbalancePoint2: "Only 20% of business data is in structured databases and spreadsheets",
    dataImbalancePoint3: "Current analytics tools only analyze the 20% - missing the majority of valuable insights",
    costOfIgnoranceTitle: "The Cost of Ignorance",
    costOfIgnorancePoint1: "$2.5 Trillion in lost business value from unanalyzed unstructured data annually",
    costOfIgnorancePoint2: "Average enterprise has 10-50 million documents containing critical business intelligence",
    costOfIgnorancePoint3: "Manual document review costs $20-50 per document",
    costOfIgnorancePoint4: "Knowledge workers spend 30-40% of time searching for information",
    invisibleIntelligenceTitle: "Examples of 'Invisible' Business Intelligence",
    invisibleIntelligenceExamples: "Customer feedback in support tickets, risk indicators in contracts, market insights in reports, compliance issues in filings, competitive intelligence in documents.",
    slide2BottomLine: "Your most valuable insights are hiding in plain sight - in text.",

    // Slide 3: What is NLP
    slide3Title: "What is NLP Data Intelligence?",
    slide3Definition: "NLP (Natural Language Processing) Data Intelligence uses advanced AI to automatically read, understand, and extract insights from text documents - just like a highly skilled human analyst, but at machine speed and scale.",
    capabilityTitle1: "Document Understanding",
    capabilityContent1: "Automatically read and comprehend complex documents, extract key information, and understand context.",
    capabilityTitle2: "Information Extraction",
    capabilityContent2: "Identify entities, extract structured data from unstructured text, and recognize patterns.",
    capabilityTitle3: "Intelligent Search",
    capabilityContent3: "Find documents based on meaning, answer questions, and discover hidden connections.",
    capabilityTitle4: "Content Analytics",
    capabilityContent4: "Analyze sentiment, classify documents, and generate summaries from large document sets.",
    capabilityTitle5: "Compliance Monitoring",
    capabilityContent5: "Identify regulatory risks, monitor for policy violations, and ensure adherence to standards.",

    // Slide 4: Why Now
    slide4Title: "Why NLP Intelligence is Critical Now",
    slide4Section1Title: "Business Drivers",
    slide4Section1Point1: "Digital Transformation: Document volumes growing 25-30% annually.",
    slide4Section1Point2: "Regulatory Pressure: Expanding compliance documentation requirements.",
    slide4Section1Point3: "Competitive Race: Document insights are a competitive differentiator.",
    slide4Section2Title: "Economic Imperatives",
    slide4Section2Point1: "Cost Pressures: Manual processing is expensive and inefficient.",
    slide4Section2Point2: "Revenue Opportunities: Faster processing and better insights drive revenue.",
    slide4Section2Point3: "Risk Prevention: Avoid costs through proactive risk identification.",
    slide4Section3Title: "Technology Maturity",
    slide4Section3Point1: "AI Breakthrough: Language models now achieve human-level comprehension.",
    slide4Section3Point2: "Processing Accuracy: Exceeded 95% threshold for enterprise use.",
    slide4Section3Point3: "Integration Readiness: Modern APIs enable seamless integration.",

    // Slide 5: Applications
    slide5Title: "Real-World Applications Across Industries",
    'Legal & Professional Services': "Legal & Professional Services",
    legalContent: "<strong>Use Cases:</strong> Contract analysis, legal research, due diligence.<br/><strong>Impact:</strong> Reduced contract review time from 8 hours to 45 minutes.",
    'Healthcare': "Healthcare",
    healthcareContent: "<strong>Use Cases:</strong> Clinical note analysis, medical research, regulatory submissions.<br/><strong>Impact:</strong> Analyzed 500K patient records in 2 weeks vs. 6 months.",
    'Financial Services': "Financial Services",
    financialContent: "<strong>Use Cases:</strong> Loan processing, risk assessment, fraud detection.<br/><strong>Impact:</strong> Processed loan applications 75% faster, saving $12M annually.",
    'Manufacturing & Supply Chain': "Manufacturing & Supply Chain",
    manufacturingContent: "<strong>Use Cases:</strong> Technical documentation, supplier contracts, safety reports.<br/><strong>Impact:</strong> Prevented equipment failures worth $8M.",

    // Slide 6: Platform
    slide6Title: "Our NLP Data Intelligence Platform",
    s6_doc_intel_engine_title: "Document Intelligence Engine",
    s6_doc_intel_engine_content: "Multi-format processing (PDF, Word, emails) with 50+ language support.",
    s6_ai_analysis_layer_title: "AI Analysis Layer",
    s6_ai_analysis_layer_content: "Pre-trained and custom models for industry-specific understanding.",
    s6_bi_dashboard_title: "Business Intelligence Dashboard",
    s6_bi_dashboard_content: "Real-time insights, interactive search, and automated alerts.",
    s6_integration_api_title: "Integration & APIs",
    s6_integration_api_content: "RESTful APIs and pre-built connectors for seamless integration.",
    s6_key_features_title: "Key Features",
    "Smart Document Processing": "Smart Document Processing",
    "Automatic classification, key info extraction, and change detection.": "Automatic classification, key info extraction, and change detection.",
    "Intelligent Search & Discovery": "Intelligent Search & Discovery",
    "Semantic search, question-answering, and content discovery.": "Semantic search, question-answering, and content discovery.",
    "Analytics & Insights": "Analytics & Insights",
    "Sentiment analysis, trend identification, and risk monitoring.": "Sentiment analysis, trend identification, and risk monitoring.",
    "Collaboration & Workflow": "Collaboration & Workflow",
    "Human-in-the-loop validation, team collaboration, and audit trails.": "Human-in-the-loop validation, team collaboration, and audit trails.",

    // Slide 7: Products & Services
    slide7Title: "Our Products & Services Portfolio",
    s7_core_platform_title: "Core Platform Offerings",
    s7_table_header_product: "Product",
    s7_table_header_desc: "Description",
    s7_table_header_ideal: "Ideal For",
    s7_table_header_benefits: "Key Benefits",
    s7_prod1_name: "Document Intelligence Platform",
    s7_prod1_desc: "SaaS platform for document processing and analysis",
    s7_prod1_ideal: "Mid to large enterprises",
    s7_prod1_benefits: "• 95% extraction accuracy<br>• Real-time processing<br>• Multi-format support",
    s7_prod2_name: "Industry-Specific Models",
    s7_prod2_desc: "Pre-trained AI models for specialized documents",
    s7_prod2_ideal: "Vertical-focused businesses",
    s7_prod2_benefits: "• Domain expertise built-in<br>• Faster deployment<br>• Higher accuracy",
    s7_prod3_name: "Intelligent Search Suite",
    s7_prod3_desc: "Enterprise search with natural language queries",
    s7_prod3_ideal: "Knowledge-intensive organizations",
    s7_prod3_benefits: "• Semantic understanding<br>• Cross-document insights<br>• Instant answers",
    s7_prod4_name: "Compliance Monitoring Tools",
    s7_prod4_desc: "Automated regulatory document review",
    s7_prod4_ideal: "Regulated industries",
    s7_prod4_benefits: "• Risk identification<br>• Automated reporting<br>• Audit trail maintenance",
    s7_services_title: "Professional Services",
    s7_table_header_service: "Service",
    s7_table_header_value: "Value Delivered",
    s7_serv1_name: "Custom Model Development",
    s7_serv1_desc: "Industry-specific AI models and extraction rules",
    s7_serv1_value: "Tailored to your specific document types and terminology",
    s7_serv2_name: "Implementation & Integration",
    s7_serv2_desc: "End-to-end deployment and system integration",
    s7_serv2_value: "Seamless integration with existing workflows",
    s7_serv3_name: "Document Processing Services",
    s7_serv3_desc: "Managed services for bulk document analysis",
    s7_serv3_value: "Immediate results without internal resource allocation",

    // Slide 8: Competitive Advantages
    slide8Title: "Why Choose Our NLP Intelligence Solution",
    s8_cat1_title: "Technical Excellence",
    s8_cat1_p1: "<strong>3x higher accuracy</strong> compared to generic NLP solutions",
    s8_cat1_p2: "<strong>95%+ accuracy</strong> with human oversight capability",
    s8_cat1_p3: "Context-aware analysis that understands document relationships",
    s8_cat2_title: "Implementation Advantages",
    s8_cat2_p1: "<strong>80% faster deployment</strong> compared to custom-built solutions",
    s8_cat2_p2: "Flexible Deployment Options (Cloud, On-premises, Hybrid)",
    s8_cat2_p3: "<strong>Minimal IT resource requirements</strong> (2-4 hours/week during setup)",
    s8_cat3_title: "Security & Compliance",
    s8_cat3_p1: "Privacy-by-Design Architecture",
    s8_cat3_p2: "GDPR, HIPAA, and SOC 2 compliant infrastructure",
    s8_cat4_title: "Business Value Focus",
    s8_cat4_p1: "<strong>Average 5-8x ROI</strong> delivered within 12 months",
    s8_cat4_p2: "Comprehensive Service Model (tech, implementation, support)",
    s8_cat4_p3: "<strong>Future-proof technology</strong> that evolves with your needs",

    // Slide 9: Implementation Framework
    slide9Title: "Implementation Success Framework",
    s9_subtitle: "Our Proven 90-Day Methodology",
    s9_phase1_name: "Discovery & Assessment (Weeks 1-3)",
    s9_phase1_p1: "Document Audit",
    s9_phase1_p2: "Use Case Prioritization",
    s9_phase1_p3: "Success Metrics Definition",
    s9_phase2_name: "AI Model Development (Weeks 4-8)",
    s9_phase2_p1: "Data Preparation",
    s9_phase2_p2: "Model Training",
    s9_phase2_p3: "Integration Setup",
    s9_phase3_name: "Pilot Deployment (Weeks 9-12)",
    s9_phase3_p1: "Limited Rollout",
    s9_phase3_p2: "Performance Validation",
    s9_phase3_p3: "User Training",
    s9_outcomes_title: "Expected Outcomes",
    s9_outcome1_title: "Immediate (30 days)",
    s9_outcome1_desc: "60-80% reduction in document processing time.",
    s9_outcome2_title: "Medium-term (90 days)",
    s9_outcome2_desc: "5-8x ROI through efficiency gains.",
    s9_outcome3_title: "Long-term (12+ months)",
    s9_outcome3_desc: "Competitive advantage through hidden insights.",
    s9_risk_title: "Risk Mitigation",
    s9_risk1: "Phased Implementation",
    s9_risk2: "Performance Guarantees",
    s9_risk3: "Change Management Support",

    // Slide 10: ROI
    slide10Title: "ROI & Business Impact",
    s10_returns1_title: "Cost Savings (Direct Impact)",
    s10_returns1_desc: "60-80% decrease in document review time, saving $50K-200K annually per worker.",
    s10_returns2_title: "Revenue Enhancement (Indirect Impact)",
    s10_returns2_desc: "30-50% faster deal cycles and 15-25% improvement in customer satisfaction.",
    s10_stories_title: "Real Client Success Stories",
    s10_story_challenge_label: "Challenge:",
    s10_story_result_label: "Result:",
    s10_story1_org: "Mid-Size Law Firm",
    s10_story1_challenge: "Manual contract review taking 8+ hours.",
    s10_story1_result: "Review time cut to 45 minutes, saving $2.3M annually.",
    s10_story2_org: "Healthcare System",
    s10_story2_challenge: "Analyzing 50K+ patient feedback documents.",
    s10_story2_result: "Processing time cut from 6 months to 2 weeks.",
    s10_story3_org: "Financial Services Co.",
    s10_story3_challenge: "Manual loan document review bottlenecks.",
    s10_story3_result: "75% faster loan approvals, $12M in fraud prevention.",

    // Slide 11: Demo
    slide11Title: "See NLP Intelligence in Action",
    s11_cta: "Watch Live Platform Demo",
    s11_point1: "Drag-and-drop interface for multiple file formats with automatic classification.",
    s11_point2: "Natural language queries that understand context and intent.",
    s11_point3: "Real-time insights, trend analysis, and compliance monitoring.",

    // Slide 12: Getting Started
    slide12Title: "Getting Started with NLP Intelligence",
    s12_opt1_name: "NLP Intelligence Assessment (Free)",
    s12_opt1_desc: "Comprehensive analysis of your document landscape and use cases.",
    s12_opt1_inv: "Complimentary",
    s12_opt2_name: "Pilot Program",
    s12_opt2_desc: "90-day implementation for a specific use case with measurable ROI.",
    s12_opt2_inv: "$25K-75K",
    s12_opt3_name: "Enterprise Implementation",
    s12_opt3_desc: "Full-scale deployment across your organization.",
    s12_opt3_inv: "$100K-500K",
    s12_investment_label: "Investment",
    s12_contact_title: "Immediate Actions",
    s12_contact_email: "Email: info@bixory.ai",
    s12_contact_phone: "Phone: (555) 123-4567",
    s12_contact_website: "Website: bixory.ai",
    s12_contact_calendar_link: "#",
    s12_contact_cta: "Schedule Your Free Assessment",

    // Slide 13: Thank You
    slide13Title: "Thank You & Q&A",
    slide13Subtitle: "Transforming Text into Business Intelligence",
    s13_takeaway1: "80% of your business data is trapped in unstructured text.",
    s13_takeaway2: "Our solution provides industry-specific, 95%+ accuracy.",
    s13_takeaway3: "Start with a free assessment to identify high-value opportunities.",
    s13_qa_title: "Questions & Discussion",
    s13_cta: "Schedule Your Assessment",
  },
  zh: {
    // General
    title: "NLP数据智能",
    companyName: "AI数据解决方案",
    tagline: "文档与智能的交汇处",
    previous: "上一页",
    next: "下一页",
    slide: "幻灯片",
    of: "之",

    // Slide 1: Title
    slide1Title: "NLP数据智能",
    slide1Subtitle: "将文本转化为商业智能",
    slide1Hook: "如果您80%的最有价值业务数据对您的分析工具是不可见的，该怎么办？",

    // Slide 2: Data Crisis
    slide2Title: "价值2.5万亿美元的非结构化数据问题",
    dataImbalanceTitle: "数据失衡",
    dataImbalancePoint1: "80-90%的企业数据是非结构化文本（电子邮件、合同、报告、文件）",
    dataImbalancePoint2: "只有20%的业务数据位于结构化数据库和电子表格中",
    dataImbalancePoint3: "当前的分析工具只能分析这20% - 错失了大部分有价值的见解",
    costOfIgnoranceTitle: "忽视的代价",
    costOfIgnorancePoint1: "每年因未分析的非结构化数据而损失2.5万亿美元的商业价值",
    costOfIgnorancePoint2: "普通企业拥有10-50百万份包含关键商业情报的文件",
    costOfIgnorancePoint3: "人工审查文件的成本为每份20-50美元",
    costOfIgnorancePoint4: "知识工作者花费30-40%的时间用于搜索信息",
    invisibleIntelligenceTitle: "“无形”商业智能示例",
    invisibleIntelligenceExamples: "支持工单中的客户反馈、合同语言中的风险指标、研究报告中的市场洞察、监管文件中的合规问题、行业文件中的竞争情报。",
    slide2BottomLine: "您最宝贵的见解就隐藏在眼前 - 在文本中。",

    // Slide 3: What is NLP
    slide3Title: "什么是NLP数据智能？",
    slide3Definition: "NLP（自然语言处理）数据智能使用先进的AI自动读取、理解和从文本文档中提取见解 - 就像一个高技能的人类分析师，但具有机器的速度和规模。",
    capabilityTitle1: "文档理解",
    capabilityContent1: "自动阅读和理解复杂文档，提取关键信息，并理解上下文。",
    capabilityTitle2: "信息提取",
    capabilityContent2: "识别实体，从非结构化文本中提取结构化数据，并识别模式。",
    capabilityTitle3: "智能搜索",
    capabilityContent3: "根据意义查找文档，回答问题，并发现隐藏的联系。",
    capabilityTitle4: "内容分析",
    capabilityContent4: "分析情感，对文档进行分类，并从大型文档集中生成摘要。",
    capabilityTitle5: "合规监控",
    capabilityContent5: "识别监管风险，监控策略违规，并确保遵守标准。",

    // Slide 4: Why Now
    slide4Title: "为什么现在NLP智能至关重要",
    slide4Section1Title: "业务驱动因素",
    slide4Section1Point1: "数字化转型：文档量每年增长25-30%。",
    slide4Section1Point2: "监管压力：合规文档要求不断扩大。",
    slide4Section1Point3: "竞争竞赛：文档洞察力成为竞争优势。",
    slide4Section2Title: "经济需求",
    slide4Section2Point1: "成本压力：手动处理成本高昂且效率低下。",
    slide4Section2Point2: "收入机会：更快的处理和更好的洞察力推动收入增长。",
    slide4Section2Point3: "风险防范：通过主动风险识别避免成本。",
    slide4Section3Title: "技术成熟度",
    slide4Section3Point1: "AI突破：语言模型现已达到人类水平的理解能力。",
    slide4Section3Point2: "处理准确性：企业使用准确率超过95%的门槛。",
    slide4Section3Point3: "集成准备就绪：现代API可实现无缝集成。",

    // Slide 5: Applications
    slide5Title: "跨行业的实际应用",
    'Legal & Professional Services': "法律与专业服务",
    legalContent: "<strong>用例：</strong> 合同分析、法律研究、尽职调查。<br/><strong>影响：</strong> 合同审查时间从8小时减少到45分钟。",
    'Healthcare': "医疗保健",
    healthcareContent: "<strong>用例：</strong> 临床记录分析、医学研究、法规提交。<br/><strong>影响：</strong> 在2周内分析了50万份患者记录，而手动需要6个月。",
    'Financial Services': "金融服务",
    financialContent: "<strong>用例：</strong> 贷款处理、风险评估、欺诈检测。<br/><strong>影响：</strong> 贷款申请处理速度提高75%，每年节省1200万美元。",
    'Manufacturing & Supply Chain': "制造业与供应链",
    manufacturingContent: "<strong>用例：</strong> 技术文档、供应商合同、安全报告。<br/><strong>影响：</strong> 预防了价值800万美元的设备故障。",

    // Slide 6: Platform
    slide6Title: "我们的NLP数据智能平台",
    s6_doc_intel_engine_title: "文档智能引擎",
    s6_doc_intel_engine_content: "支持50多种语言的多格式处理（PDF、Word、电子邮件）。",
    s6_ai_analysis_layer_title: "AI分析层",
    s6_ai_analysis_layer_content: "针对特定行业的预训练和自定义模型。",
    s6_bi_dashboard_title: "商业智能仪表板",
    s6_bi_dashboard_content: "实时洞察、交互式搜索和自动警报。",
    s6_integration_api_title: "集成与API",
    s6_integration_api_content: "RESTful API和预构建的连接器，可实现无缝集成。",
    s6_key_features_title: "主要功能",
    "Smart Document Processing": "智能文档处理",
    "Automatic classification, key info extraction, and change detection.": "自动分类、关键信息提取和变更检测。",
    "Intelligent Search & Discovery": "智能搜索与发现",
    "Semantic search, question-answering, and content discovery.": "语义搜索、问答和内容发现。",
    "Analytics & Insights": "分析与洞察",
    "Sentiment analysis, trend identification, and risk monitoring.": "情感分析、趋势识别和风险监控。",
    "Collaboration & Workflow": "协作与工作流",
    "Human-in-the-loop validation, team collaboration, and audit trails.": "人工验证、团队协作和审计追踪。",

    // Slide 7: Products & Services
    slide7Title: "我们的产品与服务组合",
    s7_core_platform_title: "核心平台产品",
    s7_table_header_product: "产品",
    s7_table_header_desc: "描述",
    s7_table_header_ideal: "理想选择",
    s7_table_header_benefits: "主要优势",
    s7_prod1_name: "文档智能平台",
    s7_prod1_desc: "用于文档处理和分析的SaaS平台",
    s7_prod1_ideal: "大中型企业",
    s7_prod1_benefits: "• 95%提取准确率<br>• 实时处理<br>• 多格式支持",
    s7_prod2_name: "行业特定模型",
    s7_prod2_desc: "针对专业文档的预训练AI模型",
    s7_prod2_ideal: "垂直领域企业",
    s7_prod2_benefits: "• 内置领域专业知识<br>• 更快部署<br>• 更高准确性",
    s7_prod3_name: "智能搜索套件",
    s7_prod3_desc: "支持自然语言查询的企业搜索",
    s7_prod3_ideal: "知识密集型组织",
    s7_prod3_benefits: "• 语义理解<br>• 跨文档洞察<br>• 即时答案",
    s7_prod4_name: "合规监控工具",
    s7_prod4_desc: "自动化法规文件审查",
    s7_prod4_ideal: "受监管行业",
    s7_prod4_benefits: "• 风险识别<br>• 自动化报告<br>• 审计追踪维护",
    s7_services_title: "专业服务",
    s7_table_header_service: "服务",
    s7_table_header_value: "交付价值",
    s7_serv1_name: "自定义模型开发",
    s7_serv1_desc: "特定行业的AI模型和提取规则",
    s7_serv1_value: "根据您的特定文档类型和术语量身定制",
    s7_serv2_name: "实施与集成",
    s7_serv2_desc: "端到端部署和系统集成",
    s7_serv2_value: "与现有工作流程无缝集成",
    s7_serv3_name: "文档处理服务",
    s7_serv3_desc: "批量文档分析的托管服务",
    s7_serv3_value: "无需内部分配资源即可获得即时结果",

    // Slide 8: Competitive Advantages
    slide8Title: "选择我们NLP智能解决方案的理由",
    s8_cat1_title: "卓越技术",
    s8_cat1_p1: "与通用NLP解决方案相比，准确性<strong>高出3倍</strong>",
    s8_cat1_p2: "在人工监督下准确率<strong>超过95%</strong>",
    s8_cat1_p3: "能够理解文档关系的上下文感知分析",
    s8_cat2_title: "实施优势",
    s8_cat2_p1: "与定制解决方案相比，部署速度<strong>快80%</strong>",
    s8_cat2_p2: "灵活的部署选项（云、本地、混合）",
    s8_cat2_p3: "<strong>IT资源需求极低</strong>（设置期间每周2-4小时）",
    s8_cat3_title: "安全与合规",
    s8_cat3_p1: "隐私设计架构",
    s8_cat3_p2: "符合GDPR, HIPAA, 和 SOC 2 标准的基础设施",
    s8_cat4_title: "关注商业价值",
    s8_cat4_p1: "12个月内平均实现<strong>5-8倍的投资回报率</strong>",
    s8_cat4_p2: "全面的服务模式（技术、实施、支持）",
    s8_cat4_p3: "与您需求共同发展的<strong>面向未来的技术</strong>",

    // Slide 9: Implementation Framework
    slide9Title: "实施成功框架",
    s9_subtitle: "我们成熟的90天方法论",
    s9_phase1_name: "发现与评估（1-3周）",
    s9_phase1_p1: "文档审计",
    s9_phase1_p2: "用例优先级排序",
    s9_phase1_p3: "成功指标定义",
    s9_phase2_name: "AI模型开发（4-8周）",
    s9_phase2_p1: "数据准备",
    s9_phase2_p2: "模型训练",
    s9_phase2_p3: "集成设置",
    s9_phase3_name: "试点部署（9-12周）",
    s9_phase3_p1: "有限范围推广",
    s9_phase3_p2: "性能验证",
    s9_phase3_p3: "用户培训",
    s9_outcomes_title: "预期成果",
    s9_outcome1_title: "短期（30天）",
    s9_outcome1_desc: "文档处理时间减少60-80%。",
    s9_outcome2_title: "中期（90天）",
    s9_outcome2_desc: "通过效率提升实现5-8倍投资回报率。",
    s9_outcome3_title: "长期（12个月以上）",
    s9_outcome3_desc: "通过隐藏的洞察力获得竞争优势。",
    s9_risk_title: "风险缓解",
    s9_risk1: "分阶段实施",
    s9_risk2: "性能保证",
    s9_risk3: "变更管理支持",

    // Slide 10: ROI
    slide10Title: "投资回报与业务影响",
    s10_returns1_title: "成本节约（直接影响）",
    s10_returns1_desc: "文件审查时间减少60-80%，每位员工每年节省5万至20万美元。",
    s10_returns2_title: "收入增长（间接影响）",
    s10_returns2_desc: "交易周期加快30-50%，客户满意度提高15-25%。",
    s10_stories_title: "真实客户成功案例",
    s10_story_challenge_label: "挑战：",
    s10_story_result_label: "成果：",
    s10_story1_org: "中型律师事务所",
    s10_story1_challenge: "手动合同审查耗时超过8小时。",
    s10_story1_result: "审查时间缩短至45分钟，年节省230万美元。",
    s10_story2_org: "医疗系统",
    s10_story2_challenge: "分析超过5万份患者反馈文件。",
    s10_story2_result: "处理时间从6个月缩短至2周。",
    s10_story3_org: "金融服务公司",
    s10_story3_challenge: "手动贷款文件审查瓶颈。",
    s10_story3_result: "贷款审批速度提高75%，防止欺诈损失1200万美元。",

    // Slide 11: Demo
    slide11Title: "亲见NLP智能的实际应用",
    s11_cta: "观看实时平台演示",
    s11_point1: "支持多种文件格式的拖放界面，并自动分类。",
    s11_point2: "能够理解上下文和意图的自然语言查询。",
    s11_point3: "实时洞察、趋势分析和合规监控。",

    // Slide 12: Getting Started
    slide12Title: "开始使用NLP智能",
    s12_opt1_name: "NLP智能评估（免费）",
    s12_opt1_desc: "对您的文档环境和用例进行全面分析。",
    s12_opt1_inv: "免费",
    s12_opt2_name: "试点项目",
    s12_opt2_desc: "针对特定用例的90天实施，具有可衡量的投资回报率。",
    s12_opt2_inv: "2.5万-7.5万美元",
    s12_opt3_name: "企业级实施",
    s12_opt3_desc: "在您的整个组织范围内全面部署。",
    s12_opt3_inv: "10万-50万美元",
    s12_investment_label: "投资",
    s12_contact_title: "立即行动",
    s12_contact_email: "电子邮件: info@bixory.ai",
    s12_contact_phone: "电话: (555) 123-4567",
    s12_contact_website: "网站: bixory.ai",
    s12_contact_calendar_link: "#",
    s12_contact_cta: "安排您的免费评估",

    // Slide 13: Thank You
    slide13Title: "谢谢 & 问答",
    slide13Subtitle: "将文本转化为商业智能",
    s13_takeaway1: "您80%的业务数据被困在非结构化文本中。",
    s13_takeaway2: "我们的解决方案提供行业特定的95%以上准确率。",
    s13_takeaway3: "从免费评估开始，确定高价值机会。",
    s13_qa_title: "问题与讨论",
    s13_cta: "安排您的评估",
  }
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  // Initialize language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('presentation_language') as 'en' | 'zh' || 'en';
    setLanguage(savedLang);
  }, []);

  // Function to change language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('presentation_language', newLanguage);
  };
  
  // Translate function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  // Define slide components with titles
  const slides = [
    { component: TitleSlide, title: "Title" },
    { component: DataCrisisSlide, title: t('slide2Title') },
    { component: WhatIsNLPSlide, title: t('slide3Title') },
    { component: WhyNowSlide, title: t('slide4Title') },
    { component: ApplicationsSlide, title: t('slide5Title') },
    { component: PlatformArchitectureSlide, title: t('slide6Title') },
    { component: ProductsAndServicesSlide, title: t('slide7Title') },
    { component: CompetitiveAdvantageSlide, title: t('slide8Title') },
    { component: ImplementationFrameworkSlide, title: t('slide9Title') },
    { component: ROISlide, title: t('slide10Title') },
    { component: DemoPreviewSlide, title: t('slide11Title') },
    { component: GettingStartedSlide, title: t('slide12Title') },
    { component: ThankYouSlide, title: t('slide13Title') },
  ];

  // Navigation functions
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
      const solutionName = 'nlp-data-intelligence';
      const solutionPath = `/${solutionName}/presentation/build/`;
      const indexOfSolution = currentPath.indexOf(solutionPath);

      if (indexOfSolution !== -1) {
          const parentPath = currentPath.substring(0, indexOfSolution);
          window.location.href = parentPath + '/' || '/';
      } else {
          // Fallback for cases where the structure is different, e.g. dev environment
          window.location.href = '../../../';
      }
      return;
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); goToHome(); }}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-600" />
          </a>
        </div>

        {/* Centered Title */}
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

      {/* Navigation Controls - above the main content */}
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

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
          <CurrentSlideComponent t={t} />
        </div>
      </main>
    </div>
  );
}

export default App;