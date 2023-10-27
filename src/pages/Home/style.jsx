import styled from "styled-components";
import Aspas from "../../assets/images/aspas.png";

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

export const numbersOfSenna = styled.div`
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
        top: 5rem;
        float: right;
        right: 50%;
    }

    .content .AyrtonSenna {
        width: 30%;
        margin-top: 1rem;
        padding: 1rem;
        float: left;
        position: absolute;
    }
`;
