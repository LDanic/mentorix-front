import React, { useState, useEffect } from "react";
import "../styles/Factories.css";
import { getUsers, updatePassword } from "../utils/users";

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
  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    getUsers()
      .then(setUsuarios)
      .catch(() => setError("No se pudieron cargar los usuarios"));
  }, []);

  const handleCheckEmail = () => {

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

    const id = usuarios.find((u) => u.email === usuarioValido.email)?.ID;

    if (id) {

      //usuarios[index].password = newPassword;
      //localStorage.setItem("usuarios", JSON.stringify(usuarios)); //en lugar de esto la peticion
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
