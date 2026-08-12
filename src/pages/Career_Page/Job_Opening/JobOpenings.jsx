import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const gradientStyle = {
  background: `linear-gradient(135deg, 
    rgba(59, 130, 246, 0.95) 0%, 
    rgba(99, 102, 241, 0.9) 40%,
    rgba(168, 85, 247, 0.85) 100%)`
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function JobOpenings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobs");
        const data = await res.json();
        console.log("Fetched jobs:", data); // Log the fetched data for debugging
        // Backend should return array directly or { jobs: [] } or { data: [] }
        setJobs(Array.isArray(data) ? data : data.jobs || data.data || []);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading jobs...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Join Us</h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={gradientStyle}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="bg-white rounded-2xl shadow-2xl shadow-indigo-500/10 overflow-hidden border border-slate-100"
        >
          <div className="p-8 pb-4" style={gradientStyle}>
            <h2 className="text-2xl font-semibold text-white">Current Openings</h2>
            <p className="text-indigo-100 mt-1">All positions based in Chennai, India</p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-8 font-semibold text-slate-700">Role(s)</th>
                  <th className="text-left py-4 px-8 font-semibold text-slate-700">Location</th>
                  <th className="text-right py-4 px-8 font-semibold text-slate-700">More Info</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <motion.tr key={job._id || job.id} variants={itemVariants} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-8 font-medium text-slate-900">{job.role || job.title}</td>
                    <td className="py-3 px-8 text-slate-600">{job.location}</td>
                    <td className="py-3 px-8 text-right">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 rounded-lg text-white font-medium shadow-lg shadow-indigo-500/30"
                        style={gradientStyle}
                        onClick={() => navigate(`/career/job/${job._id || job.id}`)}
                      >
                        Apply Now
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-6 space-y-4">
            {jobs.map((job) => (
              <motion.div key={job._id || job.id} variants={itemVariants} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{job.role || job.title}</h3>
                <p className="text-slate-600 mb-4">{job.location}</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-lg text-white font-medium shadow-lg"
                  style={gradientStyle}
                  onClick={() => navigate(`/career/job/${job._id || job.id}`)}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}