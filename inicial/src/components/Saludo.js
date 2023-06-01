import './saludos.css'


const Saludo = (props) => {
    const { name, age } = props.person
    
    // console.log(props)
    return (
        <div className="saludo-container p-2">
            <h3 className='bg-dark text-light p-2'>HELLO FROM "greeting" COMPONENT</h3>
            <p>Hi. My name is Mr {name}, I am {age} years old. Welcome to this react Page</p>
            <p>Bellow, i will show you how my team is composed</p>


            
        </div>
    )
}

export default Saludo