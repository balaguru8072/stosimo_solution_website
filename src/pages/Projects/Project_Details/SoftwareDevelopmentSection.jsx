import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaCheckCircle } from 'react-icons/fa';
import teamImage from '../../../assets/images/details_1.jpg'; // Software team image
import challengeImg1 from '../../../assets/images/challengeImg1.jpg'; // Server room
import challengeImg2 from '../../../assets/images/challengeImg2.jpg'; // Iron

const SoftwareDevelopmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const challenges = [
    { id: 1, text: 'Managed IT Services' },
    { id: 2, text: '60+ Remove background/mon' },
    { id: 3, text: 'Data Backup Recovery' },
    { id: 4, text: 'New had happen unable uneasy' },
    { id: 5, text: 'Drawings can followed improved out sociable not' },
    { id: 6, text: 'Comparison new ham melancholy son themselves' }
  ];

  const projectInfo = [
    { label: 'Client', value: 'James Mary' },
    { label: 'Category', value: 'Business Consulting' },
    { label: 'Start date', value: '1 September 2025' },
    { label: 'End date', value: '1 December 2025' },
    { label: 'Budget', value: '$7854.66' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: '#', name: 'Facebook' },
    { icon: <FaTwitter />, link: '#', name: 'Twitter' },
    { icon: <FaDribbble />, link: '#', name: 'Dribbble' },
    { icon: <FaInstagram />, link: '#', name: 'Instagram' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

.portfolio-sections {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #EFF6FF 100%);
        }

        /* ========== SECTION 1: SOFTWARE DEVELOPMENT ANALYSIS - FIRST ========== */
.software-dev-section {
          padding: 15px 0 0 0;
          position: relative;
          overflow: hidden;
        }

.software-dev-section::before {
          content: '';
          position: absolute;
          bottom: -15%;
          left: -5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, transparent 70%);
          border-radius: 50%;
          animation: orbFloat1 20s ease-in-out infinite reverse;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -40px) scale(1.2); }
        }

.dev-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

.dev-row {
          display: flex;
          align-items: flex-start;
          gap: 60px;
          {/* margin-bottom: 60px; */}
        }

.dev-image-wrapper {
          flex: 0 0 58%;
          opacity: 0;
          transform: translateX(-80px) scale(0.9);
          transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.dev-image-wrapper.animate {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

.dev-image-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59, 130, 246, 0.25);
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.dev-image-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 40px 100px rgba(59, 130, 246, 0.4);
        }

.dev-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

.dev-image-card:hover.dev-image {
          transform: scale(1.1);
        }

.dev-info-card {
          flex: 0 0 38%;
          opacity: 0;
          transform: translateX(80px) scale(0.9);
          transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
        }

.dev-info-card.animate {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

.info-card-wrapper {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          padding: 40px 35px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.info-card-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
        }

.info-title {
          font-size: 22px;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 8px 0;
          position: relative;
          padding-bottom: 12px;
        }

.info-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%);
          border-radius: 2px;
          animation: lineExpand 2s ease-in-out infinite;
        }

        @keyframes lineExpand {
          0%, 100% { width: 50px; }
          50% { width: 80px; }
        }

.info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 28px 0 32px 0;
        }

.info-item {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border-radius: 12px;
          padding: 16px 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          opacity: 0;
          transform: translateX(20px);
          animation: itemSlideIn 0.6s ease forwards;
        }

.info-item:nth-child(1) { animation-delay: 0.1s; }
.info-item:nth-child(2) { animation-delay: 0.2s; }
.info-item:nth-child(3) { animation-delay: 0.3s; }
.info-item:nth-child(4) { animation-delay: 0.4s; }
.info-item:nth-child(5) { animation-delay: 0.5s; }

        @keyframes itemSlideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

.info-item:hover {
          transform: translateX(8px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.15);
          background: linear-gradient(90deg, #F8FAFC 0%, #EFF6FF 100%);
        }

.info-label {
          font-size: 14px;
          font-weight: 600;
          color: #64748B;
          min-width: 100px;
        }

.info-value {
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          margin-left: 20px;
        }

.social-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 10px;
        }

.social-link {
          width: 44px;
          height: 44px;
          background: #F1F5F9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3B82F6;
          font-size: 18px;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          text-decoration: none;
        }

.social-link:hover {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: #FFFFFF;
          transform: translateY(-5px) scale(1.15);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }

.dev-content-bottom {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
        }

.dev-content-bottom.animate {
          opacity: 1;
          transform: translateY(0);
        }

.dev-title {
          font-size: 52px;
          font-weight: 900;
          background: linear-gradient(135deg, #0F172A 0%, #3B82F6 50%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 25px 0;
          letter-spacing: -1.5px;
          line-height: 1.2;
        }

.dev-desc {
          font-size: 16px;
          font-weight: 400;
          color: #475569;
          line-height: 1.9;
          margin: 0 0 20px 0;
        }

        /* ========== SECTION 2: PROJECT CHALLENGES - SECOND ========== */
.project-challenges-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #E2E8F0;
        }

