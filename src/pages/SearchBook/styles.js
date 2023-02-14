import styled from "styled-components";

export const BookListComponents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
    margin-bottom: 2rem;
`

export const BookRecord = styled.div`
    width: 23rem;
    height: 8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px 5px;
    gap: 1rem;
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['gray-600']};

    margin-bottom: 1.5rem;
    border-radius: 6px;
    box-shadow: 2px 2px 6px black;

    img {
        border-radius: 6px;
        width: 5rem;
    }
`

export const InformationField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
        margin-bottom: 2px;
    }
`

export const ChoiceButton = styled.div`
    display: flex;
    gap: 1rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        box-shadow: 1px 1px 6px black;
        border: 1px solid ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme['green-300']};
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            background: ${(props) => props.theme['green-400']};
            border-color: 1px solid ${(props) => props.theme['green-400']};
            color: ${(props) => props.theme['white']};
            transition: background-color 0.2s, border-color 0.2s;
        }
    }
`