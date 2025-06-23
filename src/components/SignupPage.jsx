import React, { useState } from "react"; 
import "../styles/SignupPage.css";
import { useNavigate } from "react-router-dom";
import UserSession from "../utils/UserSession";

export default function SignupPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rol, setRol] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    setError("");

    if (!firstName || !lastName || !email || !password || !confirmPassword || !skill || !description) {
      return setError("Todos los campos son obligatorios");
    }

    if (!rol) {
      return setError("Debes seleccionar un rol");
    }

    if (password !== confirmPassword) {
      return setError("Las contraseñas no coinciden");
    }

    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const yaExiste = usuariosRegistrados.some((u) => u.email === email);
    if (yaExiste) {
      return setError("Ya existe una cuenta con este correo");
    }

    const nuevoUsuario = {
      nombre: `${firstName} ${lastName}`,
      email,
      password,
      rol,
      skill,
      description,
    };

    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
    UserSession.getInstance().setUsuario(nuevoUsuario);
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
    navigate("/projects/1");
  };

  return (
    <div className="signup-container">
      <div className="promotional-panel">
        <div className="lock-icon-wrapper">{/* Icono */}</div>
        <div className="promotional-title">Únete a Mentorix</div>
        <div className="promotional-description">
          Crea tu cuenta y comienza a conectar talentos para la gestión de proyectos, colaboración estratégica y más.
        </div>
        <div className="feature-list">
          <div className="feature-item"><div className="feature-dot" />Colaborativo</div>
          <div className="feature-item"><div className="feature-dot" />Ágil</div>
          <div className="feature-item"><div className="feature-dot" />Confiable</div>
        </div>
      </div>

      <div className="form-panel">
        <div className="form-container">
          <div className="form-header">
            <div className="form-title">Crear cuenta</div>
            <div className="form-subtitle">Regístrate para comenzar a gestionar proyectos con Mentorix</div>
          </div>

          <div className="form-content">
            <div className="name-fields">
              <div className="input-group">
                <label>Nombre</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input" placeholder="Camila" />
              </div>
              <div className="input-group">
                <label>Apellido</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input" placeholder="Gómez" />
              </div>
            </div>

            <div className="input-group">
              <label>Correo electrónico</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" placeholder="camila@mentorix.com" />
            </div>

            <div className="input-group">
              <label>Rol profesional</label>
              <select value={rol} onChange={(e) => setRol(e.target.value)} className={`form-input ${rol === "" ? "placeholder" : ""}`}>
                <option value="" disabled>Selecciona un rol</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Coordinador de Proyecto">Coordinador de Proyecto</option>
                <option value="Analista de Negocio">Analista de Negocio</option>
                <option value="Consultor Externo">Consultor Externo</option>
                <option value="Líder de Área">Líder de Área</option>
                <option value="Asistente Administrativo">Asistente Administrativo</option>
              </select>
            </div>

            <div className="input-group">
              <label>Habilidad principal</label>
              <select value={skill} onChange={(e) => setSkill(e.target.value)} className={`form-input ${skill === "" ? "placeholder" : ""}`}>
                <option value="" disabled>Selecciona tu habilidad</option>
                <option value="JavaScript">JavaScript</option>
                <option value="HTML/CSS">HTML/CSS</option>
                <option value="Project Management">Project Management</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Agile Leadership">Agile Leadership</option>
                <option value="Talent Management">Talent Management</option>
              </select>
            </div>

            <div className="input-group">
              <label>Descripción personal</label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-input" placeholder="Cuéntanos brevemente sobre ti" />
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" placeholder="Crea tu contraseña" />
            </div>

            <div className="input-group">
              <label>Confirmar contraseña</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" placeholder="Repite tu contraseña" />
            </div>

            {error && <div className="error-msg">{error}</div>}

            <button className="create-account-btn" onClick={handleSignup}>Registrarse</button>

            <div className="signin-link">
              <span>¿Ya tienes cuenta? </span>
              <span className="signin-link-text" onClick={() => navigate("/login")}>Inicia sesión aquí</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
