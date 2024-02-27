import { Outlet } from "react-router-dom"

import TinderNav from "../components/tinder/tinderNav"

export default function Tinder() {

    const style = {
        backgroundColor: 'silver',
        border: 'gray',
        borderRadius: '10px',
        minHeight: '500px',
        width: '90%',
        padding: '20px',
        margin: 'auto',
        position: 'relative'
    }

    return (
        <div>
            <h3 className="text-center m-4">ROUTING Sub-routes in ReactJS with react-router-dom</h3>
            <div className="container col-md-6 offset-md-3 border py-2">
                <TinderNav />
                <div style={style}>
                    {/* La siguiente linea hace referencia al subcomponente que se pintará según la ruta ingresada */}
                    <Outlet />

                </div>
            </div>
        </div>
    )
}
