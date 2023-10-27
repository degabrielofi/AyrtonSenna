import React from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Content } from "./style";
import AyrtonSenna from "../../assets/images/AyrtonSenna.png";
import Image_logo from "../../assets/images/signature.png";
import Track from "../../assets/images/bgTrack.jpg";

const Home = () => {
    return (
        <Content>
            <Header />
            <div>
                <main>
                    <section className="mention">
                        <div className="text">
                            <h3>
                                VENCER É O QUE IMPORTA, <br /> O RESTO É
                                CONSEQUÊNCIA.
                            </h3>
                            <img
                                src={Image_logo}
                                alt="Senna's Logo"
                                className="logo"
                            />
                        </div>
                        <img src={Track} alt="backgroundTrack" />
                    </section>

                    <section className="numbersOfSenna">
                        <img src={AyrtonSenna} alt="Ayrton Senna" />
                        <div className="content">
                            <h1>SENNA EM NÚMEROS</h1>
                            <ul>
                                <li>
                                    <span className="icon">
                                        <i></i>
                                    </span>
                                    <span className="text">
                                        <strong>161</strong>GPS DISPUTADOS
                                    </span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i></i>
                                    </span>
                                    <span className="text">
                                        <strong>65</strong>POLE POSITIONS
                                    </span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i></i>
                                    </span>
                                    <span className="text">
                                        <strong>19</strong>FAST LAPS
                                    </span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i></i>
                                    </span>
                                    <span className="text">
                                        <strong>2982</strong>VOLTAS LIDERADAS
                                    </span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i></i>
                                    </span>
                                    <span className="text">
                                        <strong>41</strong>VITÓRIAS
                                    </span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i></i>
                                    </span>
                                    <span className="text">
                                        <strong>3X</strong>CAMPEÃO MUNDIAL
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/*   <section className="about">
                        <h1>QUEM FOI SENNA?</h1>
                    </section> */}
                </main>
            </div>

            {/*   <Background /> */}
        </Content>
    );
};

export default Home;
