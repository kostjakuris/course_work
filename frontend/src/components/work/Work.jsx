import React from "react";
import "./Work.css";

const Work = () => {
    return (
        <div className="work__section">
            <section className="work">
                <div className="work__wrapper">
                    <h2 className="work__title">Відео про нашу работу</h2>
                    <p className="work__text">Просто подивіться, як ми працюємо</p>
                </div>
            </section>
            <div className="work__video-wrapper">
                <video className="work__video" src="video/office_review.mp4" controls ></video>
            </div>
            <hr className="work__line"/>
        </div>
    );
};

export default Work;