import React, {useReducer, useState} from "react";

export const increment = "INCREMENT";
export const decrement = "DECREMENT";
export const incrementByValue = "INCREMENTBYVALUE";
export const reset = "RESET";

export const countReducerFunc = (state, action)=>{
    console.log(state)
    switch(action.type){
    case increment: return { count: state.count + 1 }

    case decrement: 
        if(state.count > 1 ){
            return { count: state.count - 1 }
        } else return { count: state.count }

    case incrementByValue: return { count: state.count + action.amount }
    case reset: return { count: 1 }
    return state;
    }
 }