import React from "react";
import signatureImage from "../../assets/images/signature.png";
import { Menu } from "./style";

const Header = () => {
    return (
        <Menu>
            <header>
                <div className="icons">
                    <a target="--blank" href="https://github.com/degabrielofi">
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        target="--blank"
                        href="https://www.instagram.com/degabrielofi_/"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        target="--blank"
                        href="https://www.linkedin.com/in/degabrielofi/"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a target="--blank" href="https://twitter.com/degabrielofi">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>

                <a href="/" className="logo">
                    <img src={signatureImage} alt="icon" />
                </a>

                <section className="links">
                    {window.location.pathname !== "/" ? (
                        <a href="/">Home</a>
                    ) : (
                        ""
                    )}
                    {window.location.pathname !== "/history" ? (
                        <a href="/history">História</a>
                    ) : (
                        ""
                    )}
                    {window.location.pathname !== "/idol" ? (
                        <a href="/idol">Fora das Pistas</a>
                    ) : (
                        ""
                    )}
                </section>
            </header>
        </Menu>
    );
};

export default Header;
