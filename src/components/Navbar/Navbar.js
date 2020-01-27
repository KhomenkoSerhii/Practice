import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/Profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/Dialogs">Messages</NavLink>
      </div>
    <div>Lorem1</div>
    <div>Lorem2</div>
    <div>Lorem3</div>

    </nav>
  );
};

export default Navbar;
