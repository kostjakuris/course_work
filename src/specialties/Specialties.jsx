import React from "react";
import "./Specialties.css";
import SpecialtiesCards from "../specialtiesCards/SpecialtiesCards";

const Specialties = () => {
    return (
        <section className="specialties">
            <section className="specialties__first">
                <p className="specialities__text">Наши работы, на которых
                    мы специализируемся</p>
                <button className="button specialties__button">Все услуги</button>
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