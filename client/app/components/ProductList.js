import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

  render(){
    const{items,loading,error} =this.props.products
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return(
              <table class="table">
                <thead>
                 <tr>
                   <th scope="col">id</th>
                   <th scope="col">Name</th>
                   <th scope="col">Price</th>
                   <th scope="col">Desc</th>
                   <th scope="col">CreatedBy</th>
                 </tr>
                </thead>
                <tbody>
                {items.map(product =>
                    <ProductItem id={product._id} name={product.name} price={product.price} description={product.description} createdBy={product.createdBy} {...product}/>      
                )}
                </tbody>
              </table>
    );
  }

}