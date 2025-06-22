import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const { projectId } = useParams();
  const location = useLocation();
  const base = `/projects/${projectId}`;

  const links = [
    { to: `${base}`, label: "Descripción" },
    { to: `${base}/participantes`, label: "Participantes" },
    { to: `${base}/issues`, label: "Issues" },
    { to: `${base}/tareas`, label: "Tareas" },
  ];

  return (
    <header className="header-container">
      <div className="title">Tablero del proyecto</div>
      <nav className="navbar">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => {
              if (
                to === base && 
                (location.pathname !== base) && 
                location.pathname !== `${base}/`
              ) {
                return "nav-link";
              }
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
