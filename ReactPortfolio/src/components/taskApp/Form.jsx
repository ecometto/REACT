import { useEffect, useRef, useState, useContext } from "react"
import { Contenedor } from "../../context/TaskContext";


export default function Form() { 

const {addTask} = useContext(Contenedor)

    // const [formData, setFormData] = useState({ title: '', description: '' });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const inputTitle = useRef()
    
    useEffect(()=>inputTitle.current.focus(),[])


    const handleChange = (e) => {
        // manejado con dos estados diferentes (2 usestate)
        e.target.name === 'title' ?
        setTitle(e.target.value)
        : ''

        e.target.name === 'description' ? 
        setDescription(e.target.value) :
        ''

        // manejado con un solo estado como objeto (1 usestate)
        // setFormData({...formData, [e.target.name]:e.target.value}) 
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(title, description)
        setTitle('')
        setDescription('')
        inputTitle.current.focus()
    }


    return (
        
            <form onSubmit={handleSubmit} className='col-8 offset-2 bg-secondary p-2 my-2 rounded'>
            <h3 className="text-center">TASK FORM</h3>

            <input
                className="form-control my-1"
                type="text"
                placeholder="Enter a Title"
                name='title'
                value={title}
                onChange={handleChange}
                ref={inputTitle}
            />

            <textarea
                className="form-control my-1"
                cols="30"
                rows="5"
                placeholder="Enter a Description"
                name='description'
                value={description}
                onChange={handleChange}
            ></textarea>

            <div className="d-flex justify-content-center">
                <button className="btn btn-success">Add Task</button>
            </div>

        </form>
    
    )
}