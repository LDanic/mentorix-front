import { useState, useEffect, useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useParams } from "react-router-dom";
import { getProjectUsers } from "../utils/users";
import addIcon from '../assets/addIcon.png';
import filterIcon from '../assets/filter.png';
import search from '../assets/search.png';
import avatarFemale from '../assets/avatarFemale.png';
import ModalAdd from "./ModalAdd.jsx";
import ModalDetails from "./ModalDetails.jsx";
import "../styles/Participantes.css";
import Table from "./Table";
import { NameFilterStrategy, RoleFilterStrategy, FilterContext } from "../utils/filterStrategy.js";

function Participantes() {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const { projectId } = useParams();
    const [participants, setParticipants] = useState(null);
    const [error, setError] = useState(null);


    const [filtered, setFiltered] = useState([]);
    const [term, setTerm] = useState('');
    const [filterType, setFilterType] = useState('name');

    const filterContext = useRef(new FilterContext(new NameFilterStrategy()));


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
                setFiltered(tableData);
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


    const handleSearch = () => {
        if (filterType === 'name') {
            filterContext.current.setStrategy(new NameFilterStrategy());
        } else {
            filterContext.current.setStrategy(new RoleFilterStrategy());
        }
        const results = filterContext.current.executeFilter(participants, term);
        setFiltered(results);
    };

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
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className="filter-trigger">
                                <img src={filterIcon} className="filter-icon" alt="Filtrar" />
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="dropdown-content" sideOffset={5}>
                                <DropdownMenu.Item
                                    className="dropdown-item"
                                    onSelect={() => setFilterType("name")}
                                >
                                    Filtrar por Nombre
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                    className="dropdown-item"
                                    onSelect={() => setFilterType("role")}
                                >
                                    Filtrar por Rol
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>

                    {/* Input de búsqueda */}
                    <input
                        type="text"
                        className="search-input"
                        placeholder={filterType === 'name' ? 'Nombre...' : 'Rol...'}
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSearch()}
                    />

                    {/* Botón de búsqueda */}
                    <button
                        type="button"
                        className="icon-button search-button"
                        onClick={handleSearch}
                        aria-label="Buscar"
                    >
                        <img src={search} className="icon" alt="" />
                    </button>
                </div>
            </div>

            <Table columns={columns} data={filtered} />

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