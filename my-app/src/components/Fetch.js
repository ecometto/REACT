import React from 'react';


const Fetch = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    return (
        <div id="contenedor">

        </div>
    )
}

export default Fetch