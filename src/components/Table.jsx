import "../styles/Table.css";

export default function Table({ columns, data, onRowClick, selectedRow }) {

    const template = columns.map(col => col.width || "auto").join(" ");
    return (
    <div className="table-container">
      <div className="table">
        <div className="row header" style={{ gridTemplateColumns: template }}>
          {columns.map(col => (
            <div key={col.key} className="cell">{col.title}</div>
          ))}
        </div>

        {data.map((row, i) => {
          const isSelected = selectedRow && row.user?.name === selectedRow.name;
          return (
            <div
              key={i}
              className= "row"
              style={{ gridTemplateColumns: template }}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map(col => (
                <div key={col.key} 
                className={`cell ${col.key}-cell` + (isSelected ? " selected" : "")}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}