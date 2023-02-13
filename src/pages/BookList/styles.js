import styled from "styled-components";

export const BookListComponents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 2rem;
`

export const BookRecord = styled.div`
    width: 23rem;
    height: 8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['gray-600']};

    margin-bottom: 1.5rem;

    img {
        width: 5rem;
    }
`