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
  componentDidMount(){
    if(this.props.isAuthenticated){
      this.props.history.replace("/contacts")

      return
    }
  }
  componentDidUpdate(){
    if(this.props.isAuthenticated){
      this.props.history.replace("/contacts")

      return
    }
  }

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
      <div className="naw-container">

        <div>
        <h1 className="title">Login page</h1>

        <form onSubmit={this.handleSubmit}>
          <label className="field-name">
            Email
            <input
            required
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="field-name" >
            Password
            <input
            required
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className="natural-button" type="submit">Login</button>
          <NavLink className="naw-button" to={route.HomeView}>back</NavLink>
        </form>
      </div>
      </div>
    )
  }
}
const mapStateToProps=state=>({
  isAuthenticated: state.auth.token,
})


export default connect(mapStateToProps, { onLogin: authOperations.logIn })(LoginView);