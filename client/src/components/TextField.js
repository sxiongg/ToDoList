import React, { Component } from 'react';
import axios from 'axios'
import { FaPlus } from 'react-icons/fa';
import { Button } from 'react-bootstrap'

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
            details: this.state.details,
            completed: false
        }

        axios.post('https://api.mlab.com/api/1/databases/todolist/collections/todos?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA', data)
            .then((res) => {
                console.log('Successfully added a new to do item.')
                console.log(res.data)
                this.props.updateList(res.data)
                this.setState({ input: '', details: '' })
            })     
    }

    render() {
        return (
            <div id='input-container' className='col-md-6'>
                    <div className="form-group">
                        <input
                            type='text'
                            value={this.state.input}
                            placeholder='To Do...'
                            onChange={this.handleInput.bind(this)} 
                            className='form-control'
                            style={{ width: '400px' }}
                        />
                        <textarea 
                            value={this.state.details}
                            placeholder='Details...'
                            onChange={this.handleDetailsInput.bind(this)}
                            className='form-control' 
                            style={{ width: '400px', height: '100px', marginTop: '5px' }}
                        />
                        <Button onClick={this.handleClick.bind(this)} className='btn-primary btn-block' style={{ width: '400px', marginTop: '5px'}}> 
                            <FaPlus />
                        </Button>
                    </div>
            </div>
        );
    }
}

export default Input;