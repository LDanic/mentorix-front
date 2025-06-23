import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./components/SignupPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Participantes from "./components/Participantes.jsx";
import Tareas from "./components/Tareas.jsx";
import Issues from "./components/Issues.jsx";
import Description from "./components/Description.jsx";
import ModalAdd from "./components/ModalAdd.jsx";
import ModalDetails from "./components/ModalDetails.jsx";
import UserSession from "./utils/UserSession"; // 🔥 Singleton
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState(UserSession.getInstance().getUsuario());

  // Suscribirse a cambios forzando render cuando haya login/logout
  useEffect(() => {
    const syncUsuario = () => {
      const nuevoUsuario = UserSession.getInstance().getUsuario();
      setUsuario(nuevoUsuario);
    };

    window.addEventListener("storage", syncUsuario);

    return () => {
      window.removeEventListener("storage", syncUsuario);
    };
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {usuario ? (
          <Route
            path="/dashboard/*"
            element={
              <div className="app-container">
                <Sidebar />
                <div className="main-area">
                  <Header setUsuario={setUsuario} />

                  <div className="content">
                    <Routes>
                      <Route path="" element={<Description />} />
                      <Route path="participantes" element={<Participantes />} />
                      <Route path="tareas" element={<Tareas />} />
                      <Route path="issues" element={<Issues />} />
                      <Route path="modal-add" element={<ModalAdd />} />
                      <Route path="modal-details" element={<ModalDetails />} />
                      <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </div>
                </div>
              </div>
            }
          />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

