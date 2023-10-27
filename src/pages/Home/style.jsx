import styled from "styled-components";
import Aspas from "../../assets/images/aspas.png";

export const Content = styled.div`
    z-index: 1;

    .mention {
        position: relative;
        width: 100%;
    }

    .mention .text {
        margin: 10% 15%;
        position: absolute;
    }

    .mention .text h3 {
        font-size: 45px;
    }

    .mention .text .logo img {
        width: 15px;
    }

    .mention img {
        width: 100%;
        height: 100%;
    }

    .mention .text h3::before {
        width: 10%;
        content: "";
        position: absolute;
        transform: rotate(180deg);
        background: url(${Aspas});
        display: block;
    }

    .mention .text h3::after {
        width: 10%;
        content: "";
        position: absolute;
        background: url(${Aspas});
        display: block;
    }

    .numbersOfSenna img {
        width: 30%;
        margin-top: 1rem;
        padding: 1rem;
        float: left;
        position: absolute;
    }

    .numbersOfSenna .content {
        position: relative;
        top: 5rem;
        float: right;
        right: 50%;
    }
`;
