import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import companyLogo from "../assets/CompaniLogo.png";
import logoutIcon from "../assets/logout.png";
import chevronIcon from "../assets/Chevron Left.png";
import "../styles/Sidebar.css";
import { getProjects } from "../utils/projects";

export default function Sidebar({ onLogout, onNavigateAreas }) {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  return (
    <aside className="sidebar-container">
      {/* Logo */}
      <div className="logo-section">
        <img src={companyLogo} alt="Company logo" className="logo-img" />
        <span className="logo-text">Mentorix</span>
      </div>

      {/* Proyectos */}
      <nav className="projects-nav">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-list">
          {projects.map((proj) => (
            <button
              key={proj.id}
              className={`project-button ${
                String(proj.id) === projectId ? "active" : ""
              }`}
              onClick={() => navigate(`/projects/${proj.id}`)}
            >
              {proj.name}
            </button>
          ))}
        </div>
        <button
          className="create-button"
          onClick={() => navigate("/projects/new")}
        >
          + Create New Project
        </button>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button
          className="area-button"
          onClick={onNavigateAreas}
          aria-label="Áreas"
        >
          <img src={chevronIcon} alt="" className="icon-img" />
          <span>Áreas</span>
        </button>
        <button
          className="logout-button"
          onClick={onLogout}
          aria-label="Cerrar sesión"
        >
          <img src={logoutIcon} alt="" className="icon-img" />
        </button>
      </div>
    </aside>
  );
}
