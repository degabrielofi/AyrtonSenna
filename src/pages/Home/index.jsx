import React from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Content, Mention, NumbersOfSenna } from "./style";
import AyrtonSenna from "../../assets/images/AyrtonSenna.png";
import Image_logo from "../../assets/images/signature.png";
import Track from "../../assets/images/bgTrack.jpg";

const Home = () => {
    return (
        <Content>
            <Header />

            <main>
                <Mention>
                    <div className="text">
                        <h3>
                            VENCER É O QUE <br /> IMPORTA, <br /> O RESTO É{" "}
                            <br />
                            CONSEQUÊNCIA.
                        </h3>
                        <img
                            src={Image_logo}
                            alt="Senna's Logo"
                            className="logo"
                        />
                    </div>
                    <img
                        src={Track}
                        alt="backgroundTrack"
                        className="background"
                    />
                </Mention>

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
            </main>

            {/*   <Background /> */}
        </Content>
    );
};

export default Home;
