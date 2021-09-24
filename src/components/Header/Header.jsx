import React, { Component } from "react";
import Nav from '../Nav';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img className="header--logo" src="logo.png" alt="logo" />
        </Link>
        <Nav />
      </header>
    )
  }
}

export default Header;
