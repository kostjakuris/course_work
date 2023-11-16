import React from "react";
import "./Services.css";
import Card from "../card/Card";

const Services = () => {
    return (
        <section className="service">
            <h2 className="service__header">Мы создаем мобильные приложения
                для крупных корпораций</h2>
            <p className="service__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати
                и вэб-дизайне. Lorem
                Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
            </p>

            <div className="service__cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button className="button service__button">Все услуги</button>
        </section>
    );
};

export default Services;