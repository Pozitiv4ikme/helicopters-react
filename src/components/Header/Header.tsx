import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  let location = useLocation();

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="unicorn-logo" />
      <nav className={styles.navBar}>
        <ul className={styles.navBarList}>
          <li className={location.pathname === '/' ? styles.activePage : undefined}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname == '/catalog' ? styles.activePage : undefined}>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li className={location.pathname == '/cart' ? styles.activePage : undefined}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
