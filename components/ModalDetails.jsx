import { useNavigate } from "react-router-dom";
import xIcon from "../assets/x.png";
import "../styles/ModalDetails.css";

export default function ModalDetails({person}) {
    const navigate = useNavigate();
    //const { name, skills = [], description = "" } = person;
    const name = "pepe";
    const skills = ["python", "plotly"];
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
    return (
        <div className="modal-backdrop">
            <div className="modal-details">
                <header className="modal-header">
                    <h2 className="modal-title">Detalles persona</h2>
                    <button className="icon-button" onClick={() => navigate("/participantes")} aria-label="Cerrar">
                        <img src={xIcon} alt="" />
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
