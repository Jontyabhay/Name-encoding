import React, { Component } from 'react';

export default class EditTodo extends Component {
    render() {
        return (
            <body>
                <p>Welcome to Findex Metaphone</p>
                <br>
                </br>
                <label for="myfile">Select a file:</label>
                <br>
                </br>
                <input type="file" id="myfile" name="myfile"></input>
            </body>
            
        )
    }
}