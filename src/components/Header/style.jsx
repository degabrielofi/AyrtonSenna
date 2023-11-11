import styled from "styled-components";

export const Menu = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        background-color: #09447c;
        padding: 1rem 2rem;
        align-items: center;
    }

    header .logo a {
        display: flex;
        justify-content: center;
    }

    header .logo img {
        max-width: 150px;
    }

    header .icons i {
        color: #ffff;
        margin: 0 0.2rem;
    }

    .links a {
        text-decoration: none;
        margin: 0 1rem;
        color: #ffff;
    }
`;
