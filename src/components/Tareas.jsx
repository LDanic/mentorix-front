import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import addIcon from '../assets/addIcon.png';
import avatarFemale from '../assets/avatarFemale.png';
import calendarIcon from "../assets/calendarIcon.png";
import Table from "./Table";
import ModalAddTI from "./ModalAddTI";
import EstadoBadgeFactory from "../utils/EstadoBadgeFlyweight.jsx";
import {getProjectTasks} from "../utils/projects";
import "../styles/Tareas.css";

export default function Tareas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { projectId } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!projectId) return;
    getProjectTasks(projectId)
      .then((raw) => {
        const tableData = raw.map((p) => ({
          nombre: p.name,
          responsable: {
            name: p.assigned_to,
            avatar: avatarFemale
          },
          vencimiento: p.deadline,
          estado: p.status,
        }));
        setTask(tableData);
      })
      .catch(() => setError("No se pudo los issues del proyecto"));
  }, [projectId]);

  if (error) return <div className="description-container">{error}</div>;
  if (!task) return <div className="description-container">Cargando...</div>;

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


  const handleSave = (newTask) => {
    const newFormattedTask = {
      nombre: newTask.name,
      responsable: {
        name: newTask.assigned_to,
        avatar: avatarFemale
      },
      vencimiento: newTask.deadline,
      estado: newTask.status,
    };

    setTask((prevTasks) => [...(prevTasks || []), newFormattedTask]);
  };

  return (
    <div className="tareas-container">
      <Table columns={columns} data={task} />

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
          onSave={(task) => {
            handleSave(task);
          }}
          onClose={() => setIsModalOpen(false)}
          projectId={projectId}
        />
      )}
    </div>
  );
}
