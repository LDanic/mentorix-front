import { useState } from "react";
import avatarFemale from "../assets/avatarFemale.png";
import IconDetails from "../assets/iconDetails.png";
import xIcon from "../assets/x.png";
import "../styles/ModalAdd.css";
import ModalDetails from "./ModalDetails.jsx";
import Table from "./Table";

export default function ModalAdd({ onSave, onClose, onShowDetails }) {
    const [formData, setFormData] = useState({ user: null });

    const columns = [
        {
            key: "user",
            title: "",
            width: "6fr",
            render: (value) => (
                <div className="user-cell">
                    <img src={value.avatar} className="avatar" alt="" />
                    <span>{value.name}</span>
                </div>
            ),
        },
        {
            key: "details",
            title: "",
            width: "1fr",
            render: (_, row) => (
                <button
                    type="button"
                    className="icon-button details-btn"
                    aria-label="Detalles"
                    onClick={(e) => {
                        e.stopPropagation();  
                        onShowDetails(row.user);
                    }}
                >
                    <img src={IconDetails} alt="" />
                </button>
            ),
        },
    ];

    const data = [
        { user: { name: "Natali Craig", avatar: avatarFemale } },
        { user: { name: "Kate Morrison", avatar: avatarFemale } },

    ];

    const handleRowClick = (row) => {
        setFormData({ user: row.user });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.user) {
            alert("Selecciona un participante de la lista");
            return;
        }
        onSave(formData.user);
        onClose();
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <h2 className="modal-title">Añadir participante</h2>
                    <button className="icon-button" onClick={onClose}>
                        <img src={xIcon} alt="" />
                    </button>
                </header>

                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <Table
                            columns={columns}
                            data={data}
                            onRowClick={handleRowClick}
                            selectedRow={formData.user}
                        />
                    </div>

                    <footer className="modal-footer">
                        <button className="add-btn" type="submit" disabled={!formData.user}>
                            Añadir
                        </button>
                    </footer>
                </form>
            </div>

        </div>
    );
}
