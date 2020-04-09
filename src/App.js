import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './App.css';

const Hats = () => {
  return(
    <div>Hats Page</div>
  )
}


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={Hats}/>
    </Switch>

    </div>
  );
}

export default App;
