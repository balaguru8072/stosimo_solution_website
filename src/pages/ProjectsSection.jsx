import React, { useState } from 'react';
import Slider from 'react-slick';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import project1 from '../assets/images/project_01.jpg';
import project2 from '../assets/images/project_02.jpg';
import project3 from '../assets/images/project_03.jpg';
import project4 from '../assets/images/project_04.jpg';
import project5 from '../assets/images/project_02.jpg';
import project6 from '../assets/images/project_03.jpg';

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      category: 'MARKETING',
      title: '01. Market Trend Analysis',
      image: project1,
      link: '/case-study/marketing'
    },
    {
      id: 2,
      category: 'SOFTWARE',
      title: '02. Software Analysis',
      image: project2,
      link: '/case-study/software'
    },
    {
      id: 3,
      category: 'MANAGEMENT',
      title: '03. Business Management',
      image: project3,
      link: '/case-study/management'
    },
    {
      id: 4,
      category: 'DESIGN',
      title: '04. UI/UX Redesign',
      image: project4,
      link: '/case-study/design'
    },
    {
      id: 5,
      category: 'E-COMMERCE',
      title: '05. Online Store Development',
      image: project5,
      link: '/case-study/ecommerce'
    },
    {
      id: 6,
      category: 'MOBILE APP',
      title: '06. App Development',
      image: project6,
      link: '/case-study/mobile'
    }
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <button className="carousel-arrow next-arrow" onClick={onClick}>
        <FiArrowRight />
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="carousel-arrow prev-arrow" onClick={onClick}>
        <FiArrowLeft />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      <style>{`
        .projects-section {
          padding: 100px 0;
          background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
          overflow: hidden;
          position: relative;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 70px;
          flex-wrap: wrap;
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .badge-label {
          display: inline-block;
          background: linear-gradient(135deg, #E0F2FE 0%, #DBEAFE 100%);
          color: #0EA5E9;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 25px;
          animation: slideInDown 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 4px 15px rgba(14, 165, 233, 0.15);
        }

        .section-title {
          font-size: 52px;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          line-height: 1.15;
          animation: slideInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s both;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-desc {
          max-width: 480px;
          color: #64748B;
          font-size: 17px;
          line-height: 1.8;
          margin-top: 15px;
          animation: slideInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s both;
        }

        .project-card-wrap {
          padding: 15px;
          perspective: 1000px;
        }

        .project-card {
          position: relative;
          height: 440px;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          cursor: pointer;
          animation: cardEntry 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
          transform-style: preserve-3d;
        }

        .slick-slide:nth-child(1) .project-card { animation-delay: 0.1s; }
        .slick-slide:nth-child(2) .project-card { animation-delay: 0.2s; }
        .slick-slide:nth-child(3) .project-card { animation-delay: 0.3s; }
        .slick-slide:nth-child(4) .project-card { animation-delay: 0.4s; }
        .slick-slide:nth-child(5) .project-card { animation-delay: 0.5s; }
        .slick-slide:nth-child(6) .project-card { animation-delay: 0.6s; }

        .project-card:hover {
          transform: translateY(-15px) rotateX(2deg);
          box-shadow: 0 30px 60px rgba(59, 130, 246, 0.25);
        }

        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
          overflow: hidden;
        }

        .project-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.8s ease;
          z-index: 2;
        }

        .project-card:hover .project-image::before {
          left: 100%;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          filter: brightness(0.95);
        }

        .project-card:hover .project-image img {
          transform: scale(1.15) rotate(1deg);
          filter: brightness(1.1);
        }

        .project-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, 
            rgba(0,0,0,0) 0%, 
            rgba(0,0,0,0.2) 50%, 
            rgba(15,23,42,0.98) 100%);
          z-index: 1;
          transition: all 0.6s ease;
        }

        .project-card:hover .project-image::after {
          background: linear-gradient(to bottom, 
            rgba(59,130,246,0.1) 0%, 
            rgba(0,0,0,0.3) 50%, 
            rgba(15,23,42,1) 100%);
        }

        .project-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          padding: 28px;
          margin: 0 20px 20px;
          border-radius: 18px;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .project-card:hover .project-content {
          background: linear-gradient(135deg, #1E293B 0%, #334155 100%);
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }

        .project-info {
          flex: 1;
        }

        .project-category {
          color: #3B82F6;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: inline-block;
          animation: fadeIn 0.6s ease 0.6s both;
        }

        .project-title {
          color: #FFFFFF;
          font-size: 21px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
          animation: fadeIn 0.6s ease 0.7s both;
        }

        .arrow-btn {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0F172A;
          font-size: 20px;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .project-card:hover .arrow-btn {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: #FFFFFF;
          transform: rotate(-45deg) scale(1.15);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        /* Carousel Arrows */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
          border: none;
          border-radius: 50%;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #0F172A;
          cursor: pointer;
          z-index: 10;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .carousel-arrow:hover {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: #FFFFFF;
          transform: translateY(-50%) scale(1.15);
          box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
        }

        .prev-arrow {
          left: -28px;
        }

        .next-arrow {
          right: -28px;
        }

        /* Slick Dots */
        .slick-dots {
          bottom: -60px;
        }

        .slick-dots li {
          margin: 0 6px;
        }

        .slick-dots li button:before {
          font-size: 14px;
          color: #CBD5E1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .slick-dots li.slick-active button:before {
          color: #3B82F6;
          transform: scale(1.3);
        }

        /* High Class Animations */
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

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardEntry {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @media (max-width: 1024px) {
          .carousel-arrow {
            display: none;
          }
        }

        @media (max-width: 991px) {
          .section-title {
            font-size: 40px;
          }
          .section-header {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .project-card {
            height: 380px;
          }
          .project-content {
            padding: 22px;
            margin: 0 15px 15px;
          }
          .project-title {
            font-size: 18px;
          }
          .arrow-btn {
            width: 42px;
            height: 42px;
            font-size: 18px;
          }
          .section-title {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <div className="container">
              <span className="badge-label">LATEST CASE STUDY</span>
              <h2 className="section-title">Introduce Our Projects</h2>
            </div>
            <p className="container section-desc">
              SMEs and technology challengers. We help businesses elevate their value through custom software development.
            </p>
          </div>

          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="project-card-wrap">
                <a 
                  href={project.link} 
                  className="project-card d-block"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="project-content">
                    <div className="project-info">
                      <div className="project-category">{project.category}</div>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <div className="arrow-btn">
                      <FiArrowRight />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;