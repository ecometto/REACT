import React from 'react'
import Form from '../components/taskApp/Form'
import TasksList from '../components/taskApp/TasksList'

export default function TaskApp() {
  return (

      <div className="container">
        <h1 className='text-center'>TASKS APP</h1>
        <Form />
        <TasksList />
      </div>
    )
  
}
