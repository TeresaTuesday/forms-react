import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Login from './Login'
import ForgotPW from './ForgotPW'
import Register from './Register'

export default class extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Welcome</h1>
          <nav>
            <Link to="/">Login</Link><br/>
            <Link to="/ForgotPW">Forgot Password</Link><br/>
            <Link to="/Register">Register</Link><br/>
            <hr/>
          </nav>
          <Route exact path="/" component={Login}/>
          <Route path="/ForgotPW" component={ForgotPW}/>
          <Route path="/Register" component={Register}/>
        </div>
      </Router>
    );
  }
}

