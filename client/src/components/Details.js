import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: this.props.toDoItem.text,
            details: this.props.toDoItem.details
         }
    }

    handleSubmit (item) {
        // console.log(item._id)
        let data = {
            ...item,
            text: this.state.text,
            details: this.state.details,
        }

        axios({
            method: 'put',
            url: 'https://api.mlab.com/api/1/databases/todolist/collections/todos/' + item._id.$oid + '?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA',
            data: data,
            headers: {
                'Content-type': 'application/json'
            }
        })
            // .then((res) => {
            //     this.props.history.push('/')
            // })
    }

    render() { 
        return ( 
            <div>
                <div className='form-group' style={{ width: '500px' }}>
                    <input 
                        type='text' 
                        value={this.state.text}
                        onChange={(e) => this.setState({ text: e.target.value })}
                        className='form-control'
                        />
                    <textarea
                        value={this.state.details}
                        onChange={(e) => this.setState({ details: e.target.value})}
                        className='form-control'
                        style={{ height: '200px' }}
                        />
                    <button onClick={this.handleSubmit(this.props.toDoItem)} className='btn btn-block'>
                        Submit
                    </button>    
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        toDoItem: state.toDoItem
    }
}
 
export default withRouter(connect(mapStateToProps)(Details))