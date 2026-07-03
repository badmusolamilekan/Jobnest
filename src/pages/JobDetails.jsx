import { useLocation, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaPhone, FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

export default function JobDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const job = state?.job;

  if (!job) {
    return (
      <div className="bg-slate-50 min-h-screen">
        <Navbar2 />
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg mb-4">Job not found.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  const qualifications = JSON.parse(job.qualifications);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar2 />

      <div className="max-w-4xl mx-auto px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors text-sm mb-8"
        >
          <FaArrowLeft size={12} /> Back to listings
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                {job.job_category}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${job.is_remote_work ? "bg-blue-400/20 text-white" : "bg-orange-400/20 text-white"}`}>
                {job.is_remote_work ? "Remote" : "On-site"}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{job.title}</h1>
            <p className="text-emerald-100 font-medium">{job.company}</p>
          </div>

          <div className="px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <FaMapMarkerAlt /> Location
                </div>
                <p className="text-slate-700 text-sm font-semibold">{job.location}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <FaBriefcase /> Employment
                </div>
                <p className="text-slate-700 text-sm font-semibold">{job.employment_type}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <FaMoneyBillWave /> Salary
                </div>
                <p className="text-slate-700 text-sm font-semibold">
                  ${job.salary_from.toLocaleString()} - ${job.salary_to.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <FaBriefcase /> Openings
                </div>
                <p className="text-slate-700 text-sm font-semibold">{job.number_of_opening} position(s)</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-slate-800 font-bold text-lg mb-3">Job Description</h2>
              <p className="text-slate-500 leading-relaxed">{job.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-slate-800 font-bold text-lg mb-3">Qualifications</h2>
              <div className="flex flex-wrap gap-2">
                {qualifications.map((q, i) => (
                  <span key={i} className="bg-emerald-50 text-emerald-600 text-sm font-medium px-4 py-1.5 rounded-full border border-emerald-100">
                    {q}
                  </span>
                ))}
              </div>
            </div> 

            <div className="border-t border-slate-100 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <FaPhone className="text-emerald-500 shrink-0" />
                <span>{job.contact}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <FaCalendarAlt className="text-emerald-500 shrink-0" />
                <span>Deadline: {job.application_deadline}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <FaClock className="text-emerald-500 shrink-0" />
                <span>Posted: {job.created_at}</span>
              </div>
            </div>

            <button className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold py-3.5 rounded-xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}