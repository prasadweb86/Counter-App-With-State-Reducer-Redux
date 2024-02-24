import React, { useState } from "react";
import './App.css';
import StateCounter from "./components/stateCounter";
import ReducerCounter from "./components/reducerCounter";

import { Provider } from "react-redux";
import { reduxStore } from "./components/redux/store";
import ReduxCounter from "./components/reduxCounter";


function App() {
  const [count, setCount] = useState(1);

  return (
    <Provider store={reduxStore}>
      <div className="App">

        <StateCounter details={{
          title: "With useState Counter",
          description: "Current count",
          count, setCount
        }} />

        <hr></hr>

        <ReducerCounter details={{
          title: "With useReducer Counter",
          description: "Current count"
        }} />

        <hr></hr>

        <ReduxCounter details={{
          title: "With Redux Counter",
          description: "Current count"
        }} />

      </div>
    </Provider>
  );
}

export default App;
