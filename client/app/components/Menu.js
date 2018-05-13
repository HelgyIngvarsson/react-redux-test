import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Router } from 'react-router';

export default class Menu extends Component{
    render(){
        if(this.props.loggedIn)
        return(
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="nav-content">   
    <ul class="nav navbar-nav" id="menu">
    <li class="nav-item">
    <a class="nav-link"><Link to="/">Products</Link></a>
    </li>
    <li class="nav-item">
    <Link to="product/new"></Link>
    </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
    <li class="nav-item">LogOut</li>
    </ul>
    </div>
    </nav>
        );
    else
    return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="nav-content">   
    <ul class="nav navbar-nav" id="menu">
    <li class="nav-item">
    <a class="nav-link"><Link to="/">Products</Link></a>
    </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
    <li  class="nav-item"><Link to="/login">LogIn</Link></li>
    </ul>
    </div>
    </nav>);
    }
}
