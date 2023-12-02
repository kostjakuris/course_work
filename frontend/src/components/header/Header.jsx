import React, {forwardRef, useState} from "react";
import Nav from "../nav/Nav";
import "./Header.css";

const Header = ({...props}, headerRef) => {
    const [navActive, setNavActive] = useState(false);
    return (
        <div className="header" onClick={() => navActive ? setNavActive(false) : null}
             ref={headerRef}>
            <Nav navActive={navActive} setNavActive={setNavActive}
                 handleHeaderClick={props.handleHeaderClick}
                 handleProjectClick={props.handleProjectClick}
                 handleServiceClick={props.handleServiceClick}
                 handleNewsClick={props.handleNewsClick} handleContactClick={props.handleContactClick}/>
            <p className="header__title">Передова IT студія</p>
            <p className="header__text">
                Ми створюємо легкі вирішення складних завдань та проблем
            </p>
            <a className="button header__button" href="https://www.zieit.edu.ua/" target="_blank"
               rel="noreferrer">Наші проекти
            </a>
        </div>
    );
};

export default forwardRef(Header);