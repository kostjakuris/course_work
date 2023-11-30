import React from "react";
import "./Footer.css";

const Footer = ({...props}) => {
    return (
        <footer className="footer">
            <h3 className="footer__title">{props.title}</h3>
            <div className="footer__item">
                <span className="item__icon">
                    <img src={props.firstIcon} alt="icon"/>
                </span>
                <span className="item__text">{props.firstLink}</span>
            </div>
            <div className="footer__item">
                <span className="item__icon">
                    <img src={props.secondIcon} alt="icon"/>
                </span>
                <span className="item__text">{props.secondLink}</span>
            </div>
            <div className="footer__item">
                <span className="item__icon">
                    <img src={props.thirdIcon} alt="icon"/>
                </span>
                <span className="item__text">{props.thirdLink}</span>
            </div>
            <div className="footer__item">
                <span className="item__icon">
                    <img src={props.fourthIcon} alt=""/>
                </span>
                <span className="item__text">{props.fourthLink}</span>
            </div>

        </footer>
    );
};

export default Footer;