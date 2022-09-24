

function Task(props) {
    return (
        <div className={`m-2 p-2 border rounded ${props.data.estado ? 'bg-light' : 'bg-warning'}`} >
            <div className="row">
                <div className="col-8">
                    <h4>
                        {props.data.titulo}
                    </h4>
                    <p>
                        Estado: <span>{props.data.estado ? 'Activo' : 'Finalizada'}</span>
                    </p>
                    <p>
                        Fecha Carga:
                        <span className='mx-1'>{props.data.fechaC}</span>
                    </p>
                    <p>
                        Vencimiento:
                        <span className='mx-1'>{props.data.fechaV}</span>
                    </p>
                </div>
                <div className="col-4">
                    {
                        props.data.estado
                            ? <div>
                                <button className='btn btn-success mx-1'>Editar</button>
                                <button className='btn btn-success mx-1'>Cerrar</button>
                            </div>
                            :
                            <div>"Esta tareas está finalizada"</div>
                    }

                </div>
            </div>






        </div>
    )
}

export default Task