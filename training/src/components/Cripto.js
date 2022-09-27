import { useState, useEffect } from "react";

export default function Cripto() {
// ----------- DEFINIENDO VARIABLES Y STATES  ------------
    const [data, setData] = useState([])
    const [datos, setDatos] = useState([])

    useEffect(() => {
        // refresh()
        getData() 
    }, []
    )
  
    
// ------------ FUNCIONES --------------------------- 
    async function getData() {
        const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        const res = await fetch(URL);
        const datos = await res.json()
        setDatos(datos)
        setData(datos)
    }

    // refrescando para obtener valores nuevos 
    // function refresh() {
    //     setInterval(() => {
    //         getData()
    //     }, 2000);
    // }

    function setValue(e){
        if (e.target.value  === ''){
            setData(data)
        } else{
            let val = e.target.value.toLowerCase()
            let provisoria = [...datos]
            // console.log(provisoria);
            let filtrada = provisoria.filter((element)=>element.name.toLowerCase().includes(val));
            // console.log(filtrada);
            setData(filtrada)
        }
        }


    return (
        <div className="container bg-dark text-light">

            <h2 className="text-center">COINS QUOTATION</h2>

            <br />
        <label htmlFor="search" className="my-4">Search:  </label>
        <input id="search" type="text" onChange={(e)=>setValue(e)} placeholder="type the desire coin"/> 
            <br />

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>TICKET</th>
                        <th>NOMBRE</th>
                        <th>PRICE</th>
                        <th>VARIATION</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ?
                            <tr>
                                <td>'WAIT A MINUTE PLEASE... <br /> LOADING DATA'</td>
                            </tr>
                            :
                            data.map((element) => {
                                return (
                                    <tr key={element.symbol}>
                                        <td> <img src={element.image} alt="thumbnail" height='20px'/> {element.symbol}</td>
                                        <td>{element.name}</td>
                                        <td>{element.current_price}</td>
                                        <td>{element.market_cap_change_percentage_24h}</td>
                                    </tr>

                                )
                            }
                            )

                    }
                </tbody>
            </table>


        </div>
    )
}