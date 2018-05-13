import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class ProductItem extends Component{
render(){
    const{id,name,price,description,createdBy} = this.props
    return(
        <tr>
            <th><Link to={`/product/${id}`}>{id}</Link></th>
            <th>{name}</th>
            <th>{price}</th>
            <th>{description}</th>
            <th>{createdBy.username}</th>
        </tr>
    );
}
}

ProductItem.propTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    createdBy: PropTypes.object.isRequired
}