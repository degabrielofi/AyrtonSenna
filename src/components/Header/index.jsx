import React, { useState } from "react";
import signatureImage from "../../assets/images/signature.png";
import { Menu } from "./style";

const Header = () => {
    const [classOn, setClassOn] = useState(false);

    return (
        <Menu>
            <section className="headerAll">
                <header>
                    <div className="icons">
                        <a
                            target="--blank"
                            href="https://github.com/degabrielofi"
                        >
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
                        <a
                            target="--blank"
                            href="https://twitter.com/degabrielofi"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div className="logo">
                        <a href="/">
                            <img src={signatureImage} alt="icon" />
                        </a>
                    </div>

                    <div className="links">
                        <input type="checkbox" id="checkbox" />
                        <label
                            onClick={() => {
                                setClassOn(!classOn);
                            }}
                            for="checkbox"
                            className="toggle"
                        >
                            <div className="bars" id="bar1"></div>
                            <div className="bars" id="bar2"></div>
                            <div className="bars" id="bar3"></div>
                        </label>
                    </div>
                </header>

                <nav className={classOn ? "navbar-active" : "navbar"}>
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
                </nav>
            </section>
        </Menu>
    );
};

export default Header;
