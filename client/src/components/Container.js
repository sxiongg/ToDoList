import React, { Component } from 'react';
import Input from './TextField'
import List from './List'
import axios from 'axios'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toDoItems: []
         }
    }

    componentDidMount () {
        axios.get('https://api.mlab.com/api/1/databases/todolist/collections/todos?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA')
            .then((res) => {
                this.setState({ toDoItems: res.data })
                console.log(res.data)
            })
    }

    updateItem (item, data) {
        console.log(item)

        axios({
            method: 'put',
            url: 'https://api.mlab.com/api/1/databases/todolist/collections/todos/' + item._id.$oid + '?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA',
            data: data,
            headers: {
                'Content-type': 'application/json'
            }
          })
          .then(res => console.log(res)) 
    }
    
    render() { 
        return ( 
            <div className='container'>
                <h1>To Do List</h1>
                <Input updateList={(data) => {this.setState({ toDoItems: [...this.state.toDoItems, data] })}} />
                <List listData={this.state.toDoItems} updateItem={this.updateItem} />
            </div>   
         );
    }
}
 
export default Container;