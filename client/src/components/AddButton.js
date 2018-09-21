import React, { Component } from 'react';
import axios from 'axios'

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <button id='add-button' className='btn'> Add </button>
            </div>
         );
    }
}
 
export default AddButton;