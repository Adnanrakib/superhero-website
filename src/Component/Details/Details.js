import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'



import './Details.css'

const Details = (props) => {
          const {img,name, age, title, family, release} =props.game; 


          return (
                    <div className="gamers">
                             
                              <img src={img} alt=""/>
                              <h3>Name: {name}</h3>
                               <h5>Age: {age}</h5> 
                              <p> Title: {title}</p> 

                              <p>Family: {family}</p>
                              <h5>Release on: {release}</h5>
                              <button 
                              onClick={() =>props.handleAddToCart(props.game)} 
                              
                              className="game-button"><FontAwesomeIcon icon={faShoppingCart}/>Add to cart</button>

                            
                    </div>
                               
                                       
          );
};

export default Details;