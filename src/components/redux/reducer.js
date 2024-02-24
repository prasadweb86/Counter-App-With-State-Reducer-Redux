import { combineReducers } from "redux";

const initialCounter = {
    counter: 1
}
function reduxReducer(state = initialCounter, action) {    
    switch (action.type) {
        case "INCREMENT": return { counter: state.counter + 1 }
        case "DECREMENT": 
           return { counter: state.counter > 1 ? state.counter - 1 : state.counter  }
        case "INCREMENTBYVALUE" : return { counter: state.counter + Number(action.payload) }
        case "RESET" : return { counter: 1}
        default : return state;
    }

}

const rootReducer = combineReducers({ reduxReducer })
export default rootReducer;
