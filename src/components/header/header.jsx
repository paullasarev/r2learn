import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loginActionCreator, logoutActionCreator} from '../../actions/index';

require('./header.css');
require('./logo.css');

export class Header extends React.Component {
  static propTypes = {
    loginActionCreator: PropTypes.func.isRequired,
    logoutActionCreator: PropTypes.func.isRequired,
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
          <div className="logo" Link="/courses"></div>
        </div>
        <div className="header__title">
          r2
        </div>
      </div>
    );
  }
}


// let mapStateToProps = state => ({app: state.app});
// let mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     loginActionCreator,
//     logoutActionCreator
//   }, dispatch)
// );

// export {Header};
export default connect(
  state => ({app: state.app}),
  dispatch => (
      bindActionCreators({
        loginActionCreator,
        logoutActionCreator
      }, dispatch))
)(Header);
