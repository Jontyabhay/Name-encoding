import React, { Component } from 'react';
const sound = require('../Soundex.js');
const match = require('../Namematch');

export default class EditTodo extends Component {
  constructor(props) {
      super(props);
      this.state = {first: '',s: '',second: '',n: '',f: '',m: '',nin: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
        var fname = this.state.first;
        var sname = this.state.second;
        this.setState({s: sound(sname)});
        this.setState({m: match.soundexnamematch(sname)});
        this.setState({n: match.nindex(fname,sname)});
        this.setState({f: match.foundex(fname,sname)});
        this.setState({nin: match.nindexmatch(fname,sname)});
        event.preventDefault();
    } 
  render() {
      return (
          <form onSubmit={this.handleSubmit}>
      <label>
        <br>
        </br>
        <b>Soundex Encoding</b>
        <br>
        </br>
        <br>
        </br>
        Firstame
        <br>
        </br>
        <input type="text" value={this.state.first} name="first" onChange={this.handleChange} />
        <br>
        </br>
        Surname
        <br>
        </br>
        <input type="text" value={this.state.second} name="second" onChange={this.handleChange} />
      </label>
      <br>
      </br>
      <input type="submit" value="Submit" class="btn btn-success"/>
      <br>
      </br>
      <p>Irish Soundex: {this.state.s}</p>
      <p>Matched Soudnex name: {this.state.m}</p>
      <p>Nindex: {this.state.n}</p>
      <p>Foundex: {this.state.f}</p>
      <p>Possible Nindex Variants (full names): {this.state.nin}</p>
    </form>
      )
      
  }
}

