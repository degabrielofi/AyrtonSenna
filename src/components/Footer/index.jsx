import React from "react";
import { Container } from "./style";
import Image_logo from "../../assets/images/signature.png";

const Footer = () => {
    return (
        <Container>
            <footer>
                <section className="logo">
                    <img src={Image_logo} alt="" />
                </section>

                <section className="links">
                    <a href="/">Home</a>
                    <a href="/history">História</a>
                    <a href="/idol">Fora Das Pistas</a>
                </section>

                <section className="social">
                    <a href="">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                </section>

                <section className="copy">
                    <h4>© 2023 @degabrielofi_. All Rights Reserved</h4>
                </section>
            </footer>
        </Container>
    );
};

export default Footer;
