import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./components/signup";
import Dashboard from './components/dashboard'
import Contact from './components/contact'
import Admin from './components/admin'
import Course from './components/cources'

export default function AapRoute() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/contactForm">
            <Contact />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
