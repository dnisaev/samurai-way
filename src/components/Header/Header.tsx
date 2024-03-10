import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.gif";
import { NavLink } from "react-router-dom";

export const Header = ({ isAuth, login, logout }: HeaderPropsType) => {
  console.log("render: Header");
  return (
    <header className={styles.header}>
      <a href={"/samurai-way"}>
        <img src={logo} alt={"logo"} />
      </a>
      <div className={styles.loginBlock}>
        {isAuth ? (
          <div>
            {login} <button onClick={logout}>Выйти</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Войти</NavLink>
        )}
      </div>
    </header>
  );
};

type HeaderPropsType = {
  isAuth: boolean;
  login: string | null;
  logout: () => void;
};
