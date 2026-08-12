import React, { useState, useEffect, useRef } from 'react';
import { FiTarget, FiEye, FiSend, FiCreditCard, FiGlobe } from 'react-icons/fi';
import client1 from '../../assets/images/client_1.png';
import client2 from '../../assets/images/client_1.png';
import client3 from '../../assets/images/client_1.png';
import client4 from '../../assets/images/client_1.png';
import teamMeeting from '../../assets/images/teamMeeting.png';

const WhyChooseUsSection = () => {
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

    const clients = [client1, client2, client3, client4];

    const features = [
        {
            id: 1,
            title: 'Our Mission',
            icon: <FiTarget />,
            desc: 'Back up your database, store in a safe and secure place while still maintaining.',
        },
        {
            id: 2,
            title: 'Our Vision',
            icon: <FiEye />,
            desc: 'Back up your database, store in a safe and secure place while still maintaining.',
        },
        {
            id: 3,
            title: 'Our Strategy',
            icon: <FiSend />,
            desc: 'Back up your database, store in a safe and secure place while still maintaining.',
        },
        {
            id: 4,
            title: 'Our Philosophy',
            icon: <FiCreditCard />,
            desc: 'Back up your database, store in a safe and secure place while still maintaining.',
        }
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

   .why-choose-section {
          padding: 100px 0;
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

   .why-choose-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

   .container-custom {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

   .row-custom {
          display: flex;
          align-items: flex-start;
          gap: 60px;
        }

   .left-content {
          flex: 0 0 45%;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

   .left-content.animate {
          opacity: 1;
          transform: translateX(0);
        }

   .why-badge {
          display: inline-block;
          background: #DBEAFE;
          color: #3B82F6;
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 25px;
        }

   .why-title {
          font-size: 56px;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.15;
          margin: 0 0 25px 0;
          letter-spacing: -1px;
        }

   .why-desc {
          color: #64748B;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 40px 0;
        }

   .client-section {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-bottom: 35px;
        }

   .client-avatars {
          display: flex;
          align-items: center;
        }

   .client-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 3px solid #FFFFFF;
          overflow: hidden;
          margin-left: -18px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

   .client-avatar:first-child {
          margin-left: 0;
        }

   .client-avatar:hover {
          transform: translateY(-8px) scale(1.15);
          z-index: 10;
          box-shadow: 0 12px 25px rgba(59, 130, 246, 0.3);
        }

   .client-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

   .client-text h4 {
          color: #0F172A;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          line-height: 1.4;
        }

   .global-box {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

   .global-icon {
          width: 50px;
          height: 50px;
          background: #FFFFFF;
          border: 2px solid #3B82F6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s ease;
        }

   .global-box:hover.global-icon {
          background: #3B82F6;
          transform: rotate(360deg);
        }

   .global-icon svg {
          color: #3B82F6;
          font-size: 24px;
          transition: all 0.4s ease;
        }

   .global-box:hover.global-icon svg {
          color: #FFFFFF;
        }

   .global-content h5 {
          color: #0F172A;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

   .global-content p {
          color: #64748B;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

   .right-cards {
          flex: 0 0 50%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

   .feature-card {
          position: relative;
          background: #F8FAFC;
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          opacity: 0;
          transform: translateY(40px);
          animation: cardFadeIn 0.6s ease forwards;
        }

   .feature-card:nth-child(1) { animation-delay: 0.1s; }
   .feature-card:nth-child(2) { animation-delay: 0.2s; }
   .feature-card:nth-child(3) { animation-delay: 0.3s; }
   .feature-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes cardFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

   .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${teamMeeting});
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }

   .feature-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(30, 41, 59, 0.88);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }

   .feature-card:hover::before {
          opacity: 1;
        }

   .feature-card:hover::after {
          opacity: 1;
        }

   .card-content {
          position: relative;
          z-index: 2;
        }

        .card-content:hover .card-title{
                color: #FFFFFF !important;
        }

   .card-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

   .card-icon svg {
          color: #3B82F6;
          font-size: 36px;
          transition: all 0.5s ease;
        }



    /* FIX: Space vitu descendent selector */
   .feature-card:hover.card-icon {
          transform: translateY(-10px) scale(1.15);
        }

   .feature-card:hover.card-icon svg {
          color: #FFFFFF;
        }

   .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 15px 0;
          transition: all 0.4s ease;
        }

   .feature-card:hover.card-title {
          color: #FFFFFF;
          transform: translateY(-5px);
        }

   .card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #64748B;
          margin: 0;
          opacity: 0;
          max-height: 0;
          transition: all 0.5s ease;
        }

   .feature-card:hover.card-desc {
          opacity: 1;
          max-height: 100px;
          color: rgba(255, 255, 255, 0.95);
        }

   .card-dots {
          position: absolute;
          bottom: 15px;
          right: 15px;
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 4px;
          opacity: 0.3;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

   .feature-card:hover.card-dots {
          opacity: 0;
        }

   .card-dots span {
          width: 4px;
          height: 4px;
          background: #CBD5E1;
          border-radius: 50%;
        }

        @media (max-width: 1024px) {
      .row-custom {
            flex-direction: column;
            gap: 50px;
          }
      .left-content,
      .right-cards {
            flex: 1;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
      .why-choose-section {
            padding: 60px 0;
          }
      .why-title {
            font-size: 40px;
          }
      .right-cards {
            grid-template-columns: 1fr;
          }
      .client-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }
      `}</style>

            <section className="why-choose-section" ref={sectionRef}>
                <div className="container-custom">
                    <div className="row-custom">
                        <div className={`left-content ${isVisible ? 'animate' : ''}`}>
                            <span className="why-badge">WHY CHOOSE US</span>

                            <h2 className="why-title">
                                We provide truly prominent IT solutions for your success
                            </h2>

                            <p className="why-desc">
                                stosimo is the partner of choice for many of the world's leading enterprises,
                            </p>

                            <div className="client-section">
                                <div className="client-avatars">
                                    {clients.map((client, index) => (
                                        <div key={index} className="client-avatar">
                                            <img src={client} alt={`Client ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className="client-text">
                                    <h4>Join our 50503+</h4>
                                    <h4>Satisfied World Clients</h4>
                                </div>
                            </div>

                            <div className="global-box">
                                <div className="global-icon">
                                    <FiGlobe />
                                </div>
                                <div className="global-content">
                                    <h5>Global Company</h5>
                                    <p>Our great team of more than to 1400 software experts member.</p>
                                </div>
                            </div>
                        </div>

                        <div className="right-cards">
                            {features.map((feature) => (
                                <div key={feature.id} className="feature-card">
                                    <div className="card-content">
                                        <div className="card-icon">
                                            {feature.icon}
                                        </div>
                                        <h3 className="card-title">{feature.title}</h3>
                                        <p className="card-desc">{feature.desc}</p>
                                    </div>
                                    <div className="card-dots">
                                        {[...Array(15)].map((_, i) => (
                                            <span key={i}></span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsSection;