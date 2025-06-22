import xIcon from "../assets/x.png";
import "../styles/ModalDetails.css";
import { useEffect, useState } from "react";
import { getUserById } from "../utils/users";

export default function ModalDetails({ onClose, person }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (person && person.id) {
      getUserById(person.id).then((data) => {
        setUserData(data);
      });
    }
  }, [person]);

  if (!userData) {
    return <div className="modal-backdrop">Cargando...</div>;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-details">
        <header className="modal-header">
          <h2 className="modal-title">Detalles persona</h2>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar">
            <img src={xIcon} alt="" />
          </button>
        </header>

        <div className="details-body">
          <h3 className="person-name">{userData.name || "Sin nombre"}</h3>

          <div className="skills-section">
            <span className="skills-label">💪 Habilidades</span>
            <div className="skills-list">
              {userData.skills && userData.skills.length > 0 ? (
                userData.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))
              ) : (
                <span>No tiene habilidades asignadas.</span>
              )}
            </div>
          </div>

          <p className="person-description">
            {userData.description || "Sin descripción disponible"}
          </p>
        </div>

        <footer className="details-footer">
          <button
            type="button"
            className="download-btn"
            onClick={() => console.log(userData)}
          >
            Descargar Hoja De Vida
          </button>
        </footer>
      </div>
    </div>
  );
}
