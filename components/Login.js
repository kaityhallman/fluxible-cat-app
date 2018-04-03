import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connectToStores from 'fluxible-addons-react/connectToStores';

// actions
import loginAction from '../actions/login';

// stores
import UserStore from '../stores/UserStore';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.context.executeAction(loginAction, {
      username: this.state.username.trim(),
    });
  }

  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            onChange={this.onChange}
            type="text"
            value={this.state.username}
          />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  executeAction: PropTypes.func.isRequired,
};

export default connectToStores(
  Login,
  [UserStore],
  (context, props) => ({
    username: context.getStore(UserStore).getUsername(),
  })
);
