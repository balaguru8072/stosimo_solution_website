import React from 'react';
import shape from "../../src/assets/images/shape-1.png"

const ExperienceSection = () => {
  return (
    <>
      {/* Container Media Queries */}
      <style>{`
        @media (min-width: 576px) {
            .container {
                max-width: 540px;
            }
        }
        @media (min-width: 768px) {
            .container {
                max-width: 720px;
            }
        }
        @media (min-width: 992px) {
            .container {
                max-width: 960px;
            }
        }
        @media (min-width: 1200px) {
            .container {
                max-width: 1140px;
            }
        }
      `}</style>

      <section className="position-relative bg-light py-5" style={{ backgroundColor: '#F8FAFC', paddingTop: '100px', paddingBottom: '100px' }}>
        
        {/* Background Shape 1 - Network Lines */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${shape})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'cover',
            backgroundSize: 'cover',
            opacity: 0.5,
            pointerEvents: 'none'
          }}
        ></div>

        {/* Background Shape 2 - World Globe */}
        {/* Add your second shape here if needed */}

        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row align-items-center g-5">
            
            {/* Left Column - Col 1 */}
            <div className="col-lg-6">
              {/* 24+ Big Text */}
              {/* <div className="mb-3">
                <h2 
                  className="fw-bold mb-0" 
                  style={{ 
                    color: '#3B82F6', 
                    fontSize: '120px', 
                    lineHeight: '1' 
                  }}
                >
                  24+
                </h2>
                <p className="text-secondary fs-5 mt-2">
                  Years of Experience
                </p>
              </div> */}

              {/* Main Heading */}
              <h3 
                className="fw-bold" 
                style={{ 
                  color: '#0F172A', 
                  fontSize: '26px', 
                  lineHeight: '1.3' 
                }}
              >
                We run all kinds of IT services that vow your 
                success
              </h3>
            </div>

            {/* Right Column - Col 2 */}
            <div className="col-lg-6">
              {/* Sub Heading */}
              <h4 
                className="fw-bold mb-5" 
                style={{ 
                  color: '#0F172A', 
                  fontSize: '26px', 
                  lineHeight: '1.1' 
                }}
              >
                Accelerate innovation with world-class tech teams We'll match you to an entire 
                remote technology
              </h4>

              {/* Progress Item 1 - IT Management */}
              <div className="mb-4">
                <div className="mb-2">
                  <div className="progress" style={{ height: '8px', backgroundColor: '#E2E8F0' }}>
                    <div 
                      className="progress-bar position-relative" 
                      role="progressbar" 
                      style={{ 
                        width: '86%', 
                        backgroundColor: '#3B82F6',
                        borderRadius: '10px'
                      }}
                    >
                      <span 
                        className="position-absolute rounded-circle bg-primary border-white shadow"
                        style={{
                          right: '-8px',
                          top: '-4px',
                          width: '16px',
                          height: '16px',
                          borderWidth: '3px',
                          backgroundColor: '#3B82F6'
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0" style={{ color: '#334155', fontSize: '16px', fontWeight: '500' }}>
                    Digital Marketing
                  </p>
                  <p className="mb-0 fw-bold" style={{ color: '#0F172A', fontSize: '16px' }}>
                    80%
                  </p>
                </div>
              </div>

              {/* Progress Item 2 - Data Security */}
              <div>
                <div className="mb-2">
                  <div className="progress" style={{ height: '8px', backgroundColor: '#E2E8F0' }}>
                    <div 
                      className="progress-bar position-relative" 
                      role="progressbar" 
                      style={{ 
                        width: '90%', 
                        backgroundColor: '#3B82F6',
                        borderRadius: '10px'
                      }}
                    >
                      <span 
                        className="position-absolute rounded-circle border border-white shadow"
                        style={{
                          right: '-8px',
                          top: '-4px',
                          width: '16px',
                          height: '16px',
                          borderWidth: '3px',
                          backgroundColor: '#3B82F6'
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0" style={{ color: '#334155', fontSize: '16px', fontWeight: '500' }}>
                    IT Management
                  </p>
                  <p className="mb-0 fw-bold" style={{ color: '#0F172A', fontSize: '16px' }}>
                    90%
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;