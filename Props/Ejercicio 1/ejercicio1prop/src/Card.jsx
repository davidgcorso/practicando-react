import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="guitar" className="image"/>
        <h2>{props.brand}</h2>
        <h3>Color: {props.color}</h3>
        <h3>Price: ${props.price}</h3>
    </div>
  )
}

export default Card