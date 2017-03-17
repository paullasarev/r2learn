import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageMain from '../page-main/page-main';
import PageSub from '../page-sub/page-sub';
import PageError from '../page-error/page-error';

require('./app.css');

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact={ true } path={ '/' } component={ PageMain } />
                    <Route exact={ true } path={ '/sub' } component={ PageSub } />
                    <Route path='*' component={ PageError }/>
                </Switch>
            </div>
        );
    }
}
