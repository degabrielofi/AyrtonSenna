import styled from "styled-components";
import Aspas from "assets/images/aspas.png";
import detailYellow from "assets/images/detailYellow.jpg";
import detailGeneral from "assets/images/detail-general.png";
import Track from "assets/images/bgTrack.jpg";

export const Content = styled.div`
    .title_rotative {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }

    .title_rotative .AyrtonSenna {
        width: 100%;
        height: 100%;
        filter: blur(2px);
        z-index: -10;
    }

    .title_rotative h1 {
        font-family: "League Gothic", sans-serif;
        position: absolute;
        letter-spacing: 0.2rem;
        line-height: 1rem;
        font-size: 5rem;
        color: #fff;
    }

    .title_rotative .detail {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    .title_rotative .detail i {
        position: absolute;
        width: 35%;
        content: url(${detailGeneral});
        z-index: -1;
    }

    @media (max-width: 600px) {
        .title_rotative h1 {
            font-size: 2rem;
        }
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
        font-family: "League Gothic", sans-serif;
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
        font-family: "League Gothic", sans-serif;
        font-size: 25px;
        letter-spacing: 0.1rem;
    }

    .content .numbers ul li .text strong {
        font-family: "League Gothic", sans-serif;
        color: #09447c;
    }

    .content .numbers ul li .text {
        color: #1b9c4b;
    }

    @media (max-width: 600px) {
        margin: 1.5rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .content .numbers .title h1 {
            font-size: 3rem;
        }

        img {
            display: none;
        }
    }

    @media (max-width: 400px) {
        .content .numbers .title h1 {
            font-size: 2.5rem;
        }
    }
`;

export const Mention = styled.div`
    .background {
        width: 100%;
        background: url(${Track}) center bottom/cover no-repeat;
    }

    .text {
        position: relative;
        margin: 0 15%;
    }

    .text h3 {
        font-family: "League Gothic", sans-serif;
        padding: 5%;
        color: #fff;
        font-size: 4rem;
    }

    .text .logo {
        margin-left: 20%;
        width: 20%;
    }

    .text h3 .before {
        margin: 0 -10% 0%;
        width: 10%;
        content: url(${Aspas});
        position: absolute;
        transform: rotate(180deg);
        display: block;
    }

    .text h3 .after {
        margin: -10% 30%;
        width: 10%;
        content: url(${Aspas});
        position: absolute;
        display: block;
    }

    @media (max-width: 600px) {
        .text h3 {
            font-size: 2rem;
        }

        .text h3 .before {
            margin: 0 -12% 0%;
        }

        .text h3 .after {
            margin: -15% 50%;
        }
    }

    @media (max-width: 400px) {
        .text h3 .after {
            margin: -15% 60%;
        }
    }
`;
