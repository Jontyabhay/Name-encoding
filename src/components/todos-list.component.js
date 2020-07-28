import React, { Component } from 'react';
const sound = require('../Soundex.js');
const match = require('../Namematch');

export default class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',value1: '',s: '',m: '',n: '',o: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    
      handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({value1: event.target.value1});
      }
    
      handleSubmit(event) {
          var surname = this.state.value;
          var firstname = this.state.value1;
          this.setState({s: sound(surname)});
          this.setState({m: match.soundexnamematch(surname)});
          this.setState({n: match.sindexnamematch(surname)});
          this.setState({o: match.sindexcode(surname)});
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
          <br>
          </br>
          Firstname
          <br>
          </br>
          <input type="text" value={this.state.value1} onChange={this.handleChange} />
        </label>
          <br>
          </br>
          <input type="submit" value="Submit" class="btn btn-success"/>
          <br>
          </br>
          <p>Irish Soundex: {this.state.s}</p>
          <p>Matched Names(soundex): {this.state.m}</p>
          <p>Sindex: {this.state.o}</p>
          <p>Matched Names(sindex): {this.state.n}</p>
      </form>
        )
    }
}