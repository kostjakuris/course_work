import React from "react";
import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {

    return (
        <div className="header">
            <Nav/>
            <p className="header__title">Передова IT студія</p>
            <p className="header__text">
                Ми створюємо легкі вирішення складних завдань та проблем
            </p>
            <a className="button header__button" href="https://www.zieit.edu.ua/" target="_blank"
               rel="noreferrer">Наші проекти</a>
        </div>
    );
};

export default Header;