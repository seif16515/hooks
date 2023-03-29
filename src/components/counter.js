import React from 'react';
import { useState } from 'react';


export default function Counter() {
    const [counter, setCounter] = useState(0);
  const increment = () => {
    if (counter < 10) {
        setCounter(counter + 1);
      }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
return(
    <div style={{display: "flex",alignItems:"center",}}>
        
        <button onClick={increment} style={{height:"25px",width:"25px"}} >+</button>
        <h4>{counter}</h4>
        <button onClick={decrement} style={{height:"25px",width:"25px"}}>-</button>
    </div>
)

}
