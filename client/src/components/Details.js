import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Well } from 'react-bootstrap'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ...this.props.toDoItem
         }
    }

    handleSubmit (item) {
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
            .then((res) => {
                console.log('Successfully edited item.')
                this.props.history.goBack()
            })
    }

    render() { 
        return ( 
            <div align='center'>
                <h2>Edit Item</h2>
                <Well>
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
                        style={{ height: '100px' }}
                        />
                    <button onClick={() => this.handleSubmit(this.state)} className='btn btn-block btn-primary'>
                        Submit
                    </button>
                       
                </div>
                </Well> 
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