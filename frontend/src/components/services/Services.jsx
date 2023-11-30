import React from "react";
import "./Services.css";
import Card from "../card/Card";

const Services = () => {
    return (
        <section className="service">
            <h2 className="service__header">
                Ми створюємо мобільні програми для великих корпорацій</h2>
            <p className="service__text">Lorem Ipsum - це текст-"риба", що часто використовується в
                друку та веб-дизайну. Lorem Ipsum є стандартною "рибою" для текстів на
                латиниці з початку XVI ст.
            </p>

            <div className="service__cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <a className="button service__button" href="https://techexpert.ua/it-services/"
               target="_blank" rel="noreferrer">
                Всі послуги
            </a>
        </section>
    );
};

export default Services;