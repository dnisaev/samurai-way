import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    // console.log('render: Header')
    return (
        <header className={styles.header}>
            <a href={'/samurai-way'}>
                <img src={"https://img.artlebedev.ru/everything/russia-logo/russia-logo.gif"}
                     alt={"logo"}
                />
            </a>
        </header>
    );
};

export default Header;