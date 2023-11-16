import React from "react";
import "./Work.css";

const Work = () => {
    return (
        <div className="work__section">
            <section className="work">
                <div className="work__wrapper">
                    <h2 className="work__title">Видео о нашей работе</h2>
                    <p className="work__text">Просто посмотрите, как мы работаем</p>
                </div>
            </section>
            <div className="work__video-wrapper">
                <img className="work__video" src="img/Rectangle 5.svg" alt="video"/>
            </div>
            <hr className="work__line"/>
        </div>
    );
};

export default Work;