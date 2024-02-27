import './card.css'

export default function Card({ user }) {

    return (
     
                 <div className="card m-2">
                     <div className="card-img">
                         <img src={user.avatar} alt="" />
                     </div>
                     <div className="separator"></div>
                     <div className="card-details">
                         <u>Nombre:</u> {user.first_name} {user.last_name} <br />
                         <u>email:</u> {user.email}
                     </div>
                 </div>

    )
}