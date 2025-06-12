import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';
import IntroductionSlide from './components/slides/IntroductionSlide';
import BusinessChallengesSlide from './components/slides/BusinessChallengesSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import PlatformArchitectureSlide from './components/slides/PlatformArchitectureSlide';
import CaseStudySlide from './components/slides/CaseStudySlide';
import TechnologyDeepDiveSlide from './components/slides/TechnologyDeepDiveSlide';
import MarketOpportunitySlide from './components/slides/MarketOpportunitySlide';
import PartnershipValuePropSlide from './components/slides/PartnershipValuePropSlide';
import ImplementationSuccessSlide from './components/slides/ImplementationSuccessSlide';
import BusinessModelSlide from './components/slides/BusinessModelSlide';
import DemoSlide from './components/slides/DemoSlide';
import NextStepsSlide from './components/slides/NextStepsSlide';

const translations = {
  en: {
    title: "AI-powered Computer Vision",
    introduction: "Introduction",
    businessChallenges: "Business Challenges",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
    of: "of",
    solution: "Our Solution",
    platformArchitecture: "Platform Architecture",
    caseStudy: "Case Study",
    technology: "Technology",
    marketOpportunity: "Market Opportunity",
    partnership: "Partnership",
    implementationSuccess: "Implementation Success",
    businessModel: "Business Model",
    demo: "Demonstration",
    nextSteps: "Next Steps",
    // Slide 1
    slide1_title: "Computer Vision Quality Control",
    slide1_subtitle: "Transforming Manufacturing Quality with AI-Powered Visual Inspection",
    slide1_hook: "What if you could eliminate 95% of quality defects while reducing inspection costs by 60%?",
    slide1_tagline: "AI Data Solutions - Smart Manufacturing Division",
    // Slide 2
    slide2_title: "The $24 Million Problem",
    slide2_subtitle: "Why Manufacturing Quality Control Needs Disruption",
    slide2_financial_title: "Financial Impact",
    slide2_financial_point1: "$24M average cost per automotive recall",
    slide2_financial_point2: "2-5% defect rates cost manufacturers billions annually",
    slide2_financial_point3: "$75K+ annual cost per quality inspector",
    slide2_financial_point4: "40% shortage in skilled quality inspection personnel",
    slide2_operational_title: "Operational Challenges",
    slide2_operational_point1: "Human accuracy: Only 65-85% consistent detection rates",
    slide2_operational_point2: "Inspection bottlenecks: 15-30% of production time spent on quality checks",
    slide2_operational_point3: "Inconsistent standards: Quality varies by shift, inspector fatigue, and training",
    slide2_operational_point4: "Late detection: Defects found downstream cost 10x more to fix",
    slide2_market_title: "Market Pressure",
    slide2_market_point1: "Zero-defect expectations from automotive, aerospace, and medical device industries",
    slide2_market_point2: "Regulatory compliance requirements (ISO 9001, FDA, automotive standards)",
    slide2_market_point3: "Customer quality demands increasing while margins shrink",
    slide2_market_point4: "Global competition requiring operational excellence",
    // Slide 3
    slide3_title: "The Computer Vision Revolution",
    slide3_subtitle: "AI-Powered Quality Control That Actually Works",
    slide3_feature1: "Defect Detection Accuracy",
    slide3_feature2: "Processing Speed",
    slide3_feature2_value: "Real-time",
    slide3_feature3: "Operation",
    slide3_feature4: "Multi-Defect Detection",
    slide3_feature4_value: "Simultaneous",
    slide3_capabilities_title: "Advanced AI Capabilities",
    slide3_table_col1_header: "Traditional Systems",
    slide3_table_col2_header: "Our AI Solution",
    slide3_table_col3_header: "Business Impact",
    slide3_table_row1_col1: "Rule-based programming",
    slide3_table_row1_col2: "Deep learning adaptation",
    slide3_table_row1_col3: "Handles complex, variable defects",
    slide3_table_row2_col1: "Single defect type focus",
    slide3_table_row2_col2: "Multi-modal inspection",
    slide3_table_row2_col3: "One system replaces multiple tools",
    slide3_table_row3_col1: "Static thresholds",
    slide3_table_row3_col2: "Continuous learning",
    slide3_table_row3_col3: "Improves accuracy over time",
    slide3_table_row4_col1: "Expensive customization",
    slide3_table_row4_col2: "Rapid model training",
    slide3_table_row4_col3: "80% faster deployment",
    // Slide 4
    slide4_title: "Our Integrated Smart Manufacturing Platform",
    slide4_subtitle: "More Than Vision - Complete Manufacturing Intelligence",
    slide4_diagram_title: "Architecture That Delivers Value",
    slide4_diagram_box1_title: "Production Line Data",
    slide4_diagram_box1_subtitle: "Throughput, Equipment, Process",
    slide4_diagram_box2_title: "Computer Vision QC",
    slide4_diagram_box2_subtitle: "Real-time Inspection, Defect Classification",
    slide4_diagram_box3_title: "Analytics Intelligence",
    slide4_diagram_box3_subtitle: "Quality Trends, Predictive Insights",
    slide4_value_props_title: "Unique Value Propositions",
    slide4_prop1_title: "Integrated Intelligence",
    slide4_prop1_text: "Quality metrics flow directly into production analytics, enabling predictive quality modeling.",
    slide4_prop2_title: "Edge-to-Cloud Architecture",
    slide4_prop2_text: "Real-time inspection on the edge, with cloud analytics for pattern analysis and model training.",
    slide4_prop3_title: "Business Process Integration",
    slide4_prop3_text: "Quality data flows to ERP, maintenance, and supply chain systems for full integration.",
    // Slide 5
    slide5_title: "Proven Results - Electronics Manufacturer Case Study",
    slide5_subtitle: "Real Implementation, Measurable ROI",
    slide5_client_background_title: "Client Background",
    slide5_client_industry: "Industry",
    slide5_client_industry_value: "Consumer electronics assembly",
    slide5_client_scale: "Scale",
    slide5_client_scale_value: "4 production lines, 2M units annually",
    slide5_client_challenge: "Challenge",
    slide5_client_challenge_value: "3.2% defect rate causing $1.8M annual quality costs",
    slide5_business_impact_title: "Business Impact",
    slide5_impact1: "Reduced Scrap & Rework",
    slide5_impact1_value: "$890K savings",
    slide5_impact2: "Labor Cost Reduction",
    slide5_impact2_value: "$420K savings",
    slide5_impact3: "Improved Throughput",
    slide5_impact3_value: "$650K additional revenue",
    slide5_impact4: "Avoided Recalls",
    slide5_impact4_value: "$2.1M risk mitigation",
    slide5_total_roi: "Total Annual ROI",
    slide5_total_roi_value: "$4.06M value",
    slide5_quality_metrics_title: "Quantified Results (90 Days)",
    slide5_table_header1: "Quality Metrics",
    slide5_table_header2: "Before",
    slide5_table_header3: "After",
    slide5_table_header4: "Improvement",
    slide5_metric1: "Defect Detection Rate",
    slide5_metric2: "False Positive Rate",
    slide5_metric3: "Inspection Speed",
    slide5_metric4: "Quality Consistency",
    // Slide 6
    slide6_title: "Technology Deep Dive - What Makes Us Different",
    slide6_subtitle: "AI Innovation That Delivers Competitive Advantage",
    slide6_pillar1_title: "Advanced Computer Vision Algorithms",
    slide6_pillar1_point1: "Custom CNN architectures optimized for manufacturing defects",
    slide6_pillar1_point2: "Multi-scale detection for microscopic to surface-level flaws",
    slide6_pillar1_point3: "Ensemble methods providing 99.7% accuracy with low false positives",
    slide6_pillar2_title: "Real-Time Edge Processing",
    slide6_pillar2_point1: "Sub-100ms inference time for production-speed inspection",
    slide6_pillar2_point2: "NVIDIA Jetson integration for high-performance edge computing",
    slide6_pillar2_point3: "Failover redundancy ensuring 99.9% uptime",
    slide6_pillar3_title: "Enterprise Integration Excellence",
    slide6_pillar3_point1: "Native support for OPC-UA, Modbus, and Ethernet/IP",
    slide6_pillar3_point2: "Pre-built connectors for Siemens, Rockwell, and GE systems",
    slide6_pillar3_point3: "RESTful APIs for any custom integration",
    slide6_pillar4_title: "Security & Compliance",
    slide6_pillar4_point1: "SOC 2 Type II certified for enterprise-grade security",
    slide6_pillar4_point2: "GDPR/CCPA compliant for privacy-preserving data handling",
    slide6_pillar4_point3: "Role-based access control for granular permissions",
    // Slide 7
    slide7_title: "Market Opportunity - $15B and Growing",
    slide7_subtitle: "Perfect Timing for Strategic Partnership",
    slide7_market_size_title: "Market Size & Growth",
    slide7_market_current: "Current Market (2024)",
    slide7_market_projected: "Projected Market (2030)",
    slide7_market_cagr: "Annual Growth (CAGR)",
    slide7_market_drivers_title: "Market Drivers Creating Urgency",
    slide7_driver1: "Labor market crisis with a 40% shortage in skilled inspectors.",
    slide7_driver2: "Intensifying quality requirements from key industries.",
    slide7_driver3: "Technology adoption accelerating as AI matures and hardware costs drop.",
    // Slide 8
    slide8_title: "Partnership Value Proposition",
    slide8_subtitle: "Mutual Success Framework",
    slide8_section1_title: "What We Bring",
    slide8_section1_point1: "Proven AI & manufacturing expertise.",
    slide8_section1_point2: "Complete solution stack from cameras to analytics.",
    slide8_section1_point3: "Market traction with 300-500% average ROI.",
    slide8_section2_title: "What We're Looking For",
    slide8_section2_point1: "Strategic alignment and manufacturing focus.",
    slide8_section2_point2: "Complementary capabilities and market access.",
    slide8_section2_point3: "Resource commitment for joint success.",
    slide8_section3_title: "Partnership Models",
    slide8_section3_point1: "Channel Partner (Recommended)",
    slide8_section3_point2: "System Integrator Partnership",
    slide8_section3_point3: "Strategic Alliance",
    // Slide 9
    slide9_title: "Implementation Success Story - Automotive Parts",
    slide9_subtitle: "Real Partnership in Action",
    slide9_partnership_background_title: "Partnership Background",
    slide9_partnership_background_text: "Partnered with a regional manufacturing solutions integrator to solve a paint quality inspection bottleneck for a Tier-2 automotive parts supplier.",
    slide9_results_title: "Customer Success Metrics",
    slide9_metric1: "Paint Quality Score",
    slide9_metric2: "Inspection Throughput",
    slide9_metric3: "Rework Rate",
    slide9_metric4: "Customer Satisfaction",
    slide9_success_factors_title: "Key Success Factors",
    slide9_factor1: "Partner's manufacturing relationships opened doors quickly.",
    slide9_factor2: "Our AI expertise solved complex quality challenges.",
    slide9_factor3: "Joint implementation reduced customer risk and accelerated adoption.",
    slide9_testimonial: "The partnership between [Partner] and AI Data Solutions delivered exactly what we needed - manufacturing expertise combined with cutting-edge AI technology...",
    slide9_testimonial_author: "John Martinez, Plant Manager, Automotive Parts Supplier",
    // Slide 10
    slide10_title: "Investment & Business Model",
    slide10_subtitle: "Clear Economics, Predictable Returns",
    slide10_investment_title: "Investment Requirements",
    slide10_investment_text: "A total partnership investment is needed for product development, market development, team expansion, and working capital.",
    slide10_investment_timeline: "over 18 months",
    slide10_revenue_title: "Revenue Sharing Model",
    slide10_revenue_point1: "Implementation Services",
    slide10_revenue_point2: "Software Licensing",
    slide10_revenue_point3: "Support & Maintenance",
    slide10_customer_title: "Customer Economics",
    slide10_customer_ltv: "Lifetime Value",
    slide10_customer_roi: "3-Year ROI",
    // Slide 11
    slide11_title: "Technology Demonstration",
    slide11_subtitle: "See Our AI in Action - Live Demo",
    slide11_point1_title: "Real-Time Defect Detection",
    slide11_point1_text: "Live video feed of PCB inspection, identifying component placement, solder quality, and surface defects.",
    slide11_point2_title: "Live Dashboard Walkthrough",
    slide11_point2_text: "See quality metrics correlate with production data and generate predictive alerts.",
    slide11_point3_title: "Technical Deep Dive",
    slide11_point3_text: "Optional walkthrough of model architecture, edge computing, and integration APIs.",
    slide11_point4_title: "Interactive Q&A Session",
    slide11_point4_text: "Ask us anything about implementation, integration, or ROI calculations for your specific needs.",
    slide11_custom_demo_title: "Custom Demo Options Available",
    slide11_custom_demo_text: "We can tailor the demo using your product samples and address your specific quality challenges.",
    // Slide 12
    slide12_title: "Next Steps & Partnership Framework",
    slide12_subtitle: "Building a Successful Partnership Together",
    slide12_action_plan_title: "90-Day Action Plan",
    slide12_phase1_title: "Phase 1: Alignment & Planning",
    slide12_phase1_duration: "Days 1-30",
    slide12_phase1_point1: "Joint business planning and market analysis.",
    slide12_phase1_point2: "Technical integration roadmap definition.",
    slide12_phase2_title: "Phase 2: Enablement & Co-Marketing",
    slide12_phase2_duration: "Days 31-60",
    slide12_phase2_point1: "Technical and sales team training.",
    slide12_phase2_point2: "Launch of co-branded marketing campaigns.",
    slide12_phase3_title: "Phase 3: Joint Selling & Review",
    slide12_phase3_duration: "Days 61-90",
    slide12_phase3_point1: "First joint customer engagement.",
    slide12_phase3_point2: "Quarterly business review and planning for next quarter.",
    slide12_cta_title: "Let's Build the Future of Manufacturing Together",
    slide12_cta_text: "Contact us to schedule a follow-up meeting to discuss our partnership.",
  },
  zh: {
    title: "人工智能计算机视觉",
    introduction: "介绍",
    businessChallenges: "业务挑战",
    previous: "上一页",
    next: "下一页",
    slide: "幻灯片",
    of: "之",
    solution: "我们的解决方案",
    platformArchitecture: "平台架构",
    caseStudy: "案例研究",
    technology: "技术深入",
    marketOpportunity: "市场机遇",
    partnership: "合作伙伴",
    implementationSuccess: "实施成功案例",
    businessModel: "商业模式",
    demo: "技术演示",
    nextSteps: "下一步",
    // Slide 1
    slide1_title: "计算机视觉质量控制",
    slide1_subtitle: "通过人工智能视觉检测转变制造质量",
    slide1_hook: "如果您能消除95%的质量缺陷，同时将检测成本降低60%，会怎么样？",
    slide1_tagline: "AI数据解决方案 - 智能制造部",
    // Slide 2
    slide2_title: "2400万美元的问题",
    slide2_subtitle: "为什么制造业质量控制需要颠覆",
    slide2_financial_title: "财务影响",
    slide2_financial_point1: "每次汽车召回平均成本2400万美元",
    slide2_financial_point2: "2-5%的缺陷率每年给制造商造成数十亿的损失",
    slide2_financial_point3: "每位质检员年成本超过7.5万美元",
    slide2_financial_point4: "熟练质检人员短缺40%",
    slide2_operational_title: "运营挑战",
    slide2_operational_point1: "人的准确性：只有65-85%的一致检测率",
    slide2_operational_point2: "检测瓶颈：15-30%的生产时间用于质量检查",
    slide2_operational_point3: "标准不一：质量因班次、检验员疲劳和培训而异",
    slide2_operational_point4: "延迟发现：下游发现的缺陷修复成本高10倍",
    slide2_market_title: "市场压力",
    slide2_market_point1: "汽车、航空航天和医疗设备行业的零缺陷期望",
    slide2_market_point2: "法规遵从性要求（ISO 9001、FDA、汽车标准）",
    slide2_market_point3: "客户质量要求不断提高，而利润却在缩水",
    slide2_market_point4: "全球竞争要求卓越运营",
    // Slide 3
    slide3_title: "计算机视觉革命",
    slide3_subtitle: "真正有效的人工智能质量控制",
    slide3_feature1: "缺陷检测准确率",
    slide3_feature2: "处理速度",
    slide3_feature2_value: "实时",
    slide3_feature3: "操作",
    slide3_feature4: "多缺陷检测",
    slide3_feature4_value: "同步",
    slide3_capabilities_title: "先进的人工智能能力",
    slide3_table_col1_header: "传统系统",
    slide3_table_col2_header: "我们的AI解决方案",
    slide3_table_col3_header: "业务影响",
    slide3_table_row1_col1: "基于规则的编程",
    slide3_table_row1_col2: "深度学习自适应",
    slide3_table_row1_col3: "处理复杂多变的缺陷",
    slide3_table_row2_col1: "关注单一缺陷类型",
    slide3_table_row2_col2: "多模式检测",
    slide3_table_row2_col3: "一个系统取代多个工具",
    slide3_table_row3_col1: "静态阈值",
    slide3_table_row3_col2: "持续学习",
    slide3_table_row3_col3: "随时间提高准确性",
    slide3_table_row4_col1: "昂贵的定制",
    slide3_table_row4_col2: "快速模型训练",
    slide3_table_row4_col3: "部署速度快80%",
    // Slide 4
    slide4_title: "我们的集成智能制造平台",
    slide4_subtitle: "超越视觉 - 全面的制造智能",
    slide4_diagram_title: "创造价值的架构",
    slide4_diagram_box1_title: "生产线数据",
    slide4_diagram_box1_subtitle: "吞吐量、设备、流程",
    slide4_diagram_box2_title: "计算机视觉质量控制",
    slide4_diagram_box2_subtitle: "实时检测、缺陷分类",
    slide4_diagram_box3_title: "分析智能",
    slide4_diagram_box3_subtitle: "质量趋势、预测性见解",
    slide4_value_props_title: "独特价值主张",
    slide4_prop1_title: "集成智能",
    slide4_prop1_text: "质量指标直接流入生产分析，实现预测性质量建模。",
    slide4_prop2_title: "边云协同架构",
    slide4_prop2_text: "在边缘进行实时检测，利用云分析进行模式分析和模型训练。",
    slide4_prop3_title: "业务流程整合",
    slide4_prop3_text: "质量数据流入ERP、维护和供应链系统，实现全面整合。",
    // Slide 5
    slide5_title: "实际成果 - 电子制造商案例研究",
    slide5_subtitle: "真实实施，可衡量的投资回报率",
    slide5_client_background_title: "客户背景",
    slide5_client_industry: "行业",
    slide5_client_industry_value: "消费电子组装",
    slide5_client_scale: "规模",
    slide5_client_scale_value: "4条生产线，年产200万件",
    slide5_client_challenge: "挑战",
    slide5_client_challenge_value: "3.2%的缺陷率导致每年180万美元的质量成本",
    slide5_business_impact_title: "业务影响",
    slide5_impact1: "减少废品和返工",
    slide5_impact1_value: "节省89万美元",
    slide5_impact2: "降低劳动力成本",
    slide5_impact2_value: "节省42万美元",
    slide5_impact3: "提高产量",
    slide5_impact3_value: "增加65万美元收入",
    slide5_impact4: "避免召回",
    slide5_impact4_value: "降低210万美元风险",
    slide5_total_roi: "年度总投资回报率",
    slide5_total_roi_value: "价值406万美元",
    slide5_quality_metrics_title: "量化结果（90天）",
    slide5_table_header1: "质量指标",
    slide5_table_header2: "之前",
    slide5_table_header3: "之后",
    slide5_table_header4: "改进",
    slide5_metric1: "缺陷检测率",
    slide5_metric2: "误报率",
    slide5_metric3: "检测速度",
    slide5_metric4: "质量一致性",
    // Slide 6
    slide6_title: "技术深入 - 我们的与众不同之处",
    slide6_subtitle: "提供竞争优势的AI创新",
    slide6_pillar1_title: "先进的计算机视觉算法",
    slide6_pillar1_point1: "为制造缺陷优化的定制CNN架构",
    slide6_pillar1_point2: "从微观到表面缺陷的多尺度检测",
    slide6_pillar1_point3: "集成方法提供99.7%的准确率和低误报率",
    slide6_pillar2_title: "实时边缘处理",
    slide6_pillar2_point1: "低于100毫秒的推理时间，实现生产速度检测",
    slide6_pillar2_point2: "集成NVIDIA Jetson，实现高性能边缘计算",
    slide6_pillar2_point3: "故障转移冗余确保99.9%的正常运行时间",
    slide6_pillar3_title: "卓越的企业集成",
    slide6_pillar3_point1: "原生支持OPC-UA、Modbus和Ethernet/IP",
    slide6_pillar3_point2: "为西门子、罗克韦尔和GE系统预建连接器",
    slide6_pillar3_point3: "用于任何自定义集成的RESTful API",
    slide6_pillar4_title: "安全与合规",
    slide6_pillar4_point1: "SOC 2 Type II认证，实现企业级安全",
    slide6_pillar4_point2: "符合GDPR/CCPA，保护隐私数据处理",
    slide6_pillar4_point3: "基于角色的访问控制，实现精细化权限管理",
    // Slide 7
    slide7_title: "市场机遇 - 150亿美元且不断增长",
    slide7_subtitle: "战略合作的绝佳时机",
    slide7_market_size_title: "市场规模与增长",
    slide7_market_current: "当前市场 (2024)",
    slide7_market_projected: "预计市场 (2030)",
    slide7_market_cagr: "年均复合增长率",
    slide7_market_drivers_title: "创造紧迫性的市场驱动力",
    slide7_driver1: "劳动力市场危机，熟练检验员短缺40%。",
    slide7_driver2: "关键行业对质量的要求日益严格。",
    slide7_driver3: "随着AI技术成熟和硬件成本下降，技术采用正在加速。",
    // Slide 8
    slide8_title: "合作伙伴价值主张",
    slide8_subtitle: "共同成功框架",
    slide8_section1_title: "我们带来什么",
    slide8_section1_point1: "成熟的AI与制造专业知识。",
    slide8_section1_point2: "从摄像头到分析的完整解决方案。",
    slide8_section1_point3: "市场牵引力，平均投资回报率300-500%。",
    slide8_section2_title: "我们在寻找什么",
    slide8_section2_point1: "战略一致性和制造业重点。",
    slide8_section2_point2: "互补能力和市场准入。",
    slide8_section2_point3: "为共同成功投入资源。",
    slide8_section3_title: "合作模式",
    slide8_section3_point1: "渠道合作伙伴（推荐）",
    slide8_section3_point2: "系统集成商合作伙伴",
    slide8_section3_point3: "战略联盟",
    // Slide 9
    slide9_title: "实施成功案例 - 汽车零部件",
    slide9_subtitle: "真实的合作伙伴关系",
    slide9_partnership_background_title: "合作伙伴背景",
    slide9_partnership_background_text: "与区域制造解决方案集成商合作，为一家二级汽车零部件供应商解决了喷漆质量检测瓶颈问题。",
    slide9_results_title: "客户成功指标",
    slide9_metric1: "喷漆质量得分",
    slide9_metric2: "检测吞吐量",
    slide9_metric3: "返工率",
    slide9_metric4: "客户满意度",
    slide9_success_factors_title: "关键成功因素",
    slide9_factor1: "合作伙伴的制造关系迅速打开了局面。",
    slide9_factor2: "我们的AI专业知识解决了复杂的质量挑战。",
    slide9_factor3: "联合实施降低了客户风险并加速了采用。",
    slide9_testimonial: "【合作伙伴】与AI数据解决方案之间的合作完全满足了我们的需求——制造专业知识与尖端AI技术的结合...",
    slide9_testimonial_author: "约翰·马丁内斯，工厂经理，汽车零部件供应商",
    // Slide 10
    slide10_title: "投资与商业模式",
    slide10_subtitle: "清晰的经济学，可预测的回报",
    slide10_investment_title: "投资需求",
    slide10_investment_text: "产品开发、市场开发、团队扩张和营运资金需要总的合作伙伴投资。",
    slide10_investment_timeline: "超过18个月",
    slide10_revenue_title: "收入分成模式",
    slide10_revenue_point1: "实施服务",
    slide10_revenue_point2: "软件许可",
    slide10_revenue_point3: "支持与维护",
    slide10_customer_title: "客户经济学",
    slide10_customer_ltv: "生命周期价值",
    slide10_customer_roi: "3年投资回报率",
    // Slide 11
    slide11_title: "技术演示",
    slide11_subtitle: "观看我们的人工智能实际操作 - 现场演示",
    slide11_point1_title: "实时缺陷检测",
    slide11_point1_text: "实时视频展示PCB检测，识别元件放置、焊接质量和表面缺陷。",
    slide11_point2_title: "实时仪表板演示",
    slide11_point2_text: "查看质量指标与生产数据的关联，并生成预测性警报。",
    slide11_point3_title: "技术深入探讨",
    slide11_point3_text: "可选的模型架构、边缘计算和集成API的演练。",
    slide11_point4_title: "互动问答环节",
    slide11_point4_text: "根据您的具体需求，向我们提问有关实施、集成或投资回报率计算的任何问题。",
    slide11_custom_demo_title: "可提供定制演示选项",
    slide11_custom_demo_text: "我们可以使用您的产品样品量身定制演示，并解决您特定的质量挑战。",
    // Slide 12
    slide12_title: "下一步与合作伙伴框架",
    slide12_subtitle: "共同建立成功的合作伙伴关系",
    slide12_action_plan_title: "90天行动计划",
    slide12_phase1_title: "第一阶段：统一与规划",
    slide12_phase1_duration: "1-30天",
    slide12_phase1_point1: "联合业务规划和市场分析。",
    slide12_phase1_point2: "技术集成路线图定义。",
    slide12_phase2_title: "第二阶段：赋能与联合营销",
    slide12_phase2_duration: "31-60天",
    slide12_phase2_point1: "技术和销售团队培训。",
    slide12_phase2_point2: "推出联合品牌营销活动。",
    slide12_phase3_title: "第三阶段：联合销售与审查",
    slide12_phase3_duration: "61-90天",
    slide12_phase3_point1: "首次联合客户互动。",
    slide12_phase3_point2: "季度业务审查和下季度规划。",
    slide12_cta_title: "让我们一起共创制造业的未来",
    slide12_cta_text: "请联系我们安排后续会议，讨论我们的合作伙伴关系。",
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
    { component: IntroductionSlide, title: t('introduction') },
    { component: BusinessChallengesSlide, title: t('businessChallenges') },
    { component: SolutionSlide, title: t('solution') },
    { component: PlatformArchitectureSlide, title: t('platformArchitecture') },
    { component: CaseStudySlide, title: t('caseStudy') },
    { component: TechnologyDeepDiveSlide, title: t('technology') },
    { component: MarketOpportunitySlide, title: t('marketOpportunity') },
    { component: PartnershipValuePropSlide, title: t('partnership') },
    { component: ImplementationSuccessSlide, title: t('implementationSuccess') },
    { component: BusinessModelSlide, title: t('businessModel') },
    { component: DemoSlide, title: t('demo') },
    { component: NextStepsSlide, title: t('nextSteps') },
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