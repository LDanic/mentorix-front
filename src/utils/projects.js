import { data } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000/mentorix/api";

export async function getProjects() {
  const res = await fetch(`${API_BASE}/projects/`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}

export async function getProjectById(id) {
  const res = await fetch(`${API_BASE}/projects/${id}/`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return res.json();
}

export async function getProjectIssues(id) { 
  const res = await fetch(`${API_BASE}/issues/`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  
  const data = await res.json(); 

  const filtered = data.filter(issue => issue.project_id === Number(id));
  return filtered;
}
