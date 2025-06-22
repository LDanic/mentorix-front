import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../utils/projects";
import "../styles/Description.css";

export default function Description() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!projectId) return;
    getProjectById(projectId)
      .then(setProject)
      .catch(() => setError("No se pudo cargar el proyecto"));
  }, [projectId]);

  if (error) return <div className="description-container">{error}</div>;
  if (!project) return <div className="description-container">Cargando...</div>;

  const {
    name,
    description,
    client,
    created_at,
    deadline,
    team_members,
    project_type,
  } = project;

  return (
    <div className="description-container">
      <h2 className="project-info">{name}</h2>
      <p className="project-desc">
        {description}
      </p>

      <div className="info-field">
          <span className="label">Client</span>
          <span className="value">{client}</span>
        </div>

      <div className="info-grid">
        <div className="info-field">
          <span className="label">Start Date</span>
          <span className="value">{created_at}</span>
        </div>
        <div className="info-field">
          <span className="label">Deadline</span>
          <span className="value">{deadline}</span>
        </div>

      </div>
      <div className="info-field">
          <span className="label">Team Members</span>
          <span className="value">{team_members}</span>
        </div>

      <div className="project-type">
        <span className="label">Project Type</span>
        <span className="value">
          {project_type}
        </span>
      </div>
    </div>
  );
}
