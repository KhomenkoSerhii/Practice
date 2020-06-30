import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/ProfileContainer">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/Dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink to='/Users'>Users</NavLink>
        </div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>

    </nav>
  );
};

export default Navbar;
