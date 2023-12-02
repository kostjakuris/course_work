import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Standards from "./components/standarts/Standards";
import Specialties from "./components/specialties/Specialties";
import Projects from "./components/projects/Projects";
import Work from "./components/work/Work";
import Subscribe from "./components/form/Subscribe";
import Footer from "./components/footer/Footer";
import "./normalize.css";
import React, {useRef} from "react";

function App() {
    const headerRef = useRef(null);
    const projectRef = useRef(null);
    const serviceRef = useRef(null);
    const newsRef = useRef(null);
    const contactRef = useRef(null);

    const handleHeaderClick = () => {
        headerRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const handleProjectClick = () => {
        projectRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const handleServiceClick = () => {
        serviceRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const handleNewsClick = () => {
        newsRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: "smooth"});
    };
    return (
        <div>
            <Header handleHeaderClick={handleHeaderClick} handleProjectClick={handleProjectClick}
                    handleServiceClick={handleServiceClick}
                    handleNewsClick={handleNewsClick} handleContactClick={handleContactClick}
                    ref={headerRef}/>
            <main>
                <Services ref={serviceRef}/>
                <Standards/>
                <Specialties/>
                <Projects ref={projectRef}/>
                <Work/>
                <Subscribe ref={newsRef}/>
            </main>
            <div className="footer__wrapper">
                <div className="footers">
                    <div className="footers__first">

                        <Footer title={"Контактна інформація"}
                                firstIcon={"img/envelope.svg"} firstLink={"test@test.com"}
                                secondIcon={"img/call.svg"} secondLink={"+8 777 555 66 99"}
                                thirdIcon={"img/placeholder.svg"}
                                thirdLink={"Запоріжжя, Проспект Соборний 33"} ref={contactRef}
                        />
                        <Footer title={"Основні посилання"}
                                firstIcon={"img/right-arrow.svg"} firstLink={"Головна"}
                                secondIcon={"img/right-arrow.svg"} secondLink={"Наші проекти"}
                                thirdIcon={"img/right-arrow.svg"} thirdLink={"Наші послуги"}
                                fourthIcon={"img/right-arrow.svg"} fourthLink={"Контакти"}

                        />
                    </div>
                    <div className="footers__first">

                        <Footer title={"Наші проекти"}
                                firstIcon={"img/right-arrow.svg"} firstLink={"Мотор Січ"}
                                secondIcon={"img/right-arrow.svg"} secondLink={"Сколково"}
                                thirdIcon={"img/right-arrow.svg"} thirdLink={"Проект “Восток”"}
                                fourthIcon={"img/right-arrow.svg"} fourthLink={"Запорізька АЕС"}
                        />
                        <Footer title={"Соціальні мережі"}
                                firstIcon={"img/right-arrow.svg"} firstLink={"Viber"}
                                secondIcon={"img/right-arrow.svg"} secondLink={"Instagram"}
                                thirdIcon={"img/right-arrow.svg"} thirdLink={"Facebook"}
                                fourthIcon={"img/right-arrow.svg"} fourthLink={"Twitter"}
                        />
                    </div>
                </div>
                <hr className="footer__line"/>
                <p className="footer__end">(с) 2019. Всі права захищені.</p>
            </div>
        </div>
    );
}

export default App;
