import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiFileText, FiMessageSquare, FiUpload } from "react-icons/fi";

const gradientStyle = {
    background: `linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(99, 102, 241, 0.9) 40%, rgba(168, 85, 247, 0.85) 100%)`
};

export default function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const [form, setForm] = useState({
        name: "", email: "", phone: "", subject: "", message: "", file: null
    });

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
                const data = await res.json();
                console.log("job details", data);
                setJob(data.job || data.data || data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchJobDetails();
    }, [id]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleFileChange = (e) => setForm({ ...form, file: e.target.files[0] });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const fd = new FormData();
            fd.append("jobId", id);
            fd.append("name", form.name);
            fd.append("email", form.email);
            fd.append("phone", form.phone);
            fd.append("subject", form.subject);
            fd.append("message", form.message);
            if (form.file) fd.append("resume", form.file);
            const res = await fetch("http://localhost:5000/api/applications", { method: "POST", body: fd });
            if (!res.ok) throw new Error("Failed to apply");
            alert("Application submitted successfully!");
            navigate("/");
        } catch (err) {
            alert("Error: " + err.message);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!job) return <div className="min-h-screen flex items-center justify-center">Job not found</div>;

    const jobIdToShow = job._id || job.id || id;
    
    // FIX: comma separated string-a array va maathura helper
    const toArray = (val) => {
        if (!val) return [];
        if (Array.isArray(val)) return val;
        return val.split(',').map(s => s.trim()).filter(Boolean);
    };

    const requirements = toArray(job.requirements);
    const responsibilities = toArray(job.responsibilities);
    const skills = toArray(job.skills);

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <button onClick={() => navigate(-1)} className="mb-6 text-slate-600 hover:text-slate-900">← Back to Jobs</button>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="p-8 text-white" style={gradientStyle}>
                        <h1 className="text-3xl font-bold">{job.role || job.title}</h1>
                        <p className="text-indigo-100 mt-2">{job.location} • {job.type || "Full Time"}</p>
                        <p className="text-indigo-200 text-sm mt-3 bg-white/20 inline-block px-3 py-1 rounded-full">Job ID: {jobIdToShow}</p>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap gap-4 mb-6 text-sm">
                            <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600"><strong>Job ID:</strong> {jobIdToShow}</span>
                            <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600"><strong>Role:</strong> {job.role || job.title}</span>
                        </div>

                        <h3 className="font-semibold text-lg mb-2">Job Description</h3>
                        <p className="text-slate-600 mb-6 whitespace-pre-line">{job.description}</p>

                        {/* Requirements */}
                        {requirements.length > 0 && (
                            <>
                                <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                                <ul className="list-disc pl-5 text-slate-600 mb-6">
                                    {requirements.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                            </>
                        )}

                        {/* Responsibilities - ITHU DHAAN ADD PANNEN */}
                        {responsibilities.length > 0 && (
                            <>
                                <h3 className="font-semibold text-lg mb-2">Responsibilities</h3>
                                <ul className="list-disc pl-5 text-slate-600 mb-6">
                                    {responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                            </>
                        )}

                        {/* Skills - ITHU DHAAN ADD PANNEN */}
                        {skills.length > 0 && (
                            <>
                                <h3 className="font-semibold text-lg mb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {skills.map((s, i) => (
                                        <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm border border-indigo-100">{s}</span>
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="border-t pt-8">
                            <h2 className="text-2xl font-bold mb-6">Apply for this position</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" size={18} />
                                    <input name="name" required placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                                </div>
                                <div className="relative">
                                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" size={18} />
                                    <input name="email" required type="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                                </div>
                                <div className="relative">
                                    <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" size={18} />
                                    <input name="phone" required placeholder="Your Phone" value={form.phone} onChange={handleChange} className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                                </div>
                                <div className="relative">
                                    <FiFileText className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" size={18} />
                                    <input name="subject" required placeholder="Subject" value={form.subject} onChange={handleChange} className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                                </div>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-5 top-6 text-indigo-500 pointer-events-none" size={18} />
                                    <textarea name="message" rows="4" required placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white resize-none" />
                                </div>
                                <div className="relative">
                                    <FiUpload className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" size={18} />
                                    <label className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-4 flex items-center cursor-pointer bg-white text-slate-500">
                                        <span className="truncate">{form.file ? form.file.name : "Choose File (PDF/DOC)"}</span>
                                        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                                    </label>
                                </div>
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={submitting} type="submit" className="w-full py-4 rounded-xl text-white font-semibold shadow-lg disabled:opacity-50" style={gradientStyle}>
                                    {submitting ? "Submitting..." : `Submit Application for ${job.role || job.title} (${jobIdToShow})`}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}