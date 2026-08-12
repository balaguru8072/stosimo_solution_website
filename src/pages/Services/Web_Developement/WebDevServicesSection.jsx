import React, { useState, useEffect, useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import teamImage from '../../../assets/images/webteamimage.jpg';

const WebDevServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(1); // First item open
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
        {
            id: 1,
            title: 'Complete website management',
            desc: 'End-to-end website management including hosting, updates, backups, and 24/7 monitoring. We handle everything so you can focus on your business growth and scale your operations efficiently with our expert team.'
        },
        {
            id: 2,
            title: 'Security and protection',
            desc: 'Advanced SSL encryption, firewall protection, malware scanning, and regular security audits to keep your website safe from threats and cyber attacks. Your data security is our top priority with enterprise-grade protection.'
        },
        {
            id: 3,
            title: 'Performance optimization',
            desc: 'Lightning-fast loading speeds with CDN integration, image optimization, caching, and code minification to boost SEO rankings and deliver exceptional user experience that converts visitors into customers.'
        }
    ];

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

.webdev-services-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #DBEAFE 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

.webdev-services-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatBg 15s ease-in-out infinite;
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

.services-row {
          display: flex;
          align-items: center;
          gap: 80px;
        }

.services-left {
          flex: 0 0 48%;
          opacity: 0;
          transform: translateX(-60px) scale(0.95);
          transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.services-left.animate {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

.service-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(59, 130, 246, 0.25);
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.service-image-wrapper:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 35px 90px rgba(59, 130, 246, 0.35);
        }

.service-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

.service-image-wrapper:hover.service-image {
          transform: scale(1.08);
        }

.services-right {
          flex: 0 0 48%;
          opacity: 0;
          transform: translateX(60px);
          transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
        }

.services-right.animate {
          opacity: 1;
          transform: translateX(0);
        }

.services-main-title {
          font-size: 48px;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.2;
          margin: 0 0 20px 0;
          letter-spacing: -1px;
        }

.services-main-desc {
          font-size: 16px;
          font-weight: 400;
          color: #64748B;
          line-height: 1.8;
          margin: 0 0 45px 0;
        }

.accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-right: 20px;
        }

.accordion-item {
          border-bottom: 1px solid #E2E8F0;
          transition: all 0.3s ease;
        }

.accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          user-select: none;
        }

.accordion-header::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #3B82F6 0%, #8B5CF6 100%);
          border-radius: 2px;
          transition: height 0.4s ease;
        }

        /* FIXED: Added space between.active and.accordion-header */
            .accordion-item.active .accordion-header::before {
                height: 60%;
            }

.accordion-header:hover {
          padding-left: 10px;
        }

.accordion-title {
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          margin: 0;
          transition: all 0.3s ease;
          padding-right: 15px;
          flex: 1;
        }

        /* FIXED: Added space */
.accordion-item.active .accordion-title {
          color: #3B82F6;
        }

.accordion-header:hover .accordion-title {
          color: #3B82F6;
        }

.accordion-icon {
          width: 36px;
          height: 36px;
          background: #F1F5F9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          flex-shrink: 0;
        }

        /* FIXED: Added space */
.accordion-item.active .accordion-icon {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          transform: rotate(180deg);
        }

.accordion-header:hover .accordion-icon {
          background: #3B82F6;
          transform: scale(1.1);
        }

.accordion-icon svg {
          color: #3B82F6;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        /* FIXED: Added space */
.accordion-item.active .accordion-icon svg {
          color: #FFFFFF;
        }

.accordion-header:hover .accordion-icon svg {
          color: #FFFFFF;
        }

.accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), 
                      opacity 0.4s ease;
          opacity: 0;
        }

        /* FIXED: Added space */
.accordion-item.active .accordion-content {
          max-height: 300px;
          opacity: 1;
        }

.accordion-desc {
          font-size: 15px;
          font-weight: 400;
          color: #64748B;
          line-height: 1.7;
          margin: 0;
          padding: 0 50px 24px 0;
          animation: fadeInDesc 0.5s ease;
        }

        @keyframes fadeInDesc {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
.services-row {
            flex-direction: column;
            gap: 50px;
          }
.services-left,
.services-right {
            flex: 1;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
.webdev-services-section {
            padding: 70px 0;
          }
.services-main-title {
            font-size: 36px;
          }
.service-image {
            height: 350px;
          }
.accordion-title {
            font-size: 18px;
          }
.accordion-header {
            padding: 20px 0;
          }
.accordion-desc {
            padding-right: 20px;
            font-size: 14px;
          }
        }
      `}</style>

            <section className="webdev-services-section" ref={sectionRef}>
                <div className="services-container">
                    <div className="services-row">
                        <div className={`services-left ${isVisible ? 'animate' : ''}`}>
                            <div className="service-image-wrapper">
                                <img src={teamImage} alt="Team Collaboration" className="service-image" />
                            </div>
                        </div>

                        <div className={`services-right ${isVisible ? 'animate' : ''}`}>
                            <h2 className="services-main-title">
                                Website Designing or Development Services
                            </h2>
                            <p className="services-main-desc">
                                If you're looking for website designing services, there are several options
                                available to you. Here are a few avenues you can explore:
                            </p>

                            <div className="accordion-list">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`accordion-item ${activeAccordion === service.id ? 'active' : ''}`}
                                    >
                                        <div
                                            className="accordion-header"
                                            onClick={() => toggleAccordion(service.id)}
                                        >
                                            <h3 className="accordion-title">{service.title}</h3>
                                            <div className="accordion-icon">
                                                {activeAccordion === service.id ? <FiMinus /> : <FiPlus />}
                                            </div>
                                        </div>
                                        <div className="accordion-content">
                                            <p className="accordion-desc">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WebDevServicesSection;