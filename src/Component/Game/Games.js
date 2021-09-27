import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Total from '../Total/Total';
import './Games.css'


const Games = () => {

          const [games, setGames] = useState([]);
          const [total, setTotal] = useState([]);

          useEffect(() =>{
                    fetch('./gamers.json')
                    .then(res => res.json())
                    .then(data => setGames(data))          
          },[])

          const handleAddToCart = (game) =>{
                  const newTotal =[...total, game];
                  setTotal(newTotal);
          }

          return (
                    
                              <div className="game-container">
                                        <div className="detail-container">
                                                  {/* <h2>Details{games.length}</h2> */}
                                                  {
                                                            games.map(game => <Details game={game}
                                                            key={game.key}
                                                            handleAddToCart={handleAddToCart}
                                                            ></Details>)
                                                  }
                                        </div>
                                       <div className="cart-container">
                                       <Total total={total}></Total>
                                       </div>
                                       
                              </div>
                            
                  
          );
};

export default Games;