.project-challenges-section::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: orbFloat2 18s ease-in-out infinite;
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.15); }
        }

.challenges-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

.challenges-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.challenges-images.animate {
          opacity: 1;
          transform: translateY(0);
        }

.challenge-img-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.challenge-img-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 35px 90px rgba(59, 130, 246, 0.35);
        }

.challenge-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

.challenge-img-card:hover.challenge-img {
          transform: scale(1.1);
        }

.challenges-content {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
        }

.challenges-content.animate {
          opacity: 1;
          transform: translateY(0);
        }

.challenges-title {
          font-size: 48px;
          font-weight: 900;
          color: #0F172A;
          margin: 0 0 25px 0;
          letter-spacing: -1px;
        }

.challenges-desc {
          font-size: 16px;
          font-weight: 400;
          color: #64748B;
          line-height: 1.9;
          margin: 0 0 35px 0;
        }

.challenges-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 40px;
        }

.challenge-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          opacity: 0;
          transform: translateX(-20px);
          animation: itemSlideIn 0.6s ease forwards;
        }

.challenge-item:nth-child(1) { animation-delay: 0.1s; }
.challenge-item:nth-child(2) { animation-delay: 0.2s; }
.challenge-item:nth-child(3) { animation-delay: 0.3s; }
.challenge-item:nth-child(4) { animation-delay: 0.4s; }
.challenge-item:nth-child(5) { animation-delay: 0.5s; }
.challenge-item:nth-child(6) { animation-delay: 0.6s; }

.challenge-icon {
          color: #3B82F6;
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.challenge-item:hover.challenge-icon {
          transform: scale(1.3) rotate(360deg);
          color: #8B5CF6;
        }

.challenge-text {
          font-size: 15px;
          font-weight: 500;
          color: #475569;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
.dev-row {
            flex-direction: column;
            gap: 50px;
          }
.dev-image-wrapper,
.dev-info-card {
            flex: 1;
            width: 100%;
          }
.challenges-images {
            grid-template-columns: 1fr;
          }
.challenges-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
.software-dev-section,
.project-challenges-section {
            padding: 70px 0;
          }
.dev-title,
.challenges-title {
            font-size: 36px;
          }
.dev-image {
            height: 320px;
          }
.challenge-img {
            height: 280px;
          }
.info-card-wrapper {
            padding: 30px 25px;
          }
        }
      `}</style>

      <div className="container portfolio-sections" ref={sectionRef}>
        {/* SECTION 1: SOFTWARE DEVELOPMENT ANALYSIS - FIRST */}
        <section className="container software-dev-section">
          <div className="dev-container">
            <div className="dev-row">
              <div className={`dev-image-wrapper ${isVisible? 'animate' : ''}`}>
                <div className="dev-image-card">
                  <img src={teamImage} alt="Software Development Team" className="dev-image" />
                </div>
              </div>

              <div className={`dev-info-card ${isVisible? 'animate' : ''}`}>
                <div className="info-card-wrapper">
                  <h3 className="info-title">Project Information</h3>
                  
                  <div className="info-list">
                    {projectInfo.map((item, index) => (
                      <div key={index} className="info-item">
                        <span className="info-label">{item.label}:</span>
                        <span className="info-value">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.link} 
                        className="social-link"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`dev-content-bottom ${isVisible? 'animate' : ''}`}>
              <h2 className="dev-title">Software Development Analysis</h2>
              <p className="dev-desc">
                Accelerate innovation with world-class tech teams. We'll match you to an entire 
                remote team of incredible freelance talent for all your software development needs.
              </p>
              <p className="dev-desc">
                Building a powerful brand is essential to standing out in today's competitive market. 
                Our Brand Development service focuses on crafting a unique identity that resonates with 
                your target audience, strengthens your brand's presence, and drives long-term success. 
                We dive deep into understanding your business values, vision, and goals to create a 
                brand that reflects your core essence. Contact us today to schedule a free consultation!
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: PROJECT CHALLENGES - SECOND */}
        <section className="project-challenges-section">
          <div className="challenges-container">
            <div className={`challenges-images ${isVisible? 'animate' : ''}`}>
              <div className="challenge-img-card">
                <img src={challengeImg1} alt="Server Room" className="challenge-img" />
              </div>
              <div className="challenge-img-card">
                <img src={challengeImg2} alt="Iron Equipment" className="challenge-img" />
              </div>
            </div>

            <div className={`challenges-content ${isVisible? 'animate' : ''}`}>
              <h2 className="challenges-title">Project Challenges</h2>
              <p className="challenges-desc">
                We denounce with righteous indige nation and dislike men who are so beguiled and 
                demo realized by the charms of pleasure of the moment, so blinded by desire, that 
                they cannot foresee the pain and trouble that are bound to ensue cannot foresee. 
                These cases are perfectly simple and easy to distinguish. In a free hour, when our 
                power of choice is untrammelled.
              </p>

              <div className="challenges-list">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="challenge-item">
                    <FaCheckCircle className="challenge-icon" />
                    <span className="challenge-text">{challenge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SoftwareDevelopmentSection;