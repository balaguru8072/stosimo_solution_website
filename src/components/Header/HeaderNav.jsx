import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, LocationOn, AccessTime, Search } from '@mui/icons-material';
import { Facebook, Twitter, Instagram, Public } from '@mui/icons-material';

const HeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', path: '/' },
    {
      title: 'About',
      path: '/aboutus',
    },
    // {
    //   title: 'Pages',
    //   hasDropdown: true,
    //   links: [
    //     { name: 'About Us', path: '/aboutus' },
    //     { name: 'Our Team', path: '/team' },
    //     { name: 'FAQ', path: '/faq' },
    //     { name: 'Pricing', path: '/pricing' }
    //   ]
    // },
    {
      title: 'Services',
      hasDropdown: true,
      links: [
        { name: 'All Services', path: '/services/all-services' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'App Development', path: '/services/app-development' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        // { name: 'SEO', path: '/services/seo' }
      ]
    },
    {
      title: 'Projects',
      hasDropdown: true,
      links: [
        { name: 'Project Details', path: '/projects/details' },
        { name: 'All Projects', path: '/projects' }
      ]
    },

    { title: 'Career', path: '/career', hasDropdown: false },
    // {
    //   title: 'News',
    //   hasDropdown: true,
    //   links: [
    //     { name: 'Blog Grid', path: '/blog/grid' },
    //     { name: 'Blog Details', path: '/blog/latest' },
    //     { name: 'Events', path: '/events' }
    //   ]
    // },
    { title: 'Contact', path: '/contact', hasDropdown: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-stosimo-dark text-white py-2.5 hidden md:block transition-all duration-300 ${isScrolled ? 'md:hidden' : ''}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <Phone sx={{ fontSize: 16 }} className="text-stosimo-blue" />
                <span>+91 8438821762</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <LocationOn sx={{ fontSize: 16 }} className="text-stosimo-blue" />
                <span>Kuthalam, Mayiladuthurai , 609801</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <AccessTime sx={{ fontSize: 16 }} className="text-stosimo-blue" />
                <span>09.00am - 07.00pm</span>
              </motion.div>
            </div>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Public, Instagram].map((Icon, i) => (
                <motion.div key={i} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Icon sx={{ fontSize: 18 }} className="cursor-pointer hover:text-stosimo-blue transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={`bg-white sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <div className="w-10 h-10  rounded-lg flex items-center justify-center shadow-md">
                  {/* <i className="bi bi-cpu-fill text-white text-xl"></i> */}

                  <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="#2563EB" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 68 14 H 38 C 18 14 2 24 2 42 C 2 60 16 70 36 70 H 52 C 62 70 68 73 68 80 C 68 87 62 92 48 92 H 32" />
                        <path d="M 68 34 H 46 C 36 34 28 37 28 43 C 28 49 36 52 50 52 C 66 52 78 62 78 76 C 78 90 66 100 42 100 H 10 L 20 82" />
                      </g>
                      <circle cx="80" cy="16" r="6.5" fill="#2563EB" />
                    </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">stosimo</span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <motion.button
                        whileHover={{ y: -2 }}
                        className={`flex items-center gap-1 font-medium transition-colors duration-200 py-2 ${
                          isActive(item.path) ? 'text-stosimo-blue' : 'text-gray-800 hover:text-stosimo-blue'
                        }`}
                      >
                        {item.title}
                        <i className="bi bi-chevron-down text-xs mt-0.5 transition-transform group-hover:rotate-180"></i>
                      </motion.button>
                      <motion.div
                        initial="hidden"
                        whileHover="visible"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-52 z-50 border border-gray-100"
                      >
                        {item.links?.map((link, i) => (
                          <Link
                            key={i}
                            to={link.path}
                            className="block px-5 py-2.5 text-gray-700 hover:text-stosimo-blue hover:bg-blue-50 transition-all duration-200"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <Link to={item.path}>
                      <motion.button
                        whileHover={{ y: -2 }}
                        className={`font-medium transition-colors duration-200 py-2 ${
                          isActive(item.path) ? 'text-stosimo-blue' : 'text-gray-800 hover:text-stosimo-blue'
                        }`}
                      >
                        {item.title}
                      </motion.button>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="h-8 w-px bg-gray-300"></div>
              {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Search className="text-gray-700 cursor-pointer hover:text-stosimo-blue" sx={{ fontSize: 22 }} />
              </motion.div> */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-7 py-3 rounded-lg shadow-md transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <i className={`bi ${mobileMenu ? 'bi-x-lg' : 'bi-list'} text-2xl text-gray-800`}></i>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                className="lg:hidden overflow-hidden border-t border-gray-200"
              >
                <div className="py-2">
                  {menuItems.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 last:border-0">
                      {item.hasDropdown ? (
                        <>
                          <motion.button
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleDropdown(idx)}
                            className="w-full flex justify-between items-center py-3.5 px-2 text-gray-800 font-medium hover:text-stosimo-blue hover:bg-gray-50 transition"
                          >
                            <span>{item.title}</span>
                            <motion.i
                              animate={{ rotate: activeDropdown === idx ? 180 : 0 }}
                              className="bi bi-chevron-down text-xs"
                            ></motion.i>
                          </motion.button>
                          <AnimatePresence>
                            {activeDropdown === idx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden pl-6 pb-2 bg-gray-50"
                              >
                                {item.links?.map((link, i) => (
                                  <Link
                                    key={i}
                                    to={link.path}
                                    onClick={() => setMobileMenu(false)}
                                    className="block py-2.5 text-gray-600 hover:text-stosimo-blue transition-all duration-200"
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenu(false)}
                          className={`block py-3.5 px-2 font-medium transition ${
                            isActive(item.path) ? 'text-stosimo-blue bg-blue-50' : 'text-gray-800 hover:text-stosimo-blue hover:bg-gray-50'
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="px-2 pt-4 pb-2">
                    <Link to="/contact" onClick={() => setMobileMenu(false)}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md"
                      >
                        Get In Touch
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
};

export default HeaderNav;