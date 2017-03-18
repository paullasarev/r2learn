import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

require('./error.css');

export class Error extends React.Component {
  static propTypes = {
    message: PropTypes.string
  };
  static defaultProps = {
    message: 'no such page :('
  };

  render() {
    const message = this.props.globalError.error && this.props.globalError.error.toString() || this.props.message;

    return (
      <div className="error">
        <div className="error__message">{message}</div>
        <Link to='/' className="error__link">To main page</Link>
      </div>
    );
  }
}

export default connect(
  state => ({globalError: state.globalError}),
  dispatch => (bindActionCreators({}, dispatch))
)(Error);
