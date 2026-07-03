

import { NavLink } from "react-router-dom";

export default function Navbar2() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-600 font-semibold"
      : "text-slate-600 hover:text-emerald-600 transition-colors";

  return (
    <div className="bg-slate-100   shadow-sm sticky top-0 z-99 ">
      <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
        <NavLink to="/">
          <p className="font-bold text-2xl text-emerald-600 tracking-tight">Jobnest</p>
        </NavLink>

        <ul className="flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          
            <NavLink to ={"/"}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold rounded-lg"
          >
            Find Job
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
