import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        
        

<Link to="/">
  <img src={logo} alt="Logo" />
</Link>
    <p><Link className="op" style={{textDecoration:"none"}}  to="/">XunWeave</Link></p>
        </div>

      <ul className="nav-menu">
        <li>
          <a href="#"><Link  style={{textDecoration:"None"}}  to="/Gamosha">Gamosha</Link></a>
        </li>
        <li>
          <a href="#"><Link  style={{textDecoration:"None"}}  to="/Bamboo">Bamboo</Link></a>
        </li>
        <li className="about" >
          <a href="#">About</a>
        </li>
        <li>
          <a href="#"><Link  style={{textDecoration:"None"}}  to="/Cart">Cart</Link></a>
        </li>
        <div className="Nav_login_cart">
          <Link style={{textDecoration:"None"}}  to="/login"><button>Login</button></Link>
        </div>
      </ul>
    </div>
  );
};

function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}

export default Navbar;
