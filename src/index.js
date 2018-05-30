import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/AppComponent';

class BaseComponent extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <App this />
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<BaseComponent  pollInterval={2000} />, document.getElementById('root'));