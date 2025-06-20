import { useState } from "react";
import addIcon from '../assets/addIcon.png';
import avatarMale from '../assets/avatarMale.png';
import avatarFemale from '../assets/avatarFemale.png';
import Table from "./Table";
import EstadoBadgeFactory from "../utils/EstadoBadgeFlyweight.jsx";
import ModalAddTI from "./ModalAddTI";
import "../styles/Issues.css";

function Issues() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        { key: "nombre", title: "Nombre", width: "1fr" },
        {
            key: "responsable",
            title: "Responsable",
            width: "1fr",
            render: (value) => (
                <div className="responsable-cell">
                    <img src={value.avatar} className="avatar" alt="" />
                    <span>{value.name}</span>
                </div>
            ),
        },
        {
            key: "estado",
            title: "Estado",
            width: "140px",
            render: (text) => EstadoBadgeFactory.getBadge(text).render(),
        },
    ];

    const data = [
        {
            nombre: "Definir alcance",
            responsable: { name: "Ana Pérez", avatar: avatarFemale },
            estado: "Pendiente",
        },
        {
            nombre: "Revisar diseño",
            responsable: { name: "Luis Gómez", avatar: avatarMale },
            estado: "Completado",
        },
        {
            nombre: "Revisar cosa x",
            responsable: { name: "Luis Gómez", avatar: avatarMale },
            estado: "En progreso",
        },
    ];

    const handleSave = (newIssue) => {
        console.log("Tarea creada:", newIssue);
    };

    return (
        <div className="issues-container">

            <Table columns={columns} data={data} />;

            <div className="buttons-wrapper">
                <button type="button" className="button" onClick={() => setIsModalOpen(true)}>
                    <img src={addIcon} className="icon" alt="Añadir" />
                    <div className="text-button">Añadir Issue</div>
                </button>
            </div>

            {isModalOpen && (
                <ModalAddTI
                    tipo="Issue"
                    onClose={() => setIsModalOpen(false)}
                    onSave={(issue) => {
                        handleSave(issue);
                        setIsModalOpen(false);
                    }}
                />
            )}

        </div>
    );
};



export default Issues;