import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Srijan from './components/Srijan';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Srijan}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
