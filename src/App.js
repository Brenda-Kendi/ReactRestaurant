import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import { Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route exact path = '/' component={Home} />
      <Route path = '/menu' component={Menu} />
      <Route path = '/contact' component={Contact} />
      </Switch>
    </div>
  );
}


export default App;
