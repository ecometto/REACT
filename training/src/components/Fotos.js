import { useEffect, useState } from 'react'


export function Fotos() {
// Usestates + usefect 
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])



// ----------- funciones ------------------- 
    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        setData(data)
        setUsers(data)
    }

    const getFilterValue = (e) => {

        if (e.target.value.length > 0) {
            const provisorio = data.filter((cada) => cada.title.includes(e.target.value))
            setUsers([...provisorio])
            
        } else {
            setUsers(users)
        }

    }


// retornando la vista 
    return (
        <div className="container">

            <div className='m-4'>
                <input type="text" onChange={getFilterValue} placeholder="Buscar"/>
            </div>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>album ID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>THUMBNAILURL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length === 0 ?
                            <tr>
                                <td>'EXTRACTING DATA FROM JSON PLACE HOLDER'</td>
                            </tr>

                            :
                            users.map((element) => {
                                return (
                                    <tr key={element.id}>
                                        <td>{element.albumId}</td>
                                        <td>{element.id}</td>
                                        <td>{element.title}</td>
                                        <td><img src={element.thumbnailUrl} alt="" /></td>
                                    </tr>
                                )
                            })
                    }

                </tbody>
            </table>

        </div>

    )

}