import React from "react";
import {
    Container,
    FirstYears,
    StartOfKart,
    Toleman,
    Lotus,
    McLaren,
    Williams,
} from "./style";
import Header from "components/Header";
import Senna from "assets/images/AyrtonSennaHistory.jpeg";
import SennaChild from "assets/images/Senna Child.png";
import StartKart from "assets/images/StartOfKart.png";
import data from "assets/data/text.json";
import TolemanIcon from "assets/images/toleman_logo.png";
import TolemanCar from "assets/images/Senna's Toleman.png";
import LotusIcon from "assets/images/lotus_logo.png";
import LotusCar from "assets/images/Senna's Lotus.png";
import McLarenIcon from "assets/images/mclaren_logo.png";
import McLarenCar from "assets/images/Senna's McLaren.png";
import WilliamsIcon from "assets/images/williams_logo.png";
import WilliamsCar from "assets/images/Senna's Williams.png";
import Footer from "components/Footer";

const History = () => {
    return (
        <Container>
            <Header />
            <div className="title_page">
                <img className="AyrtonSenna" src={Senna} alt="" />
                <h1>
                    O PILOTO
                    <div className="detail">
                        <i />
                    </div>
                </h1>
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
                    <img src={SennaChild} alt="" />
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

            <Toleman>
                <section className="images">
                    <img
                        src={TolemanIcon}
                        alt="Icon of Toleman"
                        className="icon"
                    />
                    <img src={TolemanCar} alt="Senna's car" className="car" />
                </section>

                <section className="text">
                    <p>
                        {data.Formula1.Toleman.text} <br />
                        <br />
                        {data.Formula1.Toleman.textTwo} <br />
                        <br />
                        {data.Formula1.Toleman.textThree}
                    </p>
                </section>
            </Toleman>
            <Lotus>
                <section className="images">
                    <img
                        src={LotusIcon}
                        alt="Icon of Toleman"
                        className="icon"
                    />
                    <img src={LotusCar} alt="Senna's car" className="car" />
                </section>

                <section className="text">
                    <p>
                        {data.Formula1.Lotus.text} <br />
                        <br />
                        {data.Formula1.Lotus.textTwo} <br />
                        <br />
                        {data.Formula1.Lotus.textThree}
                    </p>
                </section>
            </Lotus>
            <McLaren>
                <section className="images">
                    <img
                        src={McLarenIcon}
                        alt="Icon of Toleman"
                        className="icon"
                    />
                    <img src={McLarenCar} alt="Senna's car" className="car" />
                </section>

                <section className="text">
                    <p>
                        {data.Formula1.Lotus.text} <br />
                        <br />
                        {data.Formula1.Lotus.textTwo} <br />
                        <br />
                        {data.Formula1.Lotus.textThree}
                    </p>
                </section>
            </McLaren>
            <Williams>
                <section className="images">
                    <img
                        src={WilliamsIcon}
                        alt="Icon of Toleman"
                        className="icon"
                    />
                    <img src={WilliamsCar} alt="Senna's car" className="car" />
                </section>

                <section className="text">
                    <p>
                        {data.Formula1.Williams.text} <br />
                        <br />
                        {data.Formula1.Williams.textTwo}
                    </p>
                </section>
            </Williams>
            <br />
            <Footer />
        </Container>
    );
};

export default History;
