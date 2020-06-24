import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from "./Router/Router"
import {BrowserRouter, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
