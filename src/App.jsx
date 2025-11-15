import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/Login";
// import AdminDashboard from "./pages/admin/Dashboard";
// import NavBar from "./components/public/NavBar";
// import Footer from "./components/public/Footer";
import NavBar from "./components/public/NewNavBar"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:slug" element={<ProjectDetail />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
