import Header from "./header/Header";
import Services from "./services/Services";
import Standards from "./standarts/Standards";
import Specialties from "./specialties/Specialties";
import Projects from "./projects/Projects";
import Work from "./work/Work";
import Subscribe from "./form/Subscribe";
import Footer from "./footer/Footer";
import React from "react";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <Services/>
                <Standards/>
                <Specialties/>
                <Projects/>
                <Work/>
                <Subscribe/>
            </main>
            <div className="footer__wrapper">
                <div className="footers">
                    <div className="footers__first">

                        <Footer title={"Контактная информация"}
                            firstIcon={"img/envelope.svg"} firstLink={"test@test.ru"}
                            secondIcon={"img/call.svg"} secondLink={"+8 777 555 66 99"}
                            thirdIcon={"img/placeholder.svg"}
                            thirdLink={"Москва, Бульвар Ленина 33"}
                        />
                        <Footer title={"Основные ссылки"}
                            firstIcon={"img/right-arrow.svg"} firstLink={"Главная"}
                            secondIcon={"img/right-arrow.svg"} secondLink={"Наши проекты"}
                            thirdIcon={"img/right-arrow.svg"} thirdLink={"Наши услуги"}
                            fourthIcon={"img/right-arrow.svg"} fourthLink={"Контакты"}

                        />
                    </div>
                    <div className="footers__first">

                        <Footer title={"Наши проекты"}
                            firstIcon={"img/right-arrow.svg"} firstLink={"РосНано"}
                            secondIcon={"img/right-arrow.svg"} secondLink={"Сколково"}
                            thirdIcon={"img/right-arrow.svg"} thirdLink={"Проект “Восток”"}
                            fourthIcon={"img/right-arrow.svg"} fourthLink={"ТЭЦ Калининграда"}
                        />
                        <Footer title={"Социальные сети"}
                            firstIcon={"img/right-arrow.svg"} firstLink={"VK.com"}
                            secondIcon={"img/right-arrow.svg"} secondLink={"Instagram"}
                            thirdIcon={"img/right-arrow.svg"} thirdLink={"Facebook"}
                            fourthIcon={"img/right-arrow.svg"} fourthLink={"Twitter"}
                        />
                    </div>
                </div>
                <hr className="footer__line"/>
                <p className="footer__end">(с) 2019. Все права защищены.</p>
            </div>
        </div>
    );
}

export default App;
