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

    .title_rotative .txt-rotate .wrap {
        font-family: "League Gothic", sans-serif;
    }

    .title_rotative .detail {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    .title_rotative .detail i {
        position: absolute;
        width: 50%;
        content: url(${detailGeneral});
        z-index: -1;
    }

    @media (max-width: 600px) {
        .title_rotative h1 {
            font-size: 2rem;
        }

        .title_rotative .txt-rotate .wrap {
            white-space: pre-line;
        }

        .title_rotative .detail {
            margin-top: 0;
        }

        .title_rotative .detail i {
            width: 65%;
        }
    }
`;

export const NumbersOfSenna = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

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
        display: flex;
    }

    .content .numbers ul li .icon .circle {
        margin-right: 0.5rem;
    }

    .content .numbers ul li .icon .circle i {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #fff;
        border: 2px solid #09447c;
        border-radius: 100%;
        width: 32px;
        height: 32px;
    }

    .content .numbers ul li .text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "League Gothic", sans-serif;
        font-size: 25px;
        letter-spacing: 0.1rem;
    }

    .content .numbers ul li .text strong {
        padding: 0 0.2rem;
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

        .title i {
            width: 110%;
            height: 50px;
        }

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

    @media ((min-width: 1024px) and (max-width: 1030px)) {
        .text h3 .after {
            margin: -15% 40%;
        }
    }
`;
