import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={"https://img.artlebedev.ru/everything/russia-logo/russia-logo.gif"} alt={"logo"}
                 width={"100px"}/>
        </header>
    );
};

export default Header;