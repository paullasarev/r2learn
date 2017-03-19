import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Courses from '../courses/courses';
import CourseDetails from '../courses/course-details';
import Login from '../login/login';
import Error from '../error/error';

import Header from '../header/header';
import Footer from '../footer/footer';

require('./app.css');

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Header></Header>
        </div>
        <div className="app__content">
          <Switch>
            <Redirect exact={ true }  from='/' to='/courses'/>
            <Route exact={ true } path={ '/login' } component={ Login }/>
            <Route exact={ true } path={ '/courses' } component={ Courses }/>
            <Route exact={ true } path={ '/courses/:id' } component={ CourseDetails }/>
            <Route exact={ true } path={ '/error/(:msg)' } component={ Error }/>
            <Route path='*' component={ Error }/>
          </Switch>
        </div>
        <div className="app__footer">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
