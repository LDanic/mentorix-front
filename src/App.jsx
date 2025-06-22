import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Description from "./components/Description";
import Participantes from "./components/Participantes";
import Tareas from "./components/Tareas";
import Issues from "./components/Issues";
import SignupPage from "./components/SignupPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/projects/:projectId/*" element={<Dashboard />}>
          <Route index element={<Description />} />
          <Route path="participantes" element={<Participantes />} />
          <Route path="issues" element={<Issues />} />
          <Route path="tareas" element={<Tareas />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
