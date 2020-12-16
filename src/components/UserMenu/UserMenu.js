import React from 'react';
import { connect } from 'react-redux';

import authOperations from "../../redux/auth/authOperations"

const UserMenu = ({ avatar, name, onLogout }) => (
  <div >
    <img src={avatar} alt="Твоє фото мудак!!!!!" width="32"  />
    <span >Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: state.auth.user.name,
  avatar:
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ea/ea25bf27b1917865960af3c6e2364c29b83f58bd_full.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);

// const isAuthenticated = state => state.auth.token;

// const getUserName = state => state.auth.user.name;

// export default { isAuthenticated, getUserName };