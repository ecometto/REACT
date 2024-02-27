import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Contenedor } from '../../context/TaskContext'
import { OriginalData } from '../../assets/data'

export default function EditingForm() {

    const navigate = useNavigate()
    var {data, setData} = useContext(Contenedor)

    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const taskToEdit = data.filter((e) => e.id === parseInt(id))


    // functions 
    function handleChange(e) {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
            // console.log(e.target.name + ' - ' + e.target.value)
        }
        if (e.target.name === 'description') {
            setDescription(e.target.value)
            // console.log(e.target.name + ' - ' + e.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const editedTaskList = data.map((element) => {
            if (element.id === parseInt(id)) {
                return {...element, title: title, description:description}
            }
            return element
        })
        setData(editedTaskList)

        alert('Task Edited successfully')
        navigate('/tasks')
        

    }


    return (
        <form onSubmit={handleSubmit} className='col-8 offset-2 bg-secondary p-2 my-2 rounded'>
            <h3 className="text-center">EDITING {id} </h3>

            <input
                type="hidden"
                name='id'
                defaultValue={taskToEdit[0].id}
            />

            <input
                className="form-control my-1"
                type="text"
                name='title'
                defaultValue={taskToEdit[0].title}
                onChange={(e) => handleChange(e)}

            />

            <textarea
                className="form-control my-1"
                cols="30"
                rows="5"
                name='description'
                defaultValue={taskToEdit[0].description}
                onChange={(e) => handleChange(e)}
            ></textarea>

            <div className="d-flex justify-content-center">
                <button className="btn btn-success">Edit Task</button>
            </div>

        </form>

    )
}
