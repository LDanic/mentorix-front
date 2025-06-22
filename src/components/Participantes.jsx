import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectUsers } from "../utils/users";
import addIcon from '../assets/addIcon.png';
import filter from '../assets/filter.png';
import search from '../assets/search.png';
import avatarFemale from '../assets/avatarFemale.png';
import ModalAdd from "./ModalAdd.jsx";
import ModalDetails from "./ModalDetails.jsx";
import "../styles/Participantes.css";
import Table from "./Table";

function Participantes() {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    
    const { projectId } = useParams();
    const [participants, setParticipants] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!projectId) return;
        getProjectUsers(projectId)
            .then((raw) => {
                const tableData = raw.map((p) => ({
                    id: p.user_id,
                    user: {
                        name: p.user.name,
                        avatar: avatarFemale,
                    },
                    rol: p.role,
                }));
                setParticipants(tableData);
            })
            .catch(() => setError("No se pudo cargar los participantes del proyecto"));
    }, [projectId]);

    if (error) return <div className="description-container">{error}</div>;
    if (!participants) return <div className="description-container">Cargando...</div>;

    const columns = [
        { key: "id", title: "ID", width: "120px" },
        {
            key: "user",
            title: "User",
            width: "1fr",
            render: (value, row) => (
                <div
                    className="user-cell"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setSelectedPerson(row);
                        setIsDetailsOpen(true);
                    }}
                >
                    <img src={value.avatar} className="avatar" alt="" />
                    <span>{value.name}</span>
                </div>
            ),
        },
        { key: "rol", title: "Rol", width: "1fr" },
    ];

    const handleSave = (person) => {
        console.log("participante añadido:", person);
    };

    const handleShowAdd = () => setIsAddOpen(true);
    const handleCloseAdd = () => setIsAddOpen(false);

    const handleShowDetails = (person) => {
        setSelectedPerson(person);
        setIsDetailsOpen(true);
    };
    const handleCloseDetails = () => {
        setIsDetailsOpen(false);
        setSelectedPerson(null);
    };
    return (
        <div className="participants-container">

            <div className="search-wrapper">
                <div className="search">
                    {/* Botón de filtro */}
                    <button
                        type="button"
                        className="icon-button filter-button"
                        onClick={() => {
                            alert("boton filtro");
                        }}
                        aria-label="Filtrar"
                    >
                        <img src={filter} className="icon" alt="" />
                    </button>

                    {/* Input de búsqueda */}
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar participante..."
                        onChange={e => {
                            // tu lógica de guardar término de búsqueda
                        }}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                // tu lógica de buscar al presionar Enter
                            }
                        }}
                    />

                    {/* Botón de búsqueda */}
                    <button
                        type="button"
                        className="icon-button search-button"
                        onClick={() => {
                            alert("boton buscar ");
                        }}
                        aria-label="Buscar"
                    >
                        <img src={search} className="icon" alt="" />
                    </button>
                </div>
            </div>

            <Table columns={columns} data={participants} />

            <div className="buttons-wrapper">
                <button
                    type="button"
                    className="button"
                    onClick={handleShowAdd}
                >
                    <img src={addIcon} className="icon" alt="Añadir" />
                    <div className="text-button">Añadir Participante</div>
                </button>
            </div>

            {isAddOpen && (
                <ModalAdd
                    onClose={handleCloseAdd}
                    onSave={person => {
                        handleSave(person);
                        handleCloseAdd();
                    }}
                    onShowDetails={(person) => {
                        handleCloseAdd();
                        handleShowDetails(person);
                    }}
                />
            )}

            {isDetailsOpen && (
                <ModalDetails
                    person={selectedPerson}
                    onClose={handleCloseDetails}
                />
            )}

        </div>
    );
};



export default Participantes;