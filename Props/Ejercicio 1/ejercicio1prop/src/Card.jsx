import React from 'react';
import './Card.css';

const Card = (props) => {
  const add =(element) =>{
    props.setTotal((e) => e+props.price)
    element.target.parentNode.style.display = 'none';
  } 
  return (
    <div className='card'>
        <img src={props.image} alt="guitar" className="image"/>
        <h2>{props.brand}</h2>
        <h3>Color: {props.color}</h3>
        <h3>Price: ${props.price}</h3>
        <button onClick={add} className='button'>BUY</button>
    </div>
  )
}

export default Card