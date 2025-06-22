import React from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../App.css";

export default function Dashboard() {
  const { projectId } = useParams();

  // Si projectId no es un número válido, redirige
  if (!projectId || isNaN(Number(projectId))) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="content">
          {}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
