import styled from "styled-components";

export const FooterComponents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 1;

    button {
        width: 100vh;
        height: 2.5rem;
        border: 0;
        margin-top: 0.75rem;
        background: ${(props) => props.theme['green-300']};
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme['white']};
        cursor: pointer;
    }
`