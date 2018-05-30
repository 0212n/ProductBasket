import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import addlogo from '.././img/add.png';
import { Link, Route } from 'react-router-dom';

class ProductCatalog extends Component{
    constructor(props){
        super(props);
        this.state ={
            data:[],
            url:'http://localhost:3001/products',
            pollInterval:2000
        };
        this.loadProductsFromServer = this.loadProductsFromServer.bind(this);
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
        this.handleViewProduct = this.handleViewProduct.bind(this);
        this.handleProductDelete = this.handleProductDelete.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    loadProductsFromServer(){
        console.log("Inside load products");
        axios.get(this.state.url)
        .then(res=>{
            console.log("Retrieved list of products" + res.data);
            this.setState({data:res.data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    handleUpdateProduct(id,product){
        axios.put(`${this.state.url}/${id}`, product)
        .catch(err => {
        console.log(err);
        })
    }
    handleAddProduct(product){
        let products = this.state.data;
        product.id = Date.now();
        let newProducts = products.concat([product]);
        this.setState({ data: newProducts });
        axios.post(this.state.url, product)
        .catch(err => {
            console.error(err);
            this.setState({ data: products });
        });
    }
    handleViewProduct(product){
        let products = this.state.data;
        product.id = Date.now();
        let newProducts = products.concat([product]);
        this.setState({ data: newProducts });
        axios.post(this.state.url, product)
        .catch(err => {
            console.error(err);
            this.setState({ data: products });
        });
    }
    handleProductDelete(id){
        let products = this.state.data;
        const newProducts = products.filter((product) => product.id !== id);
        this.setState({ data: newProducts });
        axios.delete(`${this.state.url}/${id}`)
        .then(res=>{
            console.log('Product Deleted');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    componentDidMount() {
        console.log("Insode componetn moutn");
        this.loadProductsFromServer();
        setInterval(this.loadProductsFromServer, this.state.pollInterval);
        }
    render(){
        return(
            <div >
            <h2>ProductsList:</h2>
            <Route render={({ history}) => (<button><img src= {addlogo} alt="my image" onClick={()=>{history.push(`/product`); history.location.state={ mode:'add', onNewProduct:this.handleAddProduct}}}/></button>)}/>
            <ProductList onUpdateProduct = {this.handleUpdateProduct} onViewProduct = {this.handleViewProduct}  onDeleteProduct ={this.handleProductDelete} data={this.state.data}/>
            </div>
        )
    }
}
export default ProductCatalog;