import React from "react";
import "./SpecialtiesCards.css";

const SpecialtiesCards = () => {
    return (
        <div className="cards">
            <div className="cards__img">
                <img src="img/Rectangle 3.svg" alt="work"/>
            </div>
            <div className="cards__header">
                <span className="cards__number">01.</span>
                <h3 className="cards__title">Исследование и упаковка</h3>
            </div>
            <p className="cards__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с
                начала XVI века.
            </p>
            <a className="cards__link" href="#">Подробнее</a>
        </div>
    );
};

export default SpecialtiesCards;