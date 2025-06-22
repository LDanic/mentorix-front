const API_BASE = "http://127.0.0.1:8000/mentorix/api";

export async function getProjectUsers(project_id) {
  const res = await fetch(`${API_BASE}/project_members/${project_id}/members/`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}

export async function getUserById(user_id) {
  const res = await fetch(`${API_BASE}/users/${user_id}/`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}