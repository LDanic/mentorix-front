class EstadoBadge {
  constructor(nombre, claseCss, colorFondo, colorTexto) {
    this.nombre = nombre;
    this.claseCss = claseCss;
    this.colorFondo = colorFondo;
    this.colorTexto = colorTexto;
  }

  render() {
    return (
      <span className={`badge ${this.claseCss}`} style={{
        backgroundColor: this.colorFondo,
        color: this.colorTexto
      }}>
        {this.nombre}
      </span>
    );
  }
}

class EstadoBadgeFactory {
  static badges = new Map();

  static getBadge(nombre) {
    const key = nombre.toLowerCase();
    if (!this.badges.has(key)) {
      let claseCss, bg, color;

      switch (key) {
        case "completado":
          claseCss = "completado";
          bg = "#D4F8E8";
          color = "#2A9D8F";
          break;
        case "en progreso":
          claseCss = "en-progreso";
          bg = "#FFDCE0";
          color = "#D64550";
          break;
        case "pendiente":
          claseCss = "pendiente";
          bg = "#E4EBFB";
          color = "#1E3A8A";
          break;
        default:
          claseCss = "pendiente";
          bg = "#f0f0f0";
          color = "#333";
      }

      this.badges.set(key, new EstadoBadge(nombre, claseCss, bg, color));
    }

    return this.badges.get(key);
  }
}

export default EstadoBadgeFactory;
