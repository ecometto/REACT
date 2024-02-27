import { useContext } from "react"
import { Contenedor } from "../../context/TaskContext"
import { Link } from "react-router-dom"

export default function TasksList() {

    const {data, handleDelete, handleEdit} = useContext(Contenedor)
    
    return (
        
        <div className='m-2'>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(task => {
                            return (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>
                                        <Link to={`/editingForm/${task.id}`} data-id={task.id} className='btn btn-warning btn-sm mx-1'>
                                            Edit
                                        </Link>
                                        <button data-id={task.id} className='btn btn-danger btn-sm mx-1' onClick={(e)=>handleDelete(e)}>
                                            Delete
                                            </button>
                                    </td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
        </div>

    )
}
