import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </div>
        <div
          className={`tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </div>
        <div
          className={`tab ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </div>
        <div
          className={`tab ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </div>
      </div>
      <div className="py-12">
        {activeTab === "about" && <About />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "contact" && <Contact />}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);