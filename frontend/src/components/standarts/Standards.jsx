import React from "react";
import "./Standards.css";
import ProjectCount from "../projectCount/ProjectCount";

const Standards = () => {
    return (
        <div className="standards__section">
            <section className="standards">
                <div className="standards__wrapper">
                    <h2 className="standards__title">
                        Високі стандарти розробки
                    </h2>

                    <p className="standards__text">
                        Lorem Ipsum - це текст-"риба", часто
                        використовується в
                        друку та веб-дизайну. Lorem Ipsum є стандартною "рибою" для текстів
                        на
                        латиниці з початку XVI ст. стандартною "рибою" для текстів на латиниці з
                        початку
                        XVI
                        століття.
                    </p>

                    <a className="standards__link" href="#">Детальніше про компанію</a>
                </div>

                <div className="standards__img">
                    <img src="img/Rectangle 2.svg" alt="computers"/>
                </div>
            </section>
            <hr className="standards__line"/>
            <div className="count__cards">
                <ProjectCount/>
                <ProjectCount/>
                <ProjectCount/>
                <ProjectCount/>
                <ProjectCount/>
            </div>
        </div>
    );
};

export default Standards;