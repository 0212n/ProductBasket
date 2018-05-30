import React from 'react';

class ProductView extends React.Component {

    state = {
      id: '',
      title: '',
      price: '',
      quantity: '',
      picture: '',
      description: '',
      postedBy: ''
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        // navigated!
      }
    }
    componentWillMount(){
      this.setState(() => {
        let product = this.props.location.state.product;
        return product;
      })    
    }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">{this.state.title}</h1>
        <p className="lead">Price - {this.state.price}</p>
        <hr className="my-4" />
        <p className="lead">Quantity - {this.state.quantity}</p>
        <hr className="my-4" />
        <p className="lead">Description- {this.state.description}</p>
        <hr className="my-4" />
        <p className="lead">By - {this.state.postedBy}</p>

      </div>
    )
  }
}
export default ProductView;
