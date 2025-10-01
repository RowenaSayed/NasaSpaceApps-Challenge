import { useState } from "react";
import { Link } from "react-router-dom";
import { Cloud, User, BarChart3, Info, Menu, X, Home } from "lucide-react";

export default function Navigation({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');

  return (
    <header className="sticky top-0 z-100">
      <nav
        className="bg-[#0D1117] border-b border-[#161B22] px-6 py-4 sticky top-0 "
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            title="WeatherScope Home"
          >
            <div className="relative">
              <Cloud className="h-8 w-8 text-[#00B8D9]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#00B8D9] to-[#FF6B6B] rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl text-white font-semibold">
              WeatherScope
            </span>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-4 
              ${
                isOpen
                  ? "flex absolute top-16 left-0 w-full bg-[#0D1117] px-6 py-4"
                  : "hidden md:flex"
              }`}
          >
            <li>
              <Link
                to="/"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    currentPage === "/"
                      ? "bg-[#00B8D9] text-white"
                      : "text-white hover:text-[#00B8D9]"
                  }`}
                title="Go to Dashboard"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/history"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    currentPage === "dashboard"
                      ? "bg-[#00B8D9] text-white"
                      : "text-white hover:text-[#00B8D9]"
                  }`}
                title="Go to Dashboard"
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    currentPage === "about"
                      ? "bg-[#00B8D9] text-white"
                      : "text-white hover:text-[#00B8D9]"
                  }`}
                title="Learn more About Data"
                onClick={() => setIsOpen(false)}
              >
                <Info className="h-4 w-4 mr-2" />
                About Data
              </Link>
            </li>

            <li>
              {token ? (
                <Link
                  to="/profile"
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-[#161B22] text-white hover:ring-2 hover:ring-[#00B8D9] transition"
                  title="User Profile"
                  aria-label="User Profile"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#00B8D9] hover:bg-[#009bb3] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login / Signup
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
