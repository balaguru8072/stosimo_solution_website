import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../../assets/images/challengeImg2.jpg'; // Iron image
import img2 from '../../../assets/images/img2.jpg'; // Office image
import img3 from '../../../assets/images/img3.jpg'; // Meeting image
import img4 from '../../../assets/images/img4.jpg'; // Phone image
import img5 from '../../../assets/images/img5.jpg'; // Team image
import img6 from '../../../assets/images/img6.jpg'; // Laptop image

const AllProjectSections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filters = ['All', 'Design', 'IT Company', 'Photography', 'Cyber Security'];

  const projects = [
    { id: 1, category: 'Design', image: img1, title: 'Industrial Design', height: '300px' },
    { id: 2, category: 'IT Company', image: img2, title: 'Office Workspace', height: '350px' },
    { id: 3, category: 'Business Consulting', image: img3, title: 'Team Meeting', height: '320px' },
    { id: 4, category: 'Photography', image: img4, title: 'Mobile App UI', height: '380px' },
    { id: 5, category: 'IT Company', image: img5, title: 'Team Collaboration', height: '340px' },
    { id: 6, category: 'Cyber Security', image: img6, title: 'Tech Workspace', height: '360px' }
  ];

  const filteredProjects = activeFilter === 'All' 
  ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

.case-studies-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Floating Background Orbs */
.case-studies-section::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: orbFloat1 22s ease-in-out infinite;
          pointer-events: none;
        }

.case-studies-section::after {
          content: '';
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: orbFloat2 20s ease-in-out infinite reverse;
          pointer-events: none;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(60px, 60px) scale(1.2) rotate(180deg); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-50px, -50px) scale(1.15) rotate(-180deg); }
        }

.case-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Header */
.case-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 60px;
          flex-wrap: wrap;
          gap: 30px;
          opacity: 0;
          transform: translateY(-40px);
          transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.case-header.animate {
          opacity: 1;
          transform: translateY(0);
        }

.case-header-left {
          flex: 1;
        }

.case-badge {
          display: inline-block;
          background: #DBEAFE;
          color: #3B82F6;
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 15px;
          animation: badgePulse 3s ease-in-out infinite;
          transition: all 0.4s ease;
        }

.case-badge:hover {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: #FFFFFF;
          transform: scale(1.05);
        }

        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); }
        }

.case-title {
          font-size: 56px;
          font-weight: 900;
          color: #0F172A;
          margin: 0;
          letter-spacing: -2px;
          line-height: 1.1;
          transition: all 0.4s ease;
        }

.case-title:hover {
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform: scale(1.02);
        }

        /* Filter Tabs - Enhanced Hover */
.filter-tabs {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

.filter-btn {
          padding: 12px 28px;
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #64748B;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

.filter-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
          z-index: 0;
        }

.filter-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          padding: 2px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

.filter-btn span {
          position: relative;
          z-index: 1;
        }

.filter-btn:hover {
          border-color: transparent;
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
          color: #FFFFFF;
        }

.filter-btn:hover::before {
          width: 300px;
          height: 300px;
        }

.filter-btn:hover::after {
          opacity: 1;
        }

.filter-btn.active {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          border-color: #3B82F6;
          color: #FFFFFF;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
          transform: scale(1.05);
        }

.filter-btn.active::before {
          width: 200px;
          height: 200px;
        }

        /* Projects Grid */
.projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
        }

.projects-grid.animate {
          opacity: 1;
          transform: translateY(0);
        }

.project-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          opacity: 0;
          transform: scale(0.9) rotateY(10deg);
          animation: cardFadeIn 0.6s ease forwards;
        }

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes cardFadeIn {
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        /* Enhanced Hover Effect */
.project-card:hover {
          transform: translateY(-20px) scale(1.04) rotateZ(1deg);
          box-shadow: 0 30px 80px rgba(59, 130, 246, 0.35);
        }

.project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.7s ease;
          z-index: 2;
        }

.project-card:hover::before {
          left: 100%;
        }

.project-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 3px solid transparent;
          border-radius: 20px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

.project-card:hover::after {
          opacity: 1;
        }

.project-image {
          width: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), filter 0.5s ease;
        }

.project-card:hover .project-image {
          transform: scale(1.2) rotate(2deg);
          filter: brightness(1.1) saturate(1.2);
        }

.project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.9) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: flex-end;
          padding: 25px;
        }

.project-card:hover .project-overlay {
          opacity: 1;
        }

.project-overlay-content {
          transform: translateY(30px);
          transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

.project-card:hover .project-overlay-content {
          transform: translateY(0);
        }

.project-category {
          display: inline-block;
          background: rgba(59, 130, 246, 0.95);
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          transform: translateX(-20px);
          opacity: 0;
          transition: all 0.5s ease 0.1s;
        }

.project-card:hover .project-category {
          transform: translateX(0);
          opacity: 1;
        }

.project-title {
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          transform: translateX(-20px);
          opacity: 0;
          transition: all 0.5s ease 0.2s;
        }

.project-card:hover .project-title {
          transform: translateX(0);
          opacity: 1;
        }

        @media (max-width: 1024px) {
.projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
.case-studies-section {
            padding: 70px 0;
          }
.case-header {
            flex-direction: column;
            align-items: flex-start;
          }
.case-title {
            font-size: 40px;
          }
.projects-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
.filter-tabs {
            width: 100%;
            justify-content: flex-start;
          }
.filter-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>

      <section className="case-studies-section" ref={sectionRef}>
        <div className="case-container">
          <div className={`case-header ${isVisible? 'animate' : ''}`}>
            <div className="case-header-left">
              <span className="case-badge">CASE STUDIES SECTION</span>
              <h2 className="case-title">Introduce Our Projects</h2>
            </div>

            <div className="filter-tabs">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  <span>{filter}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={`projects-grid ${isVisible? 'animate' : ''}`}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  style={{ height: project.height }}
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
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

export default AllProjectSections;