import React from 'react';
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    console.log('render: NavBar')
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to={'/profile'} activeClassName={styles.active}>Профиль</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/dialogs'} activeClassName={styles.active}>Сообщения</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/news'} activeClassName={styles.active}>Новости</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/music'} activeClassName={styles.active}>Музыка</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/settings'} activeClassName={styles.active}>Настройки</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;