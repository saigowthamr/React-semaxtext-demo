import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/Notfound';

import { createBrowserHistory as createHistory } from 'history';

const history = createHistory();

history.listen((location, action) => {
  if (action !== 'REPLACE') {
    window.strum('routeChange', window.location.href);
  }
})


const Routing = (
  <Router history={history}>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);



ReactDOM.render(
  Routing,
  document.getElementById('root')
);

