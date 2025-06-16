import addIcon from '../assets/addIcon.png';
import avatarMale from '../assets/avatarMale.png';
import avatarFemale from '../assets/avatarFemale.png';
import Table from "./Table";
import "../styles/Issues.css";

function Issues() {
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
            render: (text) => {
                const cls = text.toLowerCase().replace(/\s+/g, "-");
                return <span className={`badge ${cls}`}>{text}</span>;
            },
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


    return (
        <div className="issues-container">

            <Table columns={columns} data={data} />;

            <div className="buttons-wrapper">
                <button type="button" className="button">
                    <img src={addIcon} className="icon" alt="Añadir" />
                    <div className="text-button">Añadir Issue</div>
                </button>
            </div>

        </div>
    );
};



export default Issues;