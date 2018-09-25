import React, { Component } from 'react';
import axios from 'axios'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleInput(e) {
        this.setState({ input: e.target.value })
    }

    handleClick(e) {
        let data = {
            text: this.state.input
        }

        axios.post('https://api.mlab.com/api/1/databases/todolist/collections/todos?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA', data)
            .then((res) => {
                console.log(res.data)
                this.props.updateList(res.data)
            })     
    }

    render() {
        return (
            <div id='input-container'>
                    <div className="form-group form-inline">
                        <input
                            id='input'
                            type='text'
                            className='form-control'
                            value={this.state.input}
                            onChange={this.handleInput.bind(this)} />
                        <button id='add-button' className='btn' type='submit' onClick={this.handleClick.bind(this)}> Add </button>
                    </div>
            </div>
        );
    }
}

export default Input;