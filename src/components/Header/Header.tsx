import React from 'react';
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.gif";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header = ({isAuth, login}: HeaderPropsType) => {
    console.log('render: Header')
    return (
        <header className={styles.header}>
            <a href={'/samurai-way'}>
                <img src={logo} alt={"logo"}/>
            </a>
            <div className={styles.loginBlock}>
                <NavLink to={'/login'}>{isAuth ? login : 'Войти'}</NavLink>
            </div>
        </header>
    );
};

export default Header;