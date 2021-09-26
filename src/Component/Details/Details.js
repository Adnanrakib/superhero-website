import React from 'react';
import './Details.css'

const Details = (props) => {
          console.log(props.game);
          const {img,name, age, title, family, release} =props.game;

          return (
                    <div className="gamers">
                             
                              <img src={img} alt=""/>
                              <h3>Name: {name}</h3>
                               <h5>Age: {age}</h5> 
                              <p> Title: {title}</p> 

                              <p>Family: {family}</p>
                              <h5>Release on: {release}</h5>
                              <button className="game-button">Add to cart</button>

                            
                    </div>
                               
                                       
          );
};

export default Details;