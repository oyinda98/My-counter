import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./State.css";
import { FaRedoAlt } from 'react-icons/fa';

function State() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  // const [userInput,setUserInput] =useState(+'');
  return (
    <div className="container">
      <div className="nav">
        <Link to="State">State</Link>
        <Link to="Reducer">Reducer</Link>
        <Link to="Home">Home</Link>
      </div>

      <div className="card">
        
        <input
          type="text"
          value={""}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <br />
        <br />
        <section className="button">
          <div className="btn">
            <button onClick={increment}>+</button>   &nbsp;
            <span>{count} </span> &nbsp; &nbsp;  
            <button onClick={decrement} disabled={count === 0}>
              -
            </button>
            <br />
            <br />
          </div>
        </section><br/><br/>
        <button onClick={reset} disabled={count === 0}>
        <FaRedoAlt/>
        </button>
      </div>
    </div>
  );
}
export default State;
