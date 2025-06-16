import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Participantes from "./components/Participantes.jsx";
import Tareas from "./components/Tareas.jsx";
import Issues from "./components/Issues.jsx";
import Description from "./components/Description.jsx";
import ModalAdd from "./components/ModalAdd.jsx";
import ModalDetails from "./components/ModalDetails.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-area">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Description />} />
              <Route path="/participantes" element={<Participantes />} />
              <Route path="/tareas" element={<Tareas />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/modal-add" element={<ModalAdd />} />
              <Route path="/modal-details" element={<ModalDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
