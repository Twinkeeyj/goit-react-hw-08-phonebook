import React, { Component } from 'react'
import route from '../route';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperations from "../redux/auth/authOperations"

 class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  componentDidUpdate(){
    if(this.props.isAuthenticated){
      this.props.history.replace("/contacts")

      return
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  console.log(e);


  this.props.onRegister({ ...this.state });
  this.setState({ name: '', email: '', password: '' });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log({[name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
              <NavLink to={route.HomeView}>back</NavLink>
              <div>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit} >
          <label >
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
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

          <button type="submit">Register</button>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps=state=>({
  isAuthenticated: state.auth.token,
})

export default connect(mapStateToProps, { onRegister: authOperations.register })(
  RegisterView,
);
