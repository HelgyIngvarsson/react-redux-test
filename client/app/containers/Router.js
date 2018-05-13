import React, { Component, PropTypes } from 'react'
import {Switch,Route } from 'react-router-dom';
import App from './App'
import Auth from './Auth'
import ProductPage from './ProductPage'
import Menu from '../components/Menu'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Navigate extends Component{
    render(){
        return(
            <div class="container-flux bg-light">
            <Menu loggedIn={this.props.loggedIn}/>
            <Switch>
               <Route exact path='/' component={App}/> 
               <Route exact path='/product/:id' component={ProductPage}/> 
               <Route exact path='/login' component={Auth}/> 
            </Switch>
            </div>
        );
    }

}
const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn
  });

export default withRouter(connect(mapStateToProps)(Navigate))
