import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">Наші проекти</h2>
                <p className="projects__text">
                    Lorem Ipsum - це текст-"риба", що часто використовується в
                    друку та веб-дизайну. Lorem Ipsum є стандартною "рибою" для текстів на
                    латиниці з початку XVI ст.
                </p>

            </div>
            <div className="projects__icons">
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
            </div>
            <a className="button projects__button" href="https://www.intellias.ua/projects"
               target="_blank" rel="noreferrer">Всі проекти</a>
        </section>
    );
};

export default Projects;