import React from 'react';
import './Total.css';

const Total = (props) => {
          const { total } =props;

          let name = "";
          for(const game of total){
                    name =name + game.name;
          } 

          return (
                    <div>
                              <h2>Gamer Added: {props.total.length}</h2>
                              <br/>
                              <h3>Total : $ {total.length} </h3>

                              <br />
                              <h3>Name : {name} </h3>
                                       
                                       
                    </div>
          );
};

export default Total;