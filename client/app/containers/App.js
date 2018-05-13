import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import User from '../components/User'
import {fetchProducts} from '../actions/ProductActions'
import { withRouter } from 'react-router'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { user, products } = this.props;
     return <div>        
            <div>
            <User username={user.username} token={user.token}/>
            <ProductList products={products}/>
            </div>   
           </div>
  }
}

const mapStateToProps = state => ({
  user: state.user? state.user:[],  
  products: state.products
});
// const mapDispatchToProps = dispatch => {
//   return{
//     fetchProducts: () => {dispatch(fetchProducts())}
//   }
// };

export default withRouter(connect(mapStateToProps)(App)) 