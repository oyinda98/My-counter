import React,  {useState, useEffect }from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import State from './components/State';
import Reducer from './components/Reducer';
import NotFound from './components/NotFound';
import Home from './components/Home';


function App() {

  return (
   <div>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path ="State" element={<State/>}/>
      <Route path ="State/Reducer" element={<Reducer/>}/>
      <Route path ="Reducer" element={<Reducer/>}/>
      <Route path ="Reducer/State" element={<State/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>  
   </div>
  );
}

export default App;
