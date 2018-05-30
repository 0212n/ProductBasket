import React, { Component } from 'react';
import editlogo from '.././img/edit.png';
import deletelogo from '.././img/delete.png';
import { Link, Route } from 'react-router-dom';

class ProductTable extends Component{
  constructor(props){
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.state = {
      product : {}
    }
  }
  deleteProduct(e){
    e.preventDefault;
    this.props.onProductDelete(this.state.product._id);
  }
  updateProduct(product,e){
    e.preventDefault;
    this.props.onProductUpdate(this.state.product._id,product);
    //this.props.router.push('/product');
  }
  componentDidMount(){
    this.setState({product:this.props.product});
  }
  render(){
    // let links = this.state.tacos.map(function (taco, i) {
    //   return (
    //     <li key={i}>
    //       <Link to={`/product/${taco.name}`}>{taco.name}</Link>
    //     </li>
    //   )
    // })
    const viewProduct = {
      pathname: '/product/${this.props.product._id}',
      state: { product : this.state.product },
    }
    return (
          <tr key={this.props.product._id}>
            <td scope="row"><Link to={viewProduct}>{this.props.product.title}</Link></td>
            <td className="hideInSM">{this.props.product.price}</td> 
            <td >{this.props.product.quantity}</td>
            <td className="hideInSM">{this.props.product.description}</td>
            <td className="hideInMD">{this.props.product.postedBy}</td>
            <Route render={({ history}) => (<button><img src= {editlogo} alt="my image" onClick={()=>{history.push(`/product`); history.location.state={product:this.props.product, mode:'edit', onUpdate:this.updateProduct}}}/></button>)}/>
            <button><img src= {deletelogo} alt="my image" onClick={this.deleteProduct} /></button>
          </tr>
      )
  }
 
}
export default ProductTable;