import React from "react";
import avatarFemale from "../assets/avatarFemale.png";
import IconDetails from "../assets/iconDetails.png";
import search from '../assets/search.png';
import xIcon from "../assets/x.png";
import "../styles/ModalAdd.css";
import Table from "./Table";

export default function ModalAdd({ onClose, onAdd }) {
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
            render: () => (
                <button className="icon-button details-btn" aria-label="Detalles">
                    <img src={IconDetails} alt="" />
                </button>
            ),
        },
    ];

    const data = [
        { user: { name: "Natali Craig", avatar: avatarFemale } },
        { user: { name: "Kate Morrison", avatar: avatarFemale } },
    ];

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <header className="modal-header">
                    <h2 className="modal-title">Añadir participante</h2>
                    <button className="icon-button" onClick={onClose} aria-label="Cerrar">
                        <img src={xIcon} alt="" />
                    </button>
                </header>

                <div className="modal-body">
                    <div className="search-wrapper">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar persona..."
                        />

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

                    <Table columns={columns} data={data} />
                </div>

                <footer className="modal-footer">
                    <button className="primary-btn" onClick={onAdd}>
                        Añadir
                    </button>
                </footer>
            </div>
        </div>
    );
}
