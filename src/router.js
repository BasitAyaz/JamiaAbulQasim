import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./components/signup";
import Dashboard from './components/dashboard'
import Contact from './components/contact'
import Admin from './components/admin'
import Course from './components/cources'
import Fees from './components/feesSubmission'
import Donate from "./components/donate";
import Donateform from './components/donateForm'
import Login from './components/login'

export default function AapRoute() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/student">
            <Login />
          </Route>
          <Route path="/donateform">
            <Donateform />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/feesubmission">
            <Fees />
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
