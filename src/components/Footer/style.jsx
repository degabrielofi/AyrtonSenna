import styled from "styled-components";
import Background from "assets/images/bg-lists.jpg";

export const Container = styled.div`
    footer {
        display: flex;
        margin: 0;
        align-items: center;
        flex-direction: column;
        background: url(${Background}) center bottom/cover no-repeat;
    }

    .logo {
        display: flex;
        margin: 2rem;
        justify-content: center;
    }

    .logo img {
        width: 30%;
    }

    .links {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .links a {
        text-decoration: none;
        margin: 1rem;
        padding: 1.5vw 5%;
        border: 1px solid #fff;
    }

    .social {
        margin: 2rem;
    }

    .social a {
        margin: 1rem;
    }

    .social a i {
        font-size: 2rem;
        color: #fff;
    }

    .copy h4 {
        margin: 1rem;
        color: #fff;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: 400;
    }
`;
