import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div>

            <div className="nav__top">
                <div className="block"></div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Головна</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Наші
                            проекти</a>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Послуги</a>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Новини</a>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Контакти</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <hr className="nav__line"/>
        </div>
    );
};

export default Nav;