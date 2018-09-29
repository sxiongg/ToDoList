import React, { Component } from 'react';
import Input from './TextField'
import List from './List'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toDoItems: []
         }
    }

    render() { 
        return ( 
            <div className='container'>
                <h1>To Do List</h1>
                <Input updateList={(data) => {this.setState({ toDoItems: [...this.state.toDoItems, data] })}} />
                <List />
            </div>   
         );
    }
}
 
export default Container;