import React, { Component } from 'react'
import {fetchProduct} from '../actions/ProductActions'
import ProductItem from '../components/ProductItem'
import { connect } from 'react-redux'

class ProductPage extends Component {
    
    componentDidMount() {
        this.props.dispatch(fetchProduct(this.props.match.params.id));
    }
 
    render(){
        const{product,error,loading} = this.props
          if (error) {
            return <div>Error! {error.message}</div>;
          }      
          if (loading||product==null) {
            return <div>Loading...</div>;
          }

        return <table class="table">
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
                    <ProductItem id={product._id} name={product.name} price={product.price} description={product.description} createdBy={product.createdBy}/>      
                </tbody>
              </table>

    }    
}

const mapStateToProps = state => ({
    product: state.product.item,
    error: state.product.error,
    loading:state.product.loading
  });
  
export default connect(mapStateToProps)(ProductPage) 
