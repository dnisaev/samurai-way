import React from 'react';
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img src={"https://img.artlebedev.ru/everything/russia-logo/russia-logo.gif"} alt={"logo"}
                 width={"100px"}/>
        </header>
    );
};

export default Header;