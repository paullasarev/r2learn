import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageMain from '../page-main/page-main';
import PageSub from '../page-sub/page-sub';
import PageError from '../page-error/page-error';

export const MAIN_PAGE_ROUTE = '/';
export const SUB_PAGE_ROUTE = '/sub';

require('./app.css');

export default class App extends React.Component {
    static renderMainPage() {
        return <PageMain title='главная страница' />;
    }

    static renderSubPage() {
        return <PageSub title='второстепенная страница' />;
    }

    static renderErrorPage() {
        return <PageError message='упс...' />;
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact={ true }
                        path={ MAIN_PAGE_ROUTE }
                        component={ this.renderMainPage }
                    />
                    <Route
                        exact={ true }
                        path={ SUB_PAGE_ROUTE }
                        component={ this.renderSubPage }
                    />
                    <Route
                        path='*'
                        component={ this.renderErrorPage }
                    />
                </Switch>
            </div>
        );
    }
}
