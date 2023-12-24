import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <a href={'/samuray-way'}>
                <img src={"https://img.artlebedev.ru/everything/russia-logo/russia-logo.gif"}
                     alt={"logo"}
                     width={"100px"}/>
            </a>
        </header>
    );
};

export default Header;