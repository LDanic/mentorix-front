import "../styles/Table.css";

export default function Table({ columns, data }) {

    const template = columns.map(col => col.width || "auto").join(" ");
    return (
        <div className="table-container">
            <div className="table">
                {/* HEADER */}
                <div
                    className="row header"
                    style={{ gridTemplateColumns: template }}
                >
                    {columns.map(col => (
                        <div key={col.key} className="cell">
                            {col.title}
                        </div>
                    ))}
                </div>

                {/* FILAS */}
                {data.map((row, i) => (
                    <div
                        key={i}
                        className="row"
                        style={{ gridTemplateColumns: template }}
                    >
                        {columns.map(col => (
                            <div
                                key={col.key}
                                className={`cell ${col.key}-cell`}
                            >
                                {col.render ? col.render(row[col.key], row) : row[col.key]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
