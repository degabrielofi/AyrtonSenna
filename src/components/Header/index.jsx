import React from "react";
import Image_logo from "../../assets/images/signature.png";
import { Menu } from "./style";

const Header = () => {
    return (
        <Menu>
            <header>
                <div className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>

                <a href="/">
                    <img
                        width="100%"
                        src={Image_logo}
                        className="logo"
                        alt="icon"
                    />
                </a>

                <a href="/history">História</a>
            </header>
        </Menu>
    );
};

export default Header;
