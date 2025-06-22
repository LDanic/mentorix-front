import React from "react";
import companyLogo from "../assets/CompaniLogo.png";
import chevronIcon from "../assets/Chevron Left.png";
import "../styles/Sidebar.css";
import RoleButton from "../components/decorators/RoleButton";
import UserSession from "../utils/UserSession";

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

      {/* Footer: Área y Rol */}
      <div className="sidebar-footer">
        <button
          className="area-button"
          onClick={onNavigateAreas}
          aria-label="Áreas"
        >
          <img src={chevronIcon} alt="" className="icon-img" />
          <span>Áreas</span>
        </button>

        {/* Botón decorador con rol */}
        <div style={{ marginTop: "12px", display: "flex", justifyContent: "center" }}>
          <RoleButton rol={UserSession.getInstance().getUsuario()?.rol} />
        </div>
      </div>
    </aside>
  );
}
