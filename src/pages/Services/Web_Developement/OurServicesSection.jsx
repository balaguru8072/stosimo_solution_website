import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTrendingUp, FiSmartphone, FiUsers, FiSettings, FiArrowUpRight } from 'react-icons/fi';
import service1 from '../../../assets/images/websiteDev.jpg';
import service2 from '../../../assets/images/mobileappdev.jpg';
import service3 from '../../../assets/images/digitalmetia.jpg';
import service4 from '../../../assets/images/websitemanagement.jpg';

const OurServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Website Development',
      icon: <FiTrendingUp />,
      image: service1,
      desc: 'Custom websites that convert visitors into customers with stunning UI/UX design and performance.',
      link: '/services/web-development'
    },
    {
      id: 2,
      title: 'App Development',
      icon: <FiSmartphone />,
      image: service2,
      desc: 'Native and cross-platform mobile apps built for performance, scale, and user engagement.',
      link: '/services/app-development'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: <FiUsers />,
      image: service3,
      desc: 'Data-driven strategies to boost your online presence, traffic, and ROI significantly.',
      link: '/services/digital-marketing'
    },
    {
      id: 4,
      title: 'UI/UX Design ',
      icon: <FiSettings />,
      image: service4,
      desc: 'Intuitive and visually appealing designs that enhance user experience and drive conversions.',
      link: '/services/ui-ux-design'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
       .services-section {
          padding: 100px 0;
          background: linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 50%, #DBEAFE 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }
       .services-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          animation: floatBg 20s ease-in-out infinite;
          pointer-events: none;
        }
       .services-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
          animation: floatBg 15s ease-in-out infinite reverse;
          pointer-events: none;
        }
        @keyframes floatBg {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.1); }
        }
       .services-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
       .services-header {
          text-align: center;
          margin-bottom: 70px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
       .services-header.animate {
          opacity: 1;
          transform: translateY(0);
        }
       .all-services-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
          color: #FFFFFF;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 24px;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          animation: badgePulse 3s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 8px 35px rgba(59, 130, 246, 0.5); }
        }
       .all-services-badge::before {
          content: '';
          width: 40px;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          animation: lineSlide 2s ease-in-out infinite;
        }
        @keyframes lineSlide {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(-8px); opacity: 0.6; }
        }
       .services-title {
          font-size: 58px;
          font-weight: 900;
          background: linear-gradient(135deg, #1E293B 0%, #3B82F6 50%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 20px 0;
          letter-spacing: -1.5px;
        }
       .services-desc {
          font-size: 17px;
          font-weight: 500;
          color: #475569;
          line-height: 1.8;
          max-width: 720px;
          margin: 0 auto;
        }
       .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
       .service-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          opacity: 0;
          transform: translateY(60px) scale(0.9);
          animation: cardEnter 0.7s ease forwards;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
          border: 2px solid transparent;
        }
       .service-card:nth-child(1) { animation-delay: 0.1s; }
       .service-card:nth-child(2) { animation-delay: 0.2s; }
       .service-card:nth-child(3) { animation-delay: 0.3s; }
       .service-card:nth-child(4) { animation-delay: 0.4s; }
        @keyframes cardEnter {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
       .service-card.active {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1E40AF 100%);
          box-shadow: 0 25px 70px rgba(59, 130, 246, 0.4);
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.3);
        }
       .service-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 30px 80px rgba(59, 130, 246, 0.35);
          border-color: #3B82F6;
        }
       .card-inner { padding: 38px 30px 28px; position: relative; z-index: 2; }
       .card-arrow {
          position: absolute;
          top: 22px;
          right: 22px;
          width: 44px;
          height: 44px;
          background: #F1F5F9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 3;
        }
        /* FIXED SELECTORS - added space */
       .service-card.active.card-arrow {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
        }
       .service-card:hover.card-arrow {
          background: #3B82F6;
          transform: rotate(45deg) scale(1.15);
        }
       .card-arrow svg {
          color: #3B82F6;
          font-size: 20px;
          transition: all 0.4s ease;
        }
       .service-card.active.card-arrow svg,
       .service-card:hover.card-arrow svg {
          color: #FFFFFF;
        }
       .card-icon {
          width: 65px;
          height: 65px;
          margin: 0 0 28px 0;
          background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
       .card-icon::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }
       .service-card.active.card-icon {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
       .service-card.active.card-icon::before { opacity: 1; }
       .service-card:hover.card-icon { animation: iconFloat 0.6s ease; }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(-8deg); }
          75% { transform: translateY(-10px) rotate(8deg); }
        }
       .card-icon svg {
          color: #3B82F6;
          font-size: 32px;
          stroke-width: 2;
          transition: all 0.5s ease;
          position: relative;
          z-index: 1;
        }
       .service-card.active.card-icon svg {
          color: #FFFFFF;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
        }
       .service-card:hover.card-icon svg {
          color: #FFFFFF;
          transform: scale(1.15);
        }
       .card-title {
          font-size: 21px;
          font-weight: 800;
          color: #1E293B;
          margin: 0 0 22px 0;
          transition: all 0.3s ease;
        }
       .service-card.active.card-title { color: #FFFFFF; }
       .card-image {
          width: 100%;
          height: 190px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #F1F5F9;
        }
       .card-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
          transition: left 0.7s ease;
          z-index: 1;
        }
       .service-card:hover.card-image::before { left: 100%; }
       .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.9);
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
       .service-card.active.card-image img,
       .service-card:hover.card-image img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.12);
        }
       .card-desc-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 28px;
          background: linear-gradient(180deg, transparent 0%, rgba(30, 64, 175, 0.95) 100%);
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 2;
        }
       .service-card:hover.card-desc-overlay { transform: translateY(0); }
       .card-desc-overlay p {
          font-size: 14px;
          color: #FFFFFF;
          line-height: 1.7;
          margin: 0;
          font-weight: 500;
        }
        @media (max-width: 1024px) {
         .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
         .services-section { padding: 70px 0; }
         .services-title { font-size: 42px; }
         .services-grid { grid-template-columns: 1fr; gap: 24px; }
         .card-inner { padding: 32px 26px 24px; }
        }
      `}</style>

      <section className="services-section" ref={sectionRef}>
        <div className="services-container">
          <div className={`services-header ${isVisible? 'animate' : ''}`}>
            <div className="all-services-badge">All Services</div>
            <h2 className="services-title">Our Services</h2>
            <p className="services-desc">
              Comprehensive Website Services to Ignite Your Online Success. Empower
              Your Business with Powerful Online Services from our Website.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${activeCard === index? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => navigate(service.link)}
              >
                <div className="card-inner">
                  <div className="card-arrow">
                    <FiArrowUpRight />
                  </div>
                  <div className="card-icon">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                    <div className="card-desc-overlay">
                      <p>{service.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;