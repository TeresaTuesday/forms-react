import React, { Component } from 'react'

export default class extends Component {
  render(){
    return (
      <div>
          <h3>Please enter email and one of the following:</h3>
        <form>
            <label for="Email">Email: </label>
            <input id="Email" type="email" placeholder="example@test.com"/>
          <br/>
          <br/>
            <label for="Security">Security Question: </label>
            <select name="questions">
              <option value="firstpet">What is the name of your first pet?</option>
              <option value="street">What street did you grow up on?</option>
            </select>
            <label for="Answer"> Answer: </label>
            <input type="text" name="security" placeholder="not case sensitive"/>
          <br/>
          -OR-
          <br/>
            <label for="Telephone">Telephone: (10 digits) </label>
            <input type="tel" name="telephone" placeholder="(xxx)-xxx-xxxx"/>
          <br/>
          <br/>
            <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}


