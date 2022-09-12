import { useState, useEffect } from "react";

export default function Cripto() {
    // DEFINIENDO VARIABLES Y STATES 
    const [data, setData] = useState([])
    const [datos, setDatos] = useState([])

    useEffect(() => {
        refresh()
    }, []
    )


    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"


    // FUNCIONES 
    async function getData() {
        const res = await fetch(URL);
        const data = await res.json()
        console.log(data);
        setData(data)
    }

    function refresh() {
        setInterval(() => {
            getData()
        }, 2000);
    }


    return (

        <div className="container bg-dark text-light">

            <h2 className="text-center">COINS QUOTATION</h2>

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
                                <td>'EXTRACTING DATA FROM JSON PLACE HOLDER'</td>
                            </tr>
                            :
                            data.map((element) => {
                                return (
                                    <tr>
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