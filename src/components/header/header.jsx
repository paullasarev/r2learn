import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginActionCreator, logoutActionCreator} from '../../actions/index';

export class Header extends React.Component {
  static propTypes = {
    loginActionCreator: PropTypes.func.isRequired,
    logoutActionCreator: PropTypes.func.isRequired,
    title: PropTypes.string
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.loginActionCreator();
  }

  render() {
    return (
      <div className="header">
        <div className="header__title">
          header
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
