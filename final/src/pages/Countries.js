import React, { useState, useEffect } from 'react'

export default function Countries() {
    const [countries, setCountries] = useState([])

    useEffect(() =>
        getCountries
        , [])

    async function getCountries() {
        const data = await fetch("https://restcountries.com/v3.1/all")
        var json = await data.json()
        setCountries(json)
        console.log(json)
        console.log(typeof (json))
    }

    return (
        <div className='container'>

            <table className='table' id='myTable'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CAPITAL</th>
                        <th>FLAG</th>
                        <th>LTN-LNG</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.length === 0 ?
                            "cargando...." :
                            countries.map(c => {
                                return (
                                    <tr key={c.altSpellings[0]}>
                                        <td>{c.altSpellings[0]}</td>
                                        <td>{c.name['common']}</td>
                                        <td>{c.capital}</td>
                                        <td><a target='_blanck' href={c.flags['png']}> Bandera.. </a></td>
                                        <td>
                                            <a target="_blanck" href={`https://www.google.com/maps/place/${c.name['common']} `} >
                                                Ver en mapa..
                                            </a>
                                        </td>
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














// import React from 'react'

// export default function Countries() {
//   return (
//     <div>Countries</div>
//   )
// }
