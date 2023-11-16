import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div>

            <div className="nav__top">
                <div className="block"></div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="*" className="nav__link">Главная</a></li>
                        <li className="nav__item"><a href="*" className="nav__link">Наши
                            проекты</a>
                        </li>
                        <li className="nav__item"><a href="*" className="nav__link">Услуги</a>
                        </li>
                        <li className="nav__item"><a href="*" className="nav__link">Новости</a>
                        </li>
                        <li className="nav__item"><a href="*" className="nav__link">Контакты</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <hr className="nav__line"/>

        </div>
    );
};

export default Nav;