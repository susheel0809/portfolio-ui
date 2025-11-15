import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT – Logo */}
        <Link to="/" className="text-xl font-bold text-gray-900">
          MyPortfolio
        </Link>

        {/* CENTER – Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
          <Link to="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>

        {/* RIGHT – Search Icon (Desktop) */}
        <div className="hidden md:flex">
          <button className="p-2">
            <svg
              className="w-6 h-6 text-gray-700 hover:text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE – icons */}
        <div className="md:hidden flex items-center gap-3">

          {/* Search */}
          <button className="p-2">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              />
            </svg>
          </button>

          {/* Hamburger */}
          <button className="p-2" onClick={() => setOpen(!open)}>
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 text-gray-700">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
