import React from "react";
import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Nav/>
            <p className="header__title">Передовая IT студия</p>
            <p className="header__text">Мы создаем легкие решения
                сложных задач и проблем</p>
            <button className="button header__button">Наши проекты</button>
        </div>
    );
};

export default Header;