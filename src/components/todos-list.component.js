import React, { Component } from 'react';
const sound = require('../SoundexNameMatch.js');

export default class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',s: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
          var name = this.state.value;
          this.setState({s: sound(name)});
          event.preventDefault();
      }
    render() {
        return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Soundex Name Encoding
          <br>
          </br>
          <br>
          </br>
          Surname
          <br>
          </br>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
          <br>
          </br>
          <input type="submit" value="Submit" class="btn btn-success"/>
          <p>Code is: {this.state.s}</p>
      </form>
        )
    }
}