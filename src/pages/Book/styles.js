import styled from "styled-components";

export const BookComponents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    .registerBook {
        display: flex;
        flex-direction: column;

        input {
            width: 20rem;
            height: 2.5rem;
            border: 0;
            border-radius: 8px;
            margin-bottom: 1rem;
            padding-left: 0.5rem;
            font-size: 1rem;
            font-weight: 400;
        }

        p {
            margin-bottom: 10px;
        }

        button {
            width: 20rem;
            height: 2.5rem;
            border: 0;
            border-radius: 8px;
            box-shadow: 3px -3px 2px black;
            margin-top: 0.75rem;
            background: ${(props) => props.theme['green-300']};
            font-size: 1.25rem;
            font-weight: 700;
            color: ${(props) => props.theme['white']};
            cursor: pointer;
        }

        button:hover {
        background: ${(props) => props.theme['green-400']};
        transition: 0.2s;
    }
    }

    .button {
        width: 100vh;
        height: 2.5rem;
        border: 0;
        margin-top: 0.75rem;
        background: ${(props) => props.theme['orange-200']};
        font-size: 1.25rem;
        font-weight: 700;
        color: ${(props) => props.theme['white']};
        cursor: pointer;

        display: flex;
        gap: 0.3rem;
        justify-content: center;
        align-items: center;

        position: fixed;
        bottom: 2.5rem;
        z-index: 1;
    }

    .button:hover {
        background: ${(props) => props.theme['orange-300']};
        transition: 0.2s;
    }
`