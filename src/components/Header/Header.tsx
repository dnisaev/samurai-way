import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src={"https://img.artlebedev.ru/everything/russia-logo/russia-logo.gif"} alt={"logo"}
                 width={"100px"}/>
        </header>
    );
};

export default Header;