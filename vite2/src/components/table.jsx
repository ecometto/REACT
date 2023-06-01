import './table.css'

export function Table({ datos }) {
    console.log(datos);
    return (
        <div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITULO</th>
                        <th>DESCRIPCION</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => {
                        return (
                            <tr>
                                <td className="align-middle">{dato.id}</td>
                                <td className="align-middle">{dato.title}</td>
                                <td className="align-middle">{dato.body}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>

        </div>
    )
}

// export default 