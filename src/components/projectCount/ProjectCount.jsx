import React from "react";
import "./ProjectCount.css";

const ProjectCount = () => {
    return (
        <div>
            <div className="count__wrapper">
                <span className="count__icon">
                    <img src="img/web-programming.svg" alt="icon"/>
                </span>
                <span className="count__number">
                    125
                </span>
            </div>
            <p className="count__text">Our projects</p>
        </div>
    );
};

export default ProjectCount;