import React from "react";
import { EmailRecoveryFactory } from "./EmailRecoveryFactory.jsx";
import { SkillRecoveryFactory } from "./SkillRecoveryFactory.jsx"; 

const factoryMap = {
  email: new EmailRecoveryFactory(),
  skill: new SkillRecoveryFactory(), 
};

const RecoveryFactory = {
  createRecoveryComponent(type) {
    const factory = factoryMap[type];
    if (!factory) {
      console.error(`No se encontró una fábrica para el tipo: ${type}`);
      return <div style={{ color: "red" }}>Tipo de recuperación no válido</div>;
    }
    return factory.createRecoveryComponent();
  },
};

export default RecoveryFactory;
