import { useNavigate } from "react-router-dom";
import addIcon from '../assets/addIcon.png';
import filter from '../assets/filter.png';
import search from '../assets/search.png';
import avatarMale from '../assets/avatarMale.png';
import avatarFemale from '../assets/avatarFemale.png';
import "../styles/Participantes.css";
import Table from "./Table";

function Participantes() {
    const navigate = useNavigate();

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
                    onClick={() => navigate("/modal-details", { state: { person: row } })}
                >
                    <img src={value.avatar} className="avatar" alt="" />
                    <span>{value.name}</span>
                </div>
            ),
        },
        { key: "rol", title: "Rol", width: "1fr" },
    ];

    const data = [
        { id: "#CM9802", user: { name: "Natali Craig", avatar: avatarFemale }, rol: "Creador" },
        { id: "#CM9802", user: { name: "Kate Morrison", avatar: avatarFemale }, rol: "Editor" },
        { id: "#CM9802", user: { name: "Orlando Diggs", avatar: avatarMale }, rol: "Colaborador" },
    ];
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

            <Table columns={columns} data={data} />

            <div className="buttons-wrapper">
                <button
                    type="button"
                    className="button"
                    onClick={() => navigate("/modal-add")}
                >
                    <img src={addIcon} className="icon" alt="Añadir" />
                    <div className="text-button">Añadir Participante</div>
                </button>
            </div>

        </div>
    );
};



export default Participantes;