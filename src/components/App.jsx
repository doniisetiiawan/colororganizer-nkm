/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Color, Colors, NewColor } from './containers';
import Whoops404 from './ui/Whoops404';
import Menu from './ui/Menu';
import '../stylesheets/APP.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/:id" component={Color} />
      <Route
        path="/"
        component={() => (
          <div className="app">
            <Route component={Menu} />
            <NewColor />
            <Switch>
              <Route exact path="/" component={Colors} />
              <Route
                path="/sort/:sort"
                component={Colors}
              />
              <Route component={Whoops404} />
            </Switch>
          </div>
        )}
      />
    </Switch>
  );
}

export default App;
