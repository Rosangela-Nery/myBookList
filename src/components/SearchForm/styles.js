import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 1rem;
    gap: 1rem;
    background: ${(props) => props.theme['purple-800']};
    position: fixed;
    top: 10rem;
    z-index: 1;

    input {
        width: 50vh;
        height: 2.5rem;
        border: 0;
        border-radius: 8px;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        box-shadow: 1px 1px 6px black;
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        height: 2.5rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        box-shadow: 1px 1px 6px black;
        border: 1px solid ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme['green-300']};
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${(props) => props.theme['green-400']};
            border-color: 1px solid ${(props) => props.theme['green-400']};
            color: ${(props) => props.theme['white']};
            transition: background-color 0.2s, border-color 0.2s;
        }
    }
`