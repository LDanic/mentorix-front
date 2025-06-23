import React from "react";
import "../../styles/RoleButton.css";

// Mapeo de colores por rol
const roleStyles = {
  "Project Manager": "#667eea",
  "Coordinador de Proyecto": "#38bdf8",
  "Analista de Negocio": "#34d399",
  "Consultor Externo": "#facc15",
  "Líder de Área": "#f472b6",
  "Asistente Administrativo": "#f87171"
};

export default function RoleButton({ rol }) {
  const texto = rol && roleStyles[rol] ? rol : "Rol no asignado";
  const color = roleStyles[rol] || "#9ca3af"; // Gris Tailwind (#9ca3af)

  return (
    <button
      className="role-decorator-btn"
      style={{
        backgroundColor: color,
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "default",
        marginLeft: "16px"
      }}
      disabled
    >
      {texto}
    </button>
  );
}
