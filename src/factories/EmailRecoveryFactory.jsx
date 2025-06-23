import React, { useState } from "react";
import "../styles/Factories.css";

export class EmailRecoveryFactory {
  createRecoveryComponent() {
    return <EmailRecoveryComponent />;
  }
}

function EmailRecoveryComponent() {
  const [email, setEmail] = useState("");
  const [usuarioValido, setUsuarioValido] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleCheckEmail = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find((u) => u.email === email);
    if (usuario) {
      setUsuarioValido(usuario);
      setMensaje("");
    } else {
      setMensaje("Correo no encontrado");
      setUsuarioValido(null);
    }
  };

const handlePasswordReset = () => {
  if (!newPassword || !confirmPassword) {
    setMensaje("Por favor ingresa ambas contraseñas");
    return;
  }

  if (newPassword !== confirmPassword) {
    setMensaje("Las contraseñas no coinciden");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const index = usuarios.findIndex((u) => u.email === usuarioValido.email);

  if (index !== -1) {
    usuarios[index].password = newPassword;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    setMensaje("Contraseña actualizada correctamente");

setTimeout(() => {
  setUsuarioValido(null);
  setNewPassword("");
  setConfirmPassword("");
  setEmail("");
  setMensaje(""); 
}, 2000);

  }
};


  return (
    <div className="recovery-card">
  {!usuarioValido ? (
  <>
    <h2 className="recovery-form-title">Recuperación por Email</h2>
    <p className="recovery-form-subtitle">
      Ingresa tu correo para restablecer tu contraseña
    </p>
    <form
      className="recovery-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCheckEmail();
      }}
    >
      <div className="input-group input-icon-wrapper">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* ✅ Solo mostrar si el mensaje *no* es de éxito */}
      {mensaje && !mensaje.includes("correctamente") && (
        <p className="error-msg">{mensaje}</p>
      )}

      <button className="recovery-btn" type="submit">
        Verificar correo
      </button>
    </form>
  </>

      ) : (
        <>
          <h2 className="recovery-form-title">Recuperación por Email</h2>
          <p className="recovery-form-subtitle">Actualiza tu contraseña</p>
<form
  className="recovery-form"
  onSubmit={(e) => {
    e.preventDefault();
    handlePasswordReset();
  }}
>
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

{mensaje && (
  <p
    className={
      mensaje === "Contraseña actualizada correctamente"
        ? "success-msg"
        : "error-msg"
    }
  >
    {mensaje}
  </p>
)}


  <button className="recovery-btn" type="submit">Actualizar contraseña</button>
</form>

        </>
      )}
    </div>
  );
}
