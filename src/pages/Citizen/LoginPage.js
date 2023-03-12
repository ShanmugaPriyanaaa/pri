import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import SignUpForm from "./pages/SignUpForm";
// import SignInForm from "./pages/SignInForm";
import SignInform from "../SignInForm";
import SignUpForm from "../SignUpForm";

// import "./App.css";
// import "./App.css";

class CitizenLogin extends Component {
  render() {
    return (
      <Router basename="/digipal/">
        <div className="App">
          <div className="appAside">digipal</div>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInform} />
          </div>
        </div>
      </Router>
    );
  }
}

export default CitizenLogin;
