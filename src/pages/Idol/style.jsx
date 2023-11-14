import styled from "styled-components";
import detailGeneral from "assets/images/detail-general.png";
import detailYellow from "assets/images/detailYellow.jpg";
import detailBlue from "assets/images/detailBlue.jpg";

export const Content = styled.div`
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

export const OutTracks = styled.div`
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
        color: #09447c;
    }

    .title i {
        margin-top: -0.5rem;
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
            margin-top: 2rem;
        }
    }
`;

export const Hero = styled.div`
    margin-top: 3rem;

    .title {
        display: flex;
        justify-content: center;
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

    .images {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .images a {
        margin: 0 1rem;
        width: 30%;
    }

    .images a img {
        width: 100%;
    }

    @media (max-width: 600px) {
        .title h1 {
            font-size: 4rem;
        }
    }
`;

export const Legacy = styled.div`
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
