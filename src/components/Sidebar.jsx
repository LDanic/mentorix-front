import React from "react";
import companyLogo from "../assets/CompaniLogo.png";
import logoutIcon from "../assets/logout.png";
import chevronIcon from "../assets/Chevron Left.png";
import "../styles/Sidebar.css";

const projects = [
  "Barkli Gallery",
  "Greenish",
  "Bigo Ecommerce",
  "Youtube Research",
  "Find Me Teacher",
];

export default function Sidebar({ onLogout, onNavigateAreas, onSelectProject }) {
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
          {projects.map((name) => (
            <button
              key={name}
              className="project-button"
              onClick={() => onSelectProject(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <button className="create-button" onClick={() => onSelectProject(null)}>
          + Create New Project
        </button>
      </nav>

      {/* Footer: Área y Logout */}
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
