import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {login, logout} from '../../actions/index';
import {Breadcrumbs} from './breadcrumbs';

require('./header.css');
require('./logo.css');

export class Header extends React.Component {
  static propTypes = {
    isLogged: PropTypes.boolean,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLogged: true,
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // this.props.loginActionCreator();
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
      </div>
    );
  }
}

export default connect(
  state => ({app: state.app}),
  dispatch => (bindActionCreators({login,logout}, dispatch))
)(Header);
