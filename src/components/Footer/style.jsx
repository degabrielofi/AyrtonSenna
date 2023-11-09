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
        justify-content: center;
        width: 100%;
    }

    .links a {
        width: 50%;
        margin: 0 1rem;
        text-decoration: none;
    }

    .links a img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

    .links a h4 {
        position: relative;
        text-align: center;
        margin: -1rem 3rem;
        padding: 1vw 5%;
        border: 1px solid #fff;
        background: #09447c;
        color: #fff;
        font-weight: 500;
        transition: all 0.5s;
    }

    .links a:hover h4 {
        background: #fff;
        color: #09447c;
        transition: all 0.5s;
    }

    .social {
        margin: 3rem 2rem;
    }

    .social a {
        margin: 1rem;
    }

    .social a i {
        font-size: 2rem;
        color: #fff;
    }

    .copy h4 {
        margin: 0 1rem;
        color: #fff;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: 400;
    }

    @media screen {
        .links {
            align-items: center;
            flex-direction: column;
        }

        .links a {
            width: 90%;
            padding: 1rem;
        }

        .copy h4 {
            font-size: 0.8rem;
        }
    }
`;
