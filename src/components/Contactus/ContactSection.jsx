import React, { useState, useEffect } from 'react';
import { FiPhone, FiMapPin, FiMail, FiSend } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  useEffect(() => { setIsVisible(true); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://stosimo-solution-backend1.onrender.com';
      const res = await fetch(`${API_URL}/api/messages/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Failed to send');
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', msg: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .contact-section { padding: 100px 0; background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%); position: relative; overflow: hidden; font-family: 'Outfit', sans-serif; }
        .bg-shape { position: absolute; border-radius: 50%; background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%); animation: float 20s infinite ease-in-out; pointer-events: none; }
        .bg-shape-1 { width: 400px; height: 400px; top: -100px; left: -100px; }
        .bg-shape-2 { width: 300px; height: 300px; bottom: -50px; right: -50px; }
        .bg-shape-3 { width: 200px; height: 200px; top: 50%; left: 50%; }
        @keyframes float { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(30px, -30px) rotate(120deg); } 66% { transform: translate(-20px, 20px) rotate(240deg); } }
        .grid-pattern { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px); background-size: 50px 50px; pointer-events: none; }
        .contact-badge { display: inline-block; background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); color: #1E40AF; padding: 10px 24px; border-radius: 8px; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 30px; }
        .contact-title { font-size: 25px; text-align: center; font-weight: 800; color: #0F172A; line-height: 1.1; margin-bottom: 50px; }
        .contact-info-item { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 35px; }
        .contact-icon { width: 55px; height: 55px; background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #3B82F6; font-size: 24px; flex-shrink: 0; }
        .contact-form-card { background: rgba(255,255,255,0.95); padding: 55px 50px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.08); position: relative; }
        .form-title { font-size: 36px; font-weight: 700; color: #0F172A; margin-bottom: 40px; }
        .form-group { margin-bottom: 22px; }
        .form-control, .form-select { width: 100%; padding: 18px 22px; border: 2px solid #E2E8F0; border-radius: 12px; font-size: 15px; color: #0F172A; background: #F8FAFC; font-family: inherit; }
        .form-control:focus, .form-select:focus { outline: none; border-color: #3B82F6; background: #FFFFFF; }
        textarea.form-control { min-height: 150px; resize: vertical; }
        .submit-btn { background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); color: #FFFFFF; padding: 18px 50px; border: none; border-radius: 12px; font-size: 16px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      <section className="contact-section">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
        <div className="grid-pattern"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <span className="contact-badge">CONTACT US</span>
              <h2 className="contact-title">To Make Requests for  Further Information, Contact Us</h2>
              <div className="contact-info-item">
                <div className="contact-icon"><FiPhone /></div>
                <div className="contact-info-text"><span>Call Us</span><h5><a href="tel:+69009494094">+69 009 494 094</a></h5></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon"><FiMapPin /></div>
                <div className="contact-info-text"><span>Our Location</span><h5>147 New Yors, NY Adipisicing 123</h5></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon"><FiMail /></div>
                <div className="contact-info-text"><span>Mail us</span><h5><a href="mailto:hello@stosimo.com">hello@stosimo.com</a></h5></div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-form-card">
                <h3 className="form-title">Send Your Message!</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <input type="tel" className="form-control" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <select className="form-select" name="subject" value={formData.subject} onChange={handleChange} required>
                          <option value="">Subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Support">Support</option>
                          <option value="Sales">Sales</option>
                          <option value="Partnership">Partnership</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea className="form-control" name="message" placeholder="Write a Message" value={formData.message} onChange={handleChange} required></textarea>
                  </div>

                  {status.msg && (
                    <div style={{ padding: '12px 18px', marginBottom: '20px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, background: status.type === 'success' ? '#DCFCE7' : '#FEE2E2', color: status.type === 'success' ? '#166534' : '#991B1B' }}>
                      {status.msg}
                    </div>
                  )}

                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Your Message'} <FiSend />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;