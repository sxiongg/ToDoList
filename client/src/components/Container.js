import React, { Component } from 'react';
import Input from './TextField'
import List from './List'
import axios from 'axios'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listData: []
         }
    }

    componentDidMount () {
        axios.get('https://api.mlab.com/api/1/databases/todolist/collections/todos?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA')
            .then((res) => {
                this.setState({ listData: res.data })
                console.log(res.data)
            })
    }

    addToDo (data) {
        this.setState({ listData: [...this.state.listData, data] })
    }

    removeToDo (index) {
       let newList = this.state.listData.filter((item, i) => {
           return i !== index
       })
       this.setState({ listData: newList })
    }

    render() { 
        return ( 
            <div className='container'>
                <h1>To Do List</h1>
                <Input updateList={(data) => this.addToDo(data)} />
                <List listData={this.state.listData} deleteItem={(index) => this.removeToDo(index)} />
            </div>   
         );
    }
}
 
export default Container;