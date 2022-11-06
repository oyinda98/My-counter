import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">

      <div className="nav">
        <Link to="State" style={{ textDecoration: 'none' ,}}>State</Link>
        <Link to="Reducer" style={{ textDecoration: 'none' }}>Reducer</Link>
        <Link to="Home" style={{ textDecoration: 'none' }}>Home</Link>
      </div>
      <div className="main">
        counTER
      </div>
    </div>
  );
}
export default Home;
