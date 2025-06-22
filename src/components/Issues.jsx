import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import addIcon from '../assets/addIcon.png';
import avatarMale from '../assets/avatarMale.png';
import avatarFemale from '../assets/avatarFemale.png';
import Table from "./Table";
import EstadoBadgeFactory from "../utils/EstadoBadgeFlyweight.jsx";
import ModalAddTI from "./ModalAddTI";
import { getProjectIssues } from "../utils/projects";
import "../styles/Issues.css";

function Issues() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { projectId } = useParams();
    const [issues, setIssues] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!projectId) return;
        getProjectIssues(projectId)
            .then((raw) => {
                const tableData = raw.map((p) => ({
                    nombre: p.name,
                    responsable: {
                        name: p.assigned_to,
                        avatar: avatarFemale},
                    estado: p.status,
                }));
                setIssues(tableData);
            })
            .catch(() => setError("No se pudo los issues del proyecto"));
    }, [projectId]);

    if (error) return <div className="description-container">{error}</div>;
    if (!issues) return <div className="description-container">Cargando...</div>;


    const columns = [
        { key: "nombre", title: "Nombre", width: "1fr" },
        {
            key: "responsable",
            title: "Responsable",
            width: "1fr",
            render: (value) => (
                <div className="responsable-cell">
                    <img src={avatarFemale} className="avatar" alt="" />
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

    const handleSave = (newIssue) => {
        console.log("Tarea creada:", newIssue);
    };

    return (
        <div className="issues-container">

            <Table columns={columns} data={issues} />;

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