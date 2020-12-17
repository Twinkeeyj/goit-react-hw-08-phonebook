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



  this.props.onRegister({ ...this.state });
  this.setState({ name: '', email: '', password: '' });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });

  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="naw-container">

              <div>
        <h1 className="title">Register page</h1>

        <form onSubmit={this.handleSubmit} >
          <label className="field-name" >
            Name
            <input
            required
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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
          <button className="natural-button" type="submit">Register</button>
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

export default connect(mapStateToProps, { onRegister: authOperations.register })(
  RegisterView,
);
