import React from "react";
import "../../styles/SkillButton.css";

// Mapeo de colores por skill
const skillStyles = {
  "JavaScript": "#facc15",
  "HTML/CSS": "#f472b6",
  "Project Management": "#38bdf8",
  "UI/UX Design": "#34d399",
  "Marketing": "#667eea",
  "Agile Leadership": "#fb923c",
  "Talent Management": "#a78bfa",
};

export default function SkillButton({ skill }) {
  const texto = skill && skillStyles[skill] ? skill : "Skill no asignada";
  const color = skillStyles[skill] || "#9ca3af"; // Gris

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