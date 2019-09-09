/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import Loading from "./Loading.js";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  render() {
    const activeStyle = { color: 'blue' };
    console.log('######### render()')

    setTimeout(() => {
      console.log('######### after 2 secs')
      this.setState({
        loading: false
      })
    }, 2000);

    return this.state.loading ? (
      <Loading />
    ) : (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
