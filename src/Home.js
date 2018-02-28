import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from './Login'
import ForgotPW from './ForgotPW'
import Register from './Register'


export default class extends Component {
  render() {
    const renderFuncLogin = () => {
      return (
        <Login emailHolder="test@example.com"
               confirmHolder="no spaces"
               buttonText="Submit"
               />
      );
    }
    return (
      <Router>
        <MuiThemeProvider>
        <div>
          <h1>Welcome</h1>
          <nav>
            <Link to="/">Login</Link><br/>
            <Link to="/ForgotPW">Forgot Password</Link><br/>
            <Link to="/Register">Register</Link><br/>
            <hr/>
          </nav>
          <Route exact path="/" component={renderFuncLogin}/>
          <Route path="/ForgotPW" component={ForgotPW}/>
          <Route path="/Register" component={Register}/>
        </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

