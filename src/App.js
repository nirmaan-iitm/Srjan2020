import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Srjan from './components/Srjan';

function App() {
  return (
    <BrowserRouter basename="/">
    <div className="App">
        <Route exact path="/" component={Srjan}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
