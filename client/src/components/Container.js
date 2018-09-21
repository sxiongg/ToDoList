import React, { Component } from 'react';
import Input from './TextField'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>To Do List :)</h1>
                <Input />
            </div>   
         );
    }
}
 
export default Container;