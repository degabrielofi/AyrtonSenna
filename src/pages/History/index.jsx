import React from "react";
import { Container, FirstYears } from "./style";
import Header from "../../components/Header";
import Senna from "../../assets/images/AyrtonSennaHistory.jpeg";
import SennaChildren from "../../assets/images/Senna's Children.png";

const History = () => {
    return (
        <Container>
            <Header />
            <div className="title">
                <img className="AyrtonSenna" src={Senna} alt="" />
                <h1>O PILOTO</h1>

                <i></i>
            </div>

            <FirstYears>
                <h1>Primeiros Anos</h1>
                <div>
                    <p>
                        Filho do empresário Milton Guirado Theodoro da Silva e
                        de Neyde Joanna Senna da Silva, Ayrton Senna nasceu em
                        21 de março de 1960, na Maternidade de São Paulo, no
                        bairro de Cerqueira César, São Paulo. A mãe de Senna era
                        neta de imigrantes italianos e o seu pai era filho de
                        uma espanhola (de Tíjola, em Almeria) com um paulista.
                        Morou no Jardim São Paulo dos quatro aos doze anos,
                        mudando-se posteriormente para o Tremembé. Desde novo
                        ele se interessava por automóveis. Foi incentivado pelo
                        pai, um entusiasta das competições automobilísticas, que
                        montou o primeiro kart de Senna quando este tinha quatro
                        anos, e que tinha um motor de máquina de cortar grama.
                        Aos nove anos, já conduzia jipes pelas estradas dentro
                        das propriedades rurais de Milton. Na televisão, gostava
                        de assistir o anime Speed Racer, sobre um piloto de
                        corridas.
                    </p>
                    <img src={SennaChildren} alt="" />
                </div>
            </FirstYears>
        </Container>
    );
};

export default History;
