import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Todo from '../Todo';
import Weather from '../Weather';
import Error from '../Error';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/todo' component={Todo} />
          <Route path='/weather' component={Weather} />
          <Route component={Error} />
        </Switch>
      </main>
      )
  }
}

export default Main;
