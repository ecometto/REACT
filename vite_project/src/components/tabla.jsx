import React from 'react'

export default function Tabla(props) {
  return (
<>
    {
        props.data.map(el=>{
            return(
                <p key={el.id}>{el.id} - {el.name}</p>
            )
        })
    }

</>
  )
}



















//import React from 'react'
// export default function Tabla(props) {

//     return (
//         <div>
//             {props.data.map((el) => (
//                 <p key={el.id}>{el.name}</p>
//                 )
//             )
//             }
//         </div>
//     )
// }

