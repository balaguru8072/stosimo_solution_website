import React, { useEffect, useState } from 'react';
import { BiAnalyse, BiTestTube, BiPalette } from 'react-icons/bi';
import service1 from '../assets/images/service_1.jpg';
import service2 from '../assets/images/service_2.jpg';
import service3 from '../assets/images/service_3.jpg';
import shape1 from '../assets/images/shape_service-1.png';
import shape2 from '../assets/images/shape_service-2.png';

const ServiceListCards = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Local la irukara image & icon mattum - ithu than show aagum
  const localAssets = [
    { image: service1, icon: <BiAnalyse /> },
    { image: service2, icon: <BiTestTube /> },
    { image: service3, icon: <BiPalette /> },
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
         const API_URL = import.meta.env.VITE_API_URL || 'https://stosimo-solution-backend1.onrender.com';
        const res = await fetch(`${API_URL}/api/services`);
        const result = await res.json();
        if (result.success) {
          setServices(result.data);
        }
      } catch (error) {
        console.error('API Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading services...</div>;
  }

  return (
    <>
      <style>{`
        .service-card-wrap { margin-bottom: 30px; }
        .single-service-item {
          position: relative; border-radius: 20px; overflow: hidden;
          transition: all 0.4s ease; box-shadow: 0 5px 20px rgba(0,0,0,0.06); height: 500px;
        }
        .single-service-item:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2); }
        .service-image-wrap { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .service-image-wrap .main-img { width: 100%; height: 100%; object-fit: cover; transition: all 0.4s ease; }
        .single-service-item:hover .service-image-wrap .main-img { transform: scale(1.1); }
        .service-image-wrap::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 60%, rgba(15,23,42,0.95) 100%); z-index: 1;
        }
        .shape-img {
          position: absolute; width: 100px; height: auto; opacity: 0;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); pointer-events: none; z-index: 3;
        }
        .shape-img.shape-top { top: -20px; left: -20px; transform: scale(0) rotate(-15deg); }
        .shape-img.shape-bottom { bottom: 160px; right: -20px; transform: scale(0) rotate(15deg); }
        .single-service-item:hover .shape-img.shape-top { opacity: 1; transform: scale(1) rotate(0deg); top: 30px; left: 30px; }
        .single-service-item:hover .shape-img.shape-bottom { opacity: 1; transform: scale(1) rotate(0deg); bottom: 200px; right: 30px; }
        .service-content {
          position: absolute; bottom: 0; left: 0; right: 0; background: #fff;
          margin: 0 20px 20px; padding: 40px 25px 30px; border-radius: 15px;
          text-align: center; z-index: 4; box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .icon-circle {
          position: absolute; top: -35px; left: 50%; transform: translateX(-50%);
          width: 70px; height: 70px; background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 32px; box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }
        .service-content h4 { font-size: 22px; font-weight: 700; color: #0F172A; margin-bottom: 12px; margin-top: 10px; }
        .service-content p { color: #64748B; font-size: 15px; line-height: 1.7; margin: 0; }
      `}</style>

      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="row">
            {services.slice(4, 7).map((service, index) => {
              const asset = localAssets[index % localAssets.length];
              return (
                <div key={service._id || index} className="col-xl-4 col-lg-4 col-md-6 col-12 service-card-wrap">
                  <div className="single-service-item">
                    <div className="service-image-wrap">
                      <img src={asset.image} alt={service.title} className="main-img" />
                      <img src={shape1} alt="shape" className="shape-img shape-top" />
                      <img src={shape2} alt="shape" className="shape-img shape-bottom" />
                    </div>

                    <div className="service-content">
                      <div className="icon-circle">
                        {asset.icon}
                      </div>
                      <h4>
                        <a href="services-details">{service.title}</a>
                      </h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceListCards;