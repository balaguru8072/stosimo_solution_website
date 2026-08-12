import React, { useState, useEffect, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import webBannerImage from '../../../assets/images/webBannerImage.jpg';

const UiUxDesign = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'UI/UX Design',
        business: '',
        location: '',
        message: ''
    });
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = {
               ...formData,
                phone: `+91${formData.phone}`,
                source: 'UI/UX Design Banner'
            };

            const res = await axios.post('http://localhost:5000/api/service-messages', payload);

            if (res.status === 200 || res.status === 201) {
                toast.success('Message sent successfully! Our team will contact you soon.');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    service: 'UI/UX Design',
                    business: '',
                    location: '',
                    message: ''
                });
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || 'Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} theme="colored" />
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
               .webdev-section { position: relative; min-height: 90vh; background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%); font-family: 'Outfit', sans-serif; overflow: hidden; padding: 0; }
               .webdev-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url(${webBannerImage}); background-size: cover; background-position: center; z-index: 0; }
               .webdev-bg::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(139, 92, 246, 0.85) 50%, rgba(168, 85, 247, 0.85) 100%); backdrop-filter: blur(2px); }
               .webdev-container { position: relative; max-width: 1400px; margin: 0 auto; padding: 60px 20px; display: flex; align-items: center; justify-content: space-between; gap: 50px; min-height: 90vh; z-index: 1; }
               .webdev-left { flex: 0 0 50%; opacity: 0; transform: translateX(-60px); transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
               .webdev-left.animate { opacity: 1; transform: translateX(0); }
               .website-text { font-size: 80px; font-weight: 900; color: transparent; -webkit-text-stroke: 2.5px #FFFFFF; text-stroke: 2.5px #FFFFFF; line-height: 1; margin: 0 0 8px 0; letter-spacing: -2px; animation: textGlow 3s ease-in-out infinite; }
                @keyframes textGlow { 0%, 100% { -webkit-text-stroke: 2.5px #FFFFFF; filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)); } 50% { -webkit-text-stroke: 2.5px rgba(255, 255, 0.8); filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5)); } }
               .development-text { font-size: 65px; font-weight: 900; color: #FFFFFF; line-height: 1; margin: 0 0 25px 0; letter-spacing: -2px; text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
               .webdev-desc { font-size: 16px; font-weight: 500; color: #FFFFFF; line-height: 1.7; margin: 0; max-width: 520px; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.15); }
               .webdev-right { flex: 0 0 45%; opacity: 0; transform: translateX(60px); transition: all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s; }
               .webdev-right.animate { opacity: 1; transform: translateX(0); }
               .form-card { background: #FFFFFF; border-radius: 18px; padding: 32px 32px; box-shadow: 0 20px 60px rgba(59, 130, 246, 0.25); animation: cardFloat 6s ease-in-out infinite; }
                @keyframes cardFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
               .form-title { font-size: 28px; font-weight: 800; color: #0F172A; margin: 0 0 25px 0; text-align: left; }
               .form-group { margin-bottom: 16px; }
               .form-row { display: flex; gap: 16px; }
               .form-row.form-group { flex: 1; }
               .form-label { display: block; font-size: 13px; font-weight: 600; color: #475569; margin-bottom: 6px; }
               .form-input,.form-select,.form-textarea { width: 100%; padding: 11px 0; font-size: 14px; font-weight: 500; color: #0F172A; background: transparent; border: none; border-bottom: 2px solid #E2E8F0; outline: none; transition: all 0.3s ease; font-family: 'Outfit', sans-serif; }
               .form-input:focus,.form-select:focus,.form-textarea:focus { border-bottom-color: #3B82F6; }
               .form-input::placeholder,.form-textarea::placeholder { color: #94A3B8; }
               .phone-input-group { display: flex; align-items: center; gap: 10px; }
               .country-code { display: flex; align-items: center; gap: 6px; padding: 11px 14px; background: #F8FAFC; border-radius: 8px; border: 2px solid #E2E8F0; font-weight: 600; color: #0F172A; flex-shrink: 0; font-size: 14px; }
               .country-code img { width: 22px; height: 16px; object-fit: cover; border-radius: 3px; }
               .form-select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0 center; padding-right: 20px; }
               .form-textarea { min-height: 70px; resize: vertical; border: 2px solid #E2E8F0; border-radius: 8px; padding: 12px 14px; }
               .form-textarea:focus { border-color: #3B82F6; }
               .submit-btn { width: 100%; background: linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(139, 92, 246, 0.85) 50%, rgba(168, 85, 247, 0.85) 100%); color: #FFFFFF; padding: 15px 40px; border: none; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35); display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; }
               .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
               .submit-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 12px 35px rgba(16, 185, 129, 0.5); }
               .submit-btn svg { transition: transform 0.3s ease; }
               .submit-btn:hover svg { transform: translateX(4px) translateY(-4px); }
                @media (max-width: 1024px) {.webdev-container { flex-direction: column; gap: 40px; padding: 50px 20px; }.webdev-left,.webdev-right { flex: 1; width: 100%; } }
                @media (max-width: 768px) {.webdev-section { min-height: auto; }.webdev-container { padding: 50px 16px; min-height: auto; }.website-text { font-size: 55px; -webkit-text-stroke: 2px #FFFFFF; text-stroke: 2px #FFFFFF; }.development-text { font-size: 45px; }.webdev-desc { font-size: 14px; }.form-card { padding: 28px 22px; }.form-title { font-size: 24px; }.form-row { flex-direction: column; gap: 0; }.submit-btn { padding: 14px 35px; font-size: 14px; } }
                `}
            </style>

            <section className="webdev-section" ref={sectionRef}>
                <div className="webdev-bg"></div>
                <div className="webdev-container">
                    <div className={`webdev-left ${isVisible? 'animate' : ''}`}>
                        <h1 className="website-text">UI / UX</h1>
                        <h2 className="development-text">Design</h2>
                        <p className="webdev-desc">
                            Unlock the Power of Web Presence with our Professional Website Designing Service!
                            Elevate Your Online Presence with Stunning Website Designs.
                        </p>
                    </div>

                    <div className={`webdev-right ${isVisible? 'animate' : ''}`}>
                        <div className="form-card">
                            <h3 className="form-title">Drop Us a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Name*</label>
                                    <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group" style={{width:'100%'}}>
                                        <label className="form-label">Phone No*</label>
                                        <div className="phone-input-group">
                                            <div className="country-code">
                                                <img src="https://flagcdn.com/w40/in.png" alt="India" />
                                                <span>+91</span>
                                            </div>
                                            <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleChange} required maxLength={10} />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group" style={{flex:1}}>
                                        <label className="form-label">Email*</label>
                                        <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group" style={{flex:1}}>
                                        <label className="form-label">Service*</label>
                                        <select name="service" className="form-select" value={formData.service} onChange={handleChange}>
                                            <option>Website Development</option>
                                            <option>Mobile App Development</option>
                                            <option>UI/UX Design</option>
                                            <option>Digital Marketing</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Which Business do you have?*</label>
                                    <input type="text" name="business" className="form-input" value={formData.business} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Location*</label>
                                    <input type="text" name="location" className="form-input" value={formData.location} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Message*</label>
                                    <textarea name="message" className="form-textarea" value={formData.message} onChange={handleChange} required></textarea>
                                </div>

                                <button type="submit" className="submit-btn" disabled={loading}>
                                    {loading? 'Sending...' : 'Connect With Vdigtech Today'}
                                    {!loading && <FiArrowUpRight />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UiUxDesign;