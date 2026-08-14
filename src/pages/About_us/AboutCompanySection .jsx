import React, { useState, useEffect, useRef } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import vrKid from '../../assets/images/vrKid.jpg';
import teamCircle from '../../assets/images/teamCircle.png';
import client1 from '../../assets/images/client_1.png';
import client2 from '../../assets/images/client_1.png';
import client3 from '../../assets/images/client_1.png';
import client4 from '../../assets/images/client_1.png';

const AboutCompanySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const services = [
    'Website & Mobile application design & Development',
    'Dramatically re-engineer value added IT systems via mission'
  ];

  const clients = [client1, client2, client3, client4];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

      .about-section {
          padding: 80px 0; /* Reduced from 100px */
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

      .network-bg {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 400px;
          opacity: 0.15;
          background-image: 
            linear-gradient(45deg, transparent 40%, #3B82F6 40%, #3B82F6 42%, transparent 42%),
            linear-gradient(-45deg, transparent 40%, #3B82F6 40%, #3B82F6 42%, transparent 42%);
          background-size: 40px 40px;
          animation: networkMove 20s linear infinite;
          pointer-events: none;
        }

        @keyframes networkMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }

      .images-wrapper {
          position: relative;
          opacity: 0;
          transform: translateX(-60px);
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

      .images-wrapper.animate {
          opacity: 1;
          transform: translateX(0);
        }

      .vr-image-container {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          animation: floatImage 6s ease-in-out infinite;
          max-height: 480px; /* Added - Reduced height */
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

      .vr-image-container img {
          width: 100%;
          height: 480px; /* Fixed height - Reduced from auto */
          object-fit: cover;
          object-position: center top; /* Focus on top part */
          display: block;
          transition: transform 0.6s ease;
        }

      .vr-image-container:hover img {
          transform: scale(1.05);
        }

      .blue-card {
          position: absolute;
          top: 30px; /* Reduced from 40px */
          {/* left: -50px; /* Reduced from -60px */ */}
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          padding: 30px 26px; /* Reduced from 35px 30px */
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
          max-width: 260px; /* Reduced from 280px */
          z-index: 3;
          opacity: 0;
          transform: translateX(-50px) scale(0.9);
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
        }

      .blue-card.animate {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

      .blue-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5);
        }

      .blue-card-icon {
          width: 45px; /* Reduced from 50px */
          height: 45px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px; /* Reduced from 20px */
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

      .blue-card-icon svg {
          color: #FFFFFF;
          font-size: 22px; /* Reduced from 24px */
        }

      .blue-card-text {
          color: #FFFFFF;
          font-size: 17px; /* Reduced from 18px */
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

      .team-circle {
          position: absolute;
          bottom: -30px; /* Reduced from -40px */
          right: 30px; /* Reduced from 40px */
          width: 240px; /* Reduced from 280px */
          height: 240px;
          border-radius: 50%;
          overflow: hidden;
          border: 7px solid #FFFFFF; /* Reduced from 8px */
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          z-index: 2;
          opacity: 0;
          transform: scale(0.8) rotate(-10deg);
          transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
        }

      .team-circle.animate {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

      .team-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

      .team-circle:hover img {
          transform: scale(1.1) rotate(3deg);
        }

      .content-wrapper {
          padding-left: 60px;
          opacity: 0;
          transform: translateX(60px);
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
        }

      .content-wrapper.animate {
          opacity: 1;
          transform: translateX(0);
        }

      .about-badge {
          display: inline-block;
          background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
          color: #1E40AF;
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 25px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.15);
        }

      .about-badge.animate {
          opacity: 1;
          transform: translateY(0);
        }

      .about-title {
          font-size: 48px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 25px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease 0.5s;
        }

      .about-title.animate {
          opacity: 1;
          transform: translateY(0);
        }

      .about-desc {
          color: #64748B;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 35px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.6s;
        }

      .about-desc.animate {
          opacity: 1;
          transform: translateY(0);
        }

      .services-list {
          margin-bottom: 40px;
        }

      .service-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 18px;
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.6s ease;
        }

      .service-item.animate {
          opacity: 1;
          transform: translateX(0);
        }

      .service-item:nth-child(1) { transition-delay: 0.7s; }
      .service-item:nth-child(2) { transition-delay: 0.8s; }

      .service-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s ease;
        }

      .service-item:hover.service-icon {
          transform: scale(1.2) rotate(360deg);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

      .service-icon svg {
          color: #FFFFFF;
          font-size: 14px;
        }

      .service-text {
          color: #475569;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.6;
        }

      .clients-row {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.9s;
        }

      .clients-row.animate {
          opacity: 1;
          transform: translateY(0);
        }

      .client-avatars {
          display: flex;
          align-items: center;
        }

      .client-avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 3px solid #FFFFFF;
          overflow: hidden;
          margin-left: -15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

      .client-avatar:first-child {
          margin-left: 0;
        }

      .client-avatar:hover {
          transform: translateY(-5px) scale(1.1);
          z-index: 10;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

      .client-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

      .clients-text h4 {
          color: #0F172A;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          line-height: 1.4;
        }

      .global-company {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 35px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 1s;
        }

      .global-company.animate {
          opacity: 1;
          transform: translateY(0);
        }

      .global-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s ease;
        }

      .global-company:hover.global-icon {
          transform: rotateY(360deg);
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
        }

      .global-icon svg {
          color: #3B82F6;
          font-size: 28px;
          transition: all 0.4s ease;
        }

      .global-company:hover.global-icon svg {
          color: #FFFFFF;
        }

      .global-text h5 {
          color: #0F172A;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }

      .global-text p {
          color: #64748B;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

      .cta-btn {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: #FFFFFF;
          padding: 16px 45px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.35);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 1.1s, transform 0.3s ease, box-shadow 0.3s ease;
        }

      .cta-btn.animate {
          opacity: 1;
          transform: translateY(0);
        }

      .cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
        }

      .cta-btn svg {
          transition: transform 0.3s ease;
        }

      .cta-btn:hover svg {
          transform: translateX(5px);
        }

        @media (max-width: 991px) {
        .content-wrapper {
            padding-left: 0;
            margin-top: 60px;
          }
        .blue-card {
            left: 20px;
            top: 20px;
          }
        .team-circle {
            right: 20px;
            width: 200px; /* Reduced */
            height: 200px;
          }
        .vr-image-container {
            max-height: 400px; /* Reduced */
          }
        .vr-image-container img {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
        .about-title {
            font-size: 36px;
          }
        .blue-card {
            position: relative;
            left: 0;
            top: 0;
            margin-bottom: 30px;
            max-width: 100%;
          }
        .team-circle {
            position: relative;
            right: auto;
            bottom: auto;
            margin: 30px auto 0;
            width: 220px;
            height: 220px;
          }
        .vr-image-container {
            max-height: 350px; /* Further reduced for mobile */
          }
        .vr-image-container img {
            height: 350px;
          }
        }
      `}</style>

      <section className="about-section" ref={sectionRef}>
        <div className="network-bg"></div>
        
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className={`images-wrapper ${isVisible? 'animate' : ''}`}>
                <div className="vr-image-container">
                  <img src={vrKid} alt="VR Technology" />
                </div>

                <div className={`blue-card ${isVisible? 'animate' : ''}`}>
                  <div className="blue-card-icon">
                    <HiOutlineDesktopComputer />
                  </div>
                  <p className="blue-card-text">
                    Highly Tailored IT Design, Management & Support for Your Services
                  </p>
                </div>

                <div className={`team-circle ${isVisible? 'animate' : ''}`}>
                  <img src={teamCircle} alt="Team Collaboration" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className={`content-wrapper ${isVisible? 'animate' : ''}`}>
                <span className={`about-badge ${isVisible? 'animate' : ''}`}>
                  ABOUT OUR COMPANY
                </span>
                
                <h2 className={`about-title ${isVisible? 'animate' : ''}`}>
                  Accelerate Innovation with World-Class Tech
                </h2>
                
                <p className={`about-desc ${isVisible? 'animate' : ''}`}>
                  Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your software development needs.
                </p>

                <div className="services-list">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className={`service-item ${isVisible? 'animate' : ''}`}
                    >
                      <div className="service-icon">
                        <FiCheck />
                      </div>
                      <span className="service-text">{service}</span>
                    </div>
                  ))}
                </div>

                {/* <div className={`clients-row ${isVisible? 'animate' : ''}`}>
                  <div className="client-avatars">
                    {clients.map((client, index) => (
                      <div key={index} className="client-avatar">
                        <img src={client} alt={`Client ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <div className="clients-text">
                    <h4>Join our 50503+</h4>
                    <h4>Satisfied World Clients</h4>
                  </div>
                </div> */}

                <div className={`global-company ${isVisible? 'animate' : ''}`}>
                  <div className="global-icon">
                    <HiOutlineDesktopComputer />
                  </div>
                  <div className="global-text">
                    <h5>Global Company</h5>
                    <p>Our great team of more than  experts member.</p>
                  </div>
                </div>

                <button className={`cta-btn ${isVisible? 'animate' : ''}`}>
                  Get In Touch
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompanySection;