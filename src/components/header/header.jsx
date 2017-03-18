import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {login, logout} from '../../actions/index';
import {Breadcrumbs} from './breadcrumbs';

require('./header.css');
require('./logo.css');
require('./user.css');

export class Header extends React.Component {
  static propTypes = {
    isLogged: PropTypes.boolean,
    userName: PropTypes.String,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLogged: true,
    userName: "user"
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <Link className="logo" to="/courses"/>
        </div>
        <div className="header__title">r2</div>
        {this.props.isLogged ?
          <div className="header__breadcrumbs"><Breadcrumbs/></div>
          :null}
        {this.props.isLogged ?
          <div className="header__user">
            {this.props.isLogged ?
              <div className="user">
                <div className="user__info">{this.props.userName}</div>
                <Link className="user__logoff" to="/login">Logoff</Link>
              </div>
              :
              <div className="user">
                <Link className="user__login" to="/login">Login</Link>
              </div>
            }
          </div>
          :null}

      </div>
    );
  }
}

export default connect(
  state => ({user: state.user}),
  dispatch => (bindActionCreators({login, logout}, dispatch))
)(Header);
