import React, {Component } from 'react'
import PropTypes from 'prop-types';

export default class User extends Component{
    render(){
        const {username, token} = this.props
        return(
            <div>
                User: username: {username}, token :{token}
            </div>
        );
    }
}

User.propTypes = {
    username: PropTypes.string.Required,
    token: PropTypes.string.Required
}