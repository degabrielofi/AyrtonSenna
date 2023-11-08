import styled from "styled-components";

export const Menu = styled.div`
    .button-dark {
        cursor: pointer;
    }

    i {
        color: #fff;
    }

    header {
        background-color: #09447c;
        padding: 1rem 2rem;
        height: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .logo {
        position: relative;
        max-width: 150px;
    }

    header ul li {
        list-style: none;
    }

    header ul li a {
        margin: 20px;
        text-decoration: none;
        color: var(--text-color);
    }

    header ul li a:hover {
        color: #ffffff;
        transition: ease 0.5s;
    }

    header .icons {
        color: #ffffff;
    }

    header .icons i {
        margin: 0.1rem;
    }

    header .navigation {
        display: flex;
        align-items: center;
        margin: 0 auto;
    }

    header ul .button {
        display: none;
    }

    .links {
    }
`;
