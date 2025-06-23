class UserSession {
  static instance;

  constructor() {
    if (UserSession.instance) return UserSession.instance;
    this.usuario = JSON.parse(localStorage.getItem("usuario")) || null;
    UserSession.instance = this;
  }

  static getInstance() {
    if (!UserSession.instance) {
      UserSession.instance = new UserSession();
    }
    return UserSession.instance;
  }

  getUsuario() {
    return this.usuario;
  }

  setUsuario(usuario) {
    this.usuario = usuario;
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.dispatchEvent(new Event("storage")); // 🔥 Notifica cambios
  }

  cerrarSesion() {
    this.usuario = null;
    localStorage.removeItem("usuario");
    window.dispatchEvent(new Event("storage")); // 🔥 Notifica cambios
  }

}

export default UserSession;
