import { useState } from "react";
import addIcon from '../assets/addIcon.png';
import avatarMale from '../assets/avatarMale.png';
import avatarFemale from '../assets/avatarFemale.png';
import calendarIcon from "../assets/calendarIcon.png";
import Table from "./Table";
import ModalAddTI from "./ModalAddTI";
import EstadoBadgeFactory from "../utils/EstadoBadgeFlyweight.jsx";
import "../styles/Tareas.css";

export default function Tareas() {
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
      key: "vencimiento",
      title: "Fecha Vencimiento",
      width: "1fr",
      render: (text) => (
        <div className="icon-cell">
          <img src={calendarIcon} alt="" />
          <span>{text}</span>
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
      vencimiento: "20 Jun 2025",
      estado: "Pendiente",
    },
    {
      nombre: "Revisar diseño",
      responsable: { name: "Luis Gómez", avatar: avatarMale },
      vencimiento: "18 Jun 2025",
      estado: "Completado",
    },
    {
      nombre: "Revisar cosa x",
      responsable: { name: "Luis Gómez", avatar: avatarMale },
      vencimiento: "30 Jun 2025",
      estado: "En progreso",
    },
  ];

  
  const handleSave = (newTask) => {
    console.log("Tarea creada:", newTask);
  };

  return (
    <div className="tareas-container">
      <Table columns={columns} data={data} />

      <div className="buttons-wrapper">
        <button
          type="button"
          className="button"
          onClick={() => setIsModalOpen(true)}
        >
          <img src={addIcon} className="icon" alt="Añadir" />
          <div className="text-button">Añadir Tarea</div>
        </button>
      </div>

      {isModalOpen && (
        <ModalAddTI
          tipo="tarea"
          onClose={() => setIsModalOpen(false)}
          onSave={(task) => {
            handleSave(task);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
