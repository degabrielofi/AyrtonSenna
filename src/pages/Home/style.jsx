import styled from "styled-components";
import Aspas from "../../assets/images/aspas.png";
import detailYellow from "../../assets/images/detailYellow.jpg";

export const Content = styled.div``;

export const Mention = styled.div`
    .text {
        margin: 5% 15%;
        position: absolute;
    }

    .text h3 {
        color: #fff;
        font-size: 4rem;
    }

    .text .logo {
        margin-left: 20%;
        width: 30%;
    }

    .background {
        width: 100%;
        height: 100%;
    }

    .text h3:before {
        margin: -5% -10% 0%;
        width: 5%;
        content: url(${Aspas});
        position: absolute;
        transform: rotate(180deg);

        display: block;
    }

    .text h3:after {
        margin: -10% 50% 0%;
        width: 5%;
        content: url(${Aspas});
        position: absolute;
        display: block;
    }
`;

export const NumbersOfSenna = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .content .numbers .title {
        width: 100%;
    }

    .content .numbers .title h1 {
        position: absolute;
        padding-left: 1rem;
        letter-spacing: 0.2rem;
        line-height: 1rem;
        font-size: 5rem;
        color: #09447c;
    }

    .content .numbers .title i {
        margin-top: -1.5rem;
        z-index: -10;
        content: url(${detailYellow});
    }

    .content .numbers ul {
        list-style: none;
    }

    .content .numbers ul li .icon {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
    }

    .content .numbers ul li .icon .circle {
        width: auto;
        border: 2px solid #09447c;
        border-radius: 100%;
        margin-right: 1rem;
    }

    .content .numbers ul li .icon .circle i {
        font-size: 25px;
        color: #fff;
    }

    .content .numbers ul li .text {
        font-size: 25px;
        letter-spacing: 0.1rem;
    }

    .content .numbers ul li .text strong {
        color: #09447c;
    }

    .content .numbers ul li .text {
        color: #1b9c4b;
    }
`;
