import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const links = [
    { to: "/", label: "Descripción" },
    { to: "/participantes", label: "Participantes" },
    { to: "/issues", label: "Issues" },
    { to: "/tareas", label: "Tareas" },
  ];
  return (
    <header className="header-container">
      <div className="title">Barkli Gallery</div>
      <nav className="navbar">
        {links.map(({ to, label }) => (
          <NavLink
            to={to}
            end={to === "/"}
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
};

export default Header;