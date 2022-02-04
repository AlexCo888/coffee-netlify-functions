import React from "react";
import Logo from "../netlify-logo-dark.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <Link to="/">
        <h2>🏠</h2>
      </Link>
    </nav>
  );
};

export default Navbar;
