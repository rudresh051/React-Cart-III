import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import MainApplication from './Components/MainApplication';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainApplication />
      </BrowserRouter>
    </div>
  );
}

export default App;
