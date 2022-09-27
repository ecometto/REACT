import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios'

import './datatableMUI.css'



export default function DatatableMUI() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const columns = [
        {
            name: "name", //aqui va la "clave" del objeto de los datos
            label: "NAME", //aqui va la etiqueta que se mostrará en la columna de la tabla.
            options: { //este opjeto es opcional... puede ir vacio, o no estar 
                filter: true,
                sort: true,
            }
        },
        {
            name: "capital",
            label: "CAPITAL",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "population",
            label: "POPULATION",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "region",
            label: "REGION",
            options: {
                filter: true,
                sort: false,
            }
        },

    ];

    // funciones 
    const getData = async () => {
        const URL = "https://restcountries.com/v2/all"
        const res = await axios.get(URL)
        const datos = await res.data
        
        setData(datos)
            
        // console.log(provisoria)
        // setData(provisoria)
    }


    const options = {
        // filterType: 'checkbox',
    };


    if (data.length === 0) {
        return (
            <div className='bg-light fs-3 p-2 text-center '>
                LOADING DATA.... <br /> PLEASE WAIT
                <div className='waiting'>

                </div>
            </div>
        )
    } else {

        return (
            <div>
                <MUIDataTable
                    title={"COUNTRIES LIST"}
                    data={data}
                    columns={columns}
                    options={options}
                />

            </div>
        )
    }


}