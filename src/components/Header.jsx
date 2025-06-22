import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const { projectId } = useParams();
  const base = `/projects/${projectId}`;

  const links = [
    { to: `${base}`, label: "Descripción" },
    { to: `${base}/participantes`, label: "Participantes" },
    { to: `${base}/issues`, label: "Issues" },
    { to: `${base}/tareas`, label: "Tareas" },
  ];

  return (
    <header className="header-container">
      <div className="title">Project Dashboard</div>
      <nav className="navbar">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
