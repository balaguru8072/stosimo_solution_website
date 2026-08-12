import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import aboutBg from '../../assets/images/about-hero-bg.jpg';

const About_Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .about-hero {
          position: relative;
          height: 320px; /* Reduced from 450px */
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .about-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .about-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: scaleIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          transform: scale(1.1);
        }

        .about-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.95) 0%, 
            rgba(99, 102, 241, 0.9) 40%,
            rgba(168, 85, 247, 0.85) 100%
          );
          z-index: 2;
          animation: fadeIn 1s ease forwards;
        }

        .about-hero-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
          animation: shimmer 8s infinite linear;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .about-hero-content {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .hero-title {
          font-size: 56px; /* Reduced from 64px */
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 16px; /* Reduced from 20px */
          line-height: 1.1;
          opacity: 0;
          transform: translateY(40px);
          animation: slideInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s forwards;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px; /* Reduced from 16px */
          font-weight: 500;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s forwards;
        }

        .breadcrumb-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .breadcrumb-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FFFFFF;
          transition: width 0.3s ease;
        }

        .breadcrumb-link:hover {
          color: #FFFFFF;
        }

        .breadcrumb-link:hover::after {
          width: 100%;
        }

        .breadcrumb-separator {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          display: flex;
          align-items: center;
        }

        .breadcrumb-current {
          color: #FFFFFF;
          font-weight: 600;
        }

        /* Floating Particles - Reduced size */
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
          z-index: 2;
        }

        .particle-1 {
          width: 60px; /* Reduced from 80px */
          height: 60px;
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-2 {
          width: 45px; /* Reduced from 60px */
          height: 45px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .particle-3 {
          width: 75px; /* Reduced from 100px */
          height: 75px;
          bottom: 10%;
          left: 25%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) {
          .about-hero {
            height: 280px; /* Reduced from 380px */
          }
          .hero-title {
            font-size: 42px; /* Reduced from 48px */
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            height: 240px; /* Reduced from 320px */
          }
          .hero-title {
            font-size: 32px; /* Reduced from 36px */
            margin-bottom: 12px;
          }
          .breadcrumb {
            font-size: 13px;
          }
          .particle {
            display: none;
          }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-hero-bg">
          <img 
            src={aboutBg} 
            alt="About Company" 
          />
        </div>
        
        <div className="about-hero-overlay"></div>
        
        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>

        <div className="about-hero-content">
          <h1 className="hero-title">About Company</h1>
          
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="breadcrumb-separator">
              <FiChevronRight />
              <FiChevronRight style={{ marginLeft: '-8px' }} />
            </span>
            <span className="breadcrumb-current">About Company</span>
          </nav>
        </div>
      </section>
    </>
  );
};

export default About_Banner;