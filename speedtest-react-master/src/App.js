import React from 'react';
import './App.css';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';



function App() {
  return (
    <div>
      
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
