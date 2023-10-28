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
        font-size: 45px;
    }

    .text .logo {
        margin-left: 20%;
        width: 20%;
    }

    .background {
        width: 100%;
        height: 100%;
    }

    .text h3:before {
        margin: -10% -10% 0%;
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
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
    top: 2rem;
    float: right;
    right: 40%;

    .content .AyrtonSenna {
        width: 30%;
        margin-top: 1rem;
        padding: 1rem;
        float: left;
        position: absolute;
    }

    .content .numbers h1 {
        width: 100%;
        margin-bottom: 1.5rem;
        line-height: 1rem;
        font-weight: 700;
        font-size: 30px;
        color: #09447c;
        background: url(${detailYellow}) center bottom/100% 2.5vw no-repeat;
    }

    .content .numbers ul {
        list-style: none;
    }

    .content .numbers ul li .icon {
        border: 2px solid #09447c;
        border-radius: 100%;
        margin-right: 1rem;
    }

    .content .numbers ul li .icon i {
        color: #fff;
    }

    .content .numbers ul li .text {
        line-height: 0 1rem;
        font-weight: 600;
        font-size: 25px;
    }

    .content .numbers ul li .text strong {
        color: #09447c;
    }

    .content .numbers ul li .text {
        color: #1b9c4b;
    }
`;
