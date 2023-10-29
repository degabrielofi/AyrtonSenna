import React from "react";
import { Container } from "./style";
import Header from "../../components/Header";
import Senna from "../../assets/images/AyrtonSennaHistory.jpeg";

const History = () => {
    return (
        <Container>
            <Header />
            <div className="title">
                <img className="AyrtonSenna" src={Senna} alt="" />
                <h1>O PILOTO</h1>

                <i></i>
            </div>
        </Container>
    );
};

export default History;
