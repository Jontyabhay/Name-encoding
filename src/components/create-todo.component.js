import React, { Component } from 'react';
import {double_metaphone} from '../DoubleMetaphone';

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
          this.setState({s: double_metaphone(name)});
          event.preventDefault();
      } 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Double Metaphone Encoding
          <br>
          </br>
          <br>
          </br>
          Name
          <br>
          </br>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br>
        </br>
        <input type="submit" value="Submit" class="btn btn-primary"/>
        <p>Code is: {this.state.s}</p>
      </form>
        )
        
    }
}