import Footer from "../components/Footer";
import { FaBriefcase, FaUsers, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar2 />

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-5xl font-bold text-slate-800 mt-3 mb-4">
            About Jobnest
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We are on a mission to make job searching simpler, faster, and more
            accessible for everyone  whether you are a fresh graduate or a
            seasoned professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Story
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Jobnest was founded with a simple belief that finding the right
              job should not be complicated. We noticed that job seekers were
              spending too much time navigating outdated platforms and
              irrelevant listings.
            </p>
            <p className="text-slate-500 leading-relaxed">
              So we built Jobnest a clean, modern job finder that puts
              opportunities front and center. Today we serve thousands of job
              seekers and employers across multiple industries.
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-10 text-center">
            <p className="text-6xl font-bold text-emerald-600 mb-2">10k+</p>
            <p className="text-slate-500 font-medium">Job seekers served</p>
            <div className="border-t border-emerald-100 my-6" />
            <p className="text-6xl font-bold text-emerald-600 mb-2">500+</p>
            <p className="text-slate-500 font-medium">Verified employers</p>
            <div className="border-t border-emerald-100 my-6" />
            <p className="text-6xl font-bold text-emerald-600 mb-2">50+</p>
            <p className="text-slate-500 font-medium">Industries covered</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            What We Stand For
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Three core values drive everything we do at Jobnest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaBriefcase className="text-emerald-600 text-2xl" />
            </div>
            <h3 className="text-slate-800 font-semibold text-lg mb-2">
              Opportunity
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We believe every person deserves access to meaningful work. We
              make sure great opportunities are never out of reach.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-emerald-600 text-2xl" />
            </div>
            <h3 className="text-slate-800 font-semibold text-lg mb-2">
              Community
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Jobnest is more than a platform  it is a community of
              professionals helping each other grow and succeed.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-emerald-600 text-2xl" />
            </div>
            <h3 className="text-slate-800 font-semibold text-lg mb-2">Trust</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every listing on Jobnest is verified. We take the stress out of
              job hunting by ensuring you only see legitimate opportunities.
            </p>
          </div>
        </div>

        <div className="bg-emerald-600 rounded-2xl px-10 py-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Find Your Next Role?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-lg mx-auto">
            Join thousands of professionals who have already found their dream
            jobs through Jobnest.
          </p>

          <Link
            to={"/"}
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Start Searching
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
