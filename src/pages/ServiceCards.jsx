import React, { useEffect, useState } from 'react';
import { FiCode, FiSmartphone, FiBriefcase, FiMonitor, FiShoppingCart, FiSettings, FiCheck } from 'react-icons/fi';

const ICON_MAP = {
  FiCode: FiCode,
  FiSmartphone: FiSmartphone,
  FiBriefcase: FiBriefcase,
  FiMonitor: FiMonitor,
  FiShoppingCart: FiShoppingCart,
  FiSettings: FiSettings
};

const ServiceCards = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const normalizeFeatures = (features) => {
    if (!features) return [];
    if (typeof features === 'string') {
      return features.split(',').map(f => f.trim()).filter(Boolean);
    }
    if (Array.isArray(features)) {
      if (features.length === 1 && features[0].includes(',')) {
        return features[0].split(',').map(f => f.trim()).filter(Boolean);
      }
      return features;
    }
    return [];
  };

  if (loading) {
    return <div className="text-center py-20">Loading services...</div>;
  }

  return (
    <section className="relative -mt-20 lg:-mt-24 z-20 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, idx) => {
            const featureList = normalizeFeatures(service.features);
            const IconComponent = ICON_MAP[service.icon] || FiCode;

            return (
              <div
                key={service._id}
                className={`group bg-white hover:!bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 border border-gray-100 hover:-translate-y-2 cursor-pointer ${idx === 2? 'hidden lg:block' : ''} ${idx === 3? 'hidden lg:block' : ''}`}
              >
                <div className="w-16 h-16 bg-blue-600 group-hover:bg-white rounded-full flex items-center justify-center mb-6 transition-all duration-300">
                  <IconComponent className="text-white group-hover:!text-blue-600 text-2xl transition-all duration-300" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 leading-tight transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-6 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {featureList.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-600 group-hover:bg-white rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <FiCheck className="text-white group-hover:!text-blue-600 text-xs" />
                      </div>
                      <span className="text-gray-700 group-hover:text-white text-sm font-medium transition-colors duration-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;