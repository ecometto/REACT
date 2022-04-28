import React from 'react';
import data from '../data/data.json'

const Employees = () => {
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>

            {data.map((persona, index)=>{
                return(
                    <div key = {index} className="container row bg-light border m-4 rounded-3">
                        <div className='col-2 d-flex justify-content-center align-items-center'>
                            <img className='rounded-circle' width="100px" src={"./img/" + persona.picture} alt="" />
                        </div>

                        <div className='col-8 text-center '>
                            <p className='fs-3'>Nombre : {persona.name} </p>
                            <p className='fw-bold'>Company: {persona.company}</p>
                            <p>{persona.comment}</p>
                        </div>
                   
                    </div>
                )
            })}


        </div>
    );
}

export default Employees;
