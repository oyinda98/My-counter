import React, { useReducer } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./State.css";
import { FaRedoAlt } from 'react-icons/fa';


const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "setValue":
      return { count: Number(document.getElementById("tag").value) };
      default:
        return {
          counter: new Error("Wrong") ? <div>{new Error("Wrong").toString()}</div> : 0,
        };

  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reduce, { count: 0 });
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
  const setValue = () => {
    dispatch({ type: "setValue" });
  };

  return (
    <div className="container">
      <div className="nav">
        <Link to="State">State</Link>
        <Link to="Reducer">Reducer</Link>
        <Link to="Home">Home</Link>
      </div>
      <div className="card">
        <input id="tag" />
        <button onClick={setValue}>set</button>
        <br />
        <br />

        <section className="button">
          <div className="btn">
            <button onClick={increment}>+</button>
            <span>{state.count}</span>
            <button onClick={decrement}> -</button>
          </div>
        </section>
        <br/><br/>

        <button onClick={reset}><FaRedoAlt/></button>
      </div>
    </div>
  );
}
export default Reducer;
