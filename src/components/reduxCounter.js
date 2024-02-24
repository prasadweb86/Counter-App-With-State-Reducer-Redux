import Button from "./UI/button";
import { increment, decrement, incrementByValue, reset } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import reduxReducer from "./redux/reducer";
import { useState } from "react";

export default function ReduxCounter(props) {
    const [input, setInput] = useState(null);
    const count = useSelector((state) => state.reduxReducer.counter );
    console.log(count)
    const reduxDispatch = useDispatch();

    const incrementFunc = () => {
        reduxDispatch( increment() )
    }
    const decrementFunc = () => {
        reduxDispatch(decrement())
    }
    const incrementBy = ()=>{
        reduxDispatch(incrementByValue(input))
    } 
    const resetFunc = () => {
        reduxDispatch(reset())
    }

    return (
        <>
            <h1>{props.details.title}</h1>
            <p>{`${props.details.description} : ${count}`}</p>
            <p>
                Value: <input type="number" onChange={(e)=>setInput(e.target.value)} />
            </p>
            <Button onClick={incrementFunc}>Increment</Button>
            <Button onClick={decrementFunc}>Decrement</Button>
            <Button onClick={incrementBy}>Increment By</Button>
            <Button onClick={resetFunc}>Reset</Button>
        </>
    )
}