//ProductList.js
import React, { Component } from 'react';
import ProductTable from './ProductTable';
//import style from './style';
class ProductList extends Component {
 render() {
     let productRows = this.props.data.map((product,index)=>{
        return(
            <ProductTable product={product} onProductUpdate = {this.props.onUpdateProduct} onProductView = {this.props.onViewProduct} onProductDelete ={this.props.onDeleteProduct} >
            </ProductTable>
        )
     })
 return (
    <div>
    <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col" className="hideInSM">Price</th> 
        <th scope="col" className="hideInSM">Quantity</th>
        <th scope="col" className="hideInSM">Description</th>
        <th scope="col" className="hideInMD">PostedBy</th>
      </tr>                 
    </thead>
    <tbody>
    {productRows}
    </tbody>
    </table>
    </div>
 )
 }
}
export default ProductList;