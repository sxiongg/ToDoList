import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            details: ''
         }
    }

    render() { 
        return ( 
            <div>
                <div className='form-group' style={{ width: '500px' }}>
                    <input 
                        type='text' 
                        value={this.props.toDoItem} 
                        onChange={(e) => this.setState({ text: e.target.value })}
                        className='form-control'
                        />
                    <textarea
                        value={this.props.toDoItemDetails}
                        onChange={(e) => this.setState({ details: e.target.value})}
                        className='form-control'
                        style={{ height: '200px' }}
                        />
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        toDoItem: state.toDoItem.text,
        toDoItemDetails: state.toDoItem.details
    }
}
 
export default connect(mapStateToProps)(Details);