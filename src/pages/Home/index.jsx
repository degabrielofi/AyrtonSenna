import React from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Principal } from "./style";

const Home = () => {
    return (
        <Principal>
            <Header />
            <div>
                <main>
                    <section></section>

                    <section className="about">
                        <h1>QUEM FOI SENNA?</h1>
                    </section>
                </main>
            </div>

            <Background />
        </Principal>
    );
};

export default Home;
