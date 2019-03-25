import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/'
import Home from './pages/home';
import Detail from './pages/detail';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';
import store from './store/';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalIcon />
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" component={Home} exact></Route>
              <Route path="/detail" component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
