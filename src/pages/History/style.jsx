import styled from "styled-components";
import detailGeneral from "../../assets/images/detail-general.png";

export const Container = styled.div`
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }

    .title .AyrtonSenna {
        width: 100%;
        height: 100%;
        filter: blur(5px);
        z-index: -10;
    }

    .title h1 {
        position: absolute;
        letter-spacing: 0.2rem;
        line-height: 1rem;
        font-size: 5rem;
        color: #fff;
    }

    .title i {
        width: 35%;
        margin-top: -32%;
        z-index: -10;
        content: url(${detailGeneral});
    }
`;

export const FirstYears = styled.div``;
