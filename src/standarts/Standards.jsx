import React from "react";
import "./Standards.css";
import ProjectCount from "../ProjectCount/ProjectCount";

const Standards = () => {
    return (
        <div className="standards__section">
            <section className="standards">
                <div className="standards__wrapper">
                    <h2 className="standards__title">Высокие стандарты
                        разработки
                    </h2>

                    <p className="standards__text">Lorem Ipsum - это текст-"рыба", часто
                        используемый в
                        печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
                        на
                        латинице с начала XVI века. стандартной "рыбой" для текстов на латинице с
                        начала
                        XVI
                        века.
                    </p>

                    <a className="standards__link" href="#">Подробнее о компании</a>
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