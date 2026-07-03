import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaMoneyBillWave,
} from "react-icons/fa";
import Navbar from "../components/Navbar1";
import hero from "../assets/bg-img.jpg";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const totalPages = 10;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonfakery.com/jobs/paginated?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch jobs.");
        setLoading(false);
      });
  }, [currentPage]);

  const handleSearch = () => {
    setQuery(searchInput.trim().toLowerCase());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const filteredJobs = jobs.filter((job) => {
    if (!query) return true;
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.job_category.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    );
  });

  const handlePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setQuery("");
    setSearchInput("");
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      <div className="relative">
        <img
          src={hero}
          alt="hero"
          className="w-full h-[580px] object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-emerald-400/30 px-4 py-1.5 rounded-full">
            Trusted by 10,000+ job seekers
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-3 mb-5 text-center leading-tight">
            Find Your Next <span className="text-emerald-400">Career</span>{" "}
            Opportunity
          </h1>
          <p className="text-slate-300 text-base max-w-lg text-center mb-10 leading-relaxed">
            Browse thousands of verified job listings across every industry.
            Connect with top employers and take the next step in your
            professional journey.
          </p>

          <section className="flex justify-center items-center gap-3 w-full max-w-2xl">
            <div
              id="searcher"
              className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 w-full shadow-lg"
            >
              <FaSearch className="text-emerald-500 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Job title, keyword or company..."
                className="outline-none bg-transparent w-full text-slate-700 placeholder-slate-400 text-sm"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setQuery("");
                  }}
                  className="text-slate-300 hover:text-slate-500 text-lg leading-none"
                >
                  X
                </button>
              )}
            </div>
            <button
              onClick={() => {
                handleSearch();
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl whitespace-nowrap shadow-lg text-sm"
            >
              Search Job
            </button>
          </section>
        </div>
      </div>

      <div className=" mx-auto px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-1">
              Opportunities
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {query ? `Results for "${query}"` : "Latest Job Listings"}
            </h2>
          </div>
          <p className="text-slate-400 text-sm">
            {query
              ? `${filteredJobs.length} job(s) found`
              : `Page ${currentPage} of ${totalPages}`}
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 animate-pulse"
              >
                <div className="h-4 bg-slate-100 rounded w-1/3 mb-4" />
                <div className="h-5 bg-slate-100 rounded w-3/4 mb-2" />
                <div className="h-4 bg-slate-100 rounded w-1/2 mb-6" />
                <div className="h-3 bg-slate-100 rounded w-full mb-2" />
                <div className="h-3 bg-slate-100 rounded w-5/6 mb-6" />
                <div className="h-9 bg-slate-100 rounded-lg w-full" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-400 text-lg">{error}</div>
        )}

        {!loading && !error && filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg mb-2">
              No jobs found for "{query}"
            </p>
            <p className="text-slate-300 text-sm mb-6">
              Try a different keyword or browse all listings
            </p>
            <button
              onClick={() => {
                setQuery("");
                setSearchInput("");
              }}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {!loading && !error && filteredJobs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="max-w-lg bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-medium bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
                      {job.job_category}
                    </span>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${job.is_remote_work ? "bg-blue-50 text-blue-500" : "bg-orange-50 text-orange-500"}`}
                    >
                      {job.is_remote_work ? "Remote" : "On-site"}
                    </span>
                  </div>

                  <h3 className="text-slate-800 font-bold text-[17px] mb-1">
                    {job.title}
                  </h3>
                  <p className="text-emerald-600 text-[10px] font-medium mb-2">
                    {job.company}
                  </p>

                  <div className="flex flex-col gap-1.5 mb-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FaMapMarkerAlt className="text-slate-300 shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FaMoneyBillWave className="text-slate-300 shrink-0" />
                      <span className="font-semibold text-slate-700">
                        ${job.salary_from.toLocaleString()} - $
                        {job.salary_to.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/job/${job.id}`, { state: { job } })}
                  className="w-full text-center bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-700 font-semibold text-sm py-2 rounded-xl transition-colors border border-slate-100 hover:border-emerald-600"
                >
                  View Job
                </button>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && !query && (
          <div className="flex justify-center i vtems-center gap-2 mt-14">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePage(page)}
                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors
                  ${
                    currentPage === page
                      ? "bg-emerald-600 text-white shadow-md"
                      : "border border-slate-200 text-slate-600 hover:border-emerald-600 hover:text-emerald-600"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
