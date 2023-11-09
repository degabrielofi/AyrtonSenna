import React from "react";
import { Container } from "./style";
import Image_logo from "assets/images/signature.png";
import Home from "assets/images/home.jpg";
import History from "assets/images/history.jpg";
import OutTrack from "assets/images/out_track.jpg";

const Footer = () => {
    return (
        <Container>
            <footer>
                <section className="logo">
                    <img src={Image_logo} alt="" />
                </section>

                <section className="links">
                    <a href="/">
                        <img src={Home} alt="" /> <h4>Home</h4>
                    </a>
                    <a href="/history">
                        <img src={History} alt="" /> <h4>História</h4>
                    </a>
                    <a href="/idol">
                        <img src={OutTrack} alt="" />
                        <h4>Fora Das Pistas</h4>
                    </a>
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
