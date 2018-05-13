import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import Login from '../components/Login'
import {login} from '../actions/AuthActions'
import { withRouter } from 'react-router'

class Auth extends Component {
    constructor(props) {
        super(props);
 
        // // reset login status
        // this.props.dispatch(userActions.logout());
 
        this.state = {
            username: '',
            password: '',
            submitted: false
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
 
    handleSubmit(e) {
        e.preventDefault();
 
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password))
        }
    }
    render(){
        const { username, password, submitted } = this.state;
        return <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <h2>SignIn</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label>Login:</label>
                    <input type="text" value={username} onChange={this.handleChange} name="username"/>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={this.handleChange} name="password"/>
                </div>
                <button class="btn btn-default" type="submit">LogIn</button>
                </form>
            </div>
            <div class="col-md-2">
            </div>
        </div>
    </div>
    }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     login: (username,password) => {dispatch(login())}            
//   }
// };

export default withRouter(connect()(Auth))