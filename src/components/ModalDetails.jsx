import React from "react";
import arrowLeft from "../assets/arrowLeft.png";
// opcional, un icono de descarga
import "../styles/ModalDetails.css";

export default function ModalDetails({ onClose, person }) {
    //const { name, skills = [], description = "" } = person;
    const name = "pepe";
    const skills = ["python", "plotly"];
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
    return (
        <div className="modal-backdrop">
            <div className="modal-details">
                <header className="details-header">
                    <h2 className="details-header-title">Detalles persona</h2>
                    <button
                        type="button"
                        className="icon-button back-btn"
                        onClick={onClose}
                        aria-label="Volver"
                    >
                        <img src={arrowLeft} alt="Volver" />
                    </button>
                </header>

                <div className="details-body">
                    <h3 className="person-name">{name}</h3>

                    <div className="skills-section">
                        <span className="skills-label">💪 Habilidades</span>
                        <div className="skills-list">
                            {skills.map((skill) => (
                                <span key={skill} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="person-description">{description}</p>
                </div>

                <footer className="details-footer">
                    <button type="button" className="download-btn">

                        Descargar Hoja De Vida
                    </button>
                </footer>
            </div>
        </div>
    );
}
