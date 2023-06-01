import './Card.css'

const Card = (props) => {

    const team = props.team
    const uniqueStyle = {fontStyle:"italic", fontWeight:600, fontSize:"15px", borderLeftStyle:"solid"}

    return (
        team.map(el => {
            return (
                <div key={el.name} className="employee-container">
                    <div className="img-container">
                        <img className="img-fluid" src={el.image} alt="" />
                    </div>
                    <div className="text-container" style={uniqueStyle}>
                        <p><strong>Nombre: </strong> {el.name}</p>
                        <p><strong>Edad: </strong> {el.age}</p>
                        <p><strong>Puesto: </strong> {el.position}</p>
                    </div>
                </div>
            )
        }
        )
    )


}

export default Card