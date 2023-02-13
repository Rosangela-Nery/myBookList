import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        height: 2.5rem;
        border: 0;
        border-radius: 8px;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        border: 1px solid ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme['green-300']};
        font-weight: bold;
        border-radius: 6px;

        &:hover {
            background: ${(props) => props.theme['green-400']};
            border-color: 1px solid ${(props) => props.theme['green-400']};
            color: ${(props) => props.theme['white']};
            transition: background-color 0.2s, border-color 0.2s;
        }
    }
`