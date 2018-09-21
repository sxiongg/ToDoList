import React, { Component } from 'react';
import AddButton from './AddButton'

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

    render() {
        return (
            <div id='input-container'>
                <form className='form-inline'>
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