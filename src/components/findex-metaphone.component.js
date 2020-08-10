import React, { Component } from 'react';
const match = require('../Namematch');

export default class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {pehla: '',fm: '',dusra: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
          var fname = this.state.pehla;
          var sname = this.state.dusra;
          this.setState({fn: match.findexmetaphone(fname,sname)});
          event.preventDefault();
      }
      render () {
          return (
              <form onSubmit={this.handleSubmit}>
                  <label>
                      <h3>Welcome to Findex Metaphone</h3>
                      <br>
                      </br>
                      <p>Findex Metaphone is a new encoding in our project which return
                          a combination of FIndex and Double Metaphone, similar to
                          Foundex
                      </p>
                      <br>
                      </br>
                      Firstname
                      <br>
                      </br>
                      <input type="text" value={this.state.pehla} name="pehla" onChange={this.handleChange} />
                      <br>
                      </br>
                      Surname
                      <br>
                      </br>
                      <input type="text" value={this.state.dusra} name="dusra" onChange={this.handleChange} />
                      </label>
                      <br>
                      </br>
                      <input type="submit" value="Submit" class="btn btn-secondary"/>
                      <br>
                      </br>
                      <p>Encoding: {this.state.fn}</p>
              </form>
          )
      }
    }