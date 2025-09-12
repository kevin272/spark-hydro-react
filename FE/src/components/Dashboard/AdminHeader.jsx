import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminHeader() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 shadow-md px-6 py-4 flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        <Link to="/admin" className="hover:text-blue-200 transition-colors">
          Admin Dashboard
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-blue-500 transition"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`w-6 h-0.5 bg-white mb-1 transition-transform ${
            mobileOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${
            mobileOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-transform ${
            mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          mobileOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0 gap-4 md:gap-6`}
      >
        <Link
          to="/admin"
          className="text-white px-3 py-2 rounded hover:bg-blue-500 transition font-medium"
        >
          Home
        </Link>
        <Link
          to="/admin/gallery"
          className="text-white px-3 py-2 rounded hover:bg-blue-500 transition font-medium"
        >
          Gallery
        </Link>
        <Link
          to="/admin/team"
          className="text-white px-3 py-2 rounded hover:bg-blue-500 transition font-medium"
        >
          Team
        </Link>
      </nav>

      {/* User / Logout */}
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <span className="text-white font-medium">{token ? "Admin" : ""}</span>
        <button
          onClick={handleLogout}
          className="px-3 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
