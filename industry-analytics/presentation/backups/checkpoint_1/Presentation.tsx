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
  GitBranch
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
        <div className="content-slide challenges-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="slide-header">
            <h2>Industry Pain Points</h2>
          </div>
          
          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="card-icon decision-icon">
                <Network size={28} />
              </div>
              <div className="card-title">Complex Decision Making</div>
              <div className="card-description">Multiple variables, non-linear relationships</div>
            </div>
            
            <div className="challenge-card">
              <div className="card-icon predictive-icon">
                <AlertTriangle size={28} />
              </div>
              <div className="card-title">Predictive Gaps</div>
              <div className="card-description">Unable to anticipate failures, trends, and opportunities</div>
            </div>
            
            <div className="challenge-card">
              <div className="card-icon operational-icon">
                <Workflow size={28} />
              </div>
              <div className="card-title">Operational Inefficiencies</div>
              <div className="card-description">Sub-optimal processes despite abundant data</div>
            </div>
            
            <div className="challenge-card">
              <div className="card-icon data-value-icon">
                <Server size={28} />
              </div>
              <div className="card-title">Untapped Data Value</div>
              <div className="card-description">Existing systems store data but don't extract insights</div>
            </div>
            
            <div className="challenge-card">
              <div className="card-icon adoption-icon">
                <GitBranch size={28} />
              </div>
              <div className="card-title">AI Adoption Barriers</div>
              <div className="card-description">Fragmented systems, technical complexity, ROI uncertainty</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our AI-First Approach",
      subtitle: "Industry-Specific AI Solutions",
      content: (
        <div className="content-slide solutions-slide">
          <div className="bg-graphics">
            <div className="data-point point1"></div>
            <div className="data-point point2"></div>
            <div className="data-point point3"></div>
            <div className="data-line line1"></div>
            <div className="data-line line2"></div>
          </div>
          
          <div className="slide-header">
            <h2>Industry-Specific AI Solutions</h2>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="card-icon vision-icon">
                <BrainCircuit size={28} />
              </div>
              <div className="card-title">AI-Powered Analytics</div>
              <div className="card-description">
                <ul>
                  <li>Advanced prediction models</li>
                  <li>Real-time insights generation</li>
                  <li>Automated decision support</li>
                </ul>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="card-icon integration-icon">
                <LineChart size={28} />
              </div>
              <div className="card-title">Seamless Integration</div>
              <div className="card-description">
                <ul>
                  <li>Connect with existing systems</li>
                  <li>No-code data pipelines</li>
                  <li>Custom API development</li>
                </ul>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="card-icon roi-icon">
                <DollarSign size={28} />
              </div>
              <div className="card-title">ROI-Focused Approach</div>
              <div className="card-description">
                <ul>
                  <li>Clear value metrics</li>
                  <li>Performance dashboards</li>
                  <li>Continuous improvement</li>
                </ul>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="card-icon scalable-icon">
                <TrendingUp size={28} />
              </div>
              <div className="card-title">Scalable Architecture</div>
              <div className="card-description">
                <ul>
                  <li>Start small, scale fast</li>
                  <li>Cloud or on-premise deployment</li>
                  <li>Future-proof technology stack</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="key-differentiator">
            <span>Our solutions deliver <strong>3x faster time-to-value</strong> than generic AI platforms</span>
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
      </div>

      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation; 