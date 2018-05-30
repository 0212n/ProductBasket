import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import Header from './ProductCatalogHeader';
import Products from './ProductCatalog';
import ProductView from './ProductView';
import AddProduct from './ProductForm';
import NoMatch from './404';

const SpecialHeader = withRouter(props => <Header {...props} />);

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <SpecialHeader />
        <Switch>
          <Route state={{url : 'http://localhost:3001/products'}}  exact path='/' component={Products }/>
          <Route path='/product/:id' component={ProductView}/>
          <Route path='/product' component={AddProduct}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default AppComponent;