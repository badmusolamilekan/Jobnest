import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-300/50 border-t border-slate-100 mt-3">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-bold text-2xl text-emerald-600 tracking-tight mb-3">
              Jobnest
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Connecting job seekers with top employers across every industry.
              Your next career move starts here.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="p-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-500 rounded-lg transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-500 rounded-lg transition-colors"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-500 rounded-lg transition-colors"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-500 rounded-lg transition-colors"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-slate-800 mb-4">Quick Links</p>
            <ul className="flex flex-col gap-3">
              <NavLink
                to="/"
                className="text-slate-500 hover:text-emerald-600 text-sm transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-slate-500 hover:text-emerald-600 text-sm transition-colors"
              >
                About Us
              </NavLink>
              
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-800 mb-4">Contact Us</p>
            <ul className="flex flex-col gap-3 text-slate-500 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-500" /> hello@jobnest.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-emerald-500" /> +1 (234) 567 8900
              </li>
              <li className="flex items-center gap-2">
                <FaLocationDot className="text-emerald-500" /> Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-10 pt-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Jobnest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
