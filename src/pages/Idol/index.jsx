import React from "react";
import Header from "components/Header";
import { Content, OutTracks, Hero, Legacy } from "./style";
import Footer from "components/Footer";
import Banner from "assets/images/idol.jpg";
import data from "assets/data/text.json";
import Out from "assets/images/outside.png";
import Senna from "assets/images/senna.png";
import Senninha from "assets/images/senninha.png";
import Institute from "assets/images/institute.png";

const Idol = () => {
    return (
        <Content>
            <Header />
            <div className="title_page">
                <img className="AyrtonSenna" src={Banner} alt="" />
                <h1>
                    O ÍDOLO
                    <div className="detail">
                        <i />
                    </div>
                </h1>
            </div>

            <OutTracks>
                <div className="title">
                    <h1>FORA DAS PISTAS</h1>
                    <br />
                    <i></i>
                </div>
                <div className="text">
                    <img src={Out} alt="" />
                    <p>
                        {data.Out.text} <br /> <br />
                        {data.Out.textTwo}
                    </p>
                </div>
            </OutTracks>

            <Hero>
                <div className="title">
                    <h1>AS MARCAS DO ÍDOLO</h1>
                    <br />
                    <i></i>
                </div>
                <div className="images">
                    <a href="https://senninha.com.br/">
                        <img src={Senninha} alt="" />
                    </a>
                    <a href="https://senna.com/en/">
                        <img src={Senna} alt="" />
                    </a>
                </div>
            </Hero>

            <Legacy>
                <div className="title">
                    <h1>MAIOR LEGADO DO HEROI</h1>
                    <br />
                    <i></i>
                </div>
                <div className="text">
                    <p>
                        {data.Institute.text} <br /> <br />
                        {data.Institute.textTwo}
                    </p>
                    <img src={Institute} alt="" />
                </div>
            </Legacy>
            <Footer />
        </Content>
    );
};

export default Idol;
