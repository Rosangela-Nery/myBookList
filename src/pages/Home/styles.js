import styled from "styled-components";

export const HomeComponents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 20rem;
        height: 2rem;
        border: 0;
        border-radius: 8px;
        box-shadow: 3px -3px 2px black;
        margin-top: 0.75rem;
        background: ${(props) => props.theme['green-300']};
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme['white']};
        cursor: pointer;
    }

    button:hover {
        background: ${(props) => props.theme['green-400']};
        transition: 0.2s;
    }

    img {
        width: 20rem;
    }

    @media screen and (max-width: 800px) {
        margin-top: 5rem;

        img {
            margin-top: 4rem;
        }
    }
`