import React from 'react';
import { connect } from 'react-redux';

import authOperations from "../../redux/auth/authOperations"

const UserMenu = ({ avatar, name, onLogout }) => (
  <div >
    <img src={avatar} alt="Твоє фото!!" width="32"  />
    <span className="user-title">Welcome, {name}</span>

    {/* <button type="button" onClick={onLogout}>
      Logout
    </button> */}
  </div>
);

const mapStateToProps = state => ({
  name: state.auth.user.name,
  avatar:"https://w7.pngwing.com/pngs/880/546/png-transparent-smiley-emoticon-computer-icons-emoticon-smile-smiley-online-chat-glasses.png"
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);

