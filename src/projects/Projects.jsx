import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__wrapper">
            <h2 className="projects__title">Наши проекты</h2>
            <p className="projects__text">
                Lorem Ipsum - это текст-"рыба", часто используемый в
                печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
                латинице с начала XVI века.
            </p>

            </div>
            <div className="projects__icons">
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
                <img className="projects__img" src="img/Rectangle 4.svg" alt="code"/>
            </div>
            <button className="button projects__button">Все проекты</button>
        </section>
    );
};

export default Projects;