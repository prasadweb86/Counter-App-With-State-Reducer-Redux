import React, { useState, useReducer } from "react";
import Button from "./UI/button";
//actions
import { increment, decrement, reset, incrementByValue } from "./reducer/reducer";
//reducer
import { countReducerFunc } from "./reducer/reducer";

const initialState = {
    count: 1
}
function ReducerCounter(props) {
    const [input, setInput] = useState(null);
    const [countReducerState, reducerDispatch] = useReducer(countReducerFunc, initialState);
    const {title, description} = props.details;
    const incrementBy = ()=>{
        reducerDispatch({
            type: incrementByValue,
            amount: input
        })
    }

    return (
        <>
         <h1>{title}</h1>
         <p>{ `${description} : ${countReducerState.count}`}</p>
         <p>
            Value: <input type="number" onChange={(e)=>setInput(Number(e.target.value))} />
         </p>
         <Button onClick={()=>reducerDispatch({ type: increment })}>Increment </Button>
         <Button onClick={()=>reducerDispatch({ type: decrement })}>Decrement</Button>
         <Button onClick={incrementBy}>Increment By</Button>
         <Button onClick={()=>reducerDispatch({ type: reset })}>Reset</Button>
        </>
    )
}

export default ReducerCounter;