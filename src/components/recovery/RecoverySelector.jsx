// src/components/recovery/RecoverySelector.jsx
import React, { useState } from "react";
import { EmailRecoveryFactory } from "../../factories/EmailRecoveryFactory";
import { SkillRecoveryFactory } from "../../factories/SkillRecoveryFactory";
import "../../styles/RecoverySelector.css"; // Estilos del selector

export default function RecoverySelector() {
  const [method, setMethod] = useState("");

  const renderRecoveryComponent = () => {
    let factory = null;
    switch (method) {
      case "email":
        factory = new EmailRecoveryFactory();
        break;
      case "skill":
        factory = new SkillRecoveryFactory();
        break;
      default:
        return null;
    }
    return factory.createRecoveryComponent();
  };

  return (
    <div className="modal-overlay">
      <div className="recovery-container">
        <h2>Selecciona el método de recuperación</h2>

        <div className="recovery-buttons">
          <button
            className={method === "email" ? "active" : ""}
            onClick={() => setMethod("email")}
          >
            Por Email
          </button>
          <button
            className={method === "skill" ? "active" : ""}
            onClick={() => setMethod("skill")}
          >
            Por Skill
          </button>
        </div>

        <div className="recovery-content">
          {renderRecoveryComponent()}
        </div>
      </div>
    </div>
  );
}
