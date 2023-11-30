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
                <h3 className="cards__title">Дослідження та упаковка</h3>
            </div>
            <p className="cards__text">
                Lorem Ipsum - це текст-"риба", що часто використовується в пресі та
                веб-дизайн. Lorem Ipsum є стандартною "рибою" для текстів на латиниці з
                початку XVI ст.
            </p>
            <a className="cards__link" href="#">Детальніше</a>
        </div>
    );
};

export default SpecialtiesCards;