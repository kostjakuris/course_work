import React from "react";
import "./Nav.css";

const Nav = ({...props}) => {
    return (
        <div onClick={() => props.navActive ? props.setNavActive(false) : null}>
            <div className="nav__mobile-icon">
                <img className="nav__mobile-img" src="img/nav_icon.svg" alt="nav"
                     onClick={() => props.setNavActive(true)}/>
            </div>
            <div className="nav__top">
                <div className="block"></div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleHeaderClick}>
                                Головна
                            </button>
                        </li>
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleProjectClick}>
                                Наші
                                проекти
                            </button>
                        </li>
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleServiceClick}>
                                Послуги
                            </button>
                        </li>
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleNewsClick}>
                                Новини
                            </button>
                        </li>
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleContactClick}>
                                Контакти
                            </button>
                        </li>
                    </ul>
                </nav>

                <nav className={props.navActive ? "nav--mobile active" : "nav--mobile"}>
                    <ul className="nav__list--mobile">
                        <li className="nav__item" onClick={(e) => e.stopPropagation()}>
                            <button className="nav__link" onClick={props.handleHeaderClick}>
                                Головна
                            </button>
                        </li>
                        <li className="nav__item" onClick={(e) => e.stopPropagation()}>
                            <button className="nav__link" onClick={props.handleProjectClick}>
                                Наші проекти
                            </button>
                        </li>
                        <li className="nav__item" onClick={(e) => e.stopPropagation()}>
                            <button className="nav__link" onClick={props.handleServiceClick}>
                                Послуги
                            </button>
                        </li>
                        <li className="nav__item" onClick={(e) => e.stopPropagation()}>
                            <button className="nav__link" onClick={props.handleNewsClick}>
                                Новини
                            </button>
                        </li>
                        <li className="nav__item" onClick={(e) => e.stopPropagation()}>
                            <button className="nav__link" onClick={props.handleContactClick}>
                                Контакти
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
            <hr className="nav__line"/>
        </div>
    );
};

export default Nav;