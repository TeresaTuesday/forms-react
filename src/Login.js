import React, { Component } from 'react'

export default class extends Component {
  render(){
    return (
      
      <form>
        <label for="Email">Email: </label>
        <input id="Email" type="email" placeholder="example@test.com" />
      <br/>
        <label for="Password">Password: </label>
        <input type="text" placeholder="password" />
      <br/>
        <button type="Submit">Submit</button>
      </form>
    );
  }
}