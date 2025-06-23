import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import "../styles/header.css";
import UserSession from "../utils/UserSession"; // Importamos nuestro singleton

function Header({ setUsuario }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const { projectId } = useParams();
  const location = useLocation();
  const base = `/projects/${projectId}`;

  const usuario = UserSession.getInstance().getUsuario(); // Usamos Singleton

  const links = [
    { to: `${base}`, label: "Descripción" },
    { to: `${base}/participantes`, label: "Participantes" },
    { to: `${base}/issues`, label: "Issues" },
    { to: `${base}/tareas`, label: "Tareas" },
  ];

  const handleLogout = () => {
    UserSession.getInstance().cerrarSesion();
    setUsuario(null); // Actualiza App sin recargar
    navigate("/login");
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-container">
      <div className="header-left">
        <div className="title">Tablero del proyecto</div>
        <nav className="navbar">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
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
      </div>

      <div className="user-menu-wrapper" ref={menuRef}>
        <div className="user-avatar" onClick={() => setShowMenu(!showMenu)}>
          👤
        </div>

        {showMenu && (
          <div className="user-dropdown">
            <div className="dropdown-header">
              <div className="avatar-circle">
                {usuario?.nombre?.[0]?.toUpperCase() || "U"}
              </div>
              <div className="user-info-text">
                <strong>{usuario?.nombre || "Usuario"}</strong>
                <small>{usuario?.rol || "Project Manager"}</small>
                <small className="email-text">{usuario?.email}</small>
                <small className="skill-text">{usuario?.skill || "Sin skill registrada"}</small>
              </div>

            </div>
            <button className="logout-dropdown-btn" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
