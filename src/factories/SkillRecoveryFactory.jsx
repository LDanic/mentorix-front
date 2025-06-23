// src/factories/SkillRecoveryFactory.jsx
import React, { useState, useEffect } from "react";
import "../styles/Factories.css";
import { getUsers, updatePassword } from "../utils/users";

export class SkillRecoveryFactory {
  createRecoveryComponent() {
    return <SkillRecoveryForm />;
  }
}

function SkillRecoveryForm() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    getUsers()
      .then(setUsuarios)
      .catch(() => setError("No se pudieron cargar los usuarios"));
  }, []);

  const skillsList = [
    "JavaScript",
    "HTML/CSS",
    "Project Management",
    "UI/UX Design",
    "Marketing",
    "Strategic Planning",
    "Team Leadership"
  ];

  const handleEmailSubmit = () => {
    setError("");
    setMensaje("");

    const encontrado = usuarios.find((u) => u.email === email.trim());

    if (encontrado) {
      setUsuario(encontrado);
      setStep("skill");
    } else {
      setError("Correo no encontrado");
    }
  };

  const handleSkillValidation = () => {
    setError("");
    setMensaje("");

    if (!selectedSkill) {
      setError("Debes seleccionar una skill");
      return;
    }

    console.log("Usuario:", usuario.skills_names[0]);
    if (selectedSkill === usuario.skills_names[0]
    ) {
      setStep("reset");
    } else {
      setError("La skill no coincide");
    }
  };

  const handleResetPassword = () => {
    setError("");
    setMensaje("");

    if (!newPassword || !confirmPassword) {
      setError("Por favor ingresa ambas contraseñas");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const id = usuarios.find((u) => u.email === usuario.email)?.ID;

    if (id) {
      updatePassword(id, newPassword)
        .then((response) => {
          // Si la respuesta es exitosa, mostramos el mensaje
          setMensaje("Contraseña actualizada correctamente");

          // Limpiamos los valores después de un tiempo
          setTimeout(() => {
            setUsuarioValido(null);
            setNewPassword("");
            setConfirmPassword("");
            setEmail("");
            setMensaje("");
          }, 2000);
        })
        .catch((error) => {
          // En caso de error, mostramos el mensaje de error
          console.log("Error al actualizar la contraseña:", error);
          setMensaje("Error al actualizar la contraseña, intente nuevamente.");
        });
    }
  };


  return (
    <div className="recovery-card">
      {step === "email" && (
        <>
          <h2 className="recovery-form-title">Recuperación por Skill</h2>
          <p className="recovery-form-subtitle">Ingresa tu correo para validar identidad</p>
          <form className="recovery-form" onSubmit={(e) => { e.preventDefault(); handleEmailSubmit(); }}>
            <div className="input-group">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-icon-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
            {error && <p className="error-msg">{error}</p>}

            <button type="submit" className="recovery-btn">Verificar correo</button>
          </form>

        </>
      )}

      {step === "skill" && (
        <>
          <h2 className="recovery-form-title">Validación por Skill</h2>
          <p className="recovery-form-subtitle">Selecciona la skill que registraste</p>
          <form className="recovery-form" onSubmit={(e) => { e.preventDefault(); handleSkillValidation(); }}>
            <div className="input-group">
              <label htmlFor="skill">Skill</label>
              <select
                id="skill"
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className={`form-input ${selectedSkill === "" ? "placeholder" : ""}`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath fill='%236b7280' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center"
                }}
              >
                <option value="" disabled>Selecciona una skill</option>
                {skillsList.map((skill, idx) => (
                  <option key={idx} value={skill}>{skill}</option>
                ))}
              </select>

            </div>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit" className="recovery-btn">Validar skill</button>
          </form>
        </>
      )}

      {step === "reset" && (
        <>
          <h2 className="recovery-form-title">Recuperación por Skill</h2>
          <p className="recovery-form-subtitle">Ingresa y confirma tu nueva contraseña</p>
          <form className="recovery-form" onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
            <div className="input-group">
              <label htmlFor="newPass">Nueva contraseña</label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="newPass"
                  placeholder="Nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-input password-input"
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="confirmPass">Confirmar nueva contraseña</label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="confirmPass"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input password-input"
                />
              </div>
            </div>

            {/* 👇 Mensajes colocados ANTES del botón */}
            {error && <p className="error-msg">{error}</p>}
            {mensaje && <p className="success-msg">{mensaje}</p>}

            <button type="submit" className="recovery-btn">Actualizar contraseña</button>
          </form>
        </>
      )}

    </div>
  );
}
