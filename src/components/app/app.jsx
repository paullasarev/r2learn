import React from 'react';
import {Route, Switch} from 'react-router-dom';

import PageMain from '../page-main/page-main';
import PageSub from '../page-sub/page-sub';
import PageError from '../page-error/page-error';

import Header from '../header/header';
import Footer from '../footer/footer';

require('./app.css');

export default class App extends React.Component {
  render() {
    return (
      <div class="app">
        <div class="app__header">
          <Header></Header>
        </div>
        <div className="app__content">
          <Switch>
            <Route exact={ true } path={ '/' } component={ PageMain }/>
            <Route exact={ true } path={ '/sub' } component={ PageSub }/>
            <Route path='*' component={ PageError }/>
          </Switch>
        </div>
        <div class="app__footer">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
