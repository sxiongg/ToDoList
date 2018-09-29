import React, { Component } from 'react';
import axios from 'axios'
import { FaBars } from 'react-icons/fa'

class List extends Component {
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
            <div id='list-container'>
                <div className='list-table'>
                    {this.state.listData.map((item, index) => {
                        return (
                            <div className='row' key={index}>
                                <div className='col-md-10'>
                                    <span>{item.text}</span>
                                </div>
                                <div className='col-md-1'>
                                    {item.completed 
                                    ? 
                                    <input 
                                        type='checkbox' 
                                        checked 
                                        onChange={(e) => {
                                        this.updateItem(item, { text: item.text, completed: false, details: '' })
                                        }}
                                    /> 
                                    : 
                                    <input 
                                        type='checkbox' 
                                        onChange={(e) => {
                                        this.updateItem(item, { text: item.text, completed: true, details: '' })
                                        }}
                                    />}
                                    
                                </div>
                                <div className='col-md-1'>
                                    <FaBars onClick={(e) => console.log('dfjhfdj')}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default List;