import React from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Principal } from "./style";
import AyrtonSenna from "../../assets/images/AyrtonSenna.png";

const Home = () => {
    return (
        <Principal>
            <Header />
            <div>
                <main>
                    <section className="numbersOfSenna">
                        <img src={AyrtonSenna} alt="" />
                        <div className="content">
                            <h1>SENNA EM NÚMEROS</h1>
                        </div>
                    </section>

                    {/*   <section className="about">
                        <h1>QUEM FOI SENNA?</h1>
                    </section> */}
                </main>
            </div>

            {/*   <Background /> */}
        </Principal>
    );
};

export default Home;
