import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, FileText, MessageSquare, Upload, Send, Sparkles } from 'lucide-react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null
  });
  const [focused, setFocused] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
    ...prev,
      [name]: files? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('subject', formData.subject);
      data.append('message', formData.message);
      if (formData.file) {
        data.append('resume', formData.file); // backend field name is usually 'resume' or 'file' - change if needed
        // data.append('file', formData.file); // use this if your multer field is.single('file')
      }
      const API_URL = import.meta.env.VITE_API_URL || 'https://stosimo-solution-backend1.onrender.com';
      const res = await axios.post(`${API_URL}/api/applications`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (res.status === 200 || res.status === 201) {
        toast.success('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          file: null
        });
        // reset file input visually
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Failed to submit application.');
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { name: 'name', icon: User, placeholder: 'Your Name', type: 'text' },
    { name: 'email', icon: Mail, placeholder: 'Your Email', type: 'email' },
    { name: 'phone', icon: Phone, placeholder: 'Your Phone', type: 'tel' },
    { name: 'subject', icon: FileText, placeholder: 'Subject', type: 'text' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
         style={{
           background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(99, 102, 241, 0.9) 40%, rgba(168, 85, 247, 0.85) 100%)'
         }}>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="text-white w-8 h-8" />
              <h2 className="text-4xl font-bold text-white m-0">Apply Now</h2>
            </div>
            <p className="text-white/80 text-sm">Join our team - we'd love to hear from you</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <div className={`flex items-center bg-white/95 rounded-xl shadow-lg transition-all duration-300 ${
                  focused === field.name? 'ring-4 ring-white/50 scale-[1.02]' : 'hover:shadow-xl'
                }`}>
                  <field.icon className="w-5 h-5 text-indigo-500 ml-4" />
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 bg-transparent border-0 focus:outline-none text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className={`flex items-start bg-white/95 rounded-xl shadow-lg transition-all duration-300 ${
                focused === 'message'? 'ring-4 ring-white/50 scale-[1.02]' : 'hover:shadow-xl'
              }`}>
                <MessageSquare className="w-5 h-5 text-indigo-500 ml-4 mt-4" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  rows="4"
                  className="w-full px-4 py-4 bg-transparent border-0 focus:outline-none text-gray-700 placeholder-gray-400 resize-none"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="flex items-center gap-3 bg-white/90 hover:bg-white rounded-xl px-5 py-4 cursor-pointer shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <Upload className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700 font-medium truncate">
                  {formData.file? formData.file.name : 'Choose File (PDF/DOC)'}
                </span>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  required={!formData.file}
                />
              </label>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: loading? 1 : 1.03 }}
              whileTap={{ scale: loading? 1 : 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full bg-white text-indigo-600 font-bold py-4 rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{loading? 'Submitting...' : 'APPLY JOB'}</span>
              {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerForm;