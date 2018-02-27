import React, { Component } from 'react'

export default class extends Component {
  render(){
    return (
      <div>
        <p>Please create your account.  Fields marked with * are required.</p>
        <form>
            <label for="FirstName">First Name: * </label>
            <input type="text" name="firstname" required/>
          <br/>
            <label for="MiddleName">Middle Name: </label>
            <input type="text" name="middlename"/>
          <br/>
            <label for="LastName">Last Name: * </label>
            <input type="text" name="lastname" required/>
          <br/>
          <br/>
            <label for="Email">Email: * </label>
            <input type="email" name="email" placeholder="name@example.com" required/>
          <br/>
          <br/>
              <label for="Telephone">Telephone: (10 digits) * </label>
              <input type="tel" name="telephone" placeholder="(xxx)-xxx-xxxx" required/>
          <br/>
          <br/>
            <label for="bday">Date of Birth: * </label>
            <input type="date" id="bday" min="1890-01-01" max="2018-02-06" required/>
          <br/>
          <br/>
              <label for="Password">Password: * </label>
              <input type="password" name="pwd" placeholder="no spaces" required/>
          <br/>
          <br/>
              <label for="ConfirmPassword">Confirm Password: * </label>
              <input type="password" name="pwd" required/>
          <br/>
          <br/>
              <label for="SecurityQuestion">Security Question: </label>
              <select name="questions">
                <option value="firstpet">What is the name of your first pet?</option>
                <option value="street">What street did you grow up on?</option>
              </select>
          <br/>
                <label for="Answer">Answer: </label>
                <input type="text" name="security" placeholder="not case sensitive"/>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

