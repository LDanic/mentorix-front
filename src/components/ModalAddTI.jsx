// src/components/ModalAddTI.jsx
import { useState } from "react";
import "../styles/ModalAddTI.css";

export default function ModalAddTI({ tipo = "tarea", onClose, onSave }) {
  const [formData, setFormData] = useState({
    nombre: "",
    responsable: "",
    fechaVencimiento: "",
    status: "",
  });

  const responsables = [
    { value: "juan-perez", label: "Juan Pérez" },
    { value: "maria-garcia", label: "María García" },
    { value: "carlos-rodriguez", label: "Carlos Rodríguez" },
    { value: "ana-martinez", label: "Ana Martínez" },
    { value: "luis-gonzalez", label: "Luis González" },
  ];

  const statusOptions = [
    { value: "pendiente", label: "Pendiente", color: "#eab308" },
    { value: "en-progreso", label: "En Progreso", color: "#3b82f6" },
    { value: "completada", label: "Completada", color: "#10b981" },
    { value: "cancelada", label: "Cancelada", color: "#ef4444" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      responsable: "",
      fechaVencimiento: "",
      status: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nueva ${tipo}:`, formData);
    if (onSave) onSave(formData);
    handleCancel();
  };

  const handleCancel = () => {
    if (onClose) onClose();
    resetForm();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleCancel();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") handleCancel();
  };

  const capitalTipo = tipo === "tarea" ? "Tarea" : "Issue";

  return (
    <div
      className="ti-modal-backdrop"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="ti-modal">
        <div className="ti-modal-header">
          <h2 className="ti-modal-title">Agregar Nueva {capitalTipo}</h2>
          <button className="ti-icon-button" onClick={handleCancel} aria-label="Cerrar modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="ti-modal-body">
            <div className="ti-form-field">
              <label htmlFor="nombre" className="ti-field-label">
                Nombre de la {capitalTipo}
              </label>
              <input
                id="nombre"
                type="text"
                placeholder={`Ingresa el nombre de la ${tipo}`}
                value={formData.nombre}
                onChange={(e) => handleInputChange("nombre", e.target.value)}
                className="ti-form-input"
                required
              />
            </div>

            <div className="ti-form-field">
              <label htmlFor="responsable" className="ti-field-label">Responsable</label>
              <select
                id="responsable"
                value={formData.responsable}
                onChange={(e) => handleInputChange("responsable", e.target.value)}
                className="ti-form-select"
                required
              >
                <option value="">Selecciona un responsable</option>
                {responsables.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>

            {tipo === "tarea" && (
              <div className="ti-form-field">
                <label htmlFor="fecha" className="ti-field-label">Fecha de Vencimiento</label>
                <input
                  id="fecha"
                  type="date"
                  value={formData.fechaVencimiento}
                  onChange={(e) => handleInputChange("fechaVencimiento", e.target.value)}
                  className="ti-form-input"
                  required
                />
              </div>
            )}

            <div className="ti-form-field">
              <label htmlFor="status" className="ti-field-label">Estado</label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => handleInputChange("status", e.target.value)}
                className="ti-form-select"
                required
              >
                <option value="">Selecciona el estado</option>
                {statusOptions.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="ti-modal-footer">
            <div className="footer-buttons">
              <button type="button" className="ti-cancel-button" onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit" className="ti-primary-btn">
                Crear {capitalTipo}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
