import React from 'react';



import Li from './Li'

const Navbar = () => {

    var Links = [
        {id:4,  ruta: "/", texto: "HOME" },
        {id:1,  ruta: "/r1", texto: "Pagina 1" },
        {id:2,  ruta: "/r2", texto: "Pagina 2" },
        {id:3,  ruta: "/users", texto: "Usuarios" },
    ]

    return (

        <div>
             <ul className="nav bg-dark ">
                 prueba para borrar en branch casa
                    {
                        Links.map((cada) => {
                            return (
                                <Li key={cada.id}
                                    ruta={cada.ruta}
                                    texto={cada.texto} 
                                />
                            )
                        })
                    }

                </ul>
        </div>

    );
}

export default Navbar;
