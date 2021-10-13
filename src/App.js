import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrouserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Login from './frontend/componets/Login';
import Dashboard from './frontend/componets/Dashboard';
import Home from './frontend/componets/Home';


function App() {
  return (
    <div className="App">
      <BrouserRouter>
        <div>        
          <div className="header">
            <NavLink exact activeClassName = 'active' to ='/'>Home</NavLink>
            <NavLink exact activeClassName = 'active' to ='/login'>Login</NavLink> <small>(Access without token only)</small>
            <NavLink exact activeClassName = 'active' to ='/dashboard'>Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="contect">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
              </Switch>
          </div>
        </div>
      </BrouserRouter>
    </div>
  );
}

export default App;
