import React, { Component } from 'react';
import ListContainer from './List-Container'
import Details from './Details'
import { Switch, Route } from 'react-router-dom'
import { PageHeader } from 'react-bootstrap'

const Container = () => {
 
    // render() { 
        return ( 
            <div className='container'>
                <PageHeader>To Do List <small>ReactJS, Node.js</small></PageHeader>
                <Switch>
                    <Route exact path='/' component={ListContainer} />
                    <Route path='/edit-to-do' component={Details} />
                </Switch>
            </div>   
         );
    // }
}
 
export default Container;