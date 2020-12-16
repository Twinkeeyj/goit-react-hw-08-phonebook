
import { NavLink } from 'react-router-dom';
import route from '../route';

import { connect } from 'react-redux';
import React, { Component } from 'react'

class HomeView extends Component  {
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

  render(){
  return (
    <div>
      <h1>Home page</h1>
      <NavLink to={route.LoginView}>Login</NavLink>
      <NavLink to={route.RegisterView}>Register</NavLink>

    </div>
  );
  }
};
const mapStateToProps=state=>({
  isAuthenticated: state.auth.token,
})


export default connect(mapStateToProps, null)(HomeView);
