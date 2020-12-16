import React, { Component } from 'react'
import route from '../route';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import  authOperations  from '../redux/auth/authOperations';

 class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <NavLink to={route.HomeView}>back</NavLink>
        <div>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit}>
          <label >
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label >
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
      </div>
    )
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);