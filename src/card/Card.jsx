import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <article className="card">
            <div className="card__img">
                <div className="card__icon">
                    <div className="card__icon-wrapper">
                        <div className="card__icon-round">
                            <img src="img/project.jpg" alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__wrapper">
                <h3 className="card__header">Создание сайтов</h3>
                <p className="card__text">Lorem Ipsum - это текст- "рыба", часто используемая в печати
                    и вэб-дизайне.</p>
            </div>
        </article>
    );
};

export default Card;