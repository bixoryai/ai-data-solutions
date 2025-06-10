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
  Lightbulb
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
            <h1>Our AI-First Approach</h1>
            <h3>Advanced AI Tailored to Industry Needs</h3>
            
            <div className="ai-capabilities-section">
              <div className="section-title">Cross-Industry AI Capabilities:</div>
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
            <h1>Industry-Specific AI Applications</h1>
            <h3>Tailored Solutions for Each Industry</h3>
            
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

  return (
    <div className="presentation-container">
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
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button 
          className="edge-nav-btn next-edge-btn" 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <div className="slide-info">
          <div className="slide-number">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation; 