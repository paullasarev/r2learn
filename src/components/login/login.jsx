import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {User} from "../../entities/user";

import {FormGroup, FormInputText, FormInputPassword} from "../form/form";
import {Action} from "../action/action";

import {login, logout} from '../../store/actions/auth';
import {setError} from '../../store/actions/app';

require('./login.css');

export class Login extends React.Component {
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
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.logout();
  }

  onChangeUserName = (value) => {
    this.setState({username: value});
  }

  onChangePassword = (value) => {
    this.setState({password: value});
  }

  doCancel = () => {
    this.props.history.goBack();
  }

  doLogin = () => {
    this.props.login(new User(this.state.username, this.state.password));
  }

  componentWillReceiveProps(props) {
    if (props.authUser.error) {
      this.props.setError(props.authUser.error);
      this.props.history.push('/error');
    } else if (props.authUser.isLogged) {
      this.props.history.goBack();
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login__form">
          <FormGroup>
            <FormInputText label="User" value={this.state.username} onChange={this.onChangeUserName}/>
            <FormInputPassword label="Password" value={this.state.password}  onChange={this.onChangePassword}/>
          </FormGroup>
        </div>
        <div className="login__actions">
          <div className="login__action">
            <Action action={this.doCancel} title="Cancel"></Action>
          </div>
          <div className="login__action">
            <Action action={this.doLogin} title="Login"></Action>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({authUser: state.authUser}),
  dispatch => (bindActionCreators({login, logout, setError}, dispatch))
)(Login);
