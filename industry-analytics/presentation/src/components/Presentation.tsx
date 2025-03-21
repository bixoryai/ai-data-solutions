import React, { useState, useEffect } from 'react';
import './Presentation.css';
import { 
  BrainCircuit,
  LineChart,
  Cog,
  Database,
  ShieldCheck,
  Eye as EyeIcon,
  Microscope,
  Search as SearchCode,
  Boxes,
  Wrench,
  BarChart,
  CircleDollarSign,
  AlertCircle,
  Clock,
  Users,
  Layers,
  GitMerge,
  BadgeCheck,
  Zap,
  Replace,
  Activity,
  AlertTriangle,
  PieChart,
  BarChart3
} from 'lucide-react';

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            <h1>Industry-specific AI Analytics</h1>
            <h3>Transforming Industries with AI-Powered Insights</h3>
            
            <div className="tagline">
              <span>Predictive Analytics</span>
              <span className="divider">•</span>
              <span>Operational Efficiency</span>
              <span className="divider">•</span>
              <span>Value Acceleration</span>
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
      content: (
        <div className="content-slide opportunity-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="opportunity-header">
            <h2>Why Industry-specific AI Analytics Now?</h2>
            
            <div className="opportunity-highlight">
              <div className="pulse-circle"></div>
              <span>Industry AI adoption expected to grow at <strong>24% CAGR</strong></span>
            </div>
          </div>
          
          <div className="opportunity-grid">
            <div className="opportunity-item">
              <div className="icon-container market-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="opportunity-value">$7B</div>
              <div className="opportunity-desc">market by 2030</div>
            </div>
            
            <div className="opportunity-item">
              <div className="icon-container generic-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="opportunity-statement">Generic AI no longer sufficient for competitive advantage</div>
            </div>
            
            <div className="opportunity-item">
              <div className="icon-container roi-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="opportunity-value">3X</div>
              <div className="opportunity-desc">higher ROI from industry-tailored AI vs. generic solutions</div>
            </div>
            
            <div className="opportunity-item">
              <div className="icon-container data-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path>
                  <line x1="4" y1="2" x2="10" y2="2"></line>
                  <line x1="14" y1="2" x2="20" y2="2"></line>
                  <line x1="4" y1="22" x2="10" y2="22"></line>
                  <line x1="14" y1="22" x2="20" y2="22"></line>
                  <line x1="12" y1="18" x2="12" y2="13"></line>
                  <line x1="12" y1="8" x2="12" y2="6"></line>
                </svg>
              </div>
              <div className="opportunity-statement">Existing systems contain valuable data waiting to be unlocked</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'challenges',
      title: 'Industry Pain Points',
      content: (
        <div className="challenges-slide">
          <div className="challenges-header">
            <h2>Key Business Challenges We Solve</h2>
            
            <div className="opportunity-highlight challenges-highlight-top">
              <div className="pulse-circle"></div>
              <span>Our industry-specific AI solutions address these pain points with <strong>proven results</strong></span>
            </div>
          </div>
          
          <div className="challenges-container">
            <div className="challenges-container-horizontal-line"></div>
            <div className="challenge-item">
              <div className="challenge-content">
                <div className="challenge-icon decision-icon">
                  <BrainCircuit />
                </div>
                <h3>Complex Decision Making</h3>
                <p>Multiple variables and non-linear relationships create complexity that traditional systems can't handle.</p>
              </div>
            </div>
            <div className="challenge-item">
              <div className="challenge-content">
                <div className="challenge-icon predictive-icon">
                  <LineChart />
                </div>
                <h3>Predictive Gaps</h3>
                <p>Inability to anticipate failures and trends leads to reactive rather than proactive operations.</p>
              </div>
            </div>
            <div className="challenge-item">
              <div className="challenge-content">
                <div className="challenge-icon operational-icon">
                  <Cog />
                </div>
                <h3>Operational Inefficiencies</h3>
                <p>Sub-optimal processes despite abundant data result in wasted resources and higher costs.</p>
              </div>
            </div>
            <div className="challenge-item">
              <div className="challenge-content">
                <div className="challenge-icon data-value-icon">
                  <Database />
                </div>
                <h3>Untapped Data Value</h3>
                <p>Existing systems store data but fail to extract actionable insights for business advantage.</p>
              </div>
            </div>
            <div className="challenge-item">
              <div className="challenge-content">
                <div className="challenge-icon adoption-icon">
                  <ShieldCheck />
                </div>
                <h3>AI Adoption Barriers</h3>
                <p>Technical complexity and ROI uncertainty prevent effective implementation across industries.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our AI-First Approach",
      content: (
        <div className="content-slide approach-slide">
          <div className="approach-header">
            <h2>Advanced AI Tailored to Industry Needs</h2>
            
            <div className="opportunity-highlight approach-highlight">
              <div className="pulse-circle"></div>
              <span>Specialized AI solutions deliver 3X higher value than generic approaches</span>
            </div>
          </div>
          
          <div className="approach-container">
            <div className="approach-center">
              <div className="approach-icon-center">
                <BrainCircuit />
              </div>
              <h3>Cross-Industry AI Capabilities</h3>
            </div>
            
            <div className="approach-item">
              <div className="approach-icon">
                <LineChart />
              </div>
              <h3>Predictive Analytics</h3>
              <p>AI models that forecast trends and outcomes with higher accuracy</p>
              <div className="approach-metric">40-60% higher</div>
            </div>
            
            <div className="approach-item">
              <div className="approach-icon">
                <EyeIcon />
              </div>
              <h3>Anomaly Detection</h3>
              <p>Identifying unusual patterns across complex datasets in real-time</p>
              <div className="approach-metric">Real-time</div>
            </div>
            
            <div className="approach-item">
              <div className="approach-icon">
                <SearchCode />
              </div>
              <h3>Natural Language Understanding</h3>
              <p>Industry-specific document processing and knowledge extraction</p>
              <div className="approach-metric">Domain-specific</div>
            </div>
            
            <div className="approach-item">
              <div className="approach-icon">
                <Wrench />
              </div>
              <h3>Automated Decision Support</h3>
              <p>Augmenting human decisions with AI-driven recommendations</p>
              <div className="approach-metric">Human-AI collaboration</div>
            </div>
          </div>
          
          <div className="industry-applications">
            <div className="industry-header">
              <h3>Industry-Specific AI Applications</h3>
            </div>
            
            <div className="industry-grid">
              <div className="industry-section">
                <div className="industry-title">
                  <div className="industry-icon">
                    <Activity />
                  </div>
                  <h4>Healthcare</h4>
                </div>
                <ul className="industry-applications-list">
                  <li><span>Patient Journey Optimization:</span> 22% reduction in length of stay</li>
                  <li><span>Medical Image Analysis:</span> 97% diagnostic accuracy</li>
                  <li><span>Treatment Response Prediction:</span> 35% improved outcomes</li>
                </ul>
              </div>
              
              <div className="industry-section">
                <div className="industry-title">
                  <div className="industry-icon">
                    <CircleDollarSign />
                  </div>
                  <h4>Financial Services</h4>
                </div>
                <ul className="industry-applications-list">
                  <li><span>Fraud Detection Networks:</span> 52% more fraud detected</li>
                  <li><span>Risk Modeling:</span> 38% more accurate assessment</li>
                  <li><span>Regulatory Compliance:</span> 99.2% extraction accuracy</li>
                </ul>
              </div>
              
              <div className="industry-section">
                <div className="industry-title">
                  <div className="industry-icon">
                    <Microscope />
                  </div>
                  <h4>Manufacturing</h4>
                </div>
                <ul className="industry-applications-list">
                  <li><span>Predictive Quality Control:</span> Defects detected 6-10x earlier</li>
                  <li><span>Digital Twin Optimization:</span> 15-22% cost reduction</li>
                  <li><span>Predictive Maintenance:</span> 93% accurate failure prediction</li>
                </ul>
              </div>
              
              <div className="industry-section">
                <div className="industry-title">
                  <div className="industry-icon">
                    <Zap />
                  </div>
                  <h4>Energy & Utilities</h4>
                </div>
                <ul className="industry-applications-list">
                  <li><span>Grid Load Forecasting:</span> 99.2% prediction accuracy</li>
                  <li><span>Infrastructure Maintenance:</span> 3-4 weeks early warning</li>
                  <li><span>Consumption Optimization:</span> 17-25% energy waste reduction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Superior Results Through Specialized AI",
      content: (
        <div className="content-slide results-slide">
          <div className="results-header">
            <h2>Performance vs. Generic Solutions</h2>
            
            <div className="opportunity-highlight results-highlight">
              <div className="pulse-circle"></div>
              <span>Specialized AI consistently outperforms generic solutions</span>
            </div>
          </div>
          
          <div className="results-container">
            <div className="results-item">
              <div className="results-title-row">
                <div className="results-icon">
                  <BarChart />
                </div>
                <h3>Defect Prediction</h3>
              </div>
              <div className="comparison-container">
                <div className="comparison-bar specialized">
                  <div className="comparison-fill" style={{width: '87%'}}>
                    <span>87%</span>
                  </div>
                </div>
                <div className="comparison-bar generic">
                  <div className="comparison-fill" style={{width: '65%'}}>
                    <span>65%</span>
                  </div>
                </div>
                <div className="comparison-labels">
                  <span className="specialized-label">Specialized AI</span>
                  <span className="generic-label">Generic AI</span>
                </div>
              </div>
            </div>
            
            <div className="results-item">
              <div className="results-title-row">
                <div className="results-icon">
                  <CircleDollarSign />
                </div>
                <h3>Maintenance Cost Reduction</h3>
              </div>
              <div className="comparison-container">
                <div className="comparison-bar specialized">
                  <div className="comparison-fill" style={{width: '32%'}}>
                    <span>32%</span>
                  </div>
                </div>
                <div className="comparison-bar generic">
                  <div className="comparison-fill" style={{width: '18%'}}>
                    <span>18%</span>
                  </div>
                </div>
                <div className="comparison-labels">
                  <span className="specialized-label">Specialized AI</span>
                  <span className="generic-label">Generic AI</span>
                </div>
              </div>
            </div>
            
            <div className="results-item">
              <div className="results-title-row">
                <div className="results-icon">
                  <AlertCircle />
                </div>
                <h3>False Positive Rate</h3>
              </div>
              <div className="comparison-container">
                <div className="comparison-bar specialized">
                  <div className="comparison-fill" style={{width: '8%'}}>
                    <span>8%</span>
                  </div>
                </div>
                <div className="comparison-bar generic">
                  <div className="comparison-fill" style={{width: '23%'}}>
                    <span>23%</span>
                  </div>
                </div>
                <div className="comparison-labels">
                  <span className="specialized-label">Specialized AI</span>
                  <span className="generic-label">Generic AI</span>
                </div>
                <div className="comparison-note">Lower is better</div>
              </div>
            </div>
            
            <div className="results-item">
              <div className="results-title-row">
                <div className="results-icon">
                  <Clock />
                </div>
                <h3>Time to Implementation</h3>
              </div>
              <div className="comparison-container">
                <div className="comparison-bar specialized">
                  <div className="comparison-fill" style={{width: '33%'}}>
                    <span>8 weeks</span>
                  </div>
                </div>
                <div className="comparison-bar generic">
                  <div className="comparison-fill" style={{width: '100%'}}>
                    <span>24 weeks</span>
                  </div>
                </div>
                <div className="comparison-labels">
                  <span className="specialized-label">Specialized AI</span>
                  <span className="generic-label">Generic AI</span>
                </div>
                <div className="comparison-note">Lower is better</div>
              </div>
            </div>
            
            <div className="results-item">
              <div className="results-title-row">
                <div className="results-icon">
                  <Users />
                </div>
                <h3>User Adoption Rate</h3>
              </div>
              <div className="comparison-container">
                <div className="comparison-bar specialized">
                  <div className="comparison-fill" style={{width: '76%'}}>
                    <span>76%</span>
                  </div>
                </div>
                <div className="comparison-bar generic">
                  <div className="comparison-fill" style={{width: '42%'}}>
                    <span>42%</span>
                  </div>
                </div>
                <div className="comparison-labels">
                  <span className="specialized-label">Specialized AI</span>
                  <span className="generic-label">Generic AI</span>
                </div>
              </div>
            </div>
            
            <div className="results-item">
              <div className="results-title-row">
                <div className="results-icon">
                  <PieChart />
                </div>
                <h3>Return on Investment</h3>
              </div>
              <div className="comparison-container">
                <div className="comparison-bar specialized">
                  <div className="comparison-fill" style={{width: '100%'}}>
                    <span>317%</span>
                  </div>
                </div>
                <div className="comparison-bar generic">
                  <div className="comparison-fill" style={{width: '26%'}}>
                    <span>82%</span>
                  </div>
                </div>
                <div className="comparison-labels">
                  <span className="specialized-label">Specialized AI</span>
                  <span className="generic-label">Generic AI</span>
                </div>
                <div className="comparison-note">First-year ROI</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Seamless Enterprise Integration",
      content: (
        <div className="content-slide integration-slide">
          <div className="integration-header">
            <h2>AI Enhancement Without Disruption</h2>
            
            <div className="opportunity-highlight integration-highlight">
              <div className="pulse-circle"></div>
              <span>Enhance existing systems with AI while maintaining business continuity</span>
            </div>
          </div>
          
          <div className="integration-container">
            <div className="integration-item">
              <div className="integration-title-row">
                <div className="integration-icon">
                  <Layers />
                </div>
                <h3>AI Overlay Architecture</h3>
              </div>
              <p>Intelligence layer on existing systems</p>
              <div className="integration-badge">No Replacement Needed</div>
            </div>
            
            <div className="integration-item">
              <div className="integration-title-row">
                <div className="integration-icon">
                  <Zap />
                </div>
                <h3>Non-disruptive Implementation</h3>
              </div>
              <p>Minimal IT resource demands (2-4 hrs/week)</p>
              <div className="integration-badge">Resource Efficient</div>
            </div>
            
            <div className="integration-item">
              <div className="integration-title-row">
                <div className="integration-icon">
                  <ShieldCheck />
                </div>
                <h3>Secure & Compliant</h3>
              </div>
              <p>Privacy-preserving AI, support for all regulations</p>
              <div className="integration-badge">Enterprise-Ready</div>
            </div>
            
            <div className="integration-item">
              <div className="integration-title-row">
                <div className="integration-icon">
                  <GitMerge />
                </div>
                <h3>Fast Deployment</h3>
              </div>
              <p>Pre-built connectors for major enterprise systems</p>
              <div className="integration-badge">Rapid Time to Value</div>
            </div>
            
            <div className="integration-item">
              <div className="integration-title-row">
                <div className="integration-icon">
                  <Replace />
                </div>
                <h3>No Rip-and-Replace</h3>
              </div>
              <p>Enhances rather than replaces current investments</p>
              <div className="integration-badge">Maximize ROI</div>
            </div>
            
            <div className="integration-item">
              <div className="integration-title-row">
                <div className="integration-icon">
                  <BrainCircuit />
                </div>
                <h3>Simplified Change Management</h3>
              </div>
              <p>Intuitive interfaces reduce training needs by 65%</p>
              <div className="integration-badge">User-Friendly</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The 90-Day Journey to Value",
      content: (
        <div className="content-slide journey-slide">
          <div className="journey-header">
            <h2>The 90-Day Journey to Value</h2>
            
            <div className="opportunity-highlight journey-highlight">
              <div className="pulse-circle"></div>
              <span>Rapid, Measurable Impact</span>
            </div>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-track">
              <div className="timeline-progress-bar"></div>
              
              <div className="timeline-milestone milestone-1">
                <div className="milestone-marker">
                  <span>1</span>
                </div>
                <div className="milestone-content milestone-left">
                  <div className="milestone-time">Week 1-4</div>
                  <h3>Discovery & AI Value Assessment</h3>
                  <ul className="milestone-details">
                    <li>Data landscape evaluation</li>
                    <li>Opportunity identification</li>
                    <li>ROI projection model</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-milestone milestone-2">
                <div className="milestone-marker">
                  <span>2</span>
                </div>
                <div className="milestone-content milestone-right">
                  <div className="milestone-time">Week 5-6</div>
                  <h3>First AI Model Deployment</h3>
                  <ul className="milestone-details">
                    <li>Initial model training</li>
                    <li>Integration with data sources</li>
                    <li>First predictions generated</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-milestone milestone-3">
                <div className="milestone-marker">
                  <span>3</span>
                </div>
                <div className="milestone-content milestone-left">
                  <div className="milestone-time">Week 7-8</div>
                  <h3>Initial Insights & Validation</h3>
                  <ul className="milestone-details">
                    <li>First actionable insights</li>
                    <li>Model accuracy verification</li>
                    <li>User feedback collection</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-milestone milestone-4">
                <div className="milestone-marker">
                  <span>4</span>
                </div>
                <div className="milestone-content milestone-right">
                  <div className="milestone-time">Week 9-10</div>
                  <h3>Process Integration & Optimization</h3>
                  <ul className="milestone-details">
                    <li>Workflow integration</li>
                    <li>Automated reporting setup</li>
                    <li>Model refinement</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-milestone milestone-5">
                <div className="milestone-marker">
                  <span>5</span>
                </div>
                <div className="milestone-content milestone-left">
                  <div className="milestone-time">Week 11-12</div>
                  <h3>Value Measurement & Expansion</h3>
                  <ul className="milestone-details">
                    <li>ROI documentation</li>
                    <li>Value realization report</li>
                    <li>Expansion planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="journey-footer">
            <div className="journey-stats">
              <div className="journey-stat-item">
                <div className="journey-stat-value">3-4x</div>
                <div className="journey-stat-label">Faster time to value than traditional AI implementations</div>
              </div>
              <div className="journey-stat-item">
                <div className="journey-stat-value">20%</div>
                <div className="journey-stat-label">Initial ROI visible by week 6</div>
              </div>
              <div className="journey-stat-item">
                <div className="journey-stat-value">95%</div>
                <div className="journey-stat-label">Implementation success rate</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Why Bixing AI Technology",
      content: (
        <div className="content-slide why-bixing-slide">
          <div className="why-bixing-header">
            <h2>Why Bixing AI Technology</h2>
            
            <div className="opportunity-highlight">
              <div className="pulse-circle"></div>
              <span>Uniquely Positioned to Deliver Value</span>
            </div>
          </div>
          
          <div className="why-bixing-container">
            <div className="why-bixing-item">
              <div className="why-bixing-title-row">
                <div className="why-bixing-icon expertise-icon">
                  <BrainCircuit />
                </div>
                <h3>Industry + AI Expertise</h3>
              </div>
              <p>Deep domain knowledge combined with cutting-edge AI capabilities</p>
            </div>
            
            <div className="why-bixing-item">
              <div className="why-bixing-title-row">
                <div className="why-bixing-icon methodology-icon">
                  <Layers />
                </div>
                <h3>Proven Implementation Methodology</h3>
              </div>
              <p>95% success rate with our 90-day deployment framework</p>
            </div>
            
            <div className="why-bixing-item">
              <div className="why-bixing-title-row">
                <div className="why-bixing-icon algorithms-icon">
                  <Cog />
                </div>
                <h3>Proprietary Algorithms</h3>
              </div>
              <p>Industry-specific models delivering 30-50% better accuracy</p>
            </div>
            
            <div className="why-bixing-item">
              <div className="why-bixing-title-row">
                <div className="why-bixing-icon platform-icon">
                  <ShieldCheck />
                </div>
                <h3>Enterprise-Grade Platform</h3>
              </div>
              <p>Security, scalability, and compliance built into our core architecture</p>
            </div>
            
            <div className="why-bixing-item">
              <div className="why-bixing-title-row">
                <div className="why-bixing-icon roi-icon">
                  <BarChart3 />
                </div>
                <h3>Transparent ROI Framework</h3>
              </div>
              <p>Clear measurement methodology with documented success metrics</p>
            </div>
            
            <div className="why-bixing-item">
              <div className="why-bixing-title-row">
                <div className="why-bixing-icon future-icon">
                  <Zap />
                </div>
                <h3>Future-Proof Technology</h3>
              </div>
              <p>Continuous learning systems that improve with every implementation</p>
            </div>
          </div>
          
          <div className="why-bixing-footer">
            <div className="trust-badge">
              <BadgeCheck className="badge-icon" />
              <span>Trusted by Industry Leaders</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Investment & Returns",
      content: (
        <div className="content-slide investment-slide">
          <h2>Investment & Returns</h2>
          <div className="investment-subtitle">Clear Financial Impact with Measurable ROI</div>
          
          <div className="investment-container">
            <div className="investment-column">
              <div className="investment-header">
                <CircleDollarSign className="investment-icon" />
                <h3>Initial Investment</h3>
              </div>
              <div className="investment-content">
                <div className="investment-packages">
                  <div className="package">
                    <div className="package-name">Proof of Value</div>
                    <div className="package-price">$75,000 - $150,000</div>
                    <div className="package-description">Single use case with 8-week implementation</div>
                  </div>
                  
                  <div className="package featured">
                    <div className="package-badge">RECOMMENDED</div>
                    <div className="package-name">Industry AI Platform</div>
                    <div className="package-price">$250,000 - $500,000</div>
                    <div className="package-description">Multiple use cases with scalable platform</div>
                  </div>
                  
                  <div className="package">
                    <div className="package-name">Enterprise Partnership</div>
                    <div className="package-price">Custom Pricing</div>
                    <div className="package-description">Full digital transformation program</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="investment-column">
              <div className="investment-header">
                <BarChart className="investment-icon" />
                <h3>ROI Timeline</h3>
              </div>
              <div className="investment-content">
                <div className="roi-timeline">
                  <div className="timeline-container">
                    <div className="timeline-track"></div>
                    
                    <div className="timeline-point">
                      <div className="point-marker"></div>
                      <div className="point-label">Week 6-8</div>
                      <div className="point-value">First Value Delivered</div>
                    </div>
                    
                    <div className="timeline-point">
                      <div className="point-marker"></div>
                      <div className="point-label">Week 20</div>
                      <div className="point-value">Investment Break-even</div>
                    </div>
                    
                    <div className="timeline-point">
                      <div className="point-marker"></div>
                      <div className="point-label">Week 32</div>
                      <div className="point-value">100% ROI Achieved</div>
                    </div>
                    
                    <div className="timeline-point">
                      <div className="point-marker"></div>
                      <div className="point-label">Week 52</div>
                      <div className="point-value">300%+ ROI Realized</div>
                    </div>
                  </div>
                  
                  <div className="compounding-note">
                    <Zap size={16} />
                    <span>Value accelerates at 30% compounded quarterly as models improve</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="risk-mitigation">
            <div className="risk-header">
              <ShieldCheck size={20} />
              <h3>Risk Mitigation</h3>
            </div>
            <p>Success-based pricing components available with performance guarantees and phased implementation</p>
          </div>
        </div>
      )
    },
    {
      title: "AI Implementation Success Metrics",
      content: (
        <div className="content-slide metrics-slide">
          <h2>Measuring AI Implementation Success</h2>
          
          <div className="metrics-subtitle">
            Key indicators to track throughout your AI transformation journey
          </div>
          
          <div className="metrics-container">
            <div className="metrics-category">
              <div className="category-header">
                <Activity className="category-icon" />
                <h3>Operational Metrics</h3>
              </div>
              <ul className="metrics-list">
                <li>
                  <div className="metric-name">Process Efficiency</div>
                  <div className="metric-target">25-40% improvement</div>
                </li>
                <li>
                  <div className="metric-name">Decision Speed</div>
                  <div className="metric-target">60% faster responses</div>
                </li>
                <li>
                  <div className="metric-name">Error Reduction</div>
                  <div className="metric-target">87% fewer mistakes</div>
                </li>
              </ul>
            </div>
            
            <div className="metrics-category">
              <div className="category-header">
                <CircleDollarSign className="category-icon" />
                <h3>Financial Metrics</h3>
              </div>
              <ul className="metrics-list">
                <li>
                  <div className="metric-name">Implementation ROI</div>
                  <div className="metric-target">220-320% first year</div>
                </li>
                <li>
                  <div className="metric-name">Cost Reduction</div>
                  <div className="metric-target">$450K-$1.2M annually</div>
                </li>
                <li>
                  <div className="metric-name">Revenue Impact</div>
                  <div className="metric-target">12-18% growth</div>
                </li>
              </ul>
            </div>
            
            <div className="metrics-category">
              <div className="category-header">
                <BarChart3 className="category-icon" />
                <h3>Performance Metrics</h3>
              </div>
              <ul className="metrics-list">
                <li>
                  <div className="metric-name">Model Accuracy</div>
                  <div className="metric-target">92-97% precision</div>
                </li>
                <li>
                  <div className="metric-name">Processing Speed</div>
                  <div className="metric-target">10-100x faster than manual</div>
                </li>
                <li>
                  <div className="metric-name">Data Quality</div>
                  <div className="metric-target">99.5% reliability</div>
                </li>
              </ul>
            </div>
            
            <div className="metrics-category">
              <div className="category-header">
                <Users className="category-icon" />
                <h3>Adoption Metrics</h3>
              </div>
              <ul className="metrics-list">
                <li>
                  <div className="metric-name">User Engagement</div>
                  <div className="metric-target">85% active usage</div>
                </li>
                <li>
                  <div className="metric-name">Training Effectiveness</div>
                  <div className="metric-target">95% competency</div>
                </li>
                <li>
                  <div className="metric-name">Satisfaction Score</div>
                  <div className="metric-target">4.7/5 average rating</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="metrics-note">
            <AlertCircle size={16} className="note-icon" />
            All metrics are customized during the AI Value Assessment phase for your specific environment
          </div>
        </div>
      )
    },
    {
      title: "Next Steps",
      content: (
        <div className="content-slide next-steps-slide">
          <div className="next-steps-header">
            <h2>Ready To Start?</h2>
            <h3>Begin Your AI Transformation</h3>
          </div>
          
          <div className="next-steps-flow">
            <div className="flow-connection"></div>
            
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">
                  <svg xmlns="http://www.w3.org/2000/svg" className="step-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  Discovery Workshop
                </div>
                <div className="step-desc">A 2-hour session to identify high-value opportunities in your organization where AI can make an immediate impact.</div>
              </div>
            </div>
            
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">
                  <svg xmlns="http://www.w3.org/2000/svg" className="step-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  AI Value Assessment
                </div>
                <div className="step-desc">2-week analysis of your specific environment, data assets, and business challenges to quantify potential ROI.</div>
              </div>
            </div>
            
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">
                  <svg xmlns="http://www.w3.org/2000/svg" className="step-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Implementation Plan
                </div>
                <div className="step-desc">Detailed roadmap tailored to your priorities with clear milestones, resource requirements, and expected outcomes.</div>
              </div>
            </div>
            
            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">
                  <svg xmlns="http://www.w3.org/2000/svg" className="step-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Pilot Deployment
                </div>
                <div className="step-desc">8-week implementation of your first high-value use case, with measurable results and immediate business impact.</div>
              </div>
            </div>
          </div>
          
          <div className="next-steps-cta">
            <button className="cta-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              Schedule Your Discovery Workshop
            </button>
            <div className="contact-info">
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
              </span>
              develop@bixory.ai
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Calculate progress percentage
  const progress = ((currentSlide + 1) / slides.length) * 100;

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="presentation-container">
      <div className="progress-indicator">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="slide-content">
        {slides[currentSlide].content}
      </div>
      <div className="navigation">
        <button onClick={prevSlide} className="nav-button">
          ← Previous
        </button>
        <span className="slide-number">
          {currentSlide + 1} / {slides.length}
        </span>
        <button onClick={nextSlide} className="nav-button">
          Next →
        </button>
      </div>
    </div>
  );
};

export default Presentation; 