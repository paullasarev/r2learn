import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Breadcrumbs} from './breadcrumbs';

require('./header.css');
require('./logo.css');
require('./user.css');

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <Link className="logo" to="/courses"/>
        </div>
        <div className="header__title">r2</div>
        {this.props.authUser.isLogged ?
          <div className="header__breadcrumbs"><Breadcrumbs/></div>
          :null}
          <div className="header__user">
            {this.props.authUser.isLogged ?
              <div className="user">
                <div className="user__info">{this.props.authUser.name}</div>
                <Link className="user__logoff" to="/login">Logoff</Link>
              </div>
              :
              <div className="user">
                <Link className="user__login" to="/login">Login</Link>
              </div>
            }
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({authUser: state.authUser}),
  dispatch => (bindActionCreators({}, dispatch))
)(Header);
