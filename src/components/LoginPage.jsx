import React, { useEffect, useState } from "react";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import UserSession from "../utils/UserSession.jsx";
import RecoveryFactory from "../factories/RecoveryMethodFactory.jsx";
import { getUsers } from "../utils/users";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryType, setRecoveryType] = useState("email");
  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
      getUsers()
        .then(setUsuarios)
        .catch(() => setError("No se pudieron cargar los usuarios"));
    }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const fakeUser = {
      email: "usuario@example.com",
      password: "123456",
      rol: "Project Manager",
      nombre: "Camila Lozano",
      skill: "HTML/CSS",
      description: "Soy super cool yei"
    };

    if (email === fakeUser.email && password === fakeUser.password) {
      UserSession.getInstance().setUsuario(fakeUser);
      navigate("/projects/1");
      return;
    }

    console.log("Usuarios registrados:", usuarios);
    
    const usuario = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (usuario) {
      UserSession.getInstance().setUsuario(usuario);
      navigate("/projects/1");
    } else {
      setAuthError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <h2>Inicia Sesión</h2>
        <p>Accede a tu cuenta para gestionar tus proyectos</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="form-input"
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="form-input"
              required
            />
          </div>

          {authError && <div className="error-msg">{authError}</div>}

          <button type="submit" className="login-btn">Ingresar</button>

          <button
            type="button"
            className="forgot-password-link"
            onClick={() => setShowRecovery(true)}
          >
            ¿Olvidaste tu contraseña?
          </button>

          <div className="signup-redirect">
            <span>¿No tienes cuenta?</span>
            <span
              className="signup-link-text"
              onClick={() => navigate("/signup")}
            >
              Regístrate aquí
            </span>
          </div>
        </form>
      </div>

      {showRecovery && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Selecciona el método de recuperación</h3>

            <div className="recovery-options">
              <button
                className={recoveryType === "email" ? "active" : ""}
                onClick={() => setRecoveryType("email")}
              >
                Por correo
              </button>
              <button
                className={recoveryType === "skill" ? "active" : ""}
                onClick={() => setRecoveryType("skill")}
              >
                Por skill
              </button>
            </div>

            <div className="recovery-form">
              {RecoveryFactory.createRecoveryComponent(recoveryType)}
            </div>

            <button className="close-btn" onClick={() => setShowRecovery(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
