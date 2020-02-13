import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Srijan from './components/Srijan';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter basename="/">
    <div className="App">
        <Route exact path="/" component={Srijan}/>
        <Route exact path="/register" component={Register}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
