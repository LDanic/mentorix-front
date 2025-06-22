export class FilterStrategy {
  filter(items, term) {
    // Método base, debe ser sobrescrito
    throw new Error("FilterStrategy.execute() debe implementarse");
  }
}

// Filtra por nombre
export class NameFilterStrategy extends FilterStrategy {
  filter(items, term) {
    if (!term) return items;
    const lcTerm = term.toLowerCase();
    return items.filter(p =>
      p.user.name.toLowerCase().includes(lcTerm)
    );
  }
}

// Filtra por rol
export class RoleFilterStrategy extends FilterStrategy {
  filter(items, term) {
    if (!term) return items;
    const lcTerm = term.toLowerCase();
    return items.filter(p =>
      p.rol.toLowerCase().includes(lcTerm)
    );
  }
}


export class FilterContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeFilter(data, term) {
    return this.strategy.filter(data, term);
  }
}
