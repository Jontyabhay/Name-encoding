import React, { Component } from 'react';

export default class EditTodo extends Component {
    render() {
        return (
            <body>
                <p>Welcome to Look up tables</p>
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