import React from "react";
import { Container, FirstYears, StartOfKart } from "./style";
import Header from "components/Header";
import Senna from "assets/images/AyrtonSennaHistory.jpeg";
import SennaChildren from "assets/images/Senna's Children.png";
import StartKart from "assets/images/StartOfKart.png";
import data from "assets/data/text.json";
import useLocalStorage from "use-local-storage";

const History = () => {
    const [lightMode, setLightMode] = useLocalStorage(
        "theme" ? "light-mode" : "dark-mode"
    );
    return (
        <Container>
            <Header>
                <section
                    className="button-dark"
                    onClick={() => setLightMode(!lightMode)}
                    name="theme"
                    id="theme"
                >
                    <i className={lightMode ? "fas fa-moon" : "fas fa-sun"}></i>
                </section>
            </Header>
            <div className="title_page">
                <img className="AyrtonSenna" src={Senna} alt="" />
                <h1>O PILOTO</h1>

                <i></i>
            </div>

            <FirstYears>
                <div className="title">
                    <h1>PRIMEIROS ANOS</h1>
                    <br />
                    <i></i>
                </div>
                <div className="text">
                    <p>
                        {data.Children.text} <br /> <br />
                        {data.Children.textTwo}
                    </p>
                    <img src={SennaChildren} alt="" />
                </div>
            </FirstYears>

            <StartOfKart>
                <div className="title">
                    <h1>INÍCIO NO KART</h1>
                    <br />
                    <i></i>
                </div>
                <div className="text">
                    <img src={StartKart} alt="" />
                    <p>
                        {data.Kart.text} <br /> <br />
                        {data.Kart.textTwo}
                    </p>
                </div>
            </StartOfKart>
        </Container>
    );
};

export default History;
