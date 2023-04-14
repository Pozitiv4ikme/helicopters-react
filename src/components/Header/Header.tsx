import React, { useContext } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../context";
import logoutIcon from "./../../assets/images/logout.svg";

export const Header: React.FC = () => {
  let location = useLocation();
  const context = useContext(AppContext);

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="unicorn-logo" />
      <nav className={styles.navBar}>
        <ul className={styles.navBarList}>
          <li className={location.pathname === '/' ? styles.activePage : undefined}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/catalog' ? styles.activePage : undefined}>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li className={location.pathname === '/cart' ? styles.activePage : undefined}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <img className={styles.logout} src={logoutIcon} alt="logout icon" onClick={() => context?.logout()} />
    </header>
  );
};
