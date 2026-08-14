import React, { useState, useEffect } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram } from 'react-icons/fa';
// import { Link } from 'lucide-reacts';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const usefulLinks = [
    { name: 'About Company', link: '/aboutus' },
    { name: 'Our Services', link: '/services/web-development' },
    { name: 'Our Projects', link: '/projects' },
    { name: 'Career', link: '/career' },
    { name: 'Contact Us', link: '/contact' },
  ];

  const services = [
    { name: 'Web Development', link: '/services/web-development' },
    { name: 'App Development', link: '/services/app-development' },
    { name: 'Digital Marketing', link: '/services/digital-marketing' },
    { name: 'CCTV Installation', link: '/contact' },
    { name: 'UI/UX Design', link: '/services/ui-ux-design' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaTwitter />, link: 'https://twitter.com', name: 'Twitter' },
    { icon: <FaDribbble />, link: 'https://dribbble.com', name: 'Dribbble' },
    { icon: <FaInstagram />, link: 'https://instagram.com', name: 'Instagram' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .footer {
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Animated Background Elements */
        .footer-bg-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
          animation: floatSlow 25s infinite ease-in-out;
          pointer-events: none;
        }

        .footer-bg-shape-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          left: -150px;
        }

        .footer-bg-shape-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          right: -100px;
          animation-delay: 8s;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        .footer-main {
          padding: 80px 0 60px;
          position: relative;
          z-index: 2;
        }

        .footer-column {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .footer-column:nth-child(1) { animation-delay: 0.1s; }
        .footer-column:nth-child(2) { animation-delay: 0.2s; }
        .footer-column:nth-child(3) { animation-delay: 0.3s; }
        .footer-column:nth-child(4) { animation-delay: 0.4s; }

        /* Logo */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          opacity: 0;
          animation: slideInLeft 0.8s ease 0.1s forwards;
        }

        .logo-icon {
          width: 45px;
          height: 45px;
          {/* background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); */}
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
          animation: logoFloat 3s ease-in-out infinite;
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .logo-text {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-desc {
          color: #64748B;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 30px;
          opacity: 0;
          animation: fadeIn 0.8s ease 0.3s forwards;
        }

        /* Subscribe Form */
        .subscribe-title {
          font-size: 18px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 18px;
          opacity: 0;
          animation: slideInLeft 0.8s ease 0.4s forwards;
        }

        .subscribe-form {
          position: relative;
          margin-bottom: 30px;
          opacity: 0;
          animation: slideInLeft 0.8s ease 0.5s forwards;
        }

        .subscribe-input {
          width: 100%;
          padding: 16px 60px 16px 20px;
          border: 2px solid #E2E8F0;
          border-radius: 12px;
          font-size: 15px;
          color: #0F172A;
          background: #F8FAFC;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          font-family: inherit;
          font-weight: 500;
        }

        .subscribe-input:focus {
          outline: none;
          border-color: #3B82F6;
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 20px rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
        }

        .subscribe-input::placeholder {
          color: #94A3B8;
        }

        .subscribe-btn {
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          border: none;
          border-radius: 10px;
          color: #FFFFFF;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .subscribe-btn:hover {
          transform: translateY(-50%) scale(1.1) rotate(15deg);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
        }

        .subscribe-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        /* Social Icons */
        .social-links {
          display: flex;
          gap: 12px;
          opacity: 0;
          animation: slideInLeft 0.8s ease 0.6s forwards;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: #F1F5F9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748B;
          font-size: 18px;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          text-decoration: none;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: #FFFFFF;
          transform: translateY(-5px) rotate(360deg);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }

        /* Links Section */
        .footer-title {
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 12px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #3B82F6 0%, #2563EB 100%);
          border-radius: 2px;
          animation: expandWidth 0.8s ease 0.5s forwards;
          transform: scaleX(0);
          transform-origin: left;
        }

        @keyframes expandWidth {
          to { transform: scaleX(1); }
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 14px;
          opacity: 0;
          animation: slideInLeft 0.5s ease forwards;
        }

        .footer-links li:nth-child(1) { animation-delay: 0.6s; }
        .footer-links li:nth-child(2) { animation-delay: 0.7s; }
        .footer-links li:nth-child(3) { animation-delay: 0.8s; }
        .footer-links li:nth-child(4) { animation-delay: 0.9s; }
        .footer-links li:nth-child(5) { animation-delay: 1s; }

        .footer-links a {
          color: #64748B;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          position: relative;
          padding-left: 0;
        }

        .footer-links a::before {
          content: '•';
          color: #3B82F6;
          margin-right: 10px;
          font-size: 20px;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #3B82F6;
          padding-left: 8px;
        }

        .footer-links a:hover::before {
          transform: scale(1.5);
        }

        /* Contact Info */
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          opacity: 0;
          animation: slideInRight 0.6s ease forwards;
        }

        .contact-info-item:nth-child(1) { animation-delay: 0.6s; }
        .contact-info-item:nth-child(2) { animation-delay: 0.75s; }
        .contact-info-item:nth-child(3) { animation-delay: 0.9s; }

        .contact-icon-circle {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 20px;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .contact-info-item:hover .contact-icon-circle {
          transform: scale(1.15) rotate(360deg);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
        }

        .contact-info-text span {
          display: block;
          color: #3B82F6;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .contact-info-text h6 {
          color: #0F172A;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
          line-height: 1.5;
        }

        .contact-info-text a {
          color: #0F172A;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-info-text a:hover {
          color: #3B82F6;
        }

        /* Copyright Bar */
        .footer-bottom {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          padding: 25px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .footer-bottom::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          animation: shimmerBar 3s infinite;
        }

        @keyframes shimmerBar {
          100% { left: 100%; }
        }

        .copyright-text {
          color: #94A3B8;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        /* Keyframe Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 991px) {
          .footer-column {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 60px 0 40px;
          }
          .logo-text {
            font-size: 24px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-bg-shape footer-bg-shape-1"></div>
        <div className="footer-bg-shape footer-bg-shape-2"></div>

        <div className="footer-main">
          <div className="container">
            <div className="row">
              {/* Column 1 - Logo & Subscribe */}
              <div className="col-lg-3 col-md-6 col-12 footer-column">
                <div className="footer-logo">
                  <div className="logo-icon">
                    <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="#2563EB" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 68 14 H 38 C 18 14 2 24 2 42 C 2 60 16 70 36 70 H 52 C 62 70 68 73 68 80 C 68 87 62 92 48 92 H 32" />
                        <path d="M 68 34 H 46 C 36 34 28 37 28 43 C 28 49 36 52 50 52 C 66 52 78 62 78 76 C 78 90 66 100 42 100 H 10 L 20 82" />
                      </g>
                      <circle cx="80" cy="16" r="6.5" fill="#2563EB" />
                    </svg>
                  </div>
                  <span className="logo-text">stosimo</span>
                </div>

                <p className="footer-desc">
                  We deliver secure, scalable and innovative technology solutions to power your business growth
                </p>

                {/* <h4 className="subscribe-title">Subscribe Now</h4>
                <form className="subscribe-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    className="subscribe-input"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    <FiSend />
                  </button>
                </form> */}

                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2 - Useful Links */}
              <div className="col-lg-3 col-md-6 col-12 footer-column">
                <h3 className="footer-title">Useful Links</h3>
                <ul className="footer-links">
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Our Services */}
              <div className="col-lg-3 col-md-6 col-12 footer-column">
                <h3 className="footer-title">Our Services</h3>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link to={service.link}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 - Contact Us */}
              <div className="col-lg-3 col-md-6 col-12 footer-column">
                <h3 className="footer-title">Contact Us</h3>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <FiMail />
                  </div>
                  <div className="contact-info-text">
                    <span>Mail Us:</span>
                    <h6><a href="mailto:hr@stosimo.com">hr@stosimo.com</a></h6>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <FiMapPin />
                  </div>
                  <div className="contact-info-text">
                    <span>Address:</span>
                    <h6>Kuthalam<br />Mayiladuthurai , 609801</h6>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <FiPhone />
                  </div>
                  <div className="contact-info-text">
                    <span>Phone:</span>
                    <h6><a href="tel:8438821762">+91 8438821762</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright-text">
              ©Copyright 2025 stosimo All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;