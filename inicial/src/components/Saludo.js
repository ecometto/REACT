import React from 'react'

const Saludo = (props)=>{
    const {name, age} = props.person
    // console.log(age)
    return (
         <div>
            <h3 className='bg-dark text-light p-2'>HELLO FROM "greeting" COMPONENT</h3>
            <p>Mr. {name}.. Welcome to this react Page</p>
            <p>As you have {age} years, you can access to all the content to this page</p>
            
        </div>
    )
}

export default Saludo