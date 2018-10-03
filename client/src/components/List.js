import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { FaEdit, FaTimes } from 'react-icons/fa'
import { ButtonGroup, Button } from 'react-bootstrap'
import { setFormData } from '../redux/actions';
import { withRouter } from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    updateCheckbox(item, index, data) {
        // console.log(item)
        axios({
            method: 'put',
            url: 'https://api.mlab.com/api/1/databases/todolist/collections/todos/' + item._id.$oid + '?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA',
            data: data,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                console.log(res)
                // console.log('asdjhdfljkhdsla')
                let { completed } = data
                this.props.update(item, index, completed)
            })
    }

    render() {
        return (
            <div id='list-container' className='col-md-6'>
                <div className='list-table'>
                    {this.props.listData.map((item, index) => {
                        return (
                            <div className='row' key={index}>
                                <div className='col-md-1'>
                                        <input
                                            type='checkbox'
                                            checked={item.completed}
                                            onChange={(e) => {
                                                this.updateCheckbox(item, index, { text: item.text, completed: item.completed ? false : true })
                                            }}
                                        />
                                </div>
                                <div className='col-md-6'>
                                    <p>{item.text}</p>
                                    {item.details && <p>&mdash; {item.details}</p>}
                                    
                                </div>
        
                                <div className='pull-right'>
                                    <ButtonGroup>
                                        <Button onClick={(e) => {
                                            console.log(item)
                                            this.props.sendItemToRedux(item, index)
                                            this.props.history.push('/edit-to-do')
                                        }}>
                                            <FaEdit />
                                        </Button>
                                        <Button onClick={() => {
                                                axios.delete('https://api.mlab.com/api/1/databases/todolist/collections/todos/' + item._id.$oid + '?apiKey=xI73xOlYWLZrgUWUao-CjKHEf9wLvVyA')
                                                    .then((res) => {
                                                        console.log('deleted')
                                                        this.props.deleteItem(index)
                                                    })
                                            }}>
                                            <FaTimes />
                                        </Button>
                                    </ButtonGroup>
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendItemToRedux: (item, index) => dispatch(setFormData(item, index)) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(List));