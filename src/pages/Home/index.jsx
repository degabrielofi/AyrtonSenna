import React, { useEffect, useState } from "react";
import Header from "components/Header";
import { Content, Mention, NumbersOfSenna } from "./style";
import AyrtonSenna from "assets/images/AyrtonSenna.png";
import Image_logo from "assets/images/signature.png";
import Banner from "assets/images/banner.jpg";
import Footer from "components/Footer";

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [text, setText] = useState("");
    const toRotate = ["DA SILVA", "DAS PISTAS", "DO BRASIL", "DE TODOS"];
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <Content>
            <Header />
            <div className="title_rotative">
                <img className="AyrtonSenna" src={Banner} alt="" />
                <h1>
                    {`AYRTON SENNA`}{" "}
                    <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                    </span>
                    <div className="detail">
                        <i />
                    </div>
                </h1>
            </div>

            <main>
                <NumbersOfSenna>
                    <img
                        src={AyrtonSenna}
                        alt="Ayrton Senna"
                        className="AyrtonSenna"
                    />
                    <div className="content">
                        <div className="numbers">
                            <div className="title">
                                <h1>SENNA EM NÚMEROS</h1>
                                <br />
                                <i></i>
                            </div>
                            <ul>
                                <br />
                                <li>
                                    <span className="icon">
                                        <div className="circle">
                                            <i className="fas fa-route"></i>
                                        </div>
                                        <span className="text">
                                            <strong>161</strong> GPS DISPUTADOS
                                        </span>
                                    </span>
                                </li>
                                <br />
                                <li>
                                    <span className="icon">
                                        <div className="circle">
                                            <i className="far fa-arrow-alt-circle-up"></i>
                                        </div>
                                        <span className="text">
                                            <strong>65</strong> POLE POSITIONS
                                        </span>
                                    </span>
                                </li>
                                <br />
                                <li>
                                    <span className="icon">
                                        <div className="circle">
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <span className="text">
                                            <strong>19</strong> FAST LAPS
                                        </span>
                                    </span>
                                </li>
                                <br />
                                <li>
                                    <span className="icon">
                                        <div className="circle">
                                            <i className="fas fa-medal"></i>
                                        </div>
                                        <span className="text">
                                            <strong>2982</strong> VOLTAS
                                            LIDERADAS
                                        </span>
                                    </span>
                                </li>
                                <br />
                                <li>
                                    <span className="icon">
                                        <div className="circle">
                                            <i className="fas fa-flag-checkered "></i>
                                        </div>
                                        <span className="text">
                                            <strong>41</strong> VITÓRIAS
                                        </span>
                                    </span>
                                </li>
                                <br />
                                <li>
                                    <span className="icon">
                                        <div className="circle">
                                            <i className="fas fa-trophy"></i>
                                        </div>
                                        <span className="text">
                                            <strong>3X</strong> CAMPEÃO MUNDIAL
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </NumbersOfSenna>
                <Mention>
                    <section className="background">
                        <div className="text">
                            <h3>
                                <i className="before" /> VENCER É O QUE <br />{" "}
                                IMPORTA, <br /> O RESTO É <br />
                                CONSEQUÊNCIA. <i className="after" />
                            </h3>
                            <img
                                src={Image_logo}
                                alt="Senna's Logo"
                                className="logo"
                            />
                        </div>
                    </section>
                </Mention>
            </main>

            <Footer />
        </Content>
    );
};

export default Home;
