import React, { Component } from 'react';
import axios from 'axios'
import { FaPlus } from 'react-icons/fa';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            details: ''
        }
    }

    handleInput(e) {
        this.setState({ input: e.target.value })
    }

    handleDetailsInput(e) {
        this.setState({ details: e.target.value })
    }

    handleClick(e) {
        let data = {
            text: this.state.input,
            details: this.state.details
        }

        axios.post('https://api.mlab.com/api/1/databases/todolist/collections/todos?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA', data)
            .then((res) => {
                console.log(res.data)
                this.props.updateList(res.data)
                this.setState({ input: '', details: '' })
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
                            placeholder='To Do...'
                            onChange={this.handleInput.bind(this)} 
                            style={{ width: '400px' }}
                        />
                        <button 
                            id='add-button' 
                            className='btn' 
                            type='submit' 
                            onClick={this.handleClick.bind(this)}> 
                            
                            <FaPlus />
                        </button>
                    </div>
                    <textarea 
                        className='form-control' 
                        value={this.state.details}
                        placeholder='Details...'
                        onChange={this.handleDetailsInput.bind(this)}
                        style={{ width: '400px', height: '200px' }}
                    />
            </div>
        );
    }
}

export default Input;