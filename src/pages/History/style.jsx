import styled from "styled-components";
import detailGeneral from "assets/images/detail-general.png";
import detailYellow from "assets/images/detailYellow.jpg";
import detailBlue from "assets/images/detailBlue.jpg";

export const Container = styled.div`
    .title_page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }

    .title_page .AyrtonSenna {
        width: 100%;
        height: 100%;
        filter: blur(5px);
        z-index: -10;
    }

    .title_page h1 {
        font-family: "League Gothic", sans-serif;
        position: absolute;
        letter-spacing: 0.2rem;
        line-height: 1rem;
        font-size: 5rem;
        color: #fff;
    }

    .title_page .detail {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    .title_page .detail i {
        position: absolute;
        width: 200%;
        content: url(${detailGeneral});
        z-index: -1;
    }

    @media (max-width: 600px) {
        .title_page h1 {
            font-size: 4rem;
        }

        .title_page .detail i {
            width: 150%;
        }
    }
`;

export const FirstYears = styled.div`
    margin-top: 3rem;

    .title {
        width: 100%;
    }

    .title h1 {
        font-family: "League Gothic", sans-serif;
        position: absolute;
        padding-left: 1rem;
        letter-spacing: 0.2rem;
        line-height: 1rem;
        font-size: 5rem;
        color: #09447c;
    }

    .title i {
        margin-top: -1.5rem;
        z-index: -10;
        content: url(${detailYellow});
    }

    .text {
        display: flex;
        justify-content: content;
    }

    .text p {
        margin: 1rem;
        font-size: 100%;
        color: #fff;
    }

    .text img {
        width: 30%;
        margin-top: -5rem;
    }

    @media (max-width: 600px) {
        .title h1 {
            font-size: 4rem;
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .text img {
            width: 100%;
            margin-top: -2rem;
        }
    }
`;

export const StartOfKart = styled.div`
    margin-top: 3rem;

    .title {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .title h1 {
        font-family: "League Gothic", sans-serif;
        position: absolute;
        padding-left: 1rem;
        letter-spacing: 0.2rem;
        line-height: 1rem;
        font-size: 5rem;
        color: #fff;
    }

    .title i {
        margin-top: -0.5rem;
        z-index: -10;
        content: url(${detailBlue});
    }

    .text {
        display: flex;
        justify-content: content;
    }

    .text p {
        margin: 1rem;
        font-size: 100%;
        color: #fff;
    }

    .text img {
        width: 30%;
        margin-top: -5rem;
    }

    @media (max-width: 600px) {
        .title h1 {
            font-size: 4rem;
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .text img {
            width: 100%;
            margin-top: 2rem;
        }
    }
`;

export const Toleman = styled.div`
    width: 100%;

    .images {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .images .icon {
        width: 20%;
    }

    .images .car {
        margin-top: -1rem;
        width: 40%;
    }

    .text {
        display: flex;
        justify-content: content;
        color: #fff;
    }

    .text p {
        padding: 0 2rem;
        font-size: 100%;
    }

    @media (max-width: 600px) {
        .images .icon {
            width: 40%;
        }

        .images .car {
            width: 70%;
        }
    }
`;

export const Lotus = styled.div`
    width: 100%;

    .images {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .images .icon {
        margin-top: 1rem;
        width: 20%;
    }

    .images .car {
        margin-top: -1rem;
        width: 40%;
    }

    .text {
        display: flex;
        justify-content: content;
        color: #fff;
    }

    .text p {
        padding: 0 2rem;
        font-size: 100%;
    }

    @media (max-width: 600px) {
        .images .icon {
            width: 40%;
        }

        .images .car {
            width: 70%;
        }
    }
`;

export const McLaren = styled.div`
    width: 100%;

    .images {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .images .icon {
        margin-top: 1rem;
        width: 20%;
    }

    .images .car {
        margin-top: -1rem;
        width: 40%;
    }

    .text {
        display: flex;
        justify-content: content;
        color: #fff;
    }

    .text p {
        padding: 0 2rem;
        font-size: 100%;
    }

    @media (max-width: 600px) {
        .images .icon {
            width: 40%;
        }

        .images .car {
            width: 70%;
        }
    }
`;

export const Williams = styled.div`
    width: 100%;

    .images {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .images .icon {
        margin-top: 1rem;
        width: 20%;
    }

    .images .car {
        margin-top: 1rem;
        width: 40%;
    }

    .text {
        display: flex;
        justify-content: content;
        color: #fff;
    }

    .text p {
        padding: 0 2rem;
        font-size: 100%;
    }

    @media (max-width: 600px) {
        .images .icon {
            width: 40%;
        }

        .images .car {
            width: 70%;
        }
    }
`;
