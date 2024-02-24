import React, { useState } from "react";
import Button from "./UI/button";

function StateCounter(props) {
  const [input, setInput] = useState(null)
  const { title, description, count, setCount } = props.details
  return (
    <>
      <h1>{title}</h1>
      <p>{ `${description} : ${count}`}</p>
      <p>
          Value: <input type="number" onChange={(e)=>setInput(Number(e.target.value))} />
      </p>
      <Button onClick={ ()=>setCount(count + 1) }>Increment</Button>
      <Button onClick={ ()=>count > 1 ? setCount(count - 1) : count }>Decrement</Button>
      <Button onClick={ ()=>setCount(count + input)}>Increment By Value</Button>
      <Button onClick={ ()=>setCount(1) }>Reset</Button>
    </>
  );
}

export default StateCounter;
