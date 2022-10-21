import React from "react";
import "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="unicorn-logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
