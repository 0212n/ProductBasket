import React, { Component } from 'react';

class ProductForm extends Component{
    constructor(props){
        super(props);
        this.state={
            edit:true,
            product:{},
            title:'',
            price:'',
            quantity:'',
            description:'',
            postedBy:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        if(this.props.history.location.state.product){
            this.setState({product : this.props.history.location.state.product});
            this.setState({title:this.props.history.location.state.product.title});
            this.setState({price:this.props.history.location.state.product.price});
            this.setState({quantity:this.props.history.location.state.product.quantity});
            this.setState({description:this.props.history.location.state.product.description});
            this.setState({postedBy:this.props.history.location.state.product.postedBy});
        }
        if(this.props.history.location.state.mode !== 'edit')
            this.setState({edit:false})
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

      handleSubmit(event) {
        let newProd = {title:this.state.title,price:this.state.price,quantity:this.state.quantity,description:this.state.description,postedBy:this.state.postedBy};
        //this.setState({product:newProd});
        if(this.state.edit){
            this.props.history.location.state.onUpdate(newProd,event);
        }
        else{
            this.props.history.location.state.onNewProduct(newProd);
        }
        this.props.history.push(`/`);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              ProductName:
              <input type="text" value={this.state.title} name='title' onChange={this.handleChange} />
            </label>
            <label>
              Quantity:
              <input type="text" value={this.state.quantity} name='quantity' onChange={this.handleChange} />
            </label>
            <label>
              Price:
              <input type="text" value={this.state.price} name='price' onChange={this.handleChange} />
            </label>
            <label>
              Description:
              <input type="text" value={this.state.description} name='description' onChange={this.handleChange} />
            </label>
            <label>
              By:
              <input type="text" value={this.state.postedBy} name='postedBy' onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
    }

}
export default ProductForm;