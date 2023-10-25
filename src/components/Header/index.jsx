import React from "react";
import Image_logo from "../../assets/images/logo-white.png";
import useLocalStorage from "use-local-storage";
import { Menu } from "./style";

const Header = () => {
    const [lightMode, setLightMode] = useLocalStorage(
        "theme" ? "light-mode" : "dark-mode"
    );

    return (
        <Menu>
            <header>
                <div className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>

                <a href="#">
                    <img
                        width="100%"
                        src={Image_logo}
                        className="logo"
                        alt="icon"
                    />
                </a>

                <section
                    className="button-dark"
                    onClick={() => setLightMode(!lightMode)}
                    name="theme"
                    id="theme"
                >
                    <i className={lightMode ? "fas fa-moon" : "fas fa-sun"}></i>
                </section>
            </header>
        </Menu>
    );
};

export default Header;
