import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState({ name: "home", id: null });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page.name) {
      case "home":
        return <Home setPage={setPage} />;
      case "projects":
        return <Projects setPage={setPage} />;
      case "projectDetail":
        return <ProjectDetail projectId={page.id} setPage={setPage} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Navbar setPage={setPage} />
      <main>{renderPage()}</main>
      <footer className="bg-gray-900 text-center py-4 text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Anshul Yadav. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}