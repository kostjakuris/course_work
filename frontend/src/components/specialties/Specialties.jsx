import React from "react";
import "./Specialties.css";
import SpecialtiesCards from "../specialtiesCards/SpecialtiesCards";

const Specialties = () => {
    return (
        <section className="specialties">
            <section className="specialties__first">
                <p className="specialities__text">Наші работи, на яких
                    ми специализуємось</p>
                <a className="button specialties__button" href="https://techexpert.ua/it-services/"
                   target="_blank" rel="noreferrer">Всі послуги</a>
            </section>
            <div className="specialties__cards">
                <SpecialtiesCards/>
                <SpecialtiesCards/>
                <SpecialtiesCards/>
            </div>
            <section className="specialties__second"></section>
        </section>
    );
};

export default Specialties;