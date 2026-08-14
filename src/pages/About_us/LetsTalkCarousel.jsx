import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const LetsTalkCarousel = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');

       .cta-wrapper {
          font-family: 'Outfit', sans-serif;
          width: 100%;
        }

        /* Top Section - CTA Banner */
       .cta-top-section {
          background: #F8FAFC;
          padding: 80px 20px 0 20px;
        }

       .cta-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
        }

       .cta-banner-card {
          position: relative;
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #A855F7 100%);
          border-radius: 20px;
          padding: 48px 60px 48px 120px; /* Left padding for icon space */
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
          overflow: visible; /* For icon overflow */
        }

        /* Chat Icon Circle - Left Side */
       .cta-icon-circle {
          position: absolute;
          left: -50px;
          top: 50%;
          transform: translateY(-50%);
          width: 100px;
          height: 100px;
          background: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
          z-index: 10;
        }

       .cta-icon-circle svg {
          color: #3B82F6;
          font-size: 40px;
          stroke-width: 1.5;
        }

       .cta-content {
          flex: 1;
        }

       .cta-title {
          font-size: 36px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 12px 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

       .cta-desc {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: #FFFFFF;
          color: #1E293B;
          padding: 18px 48px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          white-space: nowrap;
        }

       .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        /* Bottom Section - Let's Talk Marquee */
       .lets-talk-section {
          background: #0F172A;
          padding: 70px 0;
          overflow: hidden;
        }

       .marquee-wrapper {
          display: flex;
          overflow: hidden;
          position: relative;
        }

       .marquee-track {
          display: flex;
          align-items: center;
          gap: 80px;
          animation: scrollMarquee 25s linear infinite;
          padding: 0 40px;
        }

       .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

       .talk-item {
          display: flex;
          align-items: center;
          gap: 24px;
          white-space: nowrap;
        }

       .talk-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

       .talk-icon svg {
          width: 100%;
          height: 100%;
        }

       .talk-icon.blue {
          color: #3B82F6;
        }

       .talk-icon.light {
          color: #CBD5E1;
        }

       .talk-icon.purple {
          color: #8B5CF6;
        }

       .talk-text {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -1px;
        }

       .talk-text.white {
          color: #FFFFFF;
        }

       .talk-text.gradient {
          background: linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Responsive */
        @media (max-width: 1024px) {
         .cta-banner-card {
            padding: 40px 40px 100px;
          }
         .cta-title {
            font-size: 32px;
          }
         .talk-text {
            font-size: 42px;
          }
         .marquee-track {
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
         .cta-top-section {
            padding: 60px 16px 0 16px;
          }
         .cta-banner-card {
            flex-direction: column;
            padding: 80px 30px 40px 30px;
            text-align: center;
            gap: 25px;
          }
         .cta-icon-circle {
            position: relative;
            left: 0;
            top: 0;
            transform: none;
            margin-bottom: 20px;
          }
         .cta-title {
            font-size: 26px;
          }
         .cta-desc {
            font-size: 15px;
          }
         .cta-button {
            width: 100%;
            padding: 16px 40px;
          }
         .lets-talk-section {
            padding: 50px 0;
          }
         .talk-text {
            font-size: 36px;
          }
         .talk-icon {
            width: 40px;
            height: 40px;
          }
         .marquee-track {
            gap: 50px;
          }
        }

        @media (max-width: 768px) {
          .cta-button {
            width: 100%;
            padding: 16px 40px;
          }
        }
      `}</style>

      <section className="cta-wrapper">
        {/* Top CTA Banner */}
        <div className="cta-top-section">
          <div className="cta-container">
            <div className="cta-banner-card">
              {/* Chat Icon - Left Side */}
              <div className="cta-icon-circle">
                <FiMessageSquare />
              </div>

              {/* Content */}
              <div className="cta-content">
                <h2 className="cta-title">Looking for the Best IT Business Solutions?</h2>
                <p className="cta-desc">
                  As a app web crawler expert, We will help to organize.
                </p>
              </div>

              {/* Button - Right Side */}
              <Link to="/contact" className="cta-button">
                Take A Consultant
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Let's Talk Marquee */}
        <div className="lets-talk-section">
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* First Set */}
              <div className="talk-item">
                <div className="talk-icon blue">
                  <HiSparkles />
                </div>
                <span className="talk-text white">Let's Talk</span>
              </div>

              <div className="talk-item">
                <div className="talk-icon light">
                  <HiSparkles />
                </div>
                <span className="talk-text white">Let's Talk</span>
              </div>

              <div className="talk-item">
                <div className="talk-icon purple">
                  <HiSparkles />
                </div>
                <span className="talk-text gradient">Let's Talk</span>
              </div>

              <div className="talk-item">
                <div className="talk-icon light">
                  <HiSparkles />
                </div>
                <span className="talk-text white">Let's Talk</span>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="talk-item">
                <div className="talk-icon blue">
                  <HiSparkles />
                </div>
                <span className="talk-text white">Let's Talk</span>
              </div>

              <div className="talk-item">
                <div className="talk-icon light">
                  <HiSparkles />
                </div>
                <span className="talk-text white">Let's Talk</span>
              </div>

              <div className="talk-item">
                <div className="talk-icon purple">
                  <HiSparkles />
                </div>
                <span className="talk-text gradient">Let's Talk</span>
              </div>

              <div className="talk-item">
                <div className="talk-icon light">
                  <HiSparkles />
                </div>
                <span className="talk-text white">Let's Talk</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsTalkCarousel;