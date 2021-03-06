import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'


export default class extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      emailHolder: this.props.emailHolder,
      confirmHolder: this.props.confirmHolder,
      emailValue: '',
      confirmValue: '',
      buttonText: this.props.buttonText,
  
    }
  }

  render(){
    const handleEmailChange = (event) => {
      this.setState({emailValue: event.target.value})
    }
    const handleConfirmChange = (event) => {
      this.setState({confirmValue: event.target.value})
    }
    const handleClick = () => {
      console.log(this.state.emailValue + ' - ' + this.state.confirmValue)
    }
    return (
      <Paper>
        
        <h3>Hello! Please login.</h3>
      <form>
        <label for="Email">Email:
        <input id="Email" type="email" onChange={handleEmailChange}/>
        </label>
      <br/>
        <label for="Password">Password: </label>
        <input name="Password" type="password" onChange={handleConfirmChange} />
      <br/>
        <RaisedButton label={this.state.buttonText} onClick={handleClick}/>
      </form>
      </Paper>
    );
  }
}