import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from './component/Navbar'
import Home from './component/Home';
import User from './component/User';
import About from './component/About';
import Table from './component/Table';

function App() {
  return (
    <>
    <Navbar />
    <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={User} /> 
            <Route path="/about" exact component={About} /> 
            <Route path="/table" exact component={Table} />       
            <Redirect to="/" />
          </Switch>
        </div>
    </>
  );
}

export default App;
