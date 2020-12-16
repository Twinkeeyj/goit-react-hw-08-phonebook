import React from 'react';
import { NavLink } from 'react-router-dom';
import route from '../route';

const HomeView = function () {
  return (
    <div>
      <h1>Home page</h1>
      <NavLink to={route.LoginView}>Login</NavLink>
      <NavLink to={route.RegisterView}>Register</NavLink>

    </div>
  );
};

export default HomeView;
