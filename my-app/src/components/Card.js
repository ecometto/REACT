import React from 'react';
import './Card.css';
import p1 from '../img/p1.jpg';


function Card(props) {
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img className='img-fluid' src={require('../img/'+props.picture)} alt="nada" />
            </div>
            <div className='text-container'>
                <p className='fs-3'> <b>{props.name}</b> </p>
                <p><b>{props.company}</b> </p>
                <p className='text'> <i> {props.comment}  </i> </p>
            </div>
        </div>

    )
}


export default Card