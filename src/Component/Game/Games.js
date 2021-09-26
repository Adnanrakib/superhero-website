import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Games.css'


const Games = () => {

          const [games, setGames] = useState([]);

          useEffect(() =>{
                    fetch('./gamers.json')
                    .then(res => res.json())
                    .then(data => setGames(data))          
          },[])

          return (
                    
                              <div className="game-container">
                                        <div className="detail-container">
                                                  {/* <h2>Details{games.length}</h2> */}
                                                  {
                                                            games.map(game => <Details game={game}
                                                            ></Details>)
                                                  }
                                        </div>
                                       <div className="cart-container">
                                       <h2>Gamer Added: 0</h2>
                                       <h3>Total Cost</h3>
                                       </div>
                                       
                              </div>
                            
                  
          );
};

export default Games;