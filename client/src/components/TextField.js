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
        // console.log('asdfghlkfg')
    }

    handleClick(e) {
        let axiosConfig = {
            headers: {
                'crossDomain': true,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
          }

        let data = {
            text: this.state.input
        }

        axios.post('http://localhost:1234/thehandiest/to-dos', data, axiosConfig)
            .then((res) => {
                // console.log(res.status)
                console.log(res)
            })

        // axios.post('http://localhost:1234/thehandiest/to-dos')
            
    }

    render() {
        return (
            <div id='input-container'>
                <form className='form-inline' onSubmit={this.handleClick.bind(this)}>
                    <div className="form-group">
                        <input
                            id='input'
                            type='text'
                            className='form-control'
                            value={this.state.input}
                            onChange={this.handleInput.bind(this)}
                            style={{ width: '500px' }} />
                        <button id='add-button' className='btn' type='submit'> Add </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Input;