import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 10rem;
    display: flex;
    justify-content: center;
    padding: 0 1rem;

    img {
        width: 15rem;
        margin-top: 1rem;
    }

    div {
        width: 7rem;
        height: 8rem;
        border-radius: 0 0 90px 90px;
        background: ${(props) => props.theme['orange-200']};

        display: flex;
        justify-content: center;

        img {
            width: 6rem;
            height: 6rem;
            border-radius: 100%;
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: space-between;
    }
`