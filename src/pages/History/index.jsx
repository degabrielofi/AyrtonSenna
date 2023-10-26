import React from "react";
import { Container } from "./style";
import Header from "../../components/Header";
import Senna from "../../assets/images/AyrtonSennaHistory.jpeg";

const History = () => {
    return (
        <Container>
            <Header></Header>
            <img className="AyrtonSenna" src={Senna} alt="" />
        </Container>
    );
};

export default History;
