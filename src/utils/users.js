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

export async function getUsers() {
  const res = await fetch(`${API_BASE}/users/`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}

export async function createUser(name, description, email, password, skill) {
  const data = {
    ID: 89,
    name: name,
    description: description,
    email: email,
    password: password,
    resume: "http://127.0.0.1:8000/media/resumes/2025.04.08_-_Encuesta_movilidad_y_entornos_urbanos_-_P%C3%A1ginas_WEB.pdf",
    skills: parseInt(skill)
  }

  console.log("Creando usuario:", data);

  const url = `${API_BASE}/users/`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Error ${res.status}`);
  }
  return res.json();
}


export async function updatePassword(userID, newPassword) {
  const data = {
    password: newPassword,
  };

  console.log(`Actualizando contraseña para el usuario con ID: ${userID}`, data);

  const url = `${API_BASE}/users/${userID}/`;  // URL con el ID del usuario
  const res = await fetch(url, {
    method: "PATCH",  // Usamos PATCH porque solo estamos actualizando parcialmente
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),  // Enviamos la nueva contraseña en el cuerpo de la solicitud
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: No se pudo actualizar la contraseña`);
  }
  
  return res.json();  // Retorna la respuesta JSON del servidor
}
