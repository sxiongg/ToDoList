import React, { Component } from 'react';
import ListContainer from './List-Container'
import Details from './Details'
import { Switch, Route } from 'react-router-dom'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    render() { 
        return ( 
            <div className='container'>
                <h1>To Do List</h1>
                <Switch>
                    <Route exact path='/' component={ListContainer} />
                    <Route path='/edit-to-do' component={Details} />
                </Switch>
            </div>   
         );
    }
}
 
export default Container